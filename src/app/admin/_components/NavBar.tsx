import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function AdminNavbar() {
  return <nav
    className="
    sticky z-10 bg-background top-0 bottom-0 flex items-center justify-center box-border gap-4 p-4 
    border-b border-b-border h-14
    "
  >
    <Link href={'/'} >Home</Link>
    <span className="flex-1"></span>
    <Link href={'/templates'} >Templates</Link>
    <ModeToggle />
  </nav>
}
