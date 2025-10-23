"use client";

import { Logo } from "@/components/atoms";
import { removeAuthToken } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";

import { Badge } from "@/components/ui/badge";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleLogout = () => {
    removeAuthToken();
    router.push("/home");
  };

  return (
    <>
      <div className="bg-primary px-10 py-3.5 flex items-center justify-between">
        <Logo />
        <div className="flex gap-8 items-center">
          <div className="relative">
            <Badge
              variant="secondary"
              className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute -top-2 -right-3.5"
            >
              8
            </Badge>
            <MdOutlineShoppingCart
              className="text-white cursor-pointer hover:text-secondary transition-all"
              size={25}
            />
          </div>

          <div onClick={handleLogout}>
            <RiLogoutBoxRLine
              className="text-white cursor-pointer hover:text-secondary transition-all"
              size={25}
            />
          </div>
        </div>
      </div>
      <div className="px-10">{children}</div>
    </>
  );
}
