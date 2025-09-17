import React, { useState } from 'react';
import type { Case, GameMode, Screen, UserProgress } from '../types';

interface ImageGalleryProps {
    imageUrls: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imageUrls }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!imageUrls || imageUrls.length === 0) {
        return <div className="h-32 bg-slate-200 rounded-md mb-4 flex items-center justify-center text-slate-500">No hay imágenes</div>;
    }

    return (
        <div className="relative w-full h-32 mb-4">
            <img src={imageUrls[currentIndex]} alt="Case image" className="w-full h-full object-cover rounded-md" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                {imageUrls.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    );
};


interface CaseSelectScreenProps {
    navigateTo: (screen: Screen) => void;
    selectCase: (caseId: number) => void;
    progress: UserProgress;
    gameMode: GameMode;
    cases: Case[];
}

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

const CaseSelectScreen: React.FC<CaseSelectScreenProps> = ({ navigateTo, selectCase, progress, gameMode, cases }) => {

    return (
        <div className="p-4 md:p-6 min-h-full">
            <header className="flex items-center mb-6">
                <button onClick={() => navigateTo('home')} className="p-2 rounded-full hover:bg-slate-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="text-2xl font-bold text-[#111827] ml-2">
                    {gameMode === 'campaign' ? 'Iniciar Campaña' : 'Retos Rápidos'}
                </h1>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cases.map((c, index) => {
                    const isCompleted = !!progress.completedCases[c.id];
                    
                    let isUnlocked = false;
                    if (gameMode === 'quick_challenge') {
                        isUnlocked = true;
                    } else { // Lógica de desbloqueo para campaña
                        if (index === 0) {
                            isUnlocked = true; // El primer caso siempre está desbloqueado
                        } else {
                            const previousCase = cases[index - 1];
                            // Se desbloquea si el caso anterior de la lista de sesión está completado
                            if (previousCase && progress.completedCases[previousCase.id]) {
                                isUnlocked = true;
                            }
                        }
                    }

                    return (
                        <div key={c.id} 
                            onClick={() => {
                                if (isUnlocked) {
                                    selectCase(c.id);
                                    navigateTo('case_play');
                                }
                            }}
                            className={`rounded-2xl shadow-lg transition-all duration-200 ease-in-out transform overflow-hidden ${
                                isUnlocked ? 'bg-white hover:scale-105 hover:shadow-xl cursor-pointer' : 'bg-slate-200 cursor-not-allowed'
                            }`}
                        >
                            {c.imageUrls && <ImageGallery imageUrls={c.imageUrls} />}
                            <div className="p-4">
                                <div className="flex justify-between items-start">
                                    <h2 className="text-lg font-bold text-slate-800">{c.title}</h2>
                                    {isCompleted && (
                                        <div className="bg-[#10B981] rounded-full p-1">
                                            <CheckIcon />
                                        </div>
                                    )}
                                    {!isUnlocked && <LockIcon />}
                                </div>
                                <p className="text-sm text-slate-600 mt-2 h-20 overflow-hidden">{c.summary}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CaseSelectScreen;