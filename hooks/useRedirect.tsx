import { useEffect } from "react";
import { router, usePathname } from "expo-router";
import auth from "@react-native-firebase/auth";

export const useRedirect = () => {
  const user = auth().currentUser;
  const pathname = usePathname();

  const arrayNotProtectedRouter = ["", "/"];

  useEffect(() => {
    if (!user && !arrayNotProtectedRouter.includes(pathname)) {
      router.replace("/");
    }
  }, [pathname]);
};
