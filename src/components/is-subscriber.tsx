import { MoveUp } from "lucide-react";
import { Button } from "./ui/button";

export function IsSubscriber() {
  return(
    <div className="py-4 px-5 md:py-6 md:px-7 space-y-5 rounded-md border bg-zinc-50">
      <div>
        <h1 className="text-2xl font-bold leading-none">Formulário preenchido com sucesso!</h1>
        <p className="w-full max-w-80 text-muted-foreground">Entre em contato com o líder do seu departamento caso deseja alterar algo!</p>
      </div>
    
      <Button 
        className="mt-5 gap-1 bg-gradient-to-tr from-orange-400 to-purple-400"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }}
      >
        Voltar ao topo

        <MoveUp className="size-4"/>
      </Button>
    </div>
  );
}