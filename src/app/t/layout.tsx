import { LayoutProps } from "../models/next_models";
import EditingBar from "./_components/EditingBar";

export default function Layout({ children }: LayoutProps) {
  return <>
    {children}
    <EditingBar />
  </>
}
