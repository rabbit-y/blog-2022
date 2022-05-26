import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { api } from "@api/index";

// 使用Redux Toolkit 简化了编写 Redux。(https://blog.csdn.net/heroboyluck/article/details/113787326)

// 异步请求数据Action
export const fetchTypes = createAsyncThunk(
  "app/fetchTypes",
  async () => {
    const { data } = await api.other.getMasterInfo.request();
    return data;
  }
);

// 异步请求数据Action
export const getLogin = createAsyncThunk(
  "app/getLogin",
  async () => {
    return localStorage.getItem('h-userInfo') ? true : false;
  }
);


const AppSlice = createSlice({
  name: "app", // 命名空间
  initialState: {
    login: false,
    // 初始值
    types: [],
    // 首页导航当前选中判断
    routerKey: '/index'
  },
  reducers: {
    setRouterKey(state, { payload }) {
      state.routerKey = payload
    },
    setLogin(state, { payload }) {
      state.login = payload
    }
  },
  extraReducers: {
    [fetchTypes.fulfilled]: (state, { payload }) => {
      state.types = payload;
    },
    [getLogin.fulfilled]: (state, { payload }) => {
      state.login = payload
    }
  },
});

export const { setRouterKey, setLogin } = AppSlice.actions;

export default configureStore({
  reducer: AppSlice.reducer,
});
