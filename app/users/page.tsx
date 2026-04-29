"use client";

import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  joined: string;
}

const mockUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "active",
    joined: "Jan 15, 2026",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
    status: "active",
    joined: "Jan 20, 2026",
  },
  {
    id: 3,
    name: "Bob Wilson",
    email: "bob@example.com",
    role: "Viewer",
    status: "inactive",
    joined: "Feb 1, 2026",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Editor",
    status: "active",
    joined: "Feb 3, 2026",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie@example.com",
    role: "Viewer",
    status: "active",
    joined: "Feb 4, 2026",
  },
];

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Users</h1>
          <p className="mt-2">Manage your team members and their roles.</p>
        </div>
        <button className="btn-primary flex items-center gap-2 self-start">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add User
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border"
          />
        </div>
        <select className="px-4 py-2 rounded-lg border">
          <option value="">All Roles</option>
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
          <option value="viewer">Viewer</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="card-themed rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider hidden sm:table-cell">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider hidden md:table-cell">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider hidden lg:table-cell">
                Joined
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-primary">
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-primary flex items-center justify-center text-text-inverse font-medium">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-text-muted">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 hidden sm:table-cell">
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-interactive-bg">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                      user.status === "active"
                        ? "bg-accent-success/10 text-accent-success"
                        : "bg-text-muted/10 text-text-muted"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-text-tertiary hidden lg:table-cell">
                  {user.joined}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 rounded-lg hover:bg-interactive-bg transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-text-tertiary">
          Showing {filteredUsers.length} of {mockUsers.length} users
        </p>
        <div className="flex gap-2">
          <button className="btn-secondary px-3 py-1.5 text-sm" disabled>
            Previous
          </button>
          <button className="btn-secondary px-3 py-1.5 text-sm">Next</button>
        </div>
      </div>
    </div>
  );
}
