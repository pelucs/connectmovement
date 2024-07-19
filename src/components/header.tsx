import Image from "next/image";
import Link from "next/link";
import logotipo from "../assets/logotipo-connect.png";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Header() {
  return(
    <div className="w-full h-20 px-20 flex items-center justify-between border-b">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-muted-foreground">
          <Image 
            src={logotipo} 
            alt="Logo Connect Movement"
            className="w-[130px]"
          />
        </Link>

        <span>
          ADVEC Campina Grande
        </span>
      </div>

      <div className="flex items-center gap-5">
        <nav className="flex items-center gap-5">
          <Link href="">
            Sobre nós
          </Link>

          <Link href="">
            Convidados
          </Link>
        </nav>

        <Separator orientation="vertical" className="h-5"/>

        <Button 
          variant={"destructive"} 
          className="font-bold"
        >
          Ser Voluntário
        </Button>
      </div>
    </div>
  );
}