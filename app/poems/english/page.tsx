import { redirect } from "next/navigation";

export default function EnglishPoemsRedirectPage() {
  redirect("/writings?type=english");
}
