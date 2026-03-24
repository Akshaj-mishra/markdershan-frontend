import React from "react";

export const metadata = {
  title: "Sign Up | Markdarshan",
  description: "Create your account to access Markdarshan services",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}