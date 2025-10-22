import { getUser } from "@/utils/storage";

const useGetUserData = () => {
  const user = getUser();

  return user;
};

export default useGetUserData;
