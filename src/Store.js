import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./Reducer/TicketsReducer";

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
  },
});
export default store;
