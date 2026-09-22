export type ProgrammeCategory = "padel" | "pilates" | "yoga" | "studio";

export type ProgrammeScheduleEntry = {
  group: string;
  age: string;
  day: string;
  time: string;
};

export type OraProgramme = {
  id: string;
  category: ProgrammeCategory;
  eyebrow: string;
  title: string;
  description: string;
  status: string;
  availabilityNote: string;
  href: string;
  schedule: ProgrammeScheduleEntry[];
};

export const padelProgrammesEn: OraProgramme[] = [
  {
    id: "adult-padel-academy",
    category: "padel",
    eyebrow: "Adult programme",
    title: "Adult Padel Academy",
    description:
      "A regular training rhythm for adults who want to develop their game with guided court time.",
    status: "Published academy timetable",
    availabilityNote:
      "Places and session dates can change. Confirm availability with ORA before visiting.",
    href: "/experiences/padel",
    schedule: [
      {
        group: "Adult academy",
        age: "Adults",
        day: "Monday & Friday",
        time: "17:00–18:30",
      },
    ],
  },
  {
    id: "kids-padel-academy",
    category: "padel",
    eyebrow: "Youth programme",
    title: "Kids Padel Academy",
    description:
      "Age-based groups give younger players an appropriate weekly entry point into Padel.",
    status: "Published academy timetable",
    availabilityNote:
      "Places and session dates can change. Confirm the appropriate group with ORA before visiting.",
    href: "/experiences/padel",
    schedule: [
      {
        group: "Mini",
        age: "4–6 years",
        day: "Monday",
        time: "16:00–17:00",
      },
      {
        group: "Junior",
        age: "7–9 years",
        day: "Tuesday and/or Thursday",
        time: "17:00–18:00",
      },
      {
        group: "Youth",
        age: "10–13 years",
        day: "Friday",
        time: "16:00–17:00",
      },
    ],
  },
];

export const padelProgrammesFr: OraProgramme[] = [
  {
    id: "adult-padel-academy",
    category: "padel",
    eyebrow: "Programme adulte",
    title: "Académie Padel Adultes",
    description:
      "Un rythme d'entraînement régulier pour les adultes souhaitant progresser sur le court avec un coaching dédié.",
    status: "Planning de l'académie publié",
    availabilityNote:
      "Les places et dates de séances peuvent varier. Confirmez la disponibilité auprès d'ORA avant votre visite.",
    href: "/experiences/padel",
    schedule: [
      {
        group: "Académie adultes",
        age: "Adultes",
        day: "Lundi & vendredi",
        time: "17h00–18h30",
      },
    ],
  },
  {
    id: "kids-padel-academy",
    category: "padel",
    eyebrow: "Programme jeunesse",
    title: "Académie Padel Enfants",
    description:
      "Des groupes par tranche d'âge pour faire découvrir le Padel aux plus jeunes chaque semaine.",
    status: "Planning de l'académie publié",
    availabilityNote:
      "Les places et dates de séances peuvent varier. Confirmez le groupe adapté auprès d'ORA avant votre visite.",
    href: "/experiences/padel",
    schedule: [
      {
        group: "Mini",
        age: "4–6 ans",
        day: "Lundi",
        time: "16h00–17h00",
      },
      {
        group: "Junior",
        age: "7–9 ans",
        day: "Mardi et/ou jeudi",
        time: "17h00–18h00",
      },
      {
        group: "Jeunes",
        age: "10–13 ans",
        day: "Vendredi",
        time: "16h00–17h00",
      },
    ],
  },
];

export const studioProgrammesEn: OraProgramme[] = [
  {
    id: "dance-academy-2026-2027",
    category: "studio",
    eyebrow: "2026/27 registrations",
    title: "Dance Academy",
    description:
      "A progressive dance programme for children aged 2 to 11, organised into age-appropriate groups.",
    status: "2026/27 registrations announced",
    availabilityNote:
      "Registration and class capacity can change. Confirm availability with ORA before attending.",
    href: "/experiences/studio",
    schedule: [
      {
        group: "Dance group",
        age: "2–4 years",
        day: "Monday",
        time: "16:00",
      },
      {
        group: "Dance group",
        age: "4–6 years",
        day: "Wednesday",
        time: "16:00",
      },
      {
        group: "Dance group",
        age: "7–9 years",
        day: "Wednesday & Friday",
        time: "17:00",
      },
      {
        group: "Dance group",
        age: "9–11 years",
        day: "Saturday",
        time: "09:00",
      },
    ],
  },
];

export const studioProgrammesFr: OraProgramme[] = [
  {
    id: "dance-academy-2026-2027",
    category: "studio",
    eyebrow: "Inscriptions 2026/27",
    title: "Académie de Danse",
    description:
      "Un programme de danse progressif pour les enfants de 2 à 11 ans, répartis en groupes d'âge adaptés.",
    status: "Inscriptions 2026/27 ouvertes",
    availabilityNote:
      "Les inscriptions et la capacité des cours peuvent varier. Confirmez la disponibilité auprès d'ORA avant de venir.",
    href: "/experiences/studio",
    schedule: [
      {
        group: "Groupe danse",
        age: "2–4 ans",
        day: "Lundi",
        time: "16h00",
      },
      {
        group: "Groupe danse",
        age: "4–6 ans",
        day: "Mercredi",
        time: "16h00",
      },
      {
        group: "Groupe danse",
        age: "7–9 ans",
        day: "Mercredi & vendredi",
        time: "17h00",
      },
      {
        group: "Groupe danse",
        age: "9–11 ans",
        day: "Samedi",
        time: "09h00",
      },
    ],
  },
];

export const pilatesProgrammesEn: OraProgramme[] = [
  {
    id: "mat-pilates-and-stretching",
    category: "pilates",
    eyebrow: "Weekly movement",
    title: "Mat Pilates & Stretching",
    description:
      "Mat Pilates builds control and core strength, with a dedicated weekly stretching session for mobility and recovery.",
    status: "Published weekly timetable",
    availabilityNote:
      "Class capacity and times can change. Book your place with ORA before attending.",
    href: "/experiences/pilates",
    schedule: [
      {
        group: "Mat Pilates",
        age: "All levels",
        day: "Monday",
        time: "08:30",
      },
      {
        group: "Mat Pilates",
        age: "All levels",
        day: "Tuesday",
        time: "09:00",
      },
      {
        group: "Mat Pilates",
        age: "All levels",
        day: "Thursday",
        time: "18:00",
      },
      {
        group: "Stretching",
        age: "All levels",
        day: "Thursday",
        time: "19:15",
      },
    ],
  },
];

export const pilatesProgrammesFr: OraProgramme[] = [
  {
    id: "mat-pilates-and-stretching",
    category: "pilates",
    eyebrow: "Séances hebdomadaires",
    title: "Pilates au sol & Stretching",
    description:
      "Le Pilates au sol développe le contrôle et le centre du corps, complété par une séance de stretching hebdomadaire pour la mobilité.",
    status: "Planning hebdomadaire publié",
    availabilityNote:
      "La capacité des cours et les horaires peuvent varier. Réservez votre place auprès d'ORA avant de venir.",
    href: "/experiences/pilates",
    schedule: [
      {
        group: "Pilates au sol",
        age: "Tous niveaux",
        day: "Lundi",
        time: "08h30",
      },
      {
        group: "Pilates au sol",
        age: "Tous niveaux",
        day: "Mardi",
        time: "09h00",
      },
      {
        group: "Pilates au sol",
        age: "Tous niveaux",
        day: "Jeudi",
        time: "18h00",
      },
      {
        group: "Stretching",
        age: "Tous niveaux",
        day: "Jeudi",
        time: "19h15",
      },
    ],
  },
];

export const yogaProgrammesEn: OraProgramme[] = [
  {
    id: "weekly-yoga-with-despina",
    category: "yoga",
    eyebrow: "Weekly practice",
    title: "Yoga with Despina",
    description:
      "A welcoming weekly programme blending alignment, breathwork and relaxation across beginner-friendly, Vinyasa and mindful-flow sessions.",
    status: "Published weekly timetable",
    availabilityNote:
      "Class capacity and times can change. Confirm your place with ORA before attending.",
    href: "/experiences/yoga",
    schedule: [
      {
        group: "Beginner Friendly Yoga",
        age: "Beginner friendly",
        day: "Wednesday",
        time: "10:00",
      },
      {
        group: "Vinyasa Yoga",
        age: "All levels",
        day: "Friday",
        time: "18:30",
      },
      {
        group: "Mindful Flow",
        age: "All levels",
        day: "Saturday",
        time: "17:30",
      },
    ],
  },
];

export const yogaProgrammesFr: OraProgramme[] = [
  {
    id: "weekly-yoga-with-despina",
    category: "yoga",
    eyebrow: "Pratique hebdomadaire",
    title: "Yoga avec Despina",
    description:
      "Un programme complet mêlant alignement, respiration et relaxation à travers des cours accessibles à tous, Vinyasa et flow conscient.",
    status: "Planning hebdomadaire publié",
    availabilityNote:
      "La capacité des cours et les horaires peuvent varier. Confirmez votre place auprès d'ORA avant de venir.",
    href: "/experiences/yoga",
    schedule: [
      {
        group: "Yoga débutant",
        age: "Accessible à tous",
        day: "Mercredi",
        time: "10h00",
      },
      {
        group: "Vinyasa Yoga",
        age: "Tous niveaux",
        day: "Vendredi",
        time: "18h30",
      },
      {
        group: "Mindful Flow",
        age: "Tous niveaux",
        day: "Samedi",
        time: "17h30",
      },
    ],
  },
];

export const padelProgrammes = padelProgrammesEn;
export const studioProgrammes = studioProgrammesEn;
export const pilatesProgrammes = pilatesProgrammesEn;
export const yogaProgrammes = yogaProgrammesEn;

export const programmes = [
  ...padelProgrammes,
  ...pilatesProgrammes,
  ...yogaProgrammes,
  ...studioProgrammes,
];

export function getPadelProgrammes(locale: string = "en"): OraProgramme[] {
  return locale === "fr" ? padelProgrammesFr : padelProgrammesEn;
}

export function getStudioProgrammes(locale: string = "en"): OraProgramme[] {
  return locale === "fr" ? studioProgrammesFr : studioProgrammesEn;
}

export function getPilatesProgrammes(locale: string = "en"): OraProgramme[] {
  return locale === "fr" ? pilatesProgrammesFr : pilatesProgrammesEn;
}

export function getYogaProgrammes(locale: string = "en"): OraProgramme[] {
  return locale === "fr" ? yogaProgrammesFr : yogaProgrammesEn;
}

export function getProgrammes(locale: string = "en"): OraProgramme[] {
  return [
    ...getPadelProgrammes(locale),
    ...getPilatesProgrammes(locale),
    ...getYogaProgrammes(locale),
    ...getStudioProgrammes(locale),
  ];
}
