import { configureStore } from '@reduxjs/toolkit';
import buildingReducer from './reducers/buildings';

const store = configureStore({
  reducer: {
    buildings: buildingReducer,
  },
});

export default store;
