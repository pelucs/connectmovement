"use client"

import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { Checkbox } from "./ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { departments } from "@/utils/departments";
import { finalDateSubscribe } from "@/constants/date-subscribe";
import { ArrowRight, Loader } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "./ui/form";
import { toast } from "./ui/use-toast";
import { isPast } from "date-fns";
import { useCreateSubscribeMutation } from "@/graphql/generated";

const formSchema = z.object({
  name: z.string({ message: "Campo obrigatório" }).min(4),
  age: z.coerce.number({ message: "Campo obrigatório" }).min(18, { message: "Você deve ter no mínimo 18 anos de idade" }),
  phone: z.coerce.number({ message: "Campo obrigatório" }),
  email: z.string({ message: "Campo obrigatório" }).email(),
  advecMember: z.string({ message: "Campo obrigatório" }),
  isInTheGroup: z.string({ message: "Campo obrigatório" }),
  tshirtSize: z.string({ message: "Campo obrigatório" }),
  department: z.array(z.string())
  .refine((value) => value.length >= 1 && value.length <= 2, {
    message: "Você deve selecionar pelo menos um departamento.",
  }),
});

type FormTypes = z.infer<typeof formSchema>;

export function Subscribe() {

  const [createSubscribe, { loading }] = useCreateSubscribeMutation();

  const form = useForm<FormTypes>({
    resolver: zodResolver(formSchema)
  });

  const sendSubscribe = async (data: FormTypes) => {
    
    const { 
      name,
      age,
      email,
      phone,
      advecMember,
      tshirtSize,
      isInTheGroup,
      department,
    } = data;

    createSubscribe({
      variables: {
        name,
        age,
        email,
        phone,
        advecMember,
        tshirtSize,
        isInTheGroup,
        department: JSON.stringify(department)
      }
    })
    .then(() => {
      toast({
        title: "Sua inscrição foi registrada!"
      });

      setTimeout(() =>  window.location.reload(), 1700)
    })
    .catch(err => {
      console.log(err)
    })
  } 

  return(
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(sendSubscribe)} 
        className="w-full max-w-2xl py-4 px-5 md:py-6 md:px-7 space-y-4 rounded-xl shadow border bg-zinc-50"
      >
        <h1 className="text-xl font-bold leading-none">Preencha todos os campos corretamente</h1>

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
          name="tshirtSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Qual será o tamanho da sua camiseta?</FormLabel>

              <FormControl>
                <Input 
                  {...field}
                  value={field.value ?? ''} 
                  className="" 
                  placeholder="Insira seu tamanho"
                />
              </FormControl>

              <FormMessage/>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="department"
          render={() => (
            <FormItem>
              <div>
                <FormLabel>Qual/Quais departamento(s) você gostaria de ser voluntário?</FormLabel>

                <FormDescription>
                  Você pode servir no mínimo um e no máximo dois departamentos.
                </FormDescription>
              </div>

              {departments.map(department => (
                <FormField
                  name="department"
                  key={department.id}
                  control={form.control}
                  render={({ field }) => {
                    const value = field.value || [];

                    return (
                      <FormItem 
                        key={department.id} 
                        className="flex items-center gap-2"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(department.id)}
                            disabled={!value.includes(department.id) && value.length >= 2}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...value, department.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== department.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>

                        <FormLabel className="relative -top-1 cursor-pointer">
                          {department.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
            </FormItem>
          )}
        />

        <div>
          {isPast(finalDateSubscribe) ? (
            <div className="w-full h-10 flex items-center justify-center text-white bg-red-500 rounded">
              Inscrições encerradas!
            </div>
          ) : (
            <Button
              size="lg"
              type="submit"
              disabled={loading}
              variant="destructive"
              className="w-full font-bold gap-2 disabled:opacity-50"
            >
              {loading ? (
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