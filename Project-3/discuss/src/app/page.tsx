import TopicCreateForm from "@/components/topics/topic-create-form";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>
      <div>
        <TopicCreateForm />
      </div>
    </div>
  );
}

// Auth Code for a Server Component
// import { Button } from "@nextui-org/react";
// import * as actions from "@/actions";
// import { auth } from "@/auth";

// import Profile from "@/components/profile";

// export default async function Home() {
//   const session = await auth();

//   console.log("[SESSION SERVER COMPONENT]: ", session);

//   return (
//     <div>
//       <form action={actions.signIn}>
//         <Button type="submit">Sign In</Button>
//       </form>

//       <form action={actions.signOut}>
//         <Button type="submit">Sign Out</Button>
//       </form>

//       {session?.user ? <div>Signed In</div> : <div>Signed Out</div>}

//       <Profile />
//     </div>
//   );
// }
