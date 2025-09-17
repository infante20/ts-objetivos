export interface Case {
    id: number;
    title: string;
    summary: string;
    imageUrl?: string;
    problem_options: string[];
    problem_key: string;
    route_options: string[];
    route_key: string;
    diagnostic_model: string;
    intervention_model: string;
    why_problem: string;
    why_route: string;
}

export type Screen = 'home' | 'case_select' | 'case_play' | 'feedback' | 'progress' | 'content' | 'case_passed';

export interface CaseResult {
    score: number;
    passed: boolean;
}

export enum MedalType {
    Bronze = "Bronce",
    Silver = "Plata",
    Gold = "Oro",
    Platinum = "Platino"
}

export interface Medal {
    type: MedalType;
    name: string;
    description: string;
    icon: string;
}

export interface UserProgress {
    completedCases: Record<number, CaseResult>;
    achievements: Achievement[];
    medals: Medal[];
    avatarId: number;
}

export enum Achievement {
    FirstCase = "Primer Caso Completo",
    PerfectScore = "Puntaje Perfecto",
    CampaignMaster = "Maestro de Campaña",
    QuickThinker = "Pensador Rápido"
}

export type GameMode = 'campaign' | 'quick_challenge';

export interface Avatar {
    id: number;
    icon: string;
    name: string;
    description: string;
}

export interface EvaluationResult {
    totalScore: number;
    passed: boolean;
    caseData: Case;
    userAnswers: { problem: string; route: string; diagnostic: string; intervention: string; };
    problemScore: number;
    routeScore: number;
    diagnosticScore: number;
    interventionScore: number;
}

export interface Celebration {
    name: string;
    message: string;
    imageUrl: string;
}