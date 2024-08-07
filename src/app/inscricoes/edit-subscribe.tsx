import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader, Pencil } from "lucide-react";
import { useForm } from "react-hook-form";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Dialog, 
  DialogClose, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogPortal, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { useUpdateSubscribeByIdMutation } from "@/graphql/generated";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  tshirtSize: z.string({ message: "Campo obrigatório" }),
  department: z.string({ message: "Campo obrigatório" }),
});

type FormTypes = z.infer<typeof formSchema>;

interface EditSubscribeProps {
  id: string;
  name: string;
  tshirtSize: string;
  department: string;
}

export function EditSubscribe({ id, name, department, tshirtSize }: EditSubscribeProps) {

  const [updateSubscribe, { loading }] = useUpdateSubscribeByIdMutation();

  const { handleSubmit, register } = useForm<FormTypes>({
    resolver: zodResolver(formSchema)
  });

  const formattedDepartment = JSON.parse(department).join(", ");

  const editSubscribe = async (data: FormTypes) => {
    // Converte a string de volta para um array, removendo espaços em branco
    const departmentArray = data.department.split(",").map(dep => dep.trim());

    // Converte o array de volta para uma string JSON
    const updatedDepartment = JSON.stringify(departmentArray);

    await updateSubscribe({
      variables: {
        id,
        tshirtSize: data.tshirtSize,
        department: updatedDepartment,
      }
    })
    .then(() => {
      toast({
        title: "Inscrição atualizada!"
      });

      setTimeout(() =>  window.location.reload(), 1700)
    })
    .catch(err => {
      console.log(err)
    })
  } 

  return(
    <Dialog>
      <Button 
        asChild
        size="icon"
        className="size-6"
      >
        <DialogTrigger>
          <Pencil className="size-4"/>
        </DialogTrigger>
      </Button>

      <DialogPortal>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Editar inscrição
            </DialogTitle>

            <DialogDescription>
              Inscrição de {name}
            </DialogDescription>
          </DialogHeader>

          <Separator/>

          <form onSubmit={handleSubmit(editSubscribe)} className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label>
                Qual será o tamanho da camiseta?
              </Label>

              <Input 
                {...register("tshirtSize")}
                defaultValue={tshirtSize}
                placeholder="Insira seu tamanho"
                className=""
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>
                Editar Departamento (Separados por vírgula)
              </Label>

              <Input 
                {...register("department")}
                defaultValue={formattedDepartment}
                placeholder="Insira o departamento a editar"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button 
                type="submit" 
                variant="destructive"
                disabled={loading}
                className="disabled:opacity-50"
              >
                {loading ? (
                  <Loader className="size-4 animate-spin"/>
                ) : (
                  "Salvar"
                )}
              </Button>

              <Button asChild variant="secondary" className="shadow">
                <DialogClose>
                  Cancelar
                </DialogClose>
              </Button>
            </div>
          </form>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}