import ColorBoard from "@/components/ColorBoard/ColorBoard";
import { LayoutProps } from "../_models/next_models";
import EditingBar from "./_components/EditingBar";

export default function Layout({ children }: LayoutProps) {
  return <>
    {children}
    <ColorBoard />
    <EditingBar />
    <h2>Here will be the color picker</h2>
  </>
}
