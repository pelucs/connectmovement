import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Loader, Pencil, Trash } from "lucide-react";
import { useDeleteSubscribeByIdMutation, useUpdateSubscribeByIdMutation } from "@/graphql/generated";
import { 
  Dialog, 
  DialogClose, 
  DialogContent,
  DialogPortal, 
  DialogTrigger 
} from "@/components/ui/dialog";

interface DeleteSubscribeProps {
  id: string;
  name: string;
}

export function DeleteSubscribe({ id, name }: DeleteSubscribeProps) {

  const [deleteSubscribeById, { loading }] = useDeleteSubscribeByIdMutation();

  const deleteSubscribe = async () => {
    
    await deleteSubscribeById({
      variables: {
        id,
      }
    })
    .then(() => {
      toast({
        title: "Inscrição deletada!"
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
        variant="destructive"
      >
        <DialogTrigger>
          <Trash className="size-4"/>
        </DialogTrigger>
      </Button>

      <DialogPortal>
        <DialogContent>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">
              Excluir inscrição de {name.split(" ")[0]}?
            </h1>

            <div className="grid grid-cols-2 gap-4">
              <Button 
                disabled={loading}
                variant="destructive"
                onClick={deleteSubscribe} 
                className="disabled:opacity-50"
              >
                {loading ? (
                  <Loader className="size-4 animate-spin"/>
                ) : (
                  "Excluir"
                )}
              </Button>

              <Button asChild variant="secondary" className="shadow">
                <DialogClose>
                  Cancelar
                </DialogClose>
              </Button>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}