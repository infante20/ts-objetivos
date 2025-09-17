
import React from 'react';
import Button from '../components/Button';
import { AVATARS } from '../constants';
import type { GameMode, Screen } from '../types';

interface HomeScreenProps {
    navigateTo: (screen: Screen) => void;
    avatarId: number;
    setAvatarId: (id: number) => void;
    startGameSession: (mode: GameMode) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigateTo, avatarId, setAvatarId, startGameSession }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gradient-to-br from-slate-50 to-slate-200">
            <header className="mb-8 animate-slide-in-right">
                <h1 
                    className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400 tracking-tighter"
                >
                    Juego TS
                </h1>
                <p className="text-slate-600 mt-2 text-lg font-medium">Diagnóstico e Intervención</p>
            </header>
            
            <div className="mb-8">
                <p className="text-slate-700 font-medium mb-3">Elige tu avatar:</p>
                <div className="flex flex-wrap justify-center gap-3">
                    {AVATARS.map((avatar) => (
                        <div key={avatar.id} className="relative group">
                            <button
                                onClick={() => setAvatarId(avatar.id)}
                                className={`w-14 h-14 text-3xl rounded-full flex items-center justify-center transition-all duration-200 border-2 ${
                                    avatarId === avatar.id ? 'bg-blue-500 border-blue-600 scale-110 shadow-lg text-white' : 'bg-white border-slate-300 hover:border-blue-400'
                                }`}
                            >
                                {avatar.icon}
                            </button>
                            <div className="absolute bottom-full mb-2 w-64 left-1/2 -translate-x-1/2 p-2 text-sm text-white bg-slate-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <p className="font-bold">{avatar.name}</p>
                                <p>{avatar.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <main className="w-full max-w-sm space-y-4">
                <Button onClick={() => startGameSession('campaign')}>
                    Iniciar Campaña
                </Button>
                <Button onClick={() => {
                    startGameSession('quick_challenge');
                }} 
                variant="secondary">
                    Retos Rápidos (5 min)
                </Button>
                <div className="grid grid-cols-2 gap-4">
                    <Button onClick={() => navigateTo('progress')} variant="secondary">
                        Progreso
                    </Button>
                    <Button onClick={() => navigateTo('content')} variant="secondary">
                        Contenido
                    </Button>
                </div>
            </main>
        </div>
    );
};

export default HomeScreen;
