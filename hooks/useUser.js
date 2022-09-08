import { useSelector } from "react-redux";

export function useUser() {
  const userInfo = useSelector((state) => state.userDetails);
  return userInfo;
}
