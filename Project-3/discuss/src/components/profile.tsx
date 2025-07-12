"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();
  console.log("[SESSION CLIENT COMPONENT]: ", session.data?.user);

  if (session.data?.user) {
    return <div>From Client: User is signed in</div>;
  }

  return <div>From Client: User is not signed in</div>;
}
