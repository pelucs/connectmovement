import Image from "next/image";
import Link from "next/link";
import logotipo from "../assets/logotipo-connect.png";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Header() {
  return(
    <div className="w-full h-14 md:h-20 px-5 md:px-20 flex items-center justify-between border-b">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-muted-foreground">
          <Image 
            src={logotipo} 
            alt="Logo Connect Movement"
            className="w-[100px] md:w-[130px]"
          />
        </Link>

        <span className="hidden md:flex">
          ADVEC Campina Grande
        </span>
      </div>

      <div className="flex items-center gap-5">
        <nav className="hidden md:flex items-center gap-5">
          <Link href="">
            Sobre nós
          </Link>

          <Link href="">
            Convidados
          </Link>
        </nav>

        <Separator orientation="vertical" className="h-5"/>

        <Button 
          asChild
          size="sm"
          variant="destructive" 
          className="font-bold"
        >
          <a href="#inscricao">
            Ser Voluntário
          </a>
        </Button>
      </div>
    </div>
  );
}