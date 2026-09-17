import { AuthForm } from "@/components/auth/auth-form";
import { signIn } from "@/lib/auth/actions";

export default function LoginPage() {
  return <AuthForm mode="login" action={signIn} />;
}
