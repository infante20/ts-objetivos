import React from 'react';
import Card from '../components/Card';
import type { Screen } from '../types';

interface ContentScreenProps {
    navigateTo: (screen: Screen) => void;
}

const ContentScreen: React.FC<ContentScreenProps> = ({ navigateTo }) => {
    return (
        <div className="p-4 md:p-6 max-w-4xl mx-auto space-y-6 animate-slide-in-right">
            <header className="flex items-center">
                 <button onClick={() => navigateTo('home')} className="p-2 rounded-full hover:bg-slate-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="text-2xl font-bold text-[#111827] ml-2">Contenido Teórico</h1>
            </header>

            <Card>
                <h2 className="text-xl font-bold text-blue-600 mb-3">Formulación de Objetivos</h2>
                <p className="text-slate-700">En Trabajo Social, los objetivos son la brújula que guía la acción profesional. Deben ser claros, medibles y orientados a generar cambios positivos. Se dividen principalmente en objetivos de diagnóstico y de intervención.</p>
            </Card>

            <Card>
                <h3 className="text-lg font-bold text-[#111827] mb-2">Objetivos de Diagnóstico</h3>
                <p className="text-slate-600 mb-4">Su propósito es <strong className="font-semibold">comprender y analizar</strong> una situación-problema. No buscan cambiar la realidad todavía, sino recoger y organizar la información necesaria para fundamentar una futura intervención.</p>
                <div className="bg-slate-50 p-3 rounded-lg">
                    <p className="font-semibold text-slate-800">Estructura Clave:</p>
                    <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                        <li><strong className="text-sky-700">Verbo en infinitivo:</strong> Identificar, conocer, analizar, evaluar, determinar...</li>
                        <li><strong className="text-sky-700">Qué se quiere conocer:</strong> Factores de riesgo, redes de apoyo, dinámicas familiares...</li>
                        <li><strong className="text-sky-700">Unidad de análisis:</strong> En el/la niño/a, en la familia, en el contexto escolar...</li>
                        <li><strong className="text-sky-700">Propósito (Para qué):</strong> ...para diseñar un plan de intervención, ...para orientar las acciones a seguir.</li>
                    </ul>
                </div>
            </Card>
            
            <Card>
                <h3 className="text-lg font-bold text-[#111827] mb-2">Objetivos de Intervención</h3>
                <p className="text-slate-600 mb-4">Su propósito es <strong className="font-semibold">generar un cambio</strong> o transformación en la situación-problema. Describen lo que se espera lograr con las acciones profesionales.</p>
                <div className="bg-slate-50 p-3 rounded-lg">
                    <p className="font-semibold text-slate-800">Estructura Clave:</p>
                    <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                        <li><strong className="text-emerald-700">Verbo en infinitivo:</strong> Fortalecer, desarrollar, disminuir, promover, coordinar...</li>
                        <li><strong className="text-emerald-700">Foco del cambio:</strong> Las habilidades parentales, el acceso a la red de salud, la comunicación...</li>
                        <li><strong className="text-emerald-700">Unidad de análisis:</strong> En la familia, en el grupo, en la comunidad...</li>
                        <li><strong className="text-emerald-700">Resultado esperado (Para qué):</strong> ...para mejorar la convivencia, ...para favorecer la autonomía.</li>
                    </ul>
                </div>
            </Card>
        </div>
    );
};

export default ContentScreen;