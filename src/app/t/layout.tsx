import { LayoutProps } from "../models/next_models";
import EditingBar from "./_components/EditingBar";

export default function Layout({ children }: LayoutProps) {
  return <>
    {children}
    <EditingBar />
    <h2>Here will be the color picker</h2>
  </>
}
