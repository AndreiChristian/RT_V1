import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { prisma } from "@/primsa";
import { MoreHorizontal } from "lucide-react";

export default async function Page() {

  const templates = await prisma.template.findMany({
    include: {
      colors: true,
      Purchase: true
    }
  })

  return <>
    <h1>Templates</h1>
    <Separator />

    <Table>
      <TableCaption>A list of all existing templates.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-center" >Purcahses</TableHead>
          <TableHead className="text-center" >Colors</TableHead>
          <TableHead className="text-center" >Price</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {templates.map(t => {
          return <TableRow>
            <TableCell className="font-medium">{t.id}</TableCell>
            <TableCell>{t.name}</TableCell>
            <TableCell>{t.description}</TableCell>
            <TableCell className="text-center" >{t.Purchase.length}</TableCell>
            <TableCell className="text-center" >{t.colors.length}</TableCell>
            <TableCell className="text-center" >{t.price}</TableCell>
            <TableCell className="flex items-center justify-center">
              <MoreHorizontal />
            </TableCell>
          </TableRow>
        })}
      </TableBody>
    </Table>
  </>
}
