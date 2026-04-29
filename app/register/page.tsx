import { AuthLayout } from "@/components/auth/AuthLayout";
import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create account"
      description="Set up your Kemp workspace access."
      switchLabel="Already have an account?"
      switchHref="/login"
      switchText="Sign in"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
