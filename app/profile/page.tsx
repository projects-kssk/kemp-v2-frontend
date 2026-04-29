import { ProfileDetails } from "@/components/profile/ProfileDetails";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="mt-2 text-text-muted">
          View your account and session data.
        </p>
      </div>

      <ProfileDetails />
    </div>
  );
}
