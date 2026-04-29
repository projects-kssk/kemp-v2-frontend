"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { AuthSubmitButton } from "./AuthSubmitButton";
import { AuthTextField } from "./AuthTextField";
import { authClient } from "@/lib/auth-client";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");
    const rememberMe = formData.get("remember") === "on";

    const { error: signInError } = await authClient.signIn.email({
      email,
      password,
      rememberMe,
    });

    setIsSubmitting(false);

    if (signInError) {
      setError(signInError.message ?? "Unable to sign in.");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
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
        placeholder="Enter your password"
        autoComplete="current-password"
      />

      <div className="flex items-center justify-between gap-4 text-sm">
        <label className="flex items-center gap-2 text-text-muted">
          <input
            type="checkbox"
            name="remember"
            className="h-4 w-4 rounded border-border-primary accent-[var(--color-accent-primary)]"
          />
          Remember me
        </label>
        <Link
          href="/forgot-password"
          className="font-medium text-accent-primary hover:text-accent-primary-hover"
        >
          Forgot password?
        </Link>
      </div>

      {error && (
        <p className="rounded-lg border border-accent-danger/40 bg-accent-danger/10 px-3 py-2 text-sm text-accent-danger">
          {error}
        </p>
      )}

      <AuthSubmitButton disabled={isSubmitting}>
        {isSubmitting ? "Signing in..." : "Sign in"}
      </AuthSubmitButton>
    </form>
  );
}
