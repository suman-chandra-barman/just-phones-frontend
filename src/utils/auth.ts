import { TJwtPayload } from "@/types/common";
import { jwtDecode } from "jwt-decode";

// get user
export const getUserInfo = () => {
  try {
    if (typeof window === "undefined") {
      return null;
    }
    const token = localStorage.getItem('accessToken');
    if (!token) return null;

    const decoded = jwtDecode<TJwtPayload>(token);
    return decoded;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

 