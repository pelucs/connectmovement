"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default () => {

  const [password, setPassword] = useState<string>("")

  return(
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-sm py-5 px-5 rounded-md flex flex-col gap-4 border">
        <h1 className="text-2xl font-bold leading-none">Acesso restrito</h1>
        
        <div className="w-full flex flex-col gap-2">
          <label>Senha</label>

          <input 
            type="password"
            placeholder="Insira a senha de acesso"
            onChange={e => setPassword(e.target.value)}
            className="py-3 px-4 rounded-md border bg-secondary shadow-md"
          />

        </div>

        <Button
          size="lg"
          variant="destructive"
          className="w-full font-bold gap-2 disabled:opacity-50"
          onClick={() => {
            if (password === "connect") {
              // Cria o cookie com o nome 'user_acess' e valor 'elevem'
              document.cookie = "user_acess=elevem; path=/; max-age=7776000"; // `max-age=86400` define o cookie para expirar em 1 dia (86400 segundos)
              
              window.location.reload();
            } else {
              alert("Senha incorreta");
            }
          }}
        >
          Entrar
        </Button>
      </div>
    </div>
  );
}