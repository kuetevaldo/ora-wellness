export type ProgrammeCategory = "padel" | "studio";

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

export const programmeEnquiryPhone = {
  display: "+237 6 97 00 90 75",
  href: "tel:+237697009075",
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

export const programmes = [...padelProgrammes, ...studioProgrammes];
