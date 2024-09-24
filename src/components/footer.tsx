import { Button } from "./ui/button";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

import logoConnect from "../assets/logotipo-connect.png";
import logoAdvec from "../assets/logo-advec.png";
import logoAnoDeServir from "../assets/logo-ano-de-servir.png";
import Image from "next/image";

export function Footer() {
  return(
    <div className="w-full py-20 border-t flex flex-col items-center gap-10">
      <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10">
        <Image src={logoAdvec} alt="" className="w-[140px]"/>
        <Image src={logoConnect} alt="" className="w-[120px]"/>
        <Image src={logoAnoDeServir} alt="" className="w-[120px]"/>
      </div>

      <nav className="flex flex-col md:flex-row items-center gap-2 px-5">
        <Button
          asChild
          size="sm"
          variant="destructive"
          className="gap-1"
        >
          <a 
            target="_blank"
            href="https://www.instagram.com/connect.malvinas/" 
          >
            <InstagramLogoIcon className="size-5"/>
            
            Connect Movement
          </a>
        </Button>

        <Button
          asChild
          size="sm"
          variant="destructive"
          className="gap-1"
        >
          <a 
            target="_blank"
            href="https://www.instagram.com/advec.malvinas/" 
          >
            <InstagramLogoIcon className="size-5"/>
            
            ADVEC Malvinas
          </a>
        </Button>
      </nav>

      <h1 className="text-muted-foreground">
        &copy;2024 - Connect Movement, Malvinas
      </h1>
    </div>
  );
}