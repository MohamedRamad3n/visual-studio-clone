import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../Interfaces";

interface IClickedFile {
  fileName: string;
  fileContent: string | undefined;
}

interface IInitialState {
  activeTabs: string | null;
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}
const initialState: IInitialState = {
  activeTabs: null,
  openedFiles: [],
  clickedFile: {
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
    setActiveTabFile: (state, action: PayloadAction<string>) => {
      state.activeTabs = action.payload;
    },
  },
});
export const { setOpenedFile, setClickedFile,setActiveTabFile } = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
