import axios from "axios";

export const fetchCrimeData = async (postCode: string, date: string) => {
  return await fetch(
    `http://localhost:3000/api/crime/${postCode}?date=${date}`
  ).then((res) => res.json());
};
