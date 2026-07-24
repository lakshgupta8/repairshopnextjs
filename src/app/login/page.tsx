import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="flex flex-col justify-center items-center gap-6 h-dvh">
      <h1 className="font-semibold text-3xl">LoginPage</h1>
      <LoginLink>
        <Button variant="outline">Login</Button>
      </LoginLink>
      <RegisterLink>
        <Button>Register</Button>
      </RegisterLink>
    </main>
  );
}
