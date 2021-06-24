// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { PostCode } from "../../../types/Crime";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { postcode, date } = req.query;

  try {
    const {
      data: {
        result: { latitude, longitude },
      },
    }: PostCode = await axios.get(
      `${process.env.POST_CODE_LOOKUP_URL}/postcodes/${postcode}`
    );

    const { data } = await axios.get(
      `${process.env.CRIMES_API_URL}/api/crimes-at-location?date=${date}&lat=${latitude}&lng=${longitude}`
    );

    console.log("DS:FDS:F:DSF: " + JSON.stringify(data));

    res.send(data);
  } catch (e) {
    console.error(e);

    res.status(400).send("Generic error.");
  }
}
