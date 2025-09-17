
import { EVALUATION_RULES, SCORING } from '../constants';
import type { Case } from '../types';

const evaluateTextPattern = (text: string, type: 'diagnostico' | 'intervencion') => {
    if (!text.trim()) return { score: 0, checks: {} };
    
    const lowerText = text.toLowerCase();
    const rules = EVALUATION_RULES[type];
    
    const checks = {
        verbo: rules.verbos.some(v => lowerText.startsWith(v)),
        poblacion: rules.poblacion.some(p => lowerText.includes(p)),
    };

    let specificChecks;
    if (type === 'diagnostico') {
        specificChecks = {
            que: EVALUATION_RULES.diagnostico.que.some(q => lowerText.includes(q)),
            proposito: EVALUATION_RULES.diagnostico.proposito.some(p => lowerText.includes(p))
        };
    } else {
        specificChecks = {
            foco: EVALUATION_RULES.intervencion.foco.some(f => lowerText.includes(f)),
            resultado: EVALUATION_RULES.intervencion.resultado.some(r => lowerText.includes(r))
        };
    }

    const allChecks = { ...checks, ...specificChecks };
    const passedChecks = Object.values(allChecks).filter(Boolean).length;

    let score = 0;
    if (passedChecks === 4) {
        score = SCORING.text_pattern_full;
    } else if (passedChecks >= 2) {
        score = SCORING.text_pattern_partial;
    }

    return { score, checks: allChecks };
};

export const evaluateCase = (
    caseData: Case,
    answers: {
        problem: string;
        route: string;
        diagnostic: string;
        intervention: string;
    }
) => {
    const problemScore = answers.problem === caseData.problem_key ? SCORING.mcq_correct : 0;
    const routeScore = answers.route === caseData.route_key ? SCORING.choice_correct : 0;
    
    const diagnosticResult = evaluateTextPattern(answers.diagnostic, 'diagnostico');
    const interventionResult = evaluateTextPattern(answers.intervention, 'intervencion');

    const diagnosticScore = diagnosticResult.score;
    const interventionScore = interventionResult.score;

    const totalScore = problemScore + routeScore + diagnosticScore + interventionScore;
    const passed = totalScore >= SCORING.pass_threshold_case;

    return {
        totalScore,
        passed,
        problemScore,
        routeScore,
        diagnosticScore,
        interventionScore,
        diagnosticChecks: diagnosticResult.checks,
        interventionChecks: interventionResult.checks,
        caseData,
        userAnswers: answers,
    };
};
