"use client";

import { ptBR } from "date-fns/locale";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { ParseDepartment } from "@/helpers/parse-departments";
import { useGetAllSubscribesQuery } from "@/graphql/generated";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableFooter, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { valueFormated } from "@/helpers/regular-expressions";
import { Button } from "@/components/ui/button";

export function ListAllSubscribe() {
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [allSubscribes, setAllSubscribes] = useState<any[]>([]);
  const itemsPerPage = 100;

  const { data } = useGetAllSubscribesQuery();

  useEffect(() => {
    if (data && data.subscribes) {
      setAllSubscribes(data.subscribes);
    }
  }, [data]);

  useEffect(() => {
    if (currentPage > Math.ceil(allSubscribes.length / itemsPerPage) && data && data.secondBatch) {
      setAllSubscribes(prev => [...prev, ...data.secondBatch]);
    }
  }, [currentPage, data]);

  if (!data || !allSubscribes.length) {
    return <h1>Carregando!</h1>;
  }

  const sortedSubscribes = [...allSubscribes].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const filteredSubscribes = search.length > 0
    ? sortedSubscribes.filter(subs => {
        const formattedSearch = valueFormated(search);

        return (
          valueFormated(subs.name).includes(formattedSearch) ||
          valueFormated(subs.email).includes(formattedSearch) ||
          valueFormated(subs.phone.toString()).includes(formattedSearch) ||
          valueFormated(subs.age.toString()).includes(formattedSearch) ||
          JSON.parse(subs.department).some((dep: any) => valueFormated(dep).includes(formattedSearch))
        );
      })
    : sortedSubscribes;

  const totalPages = Math.ceil(filteredSubscribes.length / itemsPerPage);
  const paginatedSubscribes = filteredSubscribes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
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
              <TableHead className="whitespace-nowrap">Tam. camiseta</TableHead>
              <TableHead className="whitespace-nowrap">Departamentos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedSubscribes.map(sub => (
              <TableRow key={sub.id}>
                <TableCell className="whitespace-nowrap">
                  {format(new Date(sub.createdAt), "dd' de 'MMM'", { locale: ptBR })}
                </TableCell>
                <TableCell className="whitespace-nowrap">{sub.name}</TableCell>
                <TableCell className="whitespace-nowrap">{sub.tshirtSize}</TableCell>
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
              <TableCell colSpan={4} className="text-center">
                <div className="flex justify-between items-center">
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="disabled:opacity-50"
                  >
                    Anterior
                  </Button>

                  <span>
                    Página {currentPage} de {totalPages} - {filteredSubscribes.length} inscrições
                  </span>

                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages && !data.secondBatch}
                    className="disabled:opacity-50"
                  >
                    Próxima
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
