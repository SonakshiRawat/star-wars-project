import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const titles = createSlice({
  name: "title",
  initialState: { ti: [] },
  reducers: {
    actions(state, action) {
    //   console.log(action.payload.val.res.data.results);
    
        state.ti = action.payload.val.res.data.results
 
      
    },
  },
});

const store = configureStore({
    reducer: {
      titles: titles.reducer,
    },
  });
  
  export const { actions } = titles.actions;
export default store;
