import React, { useState, useEffect, useRef } from 'react';
import type { Case, EvaluationResult, Screen, UserProgress, GameMode } from './types';
import HomeScreen from './screens/HomeScreen';
import ProgressScreen from './screens/ProgressScreen';
import CaseSelectScreen from './screens/CaseSelectScreen';
import CasePlayScreen from './screens/CasePlayScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import ContentScreen from './screens/ContentScreen';
import CasePassedScreen from './screens/CasePassedScreen';
import { evaluateCase } from './services/evaluationService';
import { QUICK_CHALLENGE_CASES, CAMPAIGN_CASES } from './constants';
import Button from './components/Button';

function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

const App: React.FC = () => {
    const [screen, setScreen] = useState<Screen>('home');
    const [gameMode, setGameMode] = useState<GameMode>('campaign');
    const [sessionCases, setSessionCases] = useState<Case[]>([]);
    const [progress, setProgress] = useState<UserProgress>(() => {
        try {
            const savedProgress = localStorage.getItem('userProgress');
            return savedProgress 
                ? JSON.parse(savedProgress) 
                : { completedCases: {}, achievements: [], avatarId: 0 };
        } catch (error) {
            console.error("Failed to parse progress from localStorage", error);
            return { completedCases: {}, achievements: [], avatarId: 0 };
        }
    });
    const [currentCaseId, setCurrentCaseId] = useState<number | null>(null);
    const [lastResult, setLastResult] = useState<EvaluationResult | null>(null);
    const [isMusicPlaying, setIsMusicPlaying] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        try {
            localStorage.setItem('userProgress', JSON.stringify(progress));
        } catch (error) {
            console.error("Failed to save progress to localStorage", error);
        }
    }, [progress]);

    useEffect(() => {
        if (audioRef.current) {
            if (isMusicPlaying) {
                audioRef.current.play().catch(e => console.log("Audio play failed:", e));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isMusicPlaying]);

    const navigateTo = (newScreen: Screen) => {
        setScreen(newScreen);
    };

    const setAvatarId = (id: number) => {
        setProgress(prev => ({ ...prev, avatarId: id }));
    };

    const resetProgress = () => {
        const freshProgress = { completedCases: {}, achievements: [], avatarId: 0 };
        setProgress(freshProgress);
        setScreen('home');
    };

    const startGameSession = (mode: GameMode) => {
        setGameMode(mode);
        const caseBank = mode === 'campaign' ? CAMPAIGN_CASES : QUICK_CHALLENGE_CASES;
        const shuffledBank = shuffleArray(caseBank);
        setSessionCases(shuffledBank.slice(0, 5)); // Selecciona 5 casos al azar
        navigateTo('case_select');
    };

    const submitEvaluation = (caseData: Case, answers: { problem: string; route: string; diagnostic: string; intervention: string; }) => {
        const result = evaluateCase(caseData, answers);

        // Actualizar el progreso solo si el caso se aprueba y el puntaje es mejor
        if (result.passed) {
            setProgress(prev => {
                const existingScore = prev.completedCases[caseData.id]?.score ?? 0;

                if (result.totalScore > existingScore) {
                    const newCompletedCases = {
                        ...prev.completedCases,
                        [caseData.id]: {
                            score: result.totalScore,
                            passed: true,
                        }
                    };
                    return { ...prev, completedCases: newCompletedCases };
                }
                return prev;
            });
        }
        
        return result;
    };

    const renderScreen = () => {
        switch (screen) {
            case 'home':
                return <HomeScreen navigateTo={navigateTo} avatarId={progress.avatarId} setAvatarId={setAvatarId} startGameSession={startGameSession} />;
            case 'progress':
                return <ProgressScreen progress={progress} navigateTo={navigateTo} resetProgress={resetProgress} />;
            case 'case_select':
                return <CaseSelectScreen navigateTo={navigateTo} selectCase={setCurrentCaseId} progress={progress} gameMode={gameMode} cases={sessionCases} />;
            case 'case_play':
                const currentCase = sessionCases.find(c => c.id === currentCaseId);
                return <CasePlayScreen 
                            caseData={currentCase} 
                            navigateTo={navigateTo} 
                            submitEvaluation={submitEvaluation} 
                            setLastResult={setLastResult} 
                        />;
            case 'feedback':
                return <FeedbackScreen 
                            result={lastResult} 
                            navigateTo={navigateTo} 
                            selectCase={(caseId) => {
                                setCurrentCaseId(caseId);
                                navigateTo('case_play');
                            }}
                        />;
            case 'case_passed':
                return <CasePassedScreen navigateTo={navigateTo} />;
            case 'content':
                return <ContentScreen navigateTo={navigateTo} />;
            default:
                return <HomeScreen navigateTo={navigateTo} avatarId={progress.avatarId} setAvatarId={setAvatarId} startGameSession={startGameSession} />;
        }
    };

    return (
        <div className="w-full min-h-screen bg-slate-100 font-sans">
            <audio ref={audioRef} src="/background-music.mp3" loop />
            <div className="absolute top-4 right-4">
                <Button onClick={() => setIsMusicPlaying(!isMusicPlaying)} variant="secondary">
                    {isMusicPlaying ? 'Mute' : 'Unmute'}
                </Button>
            </div>
            {renderScreen()}
        </div>
    );
};

export default App;
