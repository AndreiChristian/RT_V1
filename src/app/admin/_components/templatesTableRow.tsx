"use client";

import {
  TableCell,
  TableRow,
} from "@/components/ui/table"
import TemplatesTableDrowdownMenu from "./templateTableDropdownMenu";

export default function TemplatesTablesRow({ t }: any) {
  return (
    <TableRow>
      <TableCell className="font-medium">{t.id}</TableCell>
      <TableCell>{t.name}</TableCell>
      <TableCell>{t.description}</TableCell>
      <TableCell className="text-center" >{t.Purchase.length}</TableCell>
      <TableCell className="text-center" >{t.colors.length}</TableCell>
      <TableCell className="text-center" >{t.price}</TableCell>
      <TableCell className="flex items-center justify-center">
        <TemplatesTableDrowdownMenu />
      </TableCell>
    </TableRow>

  )
}
