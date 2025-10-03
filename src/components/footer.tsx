import { Button } from "./ui/button";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

import Image from "next/image";
import logoConnect from "../assets/logotipo-connect.png";
import logoAdvec from "../assets/logo-advec.png";
import footer from "../assets/footer.png";

export function Footer() {
  return(
    <div className="w-full pt-20 pb-5 px-5 border-t flex flex-col items-center gap-5 bg-[url(/bg.png)] bg-center">
      <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10">
        <Image src={logoAdvec} alt="" className="w-[140px]"/>
      </div>

      <nav className="flex flex-col md:flex-row items-center gap-2 px-5">
        <Button
          asChild
          size="sm"
          className="w-48 gap-1 bg-gradient-to-tr from-orange-400 to-purple-400"
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
          className="w-48 gap-1 bg-gradient-to-tr from-orange-400 to-purple-400"
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

      <h1 className="text-background">
        &copy;2024 - Connect Movement, Malvinas
      </h1>

      <Image width={1024} height={500} className="w-full max-w-5xl" src="/title.gif" alt="Título"/>
    </div>
  );
}