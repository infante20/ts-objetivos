
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Achievement, type Screen, type UserProgress } from '../types';
import { QUICK_CHALLENGE_CASES, CAMPAIGN_CASES } from '../constants';

interface ProgressScreenProps {
    progress: UserProgress;
    navigateTo: (screen: Screen) => void;
    resetProgress: () => void;
}

const ProgressScreen: React.FC<ProgressScreenProps> = ({ progress, navigateTo, resetProgress }) => {
    const completedCount = Object.keys(progress.completedCases).length;
    const totalCases = QUICK_CHALLENGE_CASES.length + CAMPAIGN_CASES.length;
    const totalScore = Object.values(progress.completedCases).reduce((sum, result) => sum + result.score, 0);
    const averageScore = completedCount > 0 ? (totalScore / completedCount).toFixed(1) : 0;
    
    const allAchievements = Object.values(Achievement);

    return (
        <div className="p-4 md:p-6 max-w-4xl mx-auto space-y-6">
            <header className="flex items-center">
                 <button onClick={() => navigateTo('home')} className="p-2 rounded-full hover:bg-slate-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="text-2xl font-bold text-[#111827] ml-2">Progreso y Logros</h1>
            </header>
            
            <Card>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Resumen de Campaña</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                    <StatBox label="Casos Resueltos" value={`${completedCount} / ${totalCases}`} />
                    <StatBox label="Puntaje Total" value={totalScore.toString()} />
                    <StatBox label="Puntaje Promedio" value={averageScore.toString()} />
                </div>
            </Card>

            <Card>
                <h2 className="text-xl font-bold text-[#111827] mb-4">Logros</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {allAchievements.map(ach => {
                        const isUnlocked = progress.achievements.includes(ach);
                        return (
                            <div key={ach} className={`flex items-center p-3 rounded-lg transition-all ${isUnlocked ? 'bg-emerald-50 text-emerald-800' : 'bg-slate-100 text-slate-500'}`}>
                                <div className={`text-3xl mr-3 ${isUnlocked ? 'opacity-100' : 'opacity-40'}`}>
                                    {isUnlocked ? '🏆' : '🔒'}
                                </div>
                                <div>
                                    <h4 className="font-bold">{ach}</h4>
                                    <p className="text-sm">{isUnlocked ? 'Desbloqueado' : 'Bloqueado'}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Card>

            <div className="pt-4 pb-8">
                 <Button onClick={() => { if(window.confirm('¿Seguro que quieres borrar todo tu progreso? Esta acción no se puede deshacer.')) resetProgress() }} variant="secondary">
                    Reiniciar Progreso
                </Button>
            </div>
        </div>
    );
};

const StatBox: React.FC<{label: string, value: string}> = ({ label, value }) => (
    <div className="bg-slate-100 p-4 rounded-lg">
        <div className="text-3xl font-extrabold text-[#2E5BFF]">{value}</div>
        <div className="text-sm font-medium text-slate-600 mt-1">{label}</div>
    </div>
);


export default ProgressScreen;