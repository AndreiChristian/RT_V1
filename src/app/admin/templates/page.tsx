import H1 from "@/components/ui/HeaderOne";
import TemplatesTablesRow from "../_components/templatesTableRow";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { prisma } from "@/primsa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin"
}

export default async function Page() {

  const templates = await prisma.template.findMany({
    include: {
      colors: true,
      Purchase: true
    }
  })

  return <>
    <H1 text="Templates" />
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
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {templates.map(t => {
          return <TemplatesTablesRow t={t} />
        })}
      </TableBody>
    </Table>
  </>
}
