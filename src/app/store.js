import { configureStore } from '@reduxjs/toolkit';
import colorModeReducer from '../features/color-mode/ColorMode';


export default configureStore({
  reducer: {
    colorMode: colorModeReducer
  },
});
