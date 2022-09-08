import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { login1, login } from "../../store/slice/user.slice";

export function useTryLogin() {
  const dispatch = useDispatch();
  function tryLogin(params) {
    dispatch(login(params));
  }

  return {
    tryLogin,
  };
}
