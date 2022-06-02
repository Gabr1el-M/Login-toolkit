import { configureStore } from '@reduxjs/toolkit';
import inputValue from './inputSave';

const store = configureStore({reducer: inputValue});

export default store;