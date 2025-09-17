import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import { SCORING } from '../constants';
import type { EvaluationResult, Screen } from '../types';

interface FeedbackScreenProps {
    result: EvaluationResult | null;
    navigateTo: (screen: Screen) => void;
    selectCase: (caseId: number) => void;
}

const FeedbackScreen: React.FC<FeedbackScreenProps> = ({ result, navigateTo, selectCase }) => {
    if (!result) {
        return <div className="p-4">No hay resultados para mostrar.</div>;
    }

    const { 
        totalScore, 
        passed, 
        caseData, 
        userAnswers, 
        problemScore, 
        routeScore, 
        diagnosticScore, 
        interventionScore,
        diagnosticChecks,
        interventionChecks,
    } = result;

    const getScoreColor = (score: number) => {
        if (score === 10) return 'text-emerald-500';
        if (score === 5) return 'text-amber-500';
        return 'text-red-500';
    };

    return (
        <div className="p-4 md:p-6 max-w-4xl mx-auto space-y-6">
            <header className="text-center">
                <div className={`inline-block px-6 py-2 rounded-full text-white font-bold text-lg ${passed ? 'bg-[#10B981]' : 'bg-amber-500'}`}>
                    {passed ? '¡Caso Superado!' : '¡Sigue Intentando!'}
                </div>
                <h1 className="text-4xl font-extrabold text-[#111827] mt-4">Puntaje Total: {totalScore}</h1>
                <p className="text-slate-600">Puntaje mínimo para aprobar: {SCORING.pass_threshold_case}</p>
            </header>
            
            <div className="space-y-4">
                <FeedbackItem 
                    title="1. Problema Principal" 
                    userAnswer={userAnswers.problem}
                    correctAnswer={caseData.problem_key}
                    explanation={caseData.why_problem}
                    score={problemScore}
                    scoreColor={getScoreColor(problemScore)}
                    isCorrect={problemScore > 0}
                />
                <FeedbackItem 
                    title="2. Prioridad de Abordaje" 
                    userAnswer={userAnswers.route}
                    correctAnswer={caseData.route_key}
                    explanation={caseData.why_route}
                    score={routeScore}
                    scoreColor={getScoreColor(routeScore)}
                    isCorrect={routeScore > 0}
                />
                <FeedbackItem 
                    title="3. Objetivo de Diagnóstico" 
                    userAnswer={userAnswers.diagnostic}
                    modelAnswer={caseData.diagnostic_model}
                    score={diagnosticScore}
                    scoreColor={getScoreColor(diagnosticScore)}
                    isCorrect={diagnosticScore > 0}
                    checks={diagnosticChecks}
                    objectiveType="diagnostico"
                />
                <FeedbackItem 
                    title="4. Objetivo de Intervención" 
                    userAnswer={userAnswers.intervention}
                    modelAnswer={caseData.intervention_model}
                    score={interventionScore}
                    scoreColor={getScoreColor(interventionScore)}
                    isCorrect={interventionScore > 0}
                    checks={interventionChecks}
                    objectiveType="intervencion"
                />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-8">
                <Button onClick={() => { selectCase(caseData.id); navigateTo('case_play'); }} variant="secondary">
                    Reintentar Caso
                </Button>
                <Button onClick={() => navigateTo('case_select')} variant="primary">
                    Siguiente Caso
                </Button>
            </div>
        </div>
    );
};

interface FeedbackItemProps {
    title: string;
    userAnswer: string;
    correctAnswer?: string;
    modelAnswer?: string;
    explanation?: string;
    score: number;
    scoreColor: string;
    isCorrect: boolean;
    checks?: { [key: string]: boolean };
    objectiveType?: 'diagnostico' | 'intervencion';
}

const HINTS = {
    diagnostico: {
        verbo: "El objetivo debe comenzar con un verbo en infinitivo que indique una acción de evaluación (ej. 'evaluar', 'identificar').",
        que: "Debe especificar qué se va a evaluar (el constructo psicológico o área).",
        poblacion: "Debe mencionar a quién va dirigida la evaluación (ej. 'en el niño', 'en la familia').",
        proposito: "Debe incluir el propósito de la evaluación (ej. 'para determinar las causas', 'para comprender la dinámica')."
    },
    intervencion: {
        verbo: "El objetivo debe comenzar con un verbo en infinitivo que indique una acción de cambio (ej. 'aumentar', 'reducir', 'fortalecer').",
        foco: "Debe especificar el foco de la intervención (el área a cambiar).",
        poblacion: "Debe mencionar a quién va dirigida la intervención.",
        resultado: "Debe incluir el resultado esperado de la intervención (el 'para qué')."
    }
};

const FeedbackItem: React.FC<FeedbackItemProps> = ({ title, userAnswer, correctAnswer, modelAnswer, explanation, score, scoreColor, isCorrect, checks, objectiveType }) => (
    <Card>
        <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg text-[#111827]">{title}</h3>
            <span className={`font-extrabold text-xl ${scoreColor}`}>+{score} pts</span>
        </div>
        <div className="mt-3 space-y-3 text-slate-700">
            <div>
                <strong className="text-slate-500">Tu respuesta:</strong>
                <p className="italic pl-2 border-l-4 border-slate-300">"{userAnswer || 'No respondido'}"</p>
            </div>
            {isCorrect && correctAnswer && (
                <div>
                    <strong className="text-emerald-600">Respuesta correcta:</strong>
                    <p className="pl-2 border-l-4 border-emerald-300">"{correctAnswer}"</p>
                </div>
            )}
            {isCorrect && modelAnswer && (
                <div>
                    <strong className="text-blue-600">Respuesta modelo:</strong>
                    <p className="pl-2 border-l-4 border-blue-300">"{modelAnswer}"</p>
                </div>
            )}
            {isCorrect && explanation && (
                <div className="pt-2">
                    <strong className="text-slate-500">Justificación:</strong>
                    <p>{explanation}</p>
                </div>
            )}
            {!isCorrect && (correctAnswer || modelAnswer) && (
                 <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-amber-700 font-medium">¡Casi! La respuesta correcta y la justificación se revelarán cuando aciertes. ¡Vuelve a intentarlo!</p>
                </div>
            )}
            {!isCorrect && checks && objectiveType && (
                <div className="mt-4 p-3 bg-sky-50 border border-sky-200 rounded-lg space-y-2">
                    <h4 className="font-bold text-sky-800">Pistas para mejorar tu objetivo:</h4>
                    <ul className="list-disc pl-5 text-sky-700">
                        {Object.entries(checks).map(([key, value]) => 
                            !value && (
                                <li key={key}>
                                    {HINTS[objectiveType][key as keyof typeof HINTS.diagnostico]}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </div>
    </Card>
);

export default FeedbackScreen;