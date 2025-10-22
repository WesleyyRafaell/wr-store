"use client";

import { Button } from "@/components/ui/button";
import useGetUserData from "@/hooks/getUser";
import { removeAuthToken } from "@/utils/storage";
import { useRouter } from "next/navigation";

const Home = () => {
  const user = useGetUserData();
  const router = useRouter();

  const handleLogout = () => {
    removeAuthToken();
    router.push("/home");
  };

  return (
    <div>
      <div>Home {user?.name}</div>
      <Button onClick={handleLogout}>logout</Button>
    </div>
  );
};

export default Home;
