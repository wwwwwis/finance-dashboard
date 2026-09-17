import { AuthForm } from "@/components/auth/auth-form";
import { signUp } from "@/lib/auth/actions";

export default function SignupPage() {
  return <AuthForm mode="signup" action={signUp} />;
}
