import TopMenu from "@/components/ui/top-menu/TopMenu";
import { ReactNode } from "react";

export default function ShopLayout({
  children
}: {
  readonly children: ReactNode;
}) {
  return (
    <main className="min-h-screen ">
      <TopMenu />
      {children}
    </main>
  );
}
