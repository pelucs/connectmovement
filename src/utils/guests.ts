import lucas from "@/assets/lucas.png";
import carlos from "@/assets/carlos.png";
import clezio from "@/assets/clezio.png";
import thiago from "@/assets/thiago.png";
import { StaticImageData } from "next/image";

export const guests: { name: string, other: string, instagram: string, image: StaticImageData }[] = [
  {
    name: "Lucas França",
    other: "Pastor - Líder do connect nacional",
    instagram: "lucasfrance01",
    image: lucas
  },
  {
    name: "Carlos Júnior",
    other: "Pastor",
    instagram: "carlosjunior.oficial",
    image: carlos
  },
  {
    name: "Clézio de Araújo",
    other: "Pastor",
    instagram: "prcleziodearaujo",
    image: clezio
  },
  {
    name: "Thiago de Assis",
    other: "Pastor",
    instagram: "thiagodeassislofc",
    image: thiago
  },
]