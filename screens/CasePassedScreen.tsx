import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import { CELEBRATIONS } from '../constants';
import type { Celebration, Screen } from '../types';

interface CasePassedScreenProps {
    navigateTo: (screen: Screen) => void;
}

const CasePassedScreen: React.FC<CasePassedScreenProps> = ({ navigateTo }) => {
    const [celebration, setCelebration] = useState<Celebration | null>(null);

    useEffect(() => {
        // Selecciona una celebración al azar cuando la pantalla se carga
        const randomCelebration = CELEBRATIONS[Math.floor(Math.random() * CELEBRATIONS.length)];
        setCelebration(randomCelebration);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gradient-to-br from-emerald-50 to-green-100 animate-slide-in-right">
            <Card className="max-w-md w-full">
                {celebration ? (
                    <div className="flex flex-col items-center">
                        <img 
                            src={celebration.imageUrl} 
                            alt={celebration.name}
                            className="w-32 h-32 object-cover rounded-full mb-4 shadow-lg border-4 border-white"
                        />
                        <h1 className="text-2xl font-bold text-slate-800">
                            {celebration.name}
                        </h1>
                        <p className="text-slate-600 mt-2 text-lg font-medium italic text-center px-4">
                           "{celebration.message}"
                        </p>
                        <div className="w-full mt-8">
                            <Button onClick={() => navigateTo('feedback')}>
                                Ver Retroalimentación
                            </Button>
                        </div>
                    </div>
                ) : (
                    // Muestra un loader o nada mientras se elige la celebración
                    <div className="h-64 flex items-center justify-center">Cargando...</div>
                )}
            </Card>
        </div>
    );
};

export default CasePassedScreen;