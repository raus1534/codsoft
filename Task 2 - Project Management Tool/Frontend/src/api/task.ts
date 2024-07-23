import { handleAxiosError } from "@utils/helper";
import client from "./client";

export const getOngoingTask = async () => {
  try {
    const token = localStorage.getItem("auth-token");
    const { data } = await client.get("/task/getOngoingTask", {
      headers: {
        authorization: "PMS " + token,
        accept: "application/json",
      },
    });
    return data;
  } catch (error) {
    return handleAxiosError(error);
  }
};
