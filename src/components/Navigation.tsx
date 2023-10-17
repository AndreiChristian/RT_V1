import Link from "next/link";

export default function Navigation() {
  return <nav
    className="
    box-border sticky p-4
    flex items-center justify-center gap-4
    border-b border-border
    "
  >
    <Link href={"/"}>RT</Link>
    <span className="flex-1"></span>
    <Link href={"/templates"}>Templates</Link>
  </nav>
}
