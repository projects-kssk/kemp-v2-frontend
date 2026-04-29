import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Sign in"
      description="Access your Kemp workspace."
      switchLabel="Do not have an account?"
      switchHref="/register"
      switchText="Create one"
    >
      <LoginForm />
    </AuthLayout>
  );
}
