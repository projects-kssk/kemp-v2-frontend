import Link from "next/link";

interface AuthLayoutProps {
  title: string;
  description: string;
  switchLabel: string;
  switchHref: string;
  switchText: string;
  children: React.ReactNode;
}

export function AuthLayout({
  title,
  description,
  switchLabel,
  switchHref,
  switchText,
  children,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center text-2xl font-bold text-text-primary hover:text-accent-primary"
          >
            Kemp
          </Link>
          <h1 className="mt-8 text-3xl font-semibold tracking-normal">
            {title}
          </h1>
          <p className="mt-2 text-sm text-text-muted">{description}</p>
        </div>

        <div className="card-themed p-6 sm:p-8">{children}</div>

        <p className="mt-6 text-center text-sm text-text-muted">
          {switchLabel}{" "}
          <Link
            href={switchHref}
            className="font-medium text-accent-primary hover:text-accent-primary-hover"
          >
            {switchText}
          </Link>
        </p>
      </div>
    </div>
  );
}
