"use client"

import { z } from "zod";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { dateSubscribe } from "@/constants/date-subscribe";


const formSchema = z.object({
  name: z.string({ message: "Campo obrigatório" }).min(4),
  age: z.coerce.number({ message: "Campo obrigatório" }),
  phone: z.coerce.number({ message: "Campo obrigatório" }),
  email: z.string({ message: "Campo obrigatório" }).email(),
  advecMember: z.string({ message: "Campo obrigatório" }),
  isInTheGroup: z.string({ message: "Campo obrigatório" }),
  department: z.string({ message: "Campo obrigatório" }),
});

type FormTypes = z.infer<typeof formSchema>;

export function Subscribe() {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isExpired, setIsExpired] = useState<boolean>(false);

  useEffect(() => {
    const now = new Date().getTime();
    const dateExpired = new Date(dateSubscribe).getTime();

    if(dateExpired < now) {
      setIsExpired(true);
    }
  }, []);

  const form = useForm<FormTypes>({
    resolver: zodResolver(formSchema)
  });

  const sendSubscribe = async (data: FormTypes) => {
    console.log(data)
  } 

  return(
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(sendSubscribe)} 
        className="w-full max-w-2xl py-6 px-7 space-y-4 rounded-xl shadow border bg-zinc-50"
      >
        <h1 className="text-xl font-bold">Preencha todos os campos corretamente</h1>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome completo</FormLabel>

              <FormControl>
                <Input 
                  {...field}
                  value={field.value ?? ''} 
                  className="" 
                  placeholder="Insira seu nome completo"
                />
              </FormControl>

              <FormMessage/>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Idade</FormLabel>

              <FormControl>
                <Input 
                  {...field}
                  type="number"
                  value={field.value ?? ''} 
                  className="" 
                  placeholder="Insira sua idade"
                />
              </FormControl>

              <FormMessage/>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contato</FormLabel>

              <FormControl>
                <Input 
                  {...field}
                  type="number"
                  value={field.value ?? ''} 
                  className="" 
                  placeholder="Insira seu contato (Whatsapp)"
                />
              </FormControl>

              <FormMessage/>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>

              <FormControl>
                <Input 
                  {...field}
                  value={field.value ?? ''} 
                  className="" 
                  placeholder="Insira seu email"
                />
              </FormControl>

              <FormMessage/>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="advecMember"
          render={({ field }) => (
            <FormItem>
              <FormLabel>É membro da ADVEC?</FormLabel>

              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  className="flex flex-col"
                >
                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <RadioGroupItem value="Sim"/>
                    </FormControl>
                      
                    <FormLabel className="relative -top-1">Sim</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <RadioGroupItem value="Não"/>
                    </FormControl>
                      
                    <FormLabel className="relative -top-1">Não</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isInTheGroup"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Já está no grupo do central no whatsapp?</FormLabel>

              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  className="flex flex-col"
                >
                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <RadioGroupItem value="Sim"/>
                    </FormControl>
                      
                    <FormLabel className="relative -top-1">Sim</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <RadioGroupItem value="Não"/>
                    </FormControl>
                      
                    <FormLabel className="relative -top-1">Não</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Qual departamento você gostaria de ser voluntário?</FormLabel>

              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  className="flex flex-col"
                >

                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <RadioGroupItem value="Producao"/>
                    </FormControl>
                      
                    <FormLabel className="relative -top-1">Produção</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <RadioGroupItem value="UNA"/>
                    </FormControl>
                      
                    <FormLabel className="relative -top-1">UNA</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <RadioGroupItem value="Creative"/>
                    </FormControl>
                      
                    <FormLabel className="relative -top-1">Creative</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <RadioGroupItem value="Theater"/>
                    </FormControl>
                      
                    <FormLabel className="relative -top-1">Theater (Teatro)</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <RadioGroupItem value="Dance"/>
                    </FormControl>
                      
                    <FormLabel className="relative -top-1">Dance</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <RadioGroupItem value="Welcome"/>
                    </FormControl>
                      
                    <FormLabel className="relative -top-1">Welcome</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />

        <div>
          {isExpired ? (
            <div className="w-full h-10 flex items-center justify-center text-white bg-red-500 rounded">
              Inscrições encerradas!
            </div>
          ) : (
            <Button
              size="lg"
              type="submit"
              disabled={isLoading}
              variant="destructive"
              className={cn("w-full font-bold gap-2", {
                "opacity-100": !isLoading,
                "opacity-50": isLoading
              })}
            >
              {isLoading ? (
                <Loader className="size-4 animate-spin"/>
              ) : (
                <>
                  Enviar Inscrição

                  <ArrowRight className="size-4"/>
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}