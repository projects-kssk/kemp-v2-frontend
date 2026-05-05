"use client";

import Link from "next/link";

import { authClient } from "@/lib/auth-client";

const formatDate = (value: Date | string | null | undefined) => {
  if (!value) {
    return "Not available";
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

export function ProfileDetails() {
  const { data: session, isPending, error } = authClient.useSession();

  if (isPending) {
    return (
      <div className="card-themed p-6">
        <div className="h-6 w-40 rounded bg-interactive-bg" />
        <div className="mt-6 space-y-3">
          <div className="h-10 rounded bg-interactive-bg" />
          <div className="h-10 rounded bg-interactive-bg" />
          <div className="h-10 rounded bg-interactive-bg" />
        </div>
      </div>
    );
  }

  if (error || !session?.user) {
    return (
      <div className="card-themed p-6">
        <h2 className="text-xl font-semibold">No active session</h2>
        <p className="mt-2 text-text-muted">
          Sign in to view your profile data.
        </p>
        <Link href="/login" className="btn-primary mt-6 inline-flex px-4 py-2">
          Sign in
        </Link>
      </div>
    );
  }

  const { user } = session;
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="grid gap-6 lg:grid-cols-[20rem_1fr]">
      <section className="card-themed p-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent-primary text-3xl font-semibold text-text-inverse">
            {user.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={user.image}
                alt={user.name}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              initials || "U"
            )}
          </div>
          <h2 className="mt-4 text-2xl font-semibold">{user.name}</h2>
          <p className="mt-1 text-sm text-text-muted">{user.email}</p>
          <span
            className={`mt-4 px-3 py-1 text-xs ${
              user.emailVerified ? "badge-green" : "badge-yellow"
            }`}
          >
            {user.emailVerified ? "Verified" : "Email not verified"}
          </span>
        </div>
      </section>

      <section className="card-themed overflow-hidden">
        <div className="border-b border-border-primary px-6 py-4">
          <h2 className="text-xl font-semibold">Account details</h2>
        </div>
        <dl className="divide-y divide-border-primary">
          <ProfileRow label="User ID" value={user.id} />
          <ProfileRow label="Name" value={user.name} />
          <ProfileRow label="Email" value={user.email} />
          <ProfileRow
            label="Email verified"
            value={user.emailVerified ? "Yes" : "No"}
          />
          <ProfileRow label="Created" value={formatDate(user.createdAt)} />
          <ProfileRow label="Updated" value={formatDate(user.updatedAt)} />
        </dl>
      </section>
    </div>
  );
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 px-6 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
      <dt className="text-sm font-medium text-text-muted">{label}</dt>
      <dd className="break-all text-sm text-text-primary">{value}</dd>
    </div>
  );
}
