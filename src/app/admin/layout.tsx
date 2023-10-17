import { LayoutProps } from "../models/next_models";
import SideNav from "./_components/SideNav";

export default function Layout({ children }: LayoutProps) {
  return <main className="
    min-h-full box-border m-4
    flex justify-between items-center gap-4
    " >
    <SideNav />
    <section className="
      box-border m-4 min-h-screen flex-1
      " >
      {children}
    </section>
  </main>
}
