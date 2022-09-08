import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { useUser } from "../hooks/useUser";

export function RouteGuard({ children }) {
  const router = useRouter();
  const { isLogin } = useUser();

  const [authorized, setAuthorized] = useState(false);

  const authCheck = useCallback(
    (url) => {
      const publicPaths = ["/login"];
      const path = url.split("?")[0];
      if (!isLogin && !publicPaths.includes(path)) {
        setAuthorized(false);
        router.push({
          pathname: "/login",
          query: { returnUrl: router.asPath },
        });
      } else {
        setAuthorized(true);
      }
    },
    [isLogin, router]
  );

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, [authCheck, router.asPath, router.events]);

  return authorized && children;
}
