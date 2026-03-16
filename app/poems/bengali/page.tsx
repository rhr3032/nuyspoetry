import { redirect } from "next/navigation";

export default function BengaliPoemsRedirectPage() {
  redirect("/writings?type=bangla");
}
