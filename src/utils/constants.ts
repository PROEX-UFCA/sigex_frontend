import {
  Briefcase,
  CpuIcon,
  Drama,
  GraduationCap,
  Headset,
  // Landmark,
  // Languages,
  Leaf,
  // Palette,
  Scale,
  // SportShoe,
  Stethoscope,
  // Users,
} from "lucide-react";

export const CATEGORIES = {
  Comunicação: {
    icon: Headset,
    backgroundColor: "bg-sky-100",
    textColor: "text-sky-600",
  },
  Cultura: {
    icon: Drama,
    backgroundColor: "bg-amber-100",
    textColor: "text-amber-600",
  },
  Justiça: {
    icon: Scale,
    backgroundColor: "bg-slate-300",
    textColor: "text-slate-700",
  },
  Educação: {
    icon: GraduationCap,
    backgroundColor: "bg-orange-100",
    textColor: "text-orange-600",
  },
  Ambiente: {
    icon: Leaf,
    backgroundColor: "bg-lime-100",
    textColor: "text-lime-600",
  },
  Saúde: {
    icon: Stethoscope,
    backgroundColor: "bg-fuchsia-200",
    textColor: "text-fuchsia-500",
  },
  Tecnologia: {
    icon: CpuIcon,
    backgroundColor: "bg-cyan-100",
    textColor: "text-cyan-600",
  },
  Trabalho: {
    icon: Briefcase,
    backgroundColor: "bg-orange-300",
    textColor: "text-amber-900",
  },
  // Esportes: {
  //   icon: SportShoe,
  //   backgroundColor: "bg-green-100",
  //   textColor: "text-green-600",
  // },
  // Sociedade: {
  //   icon: Users,
  //   backgroundColor: "bg-neutral-300",
  //   textColor: "text-neutral-600",
  // },
  // Idiomas: {
  //   icon: Languages,
  //   backgroundColor: "bg-blue-100",
  //   textColor: "text-blue-600",
  // },
  // Artes: {
  //   icon: Palette,
  //   backgroundColor: "bg-pink-100",
  //   textColor: "text-pink-600",
  // },
  // Patrimônio: {
  //   icon: Landmark,
  //   backgroundColor: "bg-indigo-400",
  //   textColor: "text-blue-950",
  // },
};
export type Category = keyof typeof CATEGORIES;