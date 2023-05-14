import React from "react";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

interface AccountMenuProps {
  visible?: boolean;
}
const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) return null;
  const { data: user } = useCurrentUser();
  return (
    <div className="bg-black w-52 absolute top-20 right-2 py-3 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img
            src="/images/default-blue.png"
            className="w-8 rounded-md"
            alt="blue profile"
          />
          <p className="text-white text-sm group-hover/item:underline">
            {user?.name}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white text-small hover:underline"
        >
          Sign Out
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
