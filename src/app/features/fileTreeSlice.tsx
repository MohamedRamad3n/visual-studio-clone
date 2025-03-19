import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../Interfaces";

interface IClickedFile {
  activeTabId: string | null;
  fileName: string;
  fileContent: string | undefined;
}

interface IInitialState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}
const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    activeTabId: null,
    fileName: "",
    fileContent: "",
  },
};

export const fileTreeSlice = createSlice({
  name: "fillTree",
  initialState,
  reducers: {
    setOpenedFile: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },
  },
});
export const { setOpenedFile, setClickedFile } =
  fileTreeSlice.actions;
export default fileTreeSlice.reducer;
