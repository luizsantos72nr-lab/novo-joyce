import { ImageData, FeatureData, StepData } from './types';

export const EXPERT_INFO = {
  name: "Dra. Joyce Guimarães",
  role: "Cirurgiã-Dentista",
  cro: "CRO/MG-70293",
  address: "Estrada dos Macacos, Bairro São Francisco, nº 361 - Cláudio/MG",
  whatsappLink: "https://api.whatsapp.com/send/?phone=5537999630674&text&type=phone_number&app_absent=0&utm_source=ig",
  instagramLink: "https://www.instagram.com/dra.joyceeguimaraes/",
  specialties: [
    "Habilitada em sedação consciente com Óxido Nitroso",
    "Especializando em Ortodontia",
    "Atendimento Humanizado"
  ]
};

export const IMAGES: Record<string, string> = {
  hero: "https://i.imgur.com/on7mx53.png",
  about: "https://i.imgur.com/yW6Geep.png",
};

export const RESULTS_GALLERY: ImageData[] = [
  { src: "https://i.imgur.com/EOqK8vt.png", alt: "Resultado de tratamento dentário 1", category: 'result' },
  { src: "https://i.imgur.com/fIXbxkb.png", alt: "Resultado de tratamento dentário 2", category: 'result' },
  { src: "https://i.imgur.com/tmf0nVf.png", alt: "Resultado de tratamento dentário 3", category: 'result' },
  { src: "https://i.imgur.com/59BIz9K.png", alt: "Resultado de tratamento dentário 4", category: 'result' },
  { src: "https://i.imgur.com/P0xK4TY.png", alt: "Resultado de tratamento dentário 5", category: 'result' },
  { src: "https://i.imgur.com/opM8qXs.png", alt: "Resultado de tratamento dentário 6", category: 'result' },
  { src: "https://i.imgur.com/s6CIscX.png", alt: "Resultado de tratamento dentário 7", category: 'result' },
  { src: "https://i.imgur.com/62yJUIF.png", alt: "Resultado de tratamento dentário 8", category: 'result' },
  { src: "https://i.imgur.com/N78fqsE.png", alt: "Resultado de tratamento dentário 9", category: 'result' },
  { src: "https://i.imgur.com/SYD8wNk.png", alt: "Resultado de tratamento dentário 10", category: 'result' },
  { src: "https://i.imgur.com/yxduUrB.png", alt: "Resultado de tratamento dentário 11", category: 'result' },
  { src: "https://i.imgur.com/qcrWiWW.png", alt: "Resultado de tratamento dentário 12", category: 'result' },
  { src: "https://i.imgur.com/F008ZCK.png", alt: "Resultado de tratamento dentário 13", category: 'result' },
];

export const FEATURES: FeatureData[] = [
  {
    title: "Sedação Consciente",
    description: "Medo de dentista? Uso óxido nitroso para um tratamento relaxante e sem ansiedade.",
    iconName: "ShieldCheck"
  },
  {
    title: "Avaliação Honesta",
    description: "Sem tratamentos desnecessários. Te mostro exatamente o que você precisa.",
    iconName: "FileSearch"
  },
  {
    title: "Atendimento Pessoal",
    description: "Você será atendido por mim do início ao fim, não por auxiliares.",
    iconName: "UserCheck"
  },
  {
    title: "Tecnologia & Conforto",
    description: "Ambiente moderno pensado para o seu bem-estar durante todo o procedimento.",
    iconName: "Sparkles"
  }
];

export const STEPS: StepData[] = [
  {
    number: 1,
    title: "Toque no Botão",
    description: "Clique no botão do WhatsApp nesta página."
  },
  {
    number: 2,
    title: "Agende seu Horário",
    description: "Minha equipe vai encontrar o melhor horário para você vir ao consultório."
  },
  {
    number: 3,
    title: "Avaliação Gratuita",
    description: "Venha tomar um café, conhecer o espaço e descobrir como transformar seu sorriso."
  }
];