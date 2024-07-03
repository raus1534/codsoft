import { AxiosError } from "axios";

export const handleAxiosError = (error: unknown) => {
  if (error instanceof AxiosError) {
    if (error.response?.data) {
      return error.response.data;
    }
    return { error: error.message };
  }
  return { error: "An unknown error occurred" };
};

export const isValidEmail = (email: string) => {
  // eslint-disable-next-line
  const emailRegularEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegularEx.test(email);
};

export const isValidName = (name: string) => {
  const nameRegularEx = /^[a-z A-Z]+$/;
  return nameRegularEx.test(name);
};
