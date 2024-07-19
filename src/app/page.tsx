import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { Countdown } from "@/components/countdown";
import { Subscribe } from "@/components/subscribe";

import Image from "next/image";
import kit from "../assets/kit.png";
import { Dot } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header/>
      <Countdown/>

      <div>
        <div className="w-full h-screen p-20 flex flex-col items-center justify-center gap-8 bg-[url(/bg.png)] bg-center bg-cover">
          <div className="flex flex-col items-center uppercase text-2xl font-bold">
            <span>
              20, 21 E 22 de Setembro
            </span>

            <span>
              Rua Aluísio Cunha Lima, 185 - Catolé - Campina Grande
            </span>
          </div>

          <h1 className="text-[10rem] leading-[1.35] font-alt">
            Imitadores
          </h1>

          <p className="max-w-2xl text-center text-xl leading-tight">
            Connect Conference 2024 é a Conferência de Jovens da Igreja Assembleia de Deus Vitória em Cristo. Esse ano com o 
            tema  “Imitadores” que buscar trazer a ideia de quem tem  sido influência em nossas vidas. Cristou ou Homens? 
            As coisas do Espírito ou as coisas da carne?
          </p>

          <div className="flex items-center gap-10">
            <Button 
              asChild
              size={"lg"}
              variant={"secondary"} 
              className="font-bold shadow"
            >
              <a 
                target="_blank"
                href="https://www.google.com.br/maps/place/ADVEC+Campina+Grande/@-7.2374997,-35.882464,17z/data=!3m1!4b1!4m6!3m5!1s0x7ac1f65cc907857:0xee047d4724115cfd!8m2!3d-7.237505!4d-35.8798891!16s%2Fg%2F11h45lyhc7?entry=ttu" 
              >
                Como Chegar
              </a>
            </Button>

            <Button 
              size={"lg"}
              variant={"destructive"} 
              className="font-bold"
            >
              Ser Voluntário
            </Button>
          </div>
        </div>

        <div className="py-10 flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-alt text-center">
              Inscrições
            </h1>

            <div className="flex items-center gap-2">
              <h1>As inscrições terminam</h1>

              <span className="text-lg font-bold">
                19 DE AGOSTO às 23h59
              </span>
            </div>
          </div>

          <div className="w-full max-w-5xl py-6 px-7 space-y-4 rounded-xl shadow border bg-zinc-50">
            <h1 className="text-xl font-bold">Avisos Importantes</h1>

            <div className="text-lg">
              <span className="flex items-center gap-1">
                <Dot className="size-7"/>

                O valor da inscrição para tornar-se voluntário e adquirir o kit volunteer é de <span className="underline text-red-500">R$60.00</span>;
              </span>

              <span className="flex items-center gap-1">
                <Dot className="size-7"/>

                Os métodos de pagamento são; Pix, Crédito e Débito;
              </span>

              <span className="flex items-center gap-1">
                <Dot className="size-7"/>

                Envie o comprovante de pagamento para o número <span className="underline text-red-500">(83) 9606-4852</span> (Guilherme);
              </span>
            </div>
          </div>

          <div className="w-full max-w-5xl grid grid-cols-2 gap-10 relative">
            <Subscribe/>
            <Image 
              src={kit} 
              alt="Kit de voluntários" 
              className="w-full max-w-lg sticky top-5 rounded-2xl"
            />
          </div>
        </div>
      </div>

      <Footer/>
    </main>
  );
}
