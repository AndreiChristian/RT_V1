import { LayoutProps } from "../models/next_models";
import SideNav from "./_components/SideNav";
import AdminNavbar from "./_components/NavBar";

export default function Layout({ children }: LayoutProps) {
  return <>
    <AdminNavbar />
    <main className="
    box-border m-4
    flex justify-between items-center gap-4
    " >
      <SideNav />
      <section className="
      box-border m-4 min-h-screen flex-1
      " >
        {children}
      </section>
    </main>
  </>
}
