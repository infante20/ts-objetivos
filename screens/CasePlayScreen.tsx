import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import type { Case, EvaluationResult, Screen } from '../types';

/**
 * Baraja un array usando el algoritmo Fisher-Yates.
 * @param array El array a barajar.
 * @returns Un nuevo array con los elementos barajados.
 */
function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

interface ImageGalleryProps {
    imageUrls: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imageUrls }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!imageUrls || imageUrls.length === 0) {
        return <div className="h-48 bg-slate-200 rounded-lg mb-4 flex items-center justify-center text-slate-500">No hay imágenes</div>;
    }

    return (
        <div className="relative w-full h-48 mb-6">
            <img src={imageUrls[currentIndex]} alt="Case image" className="w-full h-full object-cover rounded-lg shadow-md" />
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

interface CasePlayScreenProps {
    caseData: Case | undefined;
    navigateTo: (screen: Screen) => void;
    submitEvaluation: (caseData: Case, answers: any) => EvaluationResult;
    setLastResult: (result: EvaluationResult) => void;
}

const CasePlayScreen: React.FC<CasePlayScreenProps> = ({ caseData, navigateTo, submitEvaluation, setLastResult }) => {
    const [problem, setProblem] = useState('');
    const [route, setRoute] = useState('');
    const [diagnostic, setDiagnostic] = useState('');
    const [intervention, setIntervention] = useState('');
    const [shuffledProblemOptions, setShuffledProblemOptions] = useState<string[]>([]);
    const [shuffledRouteOptions, setShuffledRouteOptions] = useState<string[]>([]);

    useEffect(() => {
        if (caseData) {
            setShuffledProblemOptions(shuffleArray(caseData.problem_options));
            setShuffledRouteOptions(shuffleArray(caseData.route_options));
        }
    }, [caseData]);
    
    if (!caseData) {
        return <div className="p-4">Caso no encontrado. Por favor, vuelve a la selección.</div>;
    }
    
    const handleSubmit = () => {
        const result = submitEvaluation(caseData, { problem, route, diagnostic, intervention });
        setLastResult(result);
        if (result.passed) {
            navigateTo('case_passed');
        } else {
            navigateTo('feedback');
        }
    };

    const isSubmittable = problem && route;

    return (
        <div className="p-4 md:p-6 space-y-6 max-w-4xl mx-auto">
            <header className="flex items-center">
                 <button onClick={() => navigateTo('case_select')} className="p-2 rounded-full hover:bg-slate-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="text-2xl font-bold text-[#111827] ml-2">Caso {caseData.id}: {caseData.title}</h1>
            </header>
            
            <Card>
                {caseData.imageUrls && <ImageGallery imageUrls={caseData.imageUrls} />}
                <p className="text-slate-700 text-lg leading-relaxed">{caseData.summary}</p>
            </Card>

            <div className="space-y-6">
                <QuestionCard prompt="1. Identifica el problema principal">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {shuffledProblemOptions.map(opt => (
                            <button 
                                key={opt}
                                onClick={() => setProblem(opt)}
                                className={`p-4 rounded-lg text-left transition-all duration-200 border-2 ${problem === opt ? 'bg-[#2E5BFF] text-white border-blue-600 shadow-md' : 'bg-white hover:bg-blue-50 border-slate-200'}`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </QuestionCard>

                <QuestionCard prompt="2. Selecciona la prioridad de abordaje">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {shuffledRouteOptions.map(opt => (
                            <button 
                                key={opt}
                                onClick={() => setRoute(opt)}
                                className={`p-4 rounded-lg text-left transition-all duration-200 border-2 ${route === opt ? 'bg-[#2E5BFF] text-white border-blue-600 shadow-md' : 'bg-white hover:bg-blue-50 border-slate-200'}`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </QuestionCard>

                <QuestionCard prompt="3. Escribe un objetivo de diagnóstico" helpText="Verbo en infinitivo + qué explorar + población/contexto + propósito">
                    <textarea 
                        value={diagnostic}
                        onChange={e => setDiagnostic(e.target.value)}
                        rows={3}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2E5BFF] focus:border-transparent transition text-slate-800 bg-white"
                        placeholder="Ej: Identificar necesidades de la familia para orientar el plan..."
                    />
                </QuestionCard>

                <QuestionCard prompt="4. Escribe un objetivo de intervención" helpText="Verbo en infinitivo + foco de cambio + población + resultados esperados">
                    <textarea 
                        value={intervention}
                        onChange={e => setIntervention(e.target.value)}
                        rows={3}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2E5BFF] focus:border-transparent transition text-slate-800 bg-white"
                        placeholder="Ej: Fortalecer vínculos en la familia para mejorar la convivencia..."
                    />
                </QuestionCard>
            </div>
            
            <div className="pt-4 pb-8">
                <Button onClick={handleSubmit} disabled={!isSubmittable}>
                    Enviar y Evaluar
                </Button>
            </div>
        </div>
    );
};

const QuestionCard: React.FC<{prompt: string, helpText?: string, children: React.ReactNode}> = ({ prompt, helpText, children }) => (
    <Card className="!p-4 md:!p-6">
        <h3 className="font-bold text-lg text-[#111827] mb-1">{prompt}</h3>
        {helpText && <p className="text-sm text-slate-500 mb-4">{helpText}</p>}
        {children}
    </Card>
);

export default CasePlayScreen;