"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { AuthSubmitButton } from "./AuthSubmitButton";
import { AuthTextField } from "./AuthTextField";
import { authClient } from "@/lib/auth-client";

export function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? "");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    const { error: signUpError } = await authClient.signUp.email({
      name,
      email,
      password,
    });

    setIsSubmitting(false);

    if (signUpError) {
      setError(signUpError.message ?? "Unable to create account.");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <AuthTextField
        id="name"
        label="Name"
        placeholder="Your name"
        autoComplete="name"
      />
      <AuthTextField
        id="email"
        label="Email"
        type="email"
        placeholder="name@company.com"
        autoComplete="email"
      />
      <AuthTextField
        id="password"
        label="Password"
        type="password"
        placeholder="Create a password"
        autoComplete="new-password"
      />
      <AuthTextField
        id="confirmPassword"
        label="Confirm password"
        type="password"
        placeholder="Repeat your password"
        autoComplete="new-password"
      />

      {error && (
        <p className="rounded-lg border border-accent-danger/40 bg-accent-danger/10 px-3 py-2 text-sm text-accent-danger">
          {error}
        </p>
      )}

      <AuthSubmitButton disabled={isSubmitting}>
        {isSubmitting ? "Creating account..." : "Create account"}
      </AuthSubmitButton>
    </form>
  );
}
