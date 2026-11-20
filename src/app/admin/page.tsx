import type { Metadata } from "next";
import AdminConsole from "./AdminConsole";

export const metadata: Metadata = {
  title: "Admin Dashboard | LARA Swim School",
  description: "LARA Swim School administration dashboard preview.",
};

export default function AdminPage() {
  return <AdminConsole />;
}
