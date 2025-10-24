"use client";

import { Logo } from "@/components/atoms";
import { isLoggedIn, removeAuthToken } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "react-toastify";
import { useProductsStore } from "@/store/products";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  const { products } = useProductsStore();
  const userIsLoggedIn = isLoggedIn();

  const router = useRouter();

  const handleLogout = () => {
    removeAuthToken();
    router.push("/auth");
    toast.success("Logout realizado com sucesso!");
  };

  return (
    <>
      <div className="bg-primary px-10 py-3.5 flex items-center justify-between">
        <Link href="/home">
          <Logo />
        </Link>
        {userIsLoggedIn ? (
          <div className="flex gap-8 items-center">
            <div className="relative">
              {products.length ? (
                <Badge
                  variant="secondary"
                  className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute -top-2 -right-3.5"
                >
                  {products.length}
                </Badge>
              ) : null}
              <Link href="/cart">
                <MdOutlineShoppingCart
                  className="text-white cursor-pointer hover:text-secondary transition-all"
                  size={25}
                />
              </Link>
            </div>

            <div onClick={handleLogout}>
              <RiLogoutBoxRLine
                className="text-white cursor-pointer hover:text-secondary transition-all"
                size={25}
              />
            </div>
          </div>
        ) : null}

        {!userIsLoggedIn ? (
          <Link href="/auth">
            <Button className="cursor-pointer" variant="secondary">
              Entrar
            </Button>
          </Link>
        ) : null}
      </div>
      <div className="px-10">{children}</div>
    </>
  );
}
