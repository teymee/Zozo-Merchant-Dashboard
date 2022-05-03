import { useSelector } from "react-redux";

export const gettingStore = (type) => {
      const value = useSelector (state => state[type]);
      return value
    }