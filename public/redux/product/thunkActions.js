import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from '../../utils/routes'
import useAxios from '../../utils/useAxios'
import toast from "react-hot-toast";



export const addProduct = createAsyncThunk(
  "addProduct",
  async (data, thunkAPI) => {
    const id = data.id;
    console.log(data)
    delete data.id;

    try {
      const response = await useAxios({
        url: `${baseUrl}/api/v1/products/${id}`,
        method: "post",
        data: data
      });
      toast.success('Successfully created product!');

      return response.data;
    } catch (error) {
      console.log('na the error', error.response)
      toast.error('Something went wrong creating a product!');


      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);



export const getProducts = createAsyncThunk(
  "getProduct",
  async ( id, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${baseUrl}/api/v1/products/${id}`,
        method: "get",
      });

      return response.data.data;
    } catch (error) {
      toast.error('Something went wrong getting all products!');
      
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const deleteProducts = createAsyncThunk(
  "deleteProduct",
  async ( data, thunkAPI) => {
    console.log("data", data)
    try {
      const response = await useAxios({
        url: `${baseUrl}/api/v1/products/${data.id}`,
        method: "delete",
      });
      toast.success('Product deleted successfully')
      return response.data.data;
    } catch (error) {
      toast.error('Something went wrong deleting product!');
      
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);


export const editProducts = createAsyncThunk(
  "editProduct",
  async (data, thunkAPI) => {
    let id = data.id;
    delete data.id
    try {
      const response = await useAxios({
        url: `${baseUrl}/api/v1/products/${id}`,
        method: "patch",
        data: data
      });
      toast.success('Account created successfully!');
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
