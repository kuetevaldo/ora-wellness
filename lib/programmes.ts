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

export const padelProgrammes: OraProgramme[] = [
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

export const studioProgrammes: OraProgramme[] = [
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

export const pilatesProgrammes: OraProgramme[] = [
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

export const yogaProgrammes: OraProgramme[] = [
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

export const programmes = [
  ...padelProgrammes,
  ...pilatesProgrammes,
  ...yogaProgrammes,
  ...studioProgrammes,
];
