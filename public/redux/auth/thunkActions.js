import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from '../../utils/routes'
import useAxios from '../../utils/useAxios'
import toast from "react-hot-toast";



export const login = createAsyncThunk(
  "login",
  async (data, thunkAPI) => {

    try {
      const response = await useAxios({
        url: `${baseUrl}/api/v1/auth/login`,
        method: "post",
        data: data
      });

      toast.success('Welcome back!');
      const token = response.data.token
      localStorage.setItem('token', token)
      const userData = JSON.stringify(response.data.data);
      localStorage.setItem('userDetails', userData)
      console.log(response.data.data)
      return response.data.data
    } catch (error) {
      let errMsg = error?.response?.data?.meta?.error || 'Something went wrong !'
      toast.error(errMsg);
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const signup = createAsyncThunk(
  "signup",
  async (data, thunkAPI) => {

    try {
      const response = await useAxios({
        url: `${baseUrl}/api/v1/auth/signup`,
        method: "post",
        data: data
      });
      toast.success('Account created successfully!');
      const token = response.data.token
      localStorage.setItem('token', token)

      return response.data;
    } catch (error) {
      let errMsg = error?.response?.data?.meta?.error || 'Something went wrong !'
      toast.error(errMsg);

      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);


export const driver = createAsyncThunk(
  "driver",
  async (id, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${baseUrl}/api/pickupdelivery/searchdriver/${id}`,
        method: "get",
      });

      return response.data;
    } catch (error) {
      const errorMsg = error.response.data.message.includes('latitude') ? 'No Driver found' : error.response.data.message;
      console.log('na the error be this driver', errorMsg)

      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `${errorMsg}` || 'Something went wrong'
      });
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);
