import React from "react";
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/router";
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
const Profiles = () => {
  const { data: user } = useCurrentUser();
  const router = useRouter();
  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-4xl text-white text-center">
          Who is watching...?
        </h1>
        <div className="flex item-center justify-center gap-8 mt-10">
          <div onClick={() => router.push("/")}>
            <div className="group flex-row w-44 mx-auto">
              <div
                className="
              w-44
              h-44 
              rounded-md
              flex
              items-center
              justify-center
              border-2
              border-transparent
              group-hover:cursor-pointer
              group-hover:border-white
              overflow-hidden
              "
              >
                <img src="/images/default-blue.png" alt="profile blue" />
              </div>
              <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white ">
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profiles;
