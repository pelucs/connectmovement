import Image from "next/image";
import Link from "next/link";
import logotipo from "../assets/logotipo-connect.png";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Header() {
  return(
    <div 
      className="w-full max-w-[90%] h-14 md:h-20 px-5 md:px-20 flex items-center z-50
      justify-between fixed top-5 left-1/2 -translate-x-1/2 bg-purple-500/50 backdrop-blur-sm rounded-2xl"
    >
      <div className="flex items-center gap-5">
        <Link href="/" className="text-muted-foreground">
          <Image 
            src={logotipo} 
            alt="Logo Connect Movement"
            className="w-[100px] md:w-[130px]"
          />
        </Link>

        <span className="hidden md:flex text-white">
          ADVEC Malvinas
        </span>
      </div>

      <div className="flex items-center gap-5">
        <Separator orientation="vertical" className="h-5"/>

        <Button 
          asChild
          size="sm"
          className="font-bold bg-secondary hover:bg-zinc-400 text-black"
        >
          <a href="#inscricao">
            Ser Voluntário
          </a>
        </Button>
      </div>
    </div>
  );
}