import { LayoutProps } from "../models/next_models";

export default function Layout({ children }: LayoutProps) {
  return <>
    {children}
    <h1>Here will be the floating bar for editing content</h1>
    <h2>Here will be the color picker</h2>
  </>
}
