import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { PostType } from "../../util";

interface PostState {
  data: PostType[];
}

const initialState: PostState = { data: [] };

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    updateData(state, action: PayloadAction<PostType[]>) {
      state.data = action.payload;
    },
  },
});

export const { updateData } = postSlice.actions;

export const selectData = (state: RootState) => state.post.data;

const { reducer } = postSlice;
export default reducer;
