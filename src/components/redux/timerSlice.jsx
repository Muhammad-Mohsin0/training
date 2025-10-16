import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timers: [
    {
      id: 1,
      timeLeft: 36 * 60 * 60,
    },
    {
      id: 2,
      timeLeft: 12 * 60 * 60,
    },
    {
      id: 3,
      timeLeft: 24 * 60 * 60,
    },
    {
      id: 4,
      timeLeft: 18 * 60 * 60,
    },
    {
      id: 5,
      timeLeft: 10 * 60 * 60,
    },
    {
      id: 6,
      timeLeft: 8 * 60 * 60,
    },
  ],
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    decrementTimers: (state) => {
      state.timers.forEach((timer) => {
        if (timer.timeLeft > 0) timer.timeLeft -= 1;
      });
    },
    resetTimer: (state, action) => {
      const { id, newTime } = action.payload;
      const timer = state.timers.find((t) => t.id === id);
      if (timer) timer.timeLeft = newTime;
    },
  },
});

export const { decrementTimers, resetTimer } = timerSlice.actions;
export default timerSlice.reducer;
