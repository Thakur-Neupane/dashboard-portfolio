import React, { useState } from "react";
import { Link } from "react-router-dom";

const Account = () => {
  const [selectedComponent, setSelectedComponent] = useState("Profile");

  return (
    <>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav className="grid gap-4 text-sm text-muted-foreground">
            <Link
              href="#"
              className={
                selectedComponent === "Profile"
                  ? "font-semibold text-primary"
                  : ""
              }
            >
              Profile
            </Link>

            <Link
              href="#"
              className={
                selectedComponent === "Update Password"
                  ? "font-semibold text-primary"
                  : ""
              }
            >
              Update Password
            </Link>

            <Link
              href="#"
              className={
                selectedComponent === "Update Profile"
                  ? "font-semibold text-primary"
                  : ""
              }
            >
              Update Profile
            </Link>
            <Link href="#">Security</Link>
            <Link href="#">Integrations</Link>
            <Link href="#">Support</Link>
            <Link href="#">Organizations</Link>
            <Link href="#">Advanced</Link>
          </nav>
          <div className="grid gap-6"></div>
          {(() => {})()}
        </div>
      </main>
    </>
  );
};

export default Account;