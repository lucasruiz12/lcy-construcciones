import KOB1 from '../assets/machines/KOB_01.jpg';
import KOB2 from '../assets/machines/KOB_02.jpg';

import NH1 from '../assets/machines/NEW_01.webp';

import VOL1 from '../assets/machines/VOL_01.jpg';

// ------------------------------

import CONSTA1 from '../assets/construction/A_01.jpg';
import CONSTA2 from '../assets/construction/A_02.jpg';
import CONSTB1 from '../assets/construction/B_01.jpg';
import CONSTB2 from '../assets/construction/B_02.jpg';
import CONSTC1 from '../assets/construction/C_01.jpg';
import CONSTC2 from '../assets/construction/C_02.jpg';
import CONSTC3 from '../assets/construction/C_03.jpg';

import ENGELEV1 from '../assets/engineering/ELEV_01.png';
import ENGPERCH1 from '../assets/engineering/Perch_01A.png';
import ENGRIP1 from '../assets/engineering/RIP_01.png';


export const aboutContent = [
    "<b>LCY Construcciones S.R.L.</b> es una empresa familiar con más de ocho años de trayectoria. Fundada en 2016, hemos crecido sobre la base del <b>compromiso, la calidad</b> y la <b>confianza</b> de nuestros clientes.",
    "Nos especializamos en el desarrollo de <b>obras civiles</b>, y brindamos también servicios de <b>alquiler de maquinaria</b> y <b>de ingeniería.</b>",
    "Nuestra misión es <b>ofrecer soluciones eficientes, seguras e innovadoras,</b> materializando proyectos con la <b>calidad</b> y el <b>profesionalismo</b> que nos caracterizan.",
];

export const constructionContent = [
    "En <b>LCY Construcciones</b>, desarrollamos <b>obras civiles de distintas escalas</b>, adaptándonos a cada proyecto. Desde grandes infraestructuras hasta construcciones más específicas, ofrecemos un servicio integral con compromiso, calidad y eficiencia en cada etapa.",
    // "Nuestro trabajo abarca un <b>amplio abanico de especialidades</b>, desarrollando proyectos de infraestructura tanto grandes como pequeños. Desde obras de gran envergadura, como <b>defensas para ríos</b>, hasta construcciones más específicas, como <b>canchas de pádel, galpones industriales, viviendas en construcción en seco y oficinas</b>, siempre adaptándonos a las necesidades de cada cliente.",
    // "Nuestro compromiso es ofrecer <b>calidad, seguridad y cumplimiento</b>, optimizando cada etapa del proceso constructivo para brindar resultados que superen las expectativas.",
];

export const machineContent = [
    "En <b>LCY</b>, ofrecemos un servicio de <b>alquiler de maquinaria</b> para distintos tipos de obras, junto con la opción de <b>movimiento de suelos</b>. Contamos con equipos versátiles y en excelente estado, adaptados a diversas necesidades."
];

export const machines = [
    {
        id: 1,
        name: "Retroexcavadora Kobelco SK55SRX-6",
        description: "Ideal para trabajos en terrenos sensibles donde se requiere <b>baja compactación y gran precisión</b>. Equipada con <b>hoyadora y martillo demoledor</b>, es perfecta para excavaciones en espacios reducidos, perforaciones y demoliciones controladas.",
        images: [KOB1, KOB2, KOB1],
    },
    {
        id: 2,
        name: "Retro Pala 4x4 New Holland B95B",
        description: "Un equipo <b>versátil y potente</b>, ideal para trabajos de excavación, carga y nivelación en todo tipo de terrenos. Gracias a sus <b>implementos de hoyadora y martillo demoledor</b>, es una excelente opción para proyectos de construcción y mantenimiento urbano.",
        images: [NH1, NH1, NH1],
    },
    {
        id: 3,
        name: "Retroexcavadora Volvo EC210DL",
        description: "Diseñada para enfrentar los terrenos más exigentes, esta máquina es perfecta para <b>movimientos de suelo de gran volumen</b> y excavaciones en condiciones extremas. Su tracción sobre orugas de acero le permite operar en superficies irregulares y de alta resistencia.",
        images: [VOL1, VOL1, VOL1],
    },
];

export const engineeringContent = [
    "Con nuestra división de ingeniería, en <b>LCY</b> ofrecemos un servicio especializado en <b>análisis estructural</b>  de piezas, conjuntos y sistemas mecánicos, acompañando a nuestros clientes en el desarrollo de nuevos productos.",
    // "A través del <b>modelado y simulación computacional con elementos finitos (FEM)</b>, evaluamos el comportamiento estructural de los diseños, verificamos su resistencia y proponemos mejoras para optimizar su desempeño. Nuestro enfoque permite reducir costos, mejorar la seguridad y aumentar la eficiencia de los productos antes de su fabricación.",
    "Nuestro equipo, con experiencia en sectores de alta exigencia como el <b>aeroespacial, nuclear y de la construcción</b>, emplea tácticas avanzadas de <b>modelado y simulación computacional (FEM)</b> para evaluar, verificar y optimizar el comportamiento estructural de cada diseño, mejorando así su eficiencia, seguridad y desempeño.",
];

export const sectionImages = {
    about: [],
    construction: [CONSTA1, CONSTA2, CONSTB1, CONSTB2, CONSTC1, CONSTC2, CONSTC3],
    machines: [],
    services: [ENGELEV1, ENGPERCH1, ENGRIP1],
}