import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
      setUserList: (state, action) => {
        state.list = action.payload;
      }
  },
});

export const {setUserList} = userSlice.actions;

export default userSlice.reducer;

const apiUsers = "https://reqres.in/api/users?per_page=12";

export const fetchAllUsers = () => (dispatch) => {
  axios
    .get(apiUsers)
    .then((response) => {
        dispatch(setUserList(response.data.data));
    })
    .catch((error) => console.log(error));
};
