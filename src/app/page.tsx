"use client"

import Image from "next/image";
import title from "../../public/title.gif";
import kit from "../assets/kit.png";
import elipse from "../assets/elipse.png";

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
    <main className="min-h-screen relative">
      <Header/>

      <div className="z-10">
        <div className="w-full p-5 md:px-20 py-40 flex flex-col items-center justify-center gap-8 
        bg-[url(/bg.png)] bg-right md:bg-center bg-cover text-white">
          <div className="flex flex-col items-center gap-3 text-lg md:text-2xl font-bold text-center">
            <span>
              27 E 28 de Setembro
            </span>

            <Countdown/>
          </div>

          {/* <video
            src="/title.webm"
            className="w-full max-w-5xl"
            autoPlay
            muted
            loop
            playsInline
          /> */}

          <Image width={1024} height={500} className="w-full max-w-5xl" src="/title.gif" alt="Título"/>

          {/* <Image src={title} alt="" className="w-full max-w-5xl"/> */}

          <p className="max-w-2xl text-center text-sm md:text-xl leading-tight">
            A Connect Conference 2025 é a Conferência de Jovens da Igreja Assembleia de Deus Vitória em Cristo. 
            Em um ano marcado por crescimento, propósito e colheita, estamos nos preparando para viver dias que
            deixarão raízes profundas e frutos duradouros no nosso chamado.
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
                href="https://maps.app.goo.gl/xDWBCY1KcHmLE9Fv9" 
              >
                Como Chegar
              </a>
            </Button>

            <Button
              asChild 
              size="lg"
              className="font-bold bg-purple-500 hover:bg-purple-700"
            >
              <a href="#inscricao">
                Ser Voluntário
              </a>
            </Button>
          </div>
        </div>

        <div className="py-20 flex items-center flex-col justify-center gap-14 bg-[#FAF4DC]">
          <div className="flex flex-col items-center gap-2">
            <Image 
              src={elipse} 
              alt="elipse"
              className="w-[100px]"
            />

            <h1 className="text-4xl font-varien text-center">
              Convidados
            </h1>
          </div>

          <div className="px-5 grid grid-cols-1 md:grid-cols-2 gap-10">
            {guests.map((guest, i) => (
              <a
                key={i}
                target="_blank"
                href={`https://www.instagram.com/${guest.instagram}`}
                className="border shadow rounded-2xl overflow-hidden"
              >
                <Image 
                  src={guest.image} 
                  alt={guest.instagram}
                  className="md:w-[450px]"
                />
              </a>
            ))}
          </div>
        </div>

        <div id="inscricao" className="py-20 px-5 flex flex-col items-center gap-10 bg-gradient-to-tr from-orange-300 to-purple-300">
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col items-center gap-2">
              <Image 
                src={elipse} 
                alt="elipse"
                className="w-[100px]"
              />

              <h1 className="text-4xl font-varien text-center">
                Inscrições
              </h1>
            </div>

            <div className="flex flex-col md:flex-row items-center md:gap-2">
              <h1>As inscrições terminam</h1>

              <span className="text-lg font-bold">
                07 de Setembro às 23h59
              </span>
            </div>
          </div>

          <div className="w-full max-w-5xl py-4 px-5 md:py-6 md:px-7 space-y-4 rounded-xl border bg-zinc-50">
            <h1 className="text-xl font-bold">Avisos Importantes</h1>

            <div className="flex flex-col gap-5 text-lg">
              <span className="leading-tight">
                • O valor da inscrição para tornar-se voluntário e adquirir o kit volunteer é de <span className="underline text-orange-500">R$85.00</span>;
              </span>

              <span className="leading-tight">
                • Os métodos de pagamento são; Pix, Crédito ou Débito;
              </span>

              <span className="leading-tight">
                • Chave pix para o pagamento da inscrição <span className="underline text-orange-500">guilhermehp17@gmail.com</span>;
              </span>

              <span className="leading-tight">
                • Envie o comprovante de pagamento para o número <a target="_blank" href="https://wa.me/558396064852" className="underline text-orange-500">83 9606-4852</a> (Guilherme Pereira);
              </span>

              <span className="leading-tight">
                • Inscrição só é confirmada mediante pagamento. Após o pagamento confirmado você será adicionado ao grupo dos voluntários.
              </span>
            </div>
          </div>

          {/* <div className="w-full max-w-5xl flex flex-col-reverse md:grid md:grid-cols-2 gap-10 relative">
            <ApolloClientProvider>
              <Subscribe/>
            </ApolloClientProvider>

            <Image 
              src={kit} 
              alt="Kit de voluntários" 
              className="w-full max-w-lg md:sticky md:top-5 rounded-2xl"
            />
          </div> */}

          <ApolloClientProvider>
            <Subscribe/>
          </ApolloClientProvider>
        </div>
      </div>

      <Footer/>
    </main>
  );
}
