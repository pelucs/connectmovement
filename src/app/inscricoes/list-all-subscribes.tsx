"use client"

import { ptBR } from "date-fns/locale";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { useState } from "react";
import { ParseDepartment } from "@/helpers/parse-departments";
import { useGetAllSubscribesQuery } from "@/graphql/generated";
import { Table, 
  TableBody, 
  TableCell, 
  TableFooter, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { valueFormated } from "@/helpers/regular-expressions";

export function ListAllSubscribe() {

  const [search, setSearch] = useState<string>("");
  
  const { data } = useGetAllSubscribesQuery();

  if(!data || !data.subscribes) {
    return(
      <h1>Carregando!</h1>
    );
  }

  const filteredSubscribes = search.length > 0
  ? data.subscribes.filter(subs => (
    valueFormated(subs.name).includes(valueFormated(search))
    || valueFormated(subs.email).includes(valueFormated(search))
    || valueFormated(subs.phone.toString()).includes(valueFormated(search))
    || valueFormated(subs.age.toString()).includes(valueFormated(search))
    || valueFormated(subs.department).includes(valueFormated(search))
  ))
  : data.subscribes;

  return(
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Inscrições CC 2024</h1>

        <Input
          placeholder="Pesquise aqui"
          className="w-full max-w-80"
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="py-1 px-2 rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="whitespace-nowrap">Registro</TableHead>
              <TableHead className="whitespace-nowrap">Nome</TableHead>
              <TableHead className="whitespace-nowrap">Idade</TableHead>
              <TableHead className="whitespace-nowrap">Contato</TableHead>
              <TableHead className="whitespace-nowrap">Email</TableHead>
              <TableHead className="whitespace-nowrap">Membro da ADVEC</TableHead>
              <TableHead className="whitespace-nowrap">Está no central?</TableHead>
              <TableHead className="whitespace-nowrap">Departamentos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSubscribes.map(sub => (
              <TableRow key={sub.email}>
                <TableCell className="whitespace-nowrap">
                  {format(new Date(sub.createdAt), "dd' de 'MMM'", { locale: ptBR })}
                </TableCell>
                <TableCell className="whitespace-nowrap">{sub.name}</TableCell>
                <TableCell className="whitespace-nowrap">{sub.age}</TableCell>
                <TableCell className="whitespace-nowrap">{sub.phone}</TableCell>
                <TableCell className="whitespace-nowrap">{sub.email}</TableCell>
                <TableCell className="whitespace-nowrap">{sub.advecMember}</TableCell>
                <TableCell className="whitespace-nowrap">{sub.isInTheGroup}</TableCell>
                <TableCell className="whitespace-nowrap space-x-2">
                  {ParseDepartment(sub.department).map(department => (
                    <span 
                      key={department}
                      className="text-sm py-1 px-2 rounded bg-secondary"  
                    >
                      {department}
                    </span>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          
          <TableFooter className="bg-transparent">
            <TableRow>
              <TableCell>
                Total: {data.subscribes.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}