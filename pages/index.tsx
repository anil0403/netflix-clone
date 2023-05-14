import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
export default function Home() {
  const { data: user } = useCurrentUser();
  return (
    <>
      <h1 className="text-green-500">hello guys</h1>;
      <p>logged in as : {user?.email}</p>
      <button
        className="h-10 w-full bg-white rounded-md mx-5 my-5"
        onClick={() => signOut()}
      >
        LogOut
      </button>
    </>
  );
}
