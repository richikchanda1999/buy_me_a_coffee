import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import UserForm from "./UserForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20">
      <Avatar className="rounded-4xl size-24">
        <AvatarImage src="https://ui-avatars.com/api/?name=Alex+Taylor" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-semibold text-xl">Alex</h1>
        <h2>Support Alex with Coffee</h2>
      </div>

      <UserForm />
    </div>
  );
}
