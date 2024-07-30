import { Button } from "./ui/button";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

import logoConnect from "../assets/logotipo-connect.png";
import logoAdvec from "../assets/logo-advec.png";
import logoAnoDeServir from "../assets/logo-ano-de-servir.png";
import Image from "next/image";

export function Footer() {
  return(
    <div className="w-full py-20 border-t flex flex-col items-center gap-10">
      <div className="flex items-center gap-10">
        <Image src={logoAdvec} alt="" className="w-[140px]"/>
        <Image src={logoConnect} alt="" className="w-[120px]"/>
        <Image src={logoAnoDeServir} alt="" className="w-[120px]"/>
      </div>

      <nav className="flex items-center gap-4">
        <Button
          asChild
          size="sm"
          variant="destructive"
          className="gap-1"
        >
          <a 
            target="_blank"
            href="https://www.instagram.com/connect.campinagrande/" 
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
            href="https://www.instagram.com/advec_campinagrande/" 
          >
            <InstagramLogoIcon className="size-5"/>
            
            ADVEC Campina Grande
          </a>
        </Button>
      </nav>

      <h1 className="text-muted-foreground">
        &copy;2024 - Connect Movement, Campina Grande
      </h1>
    </div>
  );
}