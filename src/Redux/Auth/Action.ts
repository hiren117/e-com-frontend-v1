import axios from "axios";
import { API_BASE_URL } from "../../Config/api";
import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  GET_USER_REQUEST,
  LOGOUT,
} from "./ActionTypes";

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (userData: any) => ({
  type: REGISTER_SUCCESS,
  payload: userData,
});
const registerFailure = (error: any) => ({
  type: REGISTER_FAILURE,
  payload: error,
}); // i can modify the error type to be more specific
// if needed can get the error response
// from the backend and create a type for it

export const register = (userData: any) => async (dispatch: any) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/signup`,
      userData,
    );
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    console.log("response from register action:", response);
    dispatch(registerSuccess(user));
  } catch (error) {
    dispatch(registerFailure((error as Error).message));
  }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (userData: any) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});
const loginFailure = (error: any) => ({ type: LOGIN_FAILURE, payload: error });
export const login = (userData: any) => async (dispatch: any) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    console.log("response from login action:", response);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure((error as Error).message));
  }
};

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (userData: any) => ({
  type: GET_USER_SUCCESS,
  payload: userData,
});
const getUserFailure = (error: any) => ({
  type: GET_USER_FAILURE,
  payload: error,
});

export const getUser = (token: string) => async (dispatch: any) => {
  dispatch(getUserRequest());
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = response.data;
    console.log("response from getUser action:", response);
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure((error as Error).message));
  }
};

export const logout = () => (dispatch: any) => {
  localStorage.clear();
  console.log("User logged out, localStorage cleared.");
  dispatch({ type: LOGOUT });
};
