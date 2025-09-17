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

// --- Music Player Data ---
const PLAYLIST = [
    { name: "Action Rock", url: "/background-music.mp3" },
    { name: "Epic Journey", url: "/background-music.mp3" },
    { name: "Mysterious Quest", url: "/background-music.mp3" }
];
// --- End Music Player Data ---

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
    
    // --- Music State ---
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    // --- End Music State ---

    useEffect(() => {
        try {
            localStorage.setItem('userProgress', JSON.stringify(progress));
        } catch (error) {
            console.error("Failed to save progress to localStorage", error);
        }
    }, [progress]);

    // --- Music Logic ---
    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(e => console.error("Audio play failed:", e));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentTrackIndex]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const playNextTrack = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % PLAYLIST.length);
        // Ensure the next track plays automatically
        if (!isPlaying) {
            setIsPlaying(true);
        }
    };
    // --- End Music Logic ---

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
        setSessionCases(shuffledBank.slice(0, 5));
        navigateTo('case_select');
    };

    const submitEvaluation = (caseData: Case, answers: { problem: string; route: string; diagnostic: string; intervention: string; }) => {
        const result = evaluateCase(caseData, answers);

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
            <audio ref={audioRef} src={PLAYLIST[currentTrackIndex].url} onEnded={playNextTrack} />
            
            {/* --- Music Player UI --- */}
            <div className="fixed bottom-4 left-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-lg p-2 flex items-center space-x-3 z-20">
                <Button onClick={togglePlayPause} variant="secondary" size="sm">
                    {isPlaying ? 'Pause' : 'Play'}
                </Button>
                <div className="text-sm">
                    <p className="font-bold text-slate-800">Now Playing:</p>
                    <p className="text-slate-600">{PLAYLIST[currentTrackIndex].name}</p>
                </div>
                <Button onClick={playNextTrack} variant="secondary" size="sm">
                    Next
                </Button>
            </div>
            {/* --- End Music Player UI --- */}

            {renderScreen()}
        </div>
    );
};

export default App;