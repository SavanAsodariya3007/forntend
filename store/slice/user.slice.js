import { ConstructionOutlined } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { post, cancelRequests } from "../../Services";

const initUser = {
  isLogin: false,
  user: {},
};

const UserSlice = createSlice({
  name: "user",
  initialState: initUser,
  reducers: {
    addUserInformation(state, { payload }) {
      state = {
        isLogin: true,
        user: payload,
      };
      return state;
    },
    resetUserInformation(state) {
      state = { ...initUser };
      return state;
    },
  },
});

export const { addUserInformation, resetUserInformation } = UserSlice.actions;
const userReducer = UserSlice.reducer;
export { userReducer };

export const login1 = (params) => {
  console.log(params);
};
export const login = createAsyncThunk("users/login", async (info, thunk) => {
  const { callback, ...params } = info;

  cancelRequests("login");

  post({
    url: "users/login",
    cancelKey: "login",
    params,
  }).then((res) => {
    const { status, message, data } = res;
    if (status) {
      callback?.();
      thunk.dispatch(addUserInformation(data.user));
    } else {
      console.log("Error:-", message);
    }
  });
});
