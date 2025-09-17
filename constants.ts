import type { Case, Avatar, Celebration } from './types';

/**
 * Banco de casos para el modo "Retos Rápidos".
 * Son 30 casos cortos y directos.
 */
export const QUICK_CHALLENGE_CASES: Case[] = [
    {
        id: 101,
        title: "Adolescente Juan Pérez",
        summary: "Juan, de 15 años, ha mostrado un aumento significativo en su ausentismo escolar durante el último semestre. Sus padres reportan mayor conflictividad en casa.",
        imageUrl: "https://images.unsplash.com/photo-1503443207922-d2d70ba3da06?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Ausentismo escolar y conflicto familiar", "Bajo rendimiento académico", "Consumo de sustancias", "Acoso escolar"],
        problem_key: "Ausentismo escolar y conflicto familiar",
        route_options: ["Intervención sistémica Escuela-Familia", "Terapia individual para el adolescente", "Mediación escolar únicamente", "Sanciones disciplinarias"],
        route_key: "Intervención sistémica Escuela-Familia",
        diagnostic_model: "Identificar factores familiares y escolares que inciden en el ausentismo para orientar un plan de acción conjunto.",
        intervention_model: "Fortalecer la comunicación escuela-familia y establecer un plan de seguimiento para mejorar la asistencia y el clima familiar.",
        why_problem: "El ausentismo y el conflicto familiar son los problemas centrales y explícitamente conectados en la descripción del caso.",
        why_route: "Una ruta sistémica que involucre a ambos sistemas (escuela y familia) es la más efectiva para abordar un problema relacional como este."
    },
    {
        id: 102,
        title: "Niña Camila Rojas",
        summary: "Camila, de 8 años, presenta dificultades de aprendizaje. Vive con su abuela, quien tiene problemas de salud y recursos limitados.",
        imageUrl: "https://images.unsplash.com/photo-1503944583220-79d8c838d3a8?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Dificultades de aprendizaje y vulnerabilidad del cuidador", "Negligencia parental", "Desnutrición infantil", "Violencia intrafamiliar"],
        problem_key: "Dificultades de aprendizaje y vulnerabilidad del cuidador",
        route_options: ["Apoyo escolar y fortalecimiento de red de la cuidadora", "Derivación a residencia de protección", "Intervención solo con la niña", "Gestión de subsidio económico únicamente"],
        route_key: "Apoyo escolar y fortalecimiento de red de la cuidadora",
        diagnostic_model: "Evaluar las necesidades educativas de Camila y las condiciones de salud y apoyo de la abuela para un abordaje integral.",
        intervention_model: "Coordinar apoyos pedagógicos para Camila y conectar a la abuela con servicios de salud y redes comunitarias para aliviar su carga.",
        why_problem: "El problema no es solo el aprendizaje de Camila, sino también la fragilidad de su sistema de cuidado, lo que requiere una mirada dual.",
        why_route: "La intervención más sostenible es aquella que fortalece tanto a la niña en su proceso educativo como a su principal figura de apoyo."
    },
    {
        id: 103,
        title: "Familia González",
        summary: "La familia González, con tres hijos pequeños, enfrenta dificultades económicas tras la pérdida del empleo del padre. Viven en una vivienda inadecuada.",
        imageUrl: "https://images.unsplash.com/photo-1568623141932-7c599985b419?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Precariedad económica y habitacional", "Violencia intrafamiliar", "Deserción escolar", "Problemas de salud mental"],
        problem_key: "Precariedad económica y habitacional",
        route_options: ["Gestión de ayudas económicas y habitacionales", "Terapia familiar", "Intervención solo con el padre", "Búsqueda de empleo únicamente"],
        route_key: "Gestión de ayudas económicas y habitacionales",
        diagnostic_model: "Evaluar la situación de ingresos, gastos y condiciones de la vivienda para identificar las necesidades más urgentes.",
        intervention_model: "Facilitar el acceso a subsidios de arriendo y programas de apoyo al empleo para estabilizar la situación económica y habitacional.",
        why_problem: "La precariedad económica y de vivienda son los estresores centrales que afectan a toda la familia.",
        why_route: "Abordar las necesidades básicas de economía y vivienda es prioritario para crear una base de estabilidad desde la cual trabajar otros problemas."
    },
    {
        id: 104,
        title: "Señora Marta Herrera",
        summary: "Marta, de 75 años, viuda, vive sola en un departamento urbano. Ha mostrado deterioro cognitivo y dificultades para el autocuidado.",
        imageUrl: "https://images.unsplash.com/photo-1547472322-3926944b325b?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Deterioro cognitivo y riesgo de dependencia", "Aislamiento social", "Depresión", "Problemas de vivienda"],
        problem_key: "Deterioro cognitivo y riesgo de dependencia",
        route_options: ["Coordinación con red de salud y apoyo comunitario", "Derivación a un hogar de ancianos", "Terapia psicológica individual", "Contacto con familiares lejanos"],
        route_key: "Coordinación con red de salud y apoyo comunitario",
        diagnostic_model: "Evaluar el nivel de dependencia funcional y las redes de apoyo existentes para determinar los soportes necesarios.",
        intervention_model: "Coordinar con el centro de salud local para una evaluación médica y conectar a Marta con servicios de apoyo domiciliario y centros de día.",
        why_problem: "El deterioro cognitivo es el factor principal que genera riesgo en su capacidad de autocuidado y autonomía.",
        why_route: "La coordinación entre salud y comunidad es clave para brindar un soporte integral que permita a Marta mantenerse en su domicilio de forma segura."
    },
    {
        id: 105,
        title: "Adolescente Diego Silva",
        summary: "Diego, de 16 años, ha sido sorprendido en pequeños hurtos. Sus profesores reportan bajo rendimiento y cambios en su comportamiento.",
        imageUrl: "https://images.unsplash.com/photo-1522069169874-c58ec4b76259?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Conductas transgresoras y desvinculación escolar", "Consumo de drogas", "Violencia en el pololeo", "Conflictos familiares severos"],
        problem_key: "Conductas transgresoras y desvinculación escolar",
        route_options: ["Intervención socioeducativa con enfoque familiar y escolar", "Denuncia a tribunales de familia", "Terapia individual únicamente", "Cambio de establecimiento educacional"],
        route_key: "Intervención socioeducativa con enfoque familiar y escolar",
        diagnostic_model: "Indagar sobre los factores contextuales (grupo de pares, dinámica familiar, experiencia escolar) que influyen en las conductas de riesgo.",
        intervention_model: "Implementar un plan de trabajo con Diego, su familia y la escuela para abordar las causas de su comportamiento y fortalecer factores protectores.",
        why_problem: "Los hurtos y el bajo rendimiento son síntomas de un problema más profundo de desvinculación y conductas de riesgo.",
        why_route: "Un abordaje socioeducativo que involucre a los sistemas clave (familia, escuela) es más efectivo que una medida aislada o punitiva."
    },
    {
        id: 106,
        title: "Familia López",
        summary: "La familia López llegó recientemente desde otra región. Los padres no logran empleo estable y sus dos hijos no asisten regularmente a la escuela.",
        imageUrl: "https://images.unsplash.com/photo-1616472834123-844206a6f511?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Desarraigo y precariedad socio-laboral", "Negligencia infantil", "Problemas de salud mental", "Barreras culturales"],
        problem_key: "Desarraigo y precariedad socio-laboral",
        route_options: ["Apoyo en inserción laboral y revinculación escolar", "Intervención terapéutica familiar", "Gestión de vivienda únicamente", "Asesoría legal"],
        route_key: "Apoyo en inserción laboral y revinculación escolar",
        diagnostic_model: "Evaluar las barreras de acceso al empleo y a la educación, y las redes de apoyo existentes en la nueva región.",
        intervention_model: "Conectar a los padres con la oficina de empleo local y coordinar con la escuela un plan para asegurar la asistencia de los niños.",
        why_problem: "El desarraigo y la falta de empleo son las causas fundamentales que desestabilizan a la familia y afectan la escolaridad de los hijos.",
        why_route: "La prioridad es estabilizar las áreas laboral y educativa para reducir la vulnerabilidad de la familia en su nuevo entorno."
    },
    {
        id: 107,
        title: "Señor Pedro Vargas",
        summary: "Pedro, de 70 años, enfrenta duelo reciente por la muerte de su esposa. Muestra aislamiento social y desmotivación.",
        imageUrl: "https://images.unsplash.com/photo-1576661813539-23416a29a239?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Duelo y aislamiento social", "Depresión severa", "Abandono familiar", "Problemas económicos"],
        problem_key: "Duelo y aislamiento social",
        route_options: ["Apoyo psicosocial y red comunitaria", "Medicación psiquiátrica inmediata", "Contacto con hijo únicamente", "Derivación a hogar de ancianos"],
        route_key: "Apoyo psicosocial y red comunitaria",
        diagnostic_model: "Evaluar el estado anímico, las redes de apoyo existentes y el nivel de participación social para diseñar un plan de acompañamiento.",
        intervention_model: "Facilitar el acceso a grupos de apoyo para el duelo y conectar a Pedro con actividades comunitarias para personas mayores para reducir el aislamiento.",
        why_problem: "El duelo es el evento gatillante y el aislamiento social es su principal consecuencia, siendo el foco más pertinente para la intervención social.",
        why_route: "La ruta combina el apoyo emocional (duelo) con la reactivación social (red comunitaria), ofreciendo una respuesta integral a la situación."
    },
    {
        id: 108,
        title: "Joven Daniela Soto",
        summary: "Daniela, de 20 años, con discapacidad física, busca independencia. Sus padres están preocupados por su futuro y rechazan que viva sola.",
        imageUrl: "https://images.unsplash.com/photo-1529156069898-fac51a4624b6?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Conflicto de autonomía vs sobreprotección familiar", "Falta de oportunidades laborales", "Discriminación social", "Problemas de accesibilidad universal"],
        problem_key: "Conflicto de autonomía vs sobreprotección familiar",
        route_options: ["Mediación familiar y apoyo a la vida independiente", "Búsqueda de empleo para Daniela", "Terapia individual para los padres", "Denuncia por vulneración de derechos"],
        route_key: "Mediación familiar y apoyo a la vida independiente",
        diagnostic_model: "Evaluar las dinámicas familiares, los miedos de los padres y las habilidades de Daniela para la vida autónoma.",
        intervention_model: "Facilitar un proceso de mediación familiar para negociar acuerdos y conectar a Daniela con programas de apoyo a la vida independiente.",
        why_problem: "El núcleo del conflicto es la tensión entre el deseo de autonomía de Daniela y la sobreprotección de sus padres.",
        why_route: "La mediación es clave para resolver el conflicto familiar, mientras que el apoyo a la vida independiente dota a Daniela de herramientas concretas."
    },
    {
        id: 109,
        title: "Familia Ramírez",
        summary: "Familia de cinco miembros desplazada por un desastre natural. Actualmente viven en un albergue comunitario y necesitan reorganizar su vida.",
        imageUrl: "https://images.unsplash.com/photo-1618439699482-3a250444c9e7?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Crisis por desplazamiento y pérdida de medios de vida", "Trauma psicológico post-desastre", "Hacinamiento y falta de privacidad", "Deserción escolar de los hijos"],
        problem_key: "Crisis por desplazamiento y pérdida de medios de vida",
        route_options: ["Gestión de ayudas para la reconstrucción y apoyo psicosocial", "Terapia de trauma para todos los miembros", "Búsqueda de una nueva vivienda únicamente", "Revinculación escolar inmediata"],
        route_key: "Gestión de ayudas para la reconstrucción y apoyo psicosocial",
        diagnostic_model: "Evaluar las pérdidas materiales y las necesidades psicosociales de la familia para priorizar las acciones de apoyo.",
        intervention_model: "Conectar a la familia con programas de reconstrucción y subsidios, y facilitar el acceso a servicios de apoyo psicosocial para procesar la crisis.",
        why_problem: "El desplazamiento y la pérdida de sus medios de vida son la causa raíz de la crisis actual de la familia.",
        why_route: "La ruta combina el apoyo material (reconstrucción) con el apoyo emocional (psicosocial), abordando la crisis de manera integral."
    },
    {
        id: 110,
        title: "Señora Ana Pérez",
        summary: "Ana, madre soltera de 32 años, con dos hijos pequeños, enfrenta problemas para conseguir trabajo y vive en condiciones de hacinamiento.",
        imageUrl: "https://images.unsplash.com/photo-1515488762898-386f3e7741a2?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Precariedad laboral y habitacional en jefatura de hogar femenina", "Estrés parental", "Riesgo nutricional de los hijos", "Falta de redes de apoyo"],
        problem_key: "Precariedad laboral y habitacional en jefatura de hogar femenina",
        route_options: ["Apoyo para el empleo, cuidado infantil y vivienda", "Terapia para el manejo del estrés", "Intervención solo con los hijos", "Búsqueda de pareja para Ana"],
        route_key: "Apoyo para el empleo, cuidado infantil y vivienda",
        diagnostic_model: "Evaluar las competencias laborales de Ana, las barreras para el empleo y las condiciones de la vivienda.",
        intervention_model: "Conectar a Ana con programas de capacitación laboral, gestionar acceso a jardines infantiles y postular a subsidios de vivienda.",
        why_problem: "La precariedad en el empleo y la vivienda son los problemas estructurales que afectan a esta familia monoparental.",
        why_route: "La ruta es integral al abordar el empleo (ingresos), el cuidado infantil (barrera para trabajar) y la vivienda (condiciones de vida)."
    },
    {
        id: 111,
        title: "Familia Navarro",
        summary: "Padres de un niño con autismo buscan apoyo para mejorar su integración escolar y social.",
        imageUrl: "https://images.unsplash.com/photo-1516534775-76a7b6b45524?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Barreras en la integración de niño con autismo", "Falta de redes de apoyo especializado", "Estrés en los padres", "Discriminación escolar"],
        problem_key: "Barreras en la integración de niño con autismo",
        route_options: ["Coordinación escuela-familia y redes de apoyo", "Terapia conductual para el niño", "Grupo de apoyo para padres", "Denuncia a la superintendencia"],
        route_key: "Coordinación escuela-familia y redes de apoyo",
        diagnostic_model: "Evaluar las estrategias de la escuela, las necesidades del niño y los recursos de la familia para la integración.",
        intervention_model: "Facilitar reuniones de coordinación entre la familia y la escuela, y conectar a los padres con agrupaciones de autismo.",
        why_problem: "El problema central son las barreras que impiden la integración efectiva del niño, más allá del diagnóstico en sí.",
        why_route: "La coordinación entre los actores clave (escuela, familia) y la conexión con redes especializadas es la forma más efectiva de derribar barreras."
    },
    {
        id: 112,
        title: "Adolescente Felipe Castro",
        summary: "Felipe, de 14 años, presenta consumo problemático de alcohol y frecuentes ausencias escolares.",
        imageUrl: "https://images.unsplash.com/photo-1581368722535-b5d10839772b?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Consumo problemático y desescolarización", "Conflictos familiares", "Influencia de pares", "Depresión adolescente"],
        problem_key: "Consumo problemático y desescolarización",
        route_options: ["Intervención coordinada con salud y educación", "Internación en centro de rehabilitación", "Terapia familiar únicamente", "Sanciones escolares"],
        route_key: "Intervención coordinada con salud y educación",
        diagnostic_model: "Evaluar el patrón de consumo, los factores de riesgo asociados y el nivel de desvinculación escolar.",
        intervention_model: "Coordinar un plan de tratamiento para el consumo con un centro de salud y un plan de revinculación con el establecimiento educacional.",
        why_problem: "El consumo y la desescolarización son dos problemas graves y entrelazados que requieren atención inmediata.",
        why_route: "Una intervención efectiva requiere la experticia de ambos sectores, salud para el consumo y educación para la trayectoria escolar."
    },
    {
        id: 113,
        title: "Familia Duarte",
        summary: "Reside en una zona rural con acceso limitado a servicios médicos y educativos. Los padres trabajan en agricultura con ingresos precarios.",
        imageUrl: "https://images.unsplash.com/photo-1555054352-3c4b4a955ba4?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Aislamiento geográfico y precariedad", "Trabajo infantil", "Desnutrición", "Violencia rural"],
        problem_key: "Aislamiento geográfico y precariedad",
        route_options: ["Articulación con redes institucionales móviles", "Propuesta de traslado de la familia a la ciudad", "Apoyo económico directo", "Capacitación agrícola"],
        route_key: "Articulación con redes institucionales móviles",
        diagnostic_model: "Mapear los servicios existentes en el territorio y las barreras de acceso específicas de la familia.",
        intervention_model: "Coordinar con programas de salud rural y transporte escolar para mejorar el acceso de la familia a servicios básicos.",
        why_problem: "El aislamiento y la precariedad son las condiciones estructurales que limitan el desarrollo de la familia.",
        why_route: "La articulación de redes busca 'acercar' los servicios a la familia, siendo una estrategia más realista que un traslado."
    },
    {
        id: 114,
        title: "Señora Isabel Contreras",
        summary: "Isabel, de 68 años, ha sido víctima de violencia intrafamiliar por parte de un hijo adulto. No tiene redes de apoyo cercanas.",
        imageUrl: "https://images.unsplash.com/photo-1573496004836-33a42c34a485?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Violencia intrafamiliar hacia persona mayor", "Dependencia económica del agresor", "Aislamiento social", "Problemas de salud no tratados"],
        problem_key: "Violencia intrafamiliar hacia persona mayor",
        route_options: ["Activación de red de protección y seguridad", "Denuncia inmediata a la policía", "Mediación entre madre e hijo", "Búsqueda de un nuevo hogar para el hijo"],
        route_key: "Activación de red de protección y seguridad",
        diagnostic_model: "Evaluar el nivel de riesgo, el tipo de violencia y las redes de apoyo existentes para elaborar un plan de seguridad.",
        intervention_model: "Coordinar con programas de VIF, centro de la mujer y, si es necesario, medidas de protección para garantizar la seguridad de Isabel.",
        why_problem: "La violencia es el problema central y más urgente, que pone en riesgo la integridad física y psicológica de la persona.",
        why_route: "La prioridad absoluta en casos de VIF es la seguridad de la víctima, por lo que activar la red de protección es el primer paso."
    },
    {
        id: 115,
        title: "Familia Ortega",
        summary: "Con cuatro hijos, uno de ellos con enfermedad crónica. La familia lucha con altos gastos médicos y estrés emocional.",
        imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Sobrecarga del sistema familiar por enfermedad crónica", "Crisis económica por gastos de salud", "Estrés parental", "Necesidades de los otros hermanos"],
        problem_key: "Sobrecarga del sistema familiar por enfermedad crónica",
        route_options: ["Apoyo económico, emocional y de respiro para cuidadores", "Terapia individual para el hijo enfermo", "Intervención solo con los padres", "Búsqueda de un segundo empleo"],
        route_key: "Apoyo económico, emocional y de respiro para cuidadores",
        diagnostic_model: "Evaluar el impacto de la enfermedad en la economía, la dinámica familiar y el bienestar emocional de todos los miembros.",
        intervention_model: "Gestionar ayudas técnicas o económicas para la enfermedad y conectar a la familia con grupos de apoyo y programas de respiro para cuidadores.",
        why_problem: "La sobrecarga es un concepto integral que abarca lo económico, lo emocional y lo práctico, describiendo bien la situación de la familia.",
        why_route: "La ruta es integral porque ofrece apoyo en las tres áreas críticas: económica, emocional y de cuidado práctico (respiro)."
    },
    {
        id: 116,
        title: "Señor Luis Morales",
        summary: "Luis, de 45 años, perdió recientemente su empleo. Presenta síntomas depresivos y ha reducido su interacción con la comunidad.",
        imageUrl: "https://images.unsplash.com/photo-1534322976-355d3b2c1393?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Crisis por desempleo y salud mental", "Depresión", "Aislamiento social", "Conflictos de pareja"],
        problem_key: "Crisis por desempleo y salud mental",
        route_options: ["Apoyo en reinserción laboral y derivación a salud mental", "Búsqueda de empleo únicamente", "Terapia de pareja", "Medicación psiquiátrica"],
        route_key: "Apoyo en reinserción laboral y derivación a salud mental",
        diagnostic_model: "Evaluar el estado de salud mental y las competencias laborales para un plan de acción dual.",
        intervention_model: "Derivar a salud mental para el tratamiento de los síntomas depresivos y conectar con la oficina de empleo para la reinserción laboral.",
        why_problem: "El desempleo y la salud mental están íntimamente ligados; el desempleo gatilla los síntomas y estos dificultan la búsqueda de trabajo.",
        why_route: "Una ruta dual es necesaria: la reinserción laboral será más exitosa si se abordan simultáneamente los problemas de salud mental."
    },
    {
        id: 117,
        title: "Joven Carolina Vega",
        summary: "Carolina, de 19 años, migrante, trabaja en empleo informal sin redes de apoyo. Tiene un hijo pequeño a su cargo.",
        imageUrl: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Precariedad laboral y aislamiento en jefatura de hogar migrante", "Explotación laboral", "Vulnerabilidad habitacional", "Falta de acceso a cuidado infantil"],
        problem_key: "Precariedad laboral y aislamiento en jefatura de hogar migrante",
        route_options: ["Regularización migratoria, apoyo laboral y red de cuidado", "Denuncia por trabajo informal", "Búsqueda de una nueva vivienda", "Terapia individual"],
        route_key: "Regularización migratoria, apoyo laboral y red de cuidado",
        diagnostic_model: "Evaluar el estatus migratorio, las condiciones laborales y las redes de apoyo para un plan de estabilización.",
        intervention_model: "Asesorar en la regularización migratoria, conectar con programas de empleo formal y gestionar acceso a sala cuna o jardín infantil.",
        why_problem: "La condición de migrante, la precariedad y la falta de redes son los tres pilares de la vulnerabilidad de esta familia.",
        why_route: "La ruta aborda los tres pilares: lo legal (migración), lo económico (empleo) y lo social (red de cuidado), siendo altamente integral."
    },
    {
        id: 118,
        title: "Familia Soto",
        summary: "Familia de seis integrantes que enfrenta violencia intrafamiliar. Los hijos muestran retraimiento y bajo desempeño escolar.",
        imageUrl: "https://images.unsplash.com/photo-1568772585403-d25954d5b64c?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Violencia intrafamiliar y consecuencias en los hijos", "Bajo rendimiento escolar", "Maltrato infantil", "Conflictos de pareja"],
        problem_key: "Violencia intrafamiliar y consecuencias en los hijos",
        route_options: ["Intervención en VIF y protección de los niños", "Terapia de pareja", "Apoyo escolar para los niños", "Denuncia y separación inmediata"],
        route_key: "Intervención en VIF y protección de los niños",
        diagnostic_model: "Evaluar la dinámica de la violencia, el nivel de riesgo para todos los miembros y el impacto en el desarrollo de los niños.",
        intervention_model: "Coordinar con programas especializados en VIF para adultos y con programas de protección infantil para evaluar y reparar el daño en los niños.",
        why_problem: "La VIF es el problema central que explica el retraimiento y bajo desempeño de los hijos, siendo estos una consecuencia directa.",
        why_route: "La ruta es correcta al priorizar la intervención en VIF, que es la causa, y al mismo tiempo atender las necesidades de protección de los niños."
    },
    {
        id: 119,
        title: "Señora Teresa Aguilar",
        summary: "Teresa, de 72 años, vive sola. Sus vecinos reportan descuido en su autocuidado y alimentación insuficiente.",
        imageUrl: "https://images.unsplash.com/photo-1615222633359-3f29c3b2a5b2?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Aislamiento y dependencia en persona mayor", "Desnutrición", "Abandono familiar", "Depresión"],
        problem_key: "Aislamiento y dependencia en persona mayor",
        route_options: ["Coordinación con red de salud y servicios sociales", "Visita a familiares", "Entrega de canasta de alimentos", "Derivación a hogar de ancianos"],
        route_key: "Coordinación con red de salud y servicios sociales",
        diagnostic_model: "Realizar una visita domiciliaria para evaluar las condiciones de habitabilidad, salud y redes de apoyo de Teresa.",
        intervention_model: "Coordinar una evaluación médica a domicilio y la inclusión en programas de asistencia domiciliaria para personas mayores.",
        why_problem: "El aislamiento y la dependencia son los conceptos que mejor engloban el descuido y la alimentación insuficiente en una persona mayor que vive sola.",
        why_route: "La coordinación con la red local de salud y servicios sociales es la estrategia profesional para abordar este tipo de casos de forma integral."
    },
    {
        id: 120,
        title: "Adolescente Nicolás Fuentes",
        summary: "Nicolás, de 15 años, abandonó la escuela tras reiteradas faltas. Pasa gran parte del tiempo en la calle con un grupo de pares mayores.",
        imageUrl: "https://images.unsplash.com/photo-1519741497674-6114d186b25c?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Deserción escolar y riesgo social", "Consumo de drogas", "Conflictos con la autoridad", "Falta de supervisión parental"],
        problem_key: "Deserción escolar y riesgo social",
        route_options: ["Intervención socioeducativa en medio abierto", "Reinserción escolar forzada", "Terapia familiar", "Denuncia por vulneración de derechos"],
        route_key: "Intervención socioeducativa en medio abierto",
        diagnostic_model: "Evaluar los motivos de la deserción escolar, las características del grupo de pares y los factores de riesgo en la comunidad.",
        intervention_model: "Implementar un plan de trabajo con un educador de calle para vincular a Nicolás con programas de reinserción educativa o capacitación laboral.",
        why_problem: "La deserción escolar y el tiempo en la calle con pares de riesgo son los indicadores clave de una situación de alta vulnerabilidad.",
        why_route: "La intervención en medio abierto (calle) es la estrategia adecuada para contactar y vincular a un adolescente que ya está fuera del sistema escolar."
    },
    {
        id: 121,
        title: "Familia Méndez",
        summary: "Matrimonio joven con un hijo recién nacido. Enfrentan dificultades económicas y falta de apoyo familiar.",
        imageUrl: "https://images.unsplash.com/photo-1515488762898-386f3e7741a2?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Crisis de parentalidad en contexto de precariedad", "Estrés postparto", "Precariedad económica", "Aislamiento social"],
        problem_key: "Crisis de parentalidad en contexto de precariedad",
        route_options: ["Apoyo a la crianza y gestión de ayudas económicas", "Terapia de pareja", "Búsqueda de empleo para el padre", "Grupo de apoyo para la madre"],
        route_key: "Apoyo a la crianza y gestión de ayudas económicas",
        diagnostic_model: "Evaluar las habilidades parentales, el nivel de estrés y las necesidades económicas de la familia.",
        intervention_model: "Conectar a la familia con programas de apoyo a la primera infancia (Chile Crece Contigo) y gestionar el acceso a subsidios estatales.",
        why_problem: "El problema es la dificultad de ejercer la parentalidad en un contexto adverso (precariedad, sin apoyo), lo que es más integral que solo la economía.",
        why_route: "La ruta aborda tanto el aspecto relacional (crianza) como el material (economía), que son las dos caras de la crisis."
    },
    {
        id: 122,
        title: "Señora Carmen Salinas",
        summary: "Carmen, de 40 años, vive con pareja que la agrede física y psicológicamente. No cuenta con ingresos propios.",
        imageUrl: "https://images.unsplash.com/photo-1567427632933-d3ba5a45396a?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Violencia de género y dependencia económica", "Baja autoestima", "Conflictos de pareja", "Riesgo para los hijos"],
        problem_key: "Violencia de género y dependencia económica",
        route_options: ["Plan de seguridad y apoyo para la autonomía económica", "Terapia de pareja", "Denuncia inmediata sin plan previo", "Búsqueda de empleo para Carmen"],
        route_key: "Plan de seguridad y apoyo para la autonomía económica",
        diagnostic_model: "Evaluar el nivel de riesgo de la violencia y las barreras que impiden a Carmen salir del círculo de la violencia.",
        intervention_model: "Elaborar un plan de seguridad con Carmen, derivarla al Centro de la Mujer y a programas de capacitación e inserción laboral.",
        why_problem: "La violencia es el problema central, y la dependencia económica es el principal factor que la mantiene atrapada en esa situación.",
        why_route: "La ruta es efectiva porque combina la protección (seguridad) con el empoderamiento (autonomía económica), permitiendo una salida real."
    },
    {
        id: 123,
        title: "Joven Andrés Reyes",
        summary: "Andrés, de 21 años, estudiante universitario, presenta consumo de drogas y conflictos con su familia por su estilo de vida.",
        imageUrl: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Consumo problemático de drogas y conflicto familiar", "Crisis de la adultez emergente", "Bajo rendimiento académico", "Problemas de comunicación"],
        problem_key: "Consumo problemático de drogas y conflicto familiar",
        route_options: ["Derivación a tratamiento y mediación familiar", "Expulsión del hogar familiar", "Terapia individual para Andrés", "Intervención solo con los padres"],
        route_key: "Derivación a tratamiento y mediación familiar",
        diagnostic_model: "Evaluar el patrón de consumo y las dinámicas de comunicación familiar para entender el origen y mantención de los conflictos.",
        intervention_model: "Derivar a Andrés a un programa de tratamiento de drogas y ofrecer un espacio de mediación familiar para reestablecer acuerdos de convivencia.",
        why_problem: "El consumo y el conflicto familiar se retroalimentan: el consumo genera conflicto y el conflicto puede aumentar el consumo.",
        why_route: "La ruta aborda ambos problemas: el tratamiento para el consumo y la mediación para el conflicto, lo que aumenta las probabilidades de éxito."
    },
    {
        id: 124,
        title: "Familia Torres",
        summary: "Compuesta por padres y dos hijos adolescentes. Reportan comunicación deficiente y frecuentes conflictos.",
        imageUrl: "https://images.unsplash.com/photo-1495062191103-44a6a5b5b3a3?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Disfuncionalidad en la comunicación familiar", "Conductas de riesgo en adolescentes", "Crisis de la adolescencia", "Estrés parental"],
        problem_key: "Disfuncionalidad en la comunicación familiar",
        route_options: ["Terapia familiar sistémica", "Terapia individual para cada miembro", "Escuela para padres", "Establecimiento de reglas más estrictas"],
        route_key: "Terapia familiar sistémica",
        diagnostic_model: "Analizar los patrones de comunicación y las reglas implícitas que mantienen los conflictos en el sistema familiar.",
        intervention_model: "Implementar sesiones de terapia familiar para modificar los patrones de comunicación disfuncionales y co-construir nuevas formas de relación.",
        why_problem: "La comunicación deficiente es la causa de fondo que genera los conflictos reportados; es el problema estructural.",
        why_route: "La terapia familiar sistémica es el enfoque de elección para problemas de comunicación, ya que trabaja con la familia como un todo."
    },
    {
        id: 125,
        title: "Señor Jorge Leiva",
        summary: "Jorge, de 60 años, jubilado, enfrenta soledad tras mudanza de sus hijos. Ha perdido interés en actividades cotidianas.",
        imageUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Aislamiento social y desvinculación en la jubilación", "Depresión", "Síndrome del nido vacío", "Problemas de salud"],
        problem_key: "Aislamiento social y desvinculación en la jubilación",
        route_options: ["Revinculación con redes comunitarias y de pares", "Derivación a psiquiatría", "Fomentar contacto con los hijos", "Búsqueda de un trabajo a tiempo parcial"],
        route_key: "Revinculación con redes comunitarias y de pares",
        diagnostic_model: "Evaluar las redes de apoyo existentes, los intereses de Jorge y las ofertas programáticas para personas mayores en la comunidad.",
        intervention_model: "Conectar a Jorge con clubes de adulto mayor, talleres u otras actividades de su interés para fomentar nuevas redes y un propósito.",
        why_problem: "El problema central es la pérdida de roles (trabajador, padre presente) que lleva al aislamiento, un problema eminentemente social.",
        why_route: "La revinculación comunitaria ataca directamente el aislamiento y la falta de propósito, ofreciendo una solución desde lo social y relacional."
    },
    {
        id: 126,
        title: "Niña Valentina Muñoz",
        summary: "Valentina, de 10 años, no asiste regularmente a la escuela. Vive en una vivienda sin acceso a servicios básicos.",
        imageUrl: "https://images.unsplash.com/photo-1542978735-3200672a21b3?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Exclusión social y vulneración del derecho a la educación", "Negligencia parental", "Pobreza extrema", "Trabajo infantil"],
        problem_key: "Exclusión social y vulneración del derecho a la educación",
        route_options: ["Intervención integral: vivienda, servicios y revinculación escolar", "Denuncia por vulneración de derechos", "Apoyo escolar únicamente", "Mejora de la vivienda"],
        route_key: "Intervención integral: vivienda, servicios y revinculación escolar",
        diagnostic_model: "Realizar un diagnóstico socio-territorial para identificar las barreras de acceso a servicios y las causas de la inasistencia escolar.",
        intervention_model: "Coordinar con el municipio para el acceso a servicios básicos y con la escuela para un plan de revinculación y nivelación de Valentina.",
        why_problem: "La falta de servicios y la inasistencia escolar son manifestaciones de una exclusión social más amplia, que vulnera derechos fundamentales.",
        why_route: "Una ruta integral es necesaria porque los problemas están interconectados: sin servicios básicos, la asistencia escolar se hace muy difícil."
    },
    {
        id: 127,
        title: "Familia Araya",
        summary: "Familia migrante con tres hijos. Presentan dificultades de integración cultural y barreras idiomáticas.",
        imageUrl: "https://images.unsplash.com/photo-1523626752472-b55a628f1acc?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Barreras de integración en familia migrante", "Discriminación y xenofobia", "Precariedad laboral", "Dificultades de aprendizaje en los hijos"],
        problem_key: "Barreras de integración en familia migrante",
        route_options: ["Apoyo en regularización, idioma e inserción comunitaria", "Terapia familiar intercultural", "Clases de español únicamente", "Búsqueda de empleo para los padres"],
        route_key: "Apoyo en regularización, idioma e inserción comunitaria",
        diagnostic_model: "Evaluar el estatus migratorio, el dominio del idioma y las redes de apoyo para identificar las principales barreras de integración.",
        intervention_model: "Derivar a servicios de asesoría migratoria, cursos de español y programas de acogida a migrantes para facilitar su inserción.",
        why_problem: "El concepto 'barreras de integración' es amplio y abarca los problemas culturales, idiomáticos y sociales que enfrenta la familia.",
        why_route: "La ruta es integral al abordar lo legal (regularización), lo cultural (idioma) y lo social (inserción comunitaria)."
    },
    {
        id: 128,
        title: "Señora Julia Paredes",
        summary: "Julia, de 55 años, cuidadora principal de su madre enferma. Muestra agotamiento y falta de apoyo externo.",
        imageUrl: "https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Sobrecarga del cuidador principal", "Estrés crónico", "Aislamiento social", "Conflictos familiares por el cuidado"],
        problem_key: "Sobrecarga del cuidador principal",
        route_options: ["Gestión de red de apoyo y programas de respiro", "Terapia individual para Julia", "Solicitar ayuda a otros familiares", "Contratación de un cuidador privado"],
        route_key: "Gestión de red de apoyo y programas de respiro",
        diagnostic_model: "Evaluar el nivel de sobrecarga de Julia, las redes de apoyo disponibles y las necesidades de cuidado de su madre.",
        intervention_model: "Conectar a Julia con programas de apoyo a cuidadores, servicios de respiro (cuidado domiciliario por horas) y grupos de pares.",
        why_problem: "La 'sobrecarga del cuidador' es el diagnóstico preciso para el agotamiento y la falta de apoyo en personas que cuidan a otros.",
        why_route: "La ruta se enfoca en aliviar la carga de Julia a través de apoyos concretos (respiro) y emocionales (redes), lo que es más efectivo que solo terapia."
    },
    {
        id: 129,
        title: "Adolescente Sofía Morales",
        summary: "Sofía, de 17 años, presenta síntomas de ansiedad y rechazo a asistir al liceo tras sufrir acoso escolar.",
        imageUrl: "https://images.unsplash.com/photo-1594339319721-1343e1f8c642?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Trauma por acoso escolar y fobia social", "Ansiedad generalizada", "Problemas de convivencia escolar", "Depresión adolescente"],
        problem_key: "Trauma por acoso escolar y fobia social",
        route_options: ["Intervención coordinada con salud mental y liceo", "Cambio de liceo inmediato", "Terapia individual para Sofía", "Denuncia contra los acosadores"],
        route_key: "Intervención coordinada con salud mental y liceo",
        diagnostic_model: "Evaluar el impacto del acoso en la salud mental de Sofía y los protocolos de actuación del liceo frente a estos casos.",
        intervention_model: "Derivar a Sofía a tratamiento psicológico y coordinar con el liceo un plan de reingreso seguro y medidas contra el acoso.",
        why_problem: "El acoso es la causa (trauma) y el rechazo a asistir al liceo es la consecuencia (fobia social), ambos deben ser nombrados.",
        why_route: "La coordinación es clave: salud mental trata las secuelas en Sofía, mientras que la intervención en el liceo aborda el contexto que generó el problema."
    },
    {
        id: 130,
        title: "Familia Fernández",
        summary: "Familia de cinco miembros con altos niveles de endeudamiento. El estrés financiero afecta la dinámica familiar.",
        imageUrl: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Endeudamiento y estrés familiar", "Violencia de género", "Adicción al juego", "Problemas de salud mental no tratados"],
        problem_key: "Endeudamiento y estrés familiar",
        route_options: ["Asesoría financiera y terapia familiar", "Declaración de quiebra inmediata", "Intervención solo con los hijos", "Búsqueda de un segundo empleo"],
        route_key: "Asesoría financiera y terapia familiar",
        diagnostic_model: "Analizar la estructura de la deuda y las dinámicas de comunicación familiar para comprender el impacto del estrés financiero.",
        intervention_model: "Facilitar el acceso a asesoría para la renegociación de deudas y promover espacios de comunicación familiar para manejar el estrés.",
        why_problem: "El endeudamiento es la causa explícita del estrés que afecta la dinámica familiar, siendo el núcleo del problema.",
        why_route: "Una ruta dual que aborda tanto el problema práctico (deudas) como el emocional (comunicación) ofrece una solución más completa y sostenible."
    }
];

/**
 * Banco de casos para el modo "Campaña".
 * Son 30 casos más detallados y complejos.
 */
export const CAMPAIGN_CASES: Case[] = [
    {
        id: 201,
        title: "Adolescente Juan Pérez",
        summary: "Juan, de 15 años, ha mostrado un aumento significativo en su ausentismo escolar durante el último semestre. Sus profesores reportan baja en el rendimiento académico y dificultad para integrarse en actividades grupales. En casa, sus padres describen un clima de conflictividad con discusiones frecuentes y poco diálogo. Juan pasa tiempo con un grupo de pares mayores que no asisten regularmente a clases. La familia expresa preocupación por su futuro y la pérdida de hábitos de estudio.",
        imageUrl: "https://images.unsplash.com/photo-1503443207922-d2d70ba3da06?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Crisis adolescente multifactorial (escolar, familiar, social)", "Influencia negativa del grupo de pares", "Problemas de comunicación familiar", "Bajo rendimiento académico aislado"],
        problem_key: "Crisis adolescente multifactorial (escolar, familiar, social)",
        route_options: ["Intervención sistémica (individuo, familia, escuela, pares)", "Terapia individual centrada en el rendimiento", "Mediación familiar únicamente", "Programa de tutorías escolares"],
        route_key: "Intervención sistémica (individuo, familia, escuela, pares)",
        diagnostic_model: "Evaluar las interacciones de Juan en sus sistemas clave (familia, escuela, pares) para identificar los factores que mantienen el ausentismo y el conflicto.",
        intervention_model: "Diseñar un plan de intervención coordinado que fortalezca la comunicación familiar, re-vincule a Juan con el sistema escolar y aborde las conductas de riesgo asociadas a su grupo de pares.",
        why_problem: "La descripción abarca problemas en múltiples áreas (escuela, casa, amigos), lo que apunta a una crisis compleja y no a un problema aislado.",
        why_route: "Dado que el problema es multifactorial, la ruta de abordaje más efectiva es la sistémica, que interviene coordinadamente en los diferentes ámbitos de la vida del adolescente."
    },
    {
        id: 202,
        title: "Niña Camila Rojas",
        summary: "Camila, de 8 años, presenta dificultades de aprendizaje que afectan su desempeño escolar. Vive con su abuela materna, quien se encuentra en delicado estado de salud y con escasos recursos económicos. La escuela reporta ausencias recurrentes y poca supervisión en las tareas. La abuela, a pesar de su compromiso, reconoce sentirse sobrecargada y fatigada. El entorno inmediato carece de redes de apoyo familiar sólidas.",
        imageUrl: "https://images.unsplash.com/photo-1503944583220-79d8c838d3a8?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Vulneración de derechos por negligencia educativa y sobrecarga de la cuidadora", "Dificultades de aprendizaje específicas", "Pobreza extrema", "Problemas de salud de la abuela"],
        problem_key: "Vulneración de derechos por negligencia educativa y sobrecarga de la cuidadora",
        route_options: ["Intervención socioeducativa y fortalecimiento de la red de cuidado", "Derivación a programa de protección infantil", "Apoyo psicopedagógico exclusivo para la niña", "Gestión de pensión para la abuela"],
        route_key: "Intervención socioeducativa y fortalecimiento de la red de cuidado",
        diagnostic_model: "Diagnosticar las barreras de acceso a la educación de Camila y evaluar el nivel de sobrecarga y las necesidades de apoyo de su abuela como cuidadora principal.",
        intervention_model: "Coordinar con la escuela un plan de apoyo para Camila y gestionar recursos comunitarios y de salud para la abuela, con el fin de fortalecer el sistema de cuidado.",
        why_problem: "El problema central es la vulneración del derecho a la educación de Camila, causada por un sistema de cuidado frágil y sobrecargado.",
        why_route: "La ruta más integral es la que no solo apoya a la niña, sino que también fortalece a su cuidadora, ya que la sostenibilidad del bienestar de Camila depende directamente de ello."
    },
    {
        id: 203,
        title: "Familia González",
        summary: "La familia González, con tres hijos pequeños, enfrenta dificultades económicas tras la pérdida del empleo del padre. Viven en una vivienda inadecuada, con problemas de humedad y hacinamiento. Los padres reportan estrés y discusiones frecuentes. El hijo mayor ha bajado su rendimiento escolar y los dos menores presentan problemas de salud recurrentes.",
        imageUrl: "https://images.unsplash.com/photo-1568623141932-7c599985b419?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Precariedad económica y habitacional con impacto en la salud y educación", "Conflictos de pareja", "Problemas de salud infantil", "Bajo rendimiento escolar"],
        problem_key: "Precariedad económica y habitacional con impacto en la salud y educación",
        route_options: ["Gestión de ayudas económicas, habitacionales y coordinación con salud y educación", "Terapia familiar", "Intervención solo con el padre para la búsqueda de empleo", "Mejorar la vivienda únicamente"],
        route_key: "Gestión de ayudas económicas, habitacionales y coordinación con salud y educación",
        diagnostic_model: "Evaluar la situación de ingresos, gastos, condiciones de la vivienda y el impacto en la salud y educación de los hijos para un abordaje integral.",
        intervention_model: "Facilitar el acceso a subsidios de arriendo, programas de apoyo al empleo, y coordinar con el centro de salud y la escuela para un seguimiento de los niños.",
        why_problem: "La precariedad económica y habitacional son los estresores centrales que afectan a toda la familia, con consecuencias directas en la salud y educación de los hijos.",
        why_route: "Abordar las necesidades básicas de economía y vivienda es prioritario, pero debe ir acompañado de una coordinación con los sistemas de salud y educación para mitigar los efectos en los niños."
    },
    {
        id: 204,
        title: "Señora Marta Herrera",
        summary: "Marta, de 75 años, viuda, vive sola en un departamento urbano. Ha mostrado deterioro cognitivo leve, con olvidos frecuentes y dificultades para manejar su medicación. Sus hijos viven en otra ciudad y la visitan esporádicamente. Aunque tiene autonomía para las actividades básicas, ha dejado de participar en el club de adulto mayor y sus vecinos la notan más aislada y descuidada en su aspecto personal.",
        imageUrl: "https://images.unsplash.com/photo-1547472322-3926944b325b?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Deterioro cognitivo inicial con riesgo de dependencia y aislamiento social", "Aislamiento social", "Depresión senil", "Falta de apoyo familiar"],
        problem_key: "Deterioro cognitivo inicial con riesgo de dependencia y aislamiento social",
        route_options: ["Coordinación con red de salud, apoyo comunitario y familiar", "Derivación a un hogar de ancianos", "Terapia psicológica individual", "Exigir a los hijos una mayor presencia"],
        route_key: "Coordinación con red de salud, apoyo comunitario y familiar",
        diagnostic_model: "Evaluar el nivel de dependencia funcional, el estado cognitivo y las redes de apoyo existentes para determinar los soportes necesarios que fomenten su autonomía.",
        intervention_model: "Coordinar con el centro de salud para una evaluación médica y seguimiento, conectar a Marta con servicios de apoyo domiciliario, centros de día y facilitar la comunicación con sus hijos.",
        why_problem: "El deterioro cognitivo es el factor principal que genera riesgo en su autonomía, y el aislamiento social agrava la situación. Ambos deben ser abordados.",
        why_route: "La coordinación entre salud, comunidad y familia es clave para brindar un soporte integral que permita a Marta mantenerse en su domicilio de forma segura y conectada socialmente."
    },
    {
        id: 205,
        title: "Adolescente Diego Silva",
        summary: "Diego, de 16 años, ha sido sorprendido en pequeños hurtos en el barrio. Sus profesores reportan bajo rendimiento, cambios en su comportamiento y amistades con jóvenes mayores que no estudian. En casa, la comunicación con sus padres es casi nula y se muestra desafiante. Los padres se sienten sobrepasados y no saben cómo actuar.",
        imageUrl: "https://images.unsplash.com/photo-1522069169874-c58ec4b76259?q=80&w=800&auto=format&fit=crop",
        problem_options: ["Conductas transgresoras y desvinculación escolar en un contexto de crisis familiar", "Consumo de drogas", "Influencia del grupo de pares", "Conflictos familiares severos"],
        problem_key: "Conductas transgresoras y desvinculación escolar en un contexto de crisis familiar",
        route_options: ["Intervención socioeducativa con enfoque familiar, escolar y comunitario", "Denuncia a tribunales de familia", "Terapia individual únicamente para Diego", "Cambio de establecimiento educacional"],
        route_key: "Intervención socioeducativa con enfoque familiar, escolar y comunitario",
        diagnostic_model: "Indagar sobre los factores contextuales (grupo de pares, dinámica familiar, experiencia escolar) que influyen en las conductas de riesgo y la desvinculación.",
        intervention_model: "Implementar un plan de trabajo con Diego, su familia y la escuela para abordar las causas de su comportamiento, fortalecer factores protectores y vincularlo a actividades de interés.",
        why_problem: "Los hurtos y el bajo rendimiento son síntomas de un problema más profundo de desvinculación y crisis familiar, no un problema aislado de conducta.",
        why_route: "Un abordaje socioeducativo que involucre a los sistemas clave (familia, escuela, comunidad) es más efectivo que una medida aislada o punitiva para generar un cambio sostenible."
    }
];

export const SCORING = {
    mcq_correct: 10,
    choice_correct: 10,
    text_pattern_partial: 5,
    text_pattern_full: 10,
    pass_threshold_case: 20,
};

export const EVALUATION_RULES = {
    diagnostico: {
        verbos: ['identificar', 'determinar', 'examinar', 'revisar', 'mapear', 'evaluar', 'conocer', 'analizar', 'indagar', 'explorar'],
        que: ['necesidades', 'recursos', 'barreras', 'condiciones', 'factores', 'dinámicas', 'situación'],
        poblacion: ['persona', 'familia', 'comunidad', 'entorno', 'escolar', 'hogar', 'contexto', 'grupo'],
        proposito: ['para', 'con el fin de', 'con el objetivo de', 'orientar', 'fundamentar', 'diseñar', 'planificar']
    },
    intervencion: {
        verbos: ['mejorar', 'reducir', 'facilitar', 'fortalecer', 'promover', 'coordinar', 'gestionar', 'implementar', 'desarrollar'],
        foco: ['acceso', 'vínculos', 'seguridad', 'autocuidado', 'habilidades', 'participación', 'comunicación', 'condiciones'],
        poblacion: ['persona', 'familia', 'comunidad', 'población', 'grupo', 'niños', 'adolescentes', 'adultos'],
        resultado: ['mejorar', 'aumentar', 'disminuir', 'lograr', 'favorecer', 'para que']
    }
};

export const AVATARS: Avatar[] = [
    { 
        id: 0, 
        icon: '🧠', 
        name: 'El Analista', 
        description: 'Recibe un bonus de puntos en Diagnóstico por su agudeza para analizar.' 
    },
    { 
        id: 1, 
        icon: '💡', 
        name: 'El Estratega', 
        description: 'Gana puntos extra en Intervención gracias a su habilidad para planificar.' 
    },
    { 
        id: 2, 
        icon: '🤝', 
        name: 'El Mediador', 
        description: 'Obtiene una ventaja al elegir la Prioridad de Abordaje correcta.' 
    },
    { 
        id: 3, 
        icon: '❤️', 
        name: 'El Humanista', 
        description: 'Recibe una segunda oportunidad si falla un caso por poco margen.' 
    }
];

// NOTA: Las imágenes para figuras contemporáneas y profesores son marcadores de posición.
// Debes reemplazarlas con fotos reales para las que tengas permiso de uso.
export const CELEBRATIONS: Celebration[] = [
    {
        name: 'Mary Richmond',
        message: '¡Estaría orgullosa de tu capacidad de diagnóstico!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mary_Ellen_Richmond_c._1910s.jpg/800px-Mary_Ellen_Richmond_c._1910s.jpg'
    },
    {
        name: 'Jane Addams',
        message: '¡Defendiendo la justicia social con su misma convicción!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Jane_Addams_-_Brady-Handy.jpg/800px-Jane_Addams_-_Brady-Handy.jpg'
    },
    {
        name: 'Teresa Matus',
        message: '¡Analizando la complejidad social como lo haría la profesora Matus!',
        imageUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=TeresaMatus&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=BrownDark&clotheType=BlazerShirt&clotheColor=PastelRed&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    },
    {
        name: 'Alfredo Carballeda',
        message: '¡Construyendo intervención en lo cotidiano, al estilo de Carballeda!',
        imageUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=AlfredoCarballeda&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=BeardLight&clotheType=BlazerShirt&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    },
    {
        name: 'El Profe Claudio',
        message: '¡Te felicita por tu excelente análisis del caso!',
        imageUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=ProfeClaudio&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=SilverGray&facialHairType=MoustacheMagnum&clotheType=ShirtVNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    },
    {
        name: 'La Profe Olga',
        message: '¡Aplaude tu compromiso y la rigurosidad de tu propuesta!',
        imageUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=ProfeOlga&topType=LongHairCurvy&accessoriesType=Prescription02&hairColor=Blonde&clotheType=BlazerShirt&clotheColor=PastelGreen&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    },
    {
        name: 'El Profe Luis',
        message: '¡"Un 7!" Excelente aplicación de la teoría a la práctica.',
        imageUrl: 'https://api.dicebear.com/8.x/avataaars/svg?seed=ProfeLuis&topType=ShortHairTheCaesar&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    }
];