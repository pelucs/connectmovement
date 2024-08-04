"use client"

import Image from "next/image";
import Link from "next/link";
import kit from "../assets/kit.jpg";

import { Dot } from "lucide-react";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { guests } from "@/utils/guests";
import { Countdown } from "@/components/countdown";
import { Subscribe } from "@/components/subscribe";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { ApolloClientProvider } from "@/lib/apollo";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header/>
      <Countdown/>

      <div>
        <div className="w-full md:h-screen p-5 md:p-20 flex flex-col items-center justify-center gap-8 
        bg-[url(/bg.png)] md:bg-center bg-cover">
          <div className="flex flex-col items-center text-lg md:text-2xl font-bold text-center">
            <span>
              20, 21 E 22 de Setembro
            </span>

            <span className="text-sm">
              Rua Aluísio Cunha Lima, 185 - Catolé - CG
            </span>
          </div>

          <h1 className="text-6xl md:text-[10rem] leading-[1.35] font-alt">
            Imitadores
          </h1>

          <p className="max-w-2xl text-center text-base md:text-xl leading-tight">
            Connect Conference 2024 é a Conferência de Jovens da Igreja Assembleia de Deus Vitória em Cristo. Esse ano com o 
            tema  “Imitadores” que buscar trazer a ideia de quem tem  sido influência em nossas vidas. Cristou ou Homens? 
            As coisas do Espírito ou as coisas da carne?
          </p>

          <div className="flex items-center gap-2 md:gap-10">
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
              asChild 
              size="lg"
              variant={"destructive"} 
              className="font-bold"
            >
              <a href="#inscricao">
                Ser Voluntário
              </a>
            </Button>
          </div>
        </div>

        {/* <div className="py-10 flex items-center flex-col justify-center gap-10">
          <h1 className="text-4xl font-alt text-center">
            Convidados
          </h1>

          <div className="px-5 grid grid-cols-1 md:grid-cols-4 gap-5">
            {guests.map(guest => (
              <a 
                target="_blank" 
                key={guest.name} 
                href={`https://www.instagram.com/${guest.instagram}`}
                className="border shadow rounded-xl overflow-hidden"
              >
                <Image 
                  src={guest.image} 
                  alt={guest.name}
                  className="md:w-[250px]"
                />
                
                <div className="py-4 px-5 space-y-5">
                  <div>
                    <h1 className="text-2xl font-alt">
                      {guest.name}
                    </h1>
                    
                    <span>{guest.other}</span>
                  </div>

                  <span className="py-2 px-4 flex items-center justify-center gap-1 text-white rounded-md bg-red-500">
                    <InstagramLogoIcon className="size-4"/>

                    Instagram
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div> */}

        <div id="inscricao" className="py-10 px-5 flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-alt text-center">
              Inscrições
            </h1>

            <div className="flex flex-col md:flex-row items-center md:gap-2">
              <h1>As inscrições terminam</h1>

              <span className="text-lg font-bold">
                7 DE SETEMBRO às 23h59
              </span>
            </div>
          </div>

          <div className="w-full max-w-5xl py-4 px-5 md:py-6 md:px-7 space-y-4 rounded-xl shadow border bg-zinc-50">
            <h1 className="text-xl font-bold">Avisos Importantes</h1>

            <div className="flex flex-col gap-5 text-lg">
              <span className="leading-tight">
                • O valor da inscrição para tornar-se voluntário e adquirir o kit volunteer é de <span className="underline text-red-500">R$70.00</span>;
              </span>

              <span className="leading-tight">
                • Os métodos de pagamento são; Pix, Crédito e Débito;
              </span>

              {/* <span className="leading-tight">
                • Chave pix para o pagamento da inscrição <span className="underline text-red-500">(83) 9606-4852</span>;
              </span> */}

              <span className="leading-tight">
                • Envie o comprovante de pagamento para o número <span className="underline text-red-500">(83) 9606-4852</span> (Guilherme);
              </span>
            </div>
          </div>

          <div className="w-full max-w-5xl flex flex-col-reverse md:grid md:grid-cols-2 gap-10 relative">
            <ApolloClientProvider>
              <Subscribe/>
            </ApolloClientProvider>

            <Image 
              src={kit} 
              alt="Kit de voluntários" 
              className="w-full max-w-lg md:sticky md:top-5 border rounded-2xl"
            />
          </div>
        </div>
      </div>

      <Footer/>
    </main>
  );
}
