"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    setIsLoading(false);

    if (!response.ok) {
      const data = (await response.json()) as { error?: string };
      setError(data.error ?? "Login failed.");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-6xl items-center px-6 py-16">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-amber-200 bg-white/90 p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-stone-900">Admin Login</h1>
        <p className="mt-2 text-stone-600">Sign in to manage poems and articles.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block space-y-1">
            <span className="text-sm text-stone-700">Username</span>
            <input
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-xl border border-stone-300 px-3 py-2"
            />
          </label>

          <label className="block space-y-1">
            <span className="text-sm text-stone-700">Password</span>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-stone-300 px-3 py-2"
            />
          </label>

          {error ? <p className="text-sm text-red-700">{error}</p> : null}

          <button
            disabled={isLoading}
            type="submit"
            className="w-full rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-700 disabled:opacity-60"
          >
            {isLoading ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
}
