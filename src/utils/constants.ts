import {
  Briefcase,
  CpuIcon,
  Drama,
  GraduationCap,
  Headset,
  Leaf,
  Scale,
  Stethoscope,
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
};

export type Category = keyof typeof CATEGORIES;