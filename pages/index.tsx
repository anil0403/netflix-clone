import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { getSession } from "next-auth/react";
import { NextPageContext } from "next";
import NavBar from "@/components/navbar";

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
  return (
    <>
      <NavBar />
    </>
  );
}
