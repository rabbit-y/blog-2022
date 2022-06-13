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

const AppSlice = createSlice({
  name: "app", // 命名空间
  initialState: {
    routerKey: '/mark',// 首页导航当前选中判断
    markListTop: 0, //列表初始位置
    types: [],// 分类初始值
    info: {}, // 站长信息
  },
  reducers: {
    setRouterKey(state, { payload }) {
      state.routerKey = payload
    },
    setMarkListTop(state, { payload }) {
      state.markListTop = payload
    }
  },
  extraReducers: {
    [fetchTypes.fulfilled]: (state, { payload }) => {
      state.types = payload;
      state.info = JSON.parse(payload.other)
    }
  },
});

export const { setRouterKey, setMarkListTop } = AppSlice.actions;

export default configureStore({
  reducer: AppSlice.reducer,
});
