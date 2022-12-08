import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from '../../utils/routes'
import useAxios from '../../utils/useAxios'
import toast from "react-hot-toast";



export const getAllUsers = createAsyncThunk(
  "getAllUsers",
  async (data, thunkAPI) => {

    try {
      const response = await useAxios({
        url: `${baseUrl}/api/v1/users`,
        method: "get",
      });
      return response.data.data
    } catch (error) {
      toast.error('Something went wrong getting all users!');


      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);



export const getAllSellers = createAsyncThunk(
  "getAllSellers",
  async (thunkAPI) => {

    try {
      const response = await useAxios({
        url: `${baseUrl}/api/v1/users/sellers`,
        method: "get",
      });

      return response.data.data
    } catch (error) {
      console.log('na the error', error.response)
      toast.error('Something went wrong getting all users!');


      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const getStats = createAsyncThunk(
  "getStats",
  async (thunkAPI) => {

    try {
      const response = await useAxios({
        url: `${baseUrl}/api/v1/users/stats`,
        method: "get",
      });

      return response.data.data
    } catch (error) {
      toast.error('Something went wrong getting all users!');


      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);


export const suspendUser = createAsyncThunk(
    "suspendUser",
    async (data, thunkAPI) => {
      const id = data.id;
      delete data.id
      try {
        const response = await useAxios({
          url: `${baseUrl}/api/v1/users/suspend/${id}`,
          method: "patch",
          data: data
        });
  
        toast.success('User suspended successfully');

        return response.data;
      } catch (error) {
        console.log('na the error', error.response)
        toast.error('Something went wrong getting all users!');
  
  
        if (axios.isAxiosError(error) && error.response) {
          return thunkAPI.rejectWithValue(error.response);
        } else {
          return thunkAPI.rejectWithValue(String(error));
        }
      }
    }
  );
  
  

