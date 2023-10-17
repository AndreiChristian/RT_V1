import Navigation from "@/components/Navigation";
import { LayoutProps } from "../models/next_models";

export default function Layout({ children }: LayoutProps) {
  return <>
    <Navigation />
    {children}
  </>
}
