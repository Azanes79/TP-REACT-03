import { createSlice } from '@reduxjs/toolkit';

export const colorMode = createSlice({
  name: 'colorMode',
  initialState: {
    value: true,
  },
  reducers: {
    changeMode: state => {
        if (state.value) {
            state.value = false;
        } else {
            state.value = true;
        }
        console.log(state.value);
    }
  },
});

export const { changeMode } = colorMode.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getMode = state => state.colorMode.value;

export default colorMode.reducer;
