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
    // 初始值
    types: [],
  },
  reducers: {
    // 这里的属性会自动的导出为actions，在组件中可以直接通过dispatch进行触发
    // updateTypes(state, { payload }) {
    //   state.types = payload;
    // },
  },
  extraReducers: {
    [fetchTypes.fulfilled]: (state, { payload }) => {
      state.types = payload;
    },
  },
});

export const { updateTypes } = AppSlice.actions;

export default configureStore({
  reducer: AppSlice.reducer,
});

// 页面如此使用
// import { useDispatch } from 'react-redux';
// dispatch(updateTypes(data))
