import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function SideNav() {
  return <div className="h-full flex-shrink-0" >
    <ScrollArea >
      <h1>Links</h1>
      <Link href={'/admin/templates'}>Templates</Link>
      <br />
      <Link href={'/admin/templates/create'}>Create</Link>
    </ScrollArea>
  </div>
}
