import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { FileName } from '../../utils/file-types';

export type FileNameType = {
  fileNameObject: FileName | null;
};

const initialState: FileNameType = {
  fileNameObject: null,
};

export const fileNameSlice = createSlice({
  name: 'fileName',
  initialState,
  reducers: {
    setFileNameObject: (state, action: PayloadAction<FileNameType>) => {
      state.fileNameObject = action.payload.fileNameObject;
    },
  },
});

export const { setFileNameObject: setFileNameObject } = fileNameSlice.actions;
export const selectFileNameObject = (state: RootState) => state.fileName;

export default fileNameSlice.reducer;
