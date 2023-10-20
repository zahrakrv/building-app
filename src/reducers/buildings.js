import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBuildings = createAsyncThunk(
  'buildings/fetchBuildings',
  async () => {
    const response = await axios.get('http://82.115.18.198:4000/api/buildings');
    return response.data;
  }
);

const initialState = {
  buildings: [],
  status: 'idle',
  error: null,
};

const buildingSlice = createSlice({
  name: 'building',
  initialState,
  reducers: {
    // setBuildings: (state, action) => {
    //   state.buildings = action.payload;
    // },
    addBuilding: (state, action) => {
      state.buildings.push(action.payload);
    },
    updateBuilding: (state, action) => {
      const { id, data } = action.payload;
      const index = state.buildings.findIndex((building) => building.id === id);
      if (index !== -1) {
        state.buildings[index] = { ...state.buildings[index], ...data };
      }
    },
    deleteBuilding: (state, action) => {
      const id = action.payload;
      state.buildings = state.buildings.filter(
        (building) => building.id !== id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBuildings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBuildings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.buildings = action.payload;
      })
      .addCase(fetchBuildings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addBuilding, updateBuilding, deleteBuilding } =
  buildingSlice.actions;
export default buildingSlice.reducer;
