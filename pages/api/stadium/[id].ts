// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Data } from "../../../types/Stadium";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  try {
    const { data }: Data = await axios.get(
      `${process.env.FOOTBALL_DATA_URL}/v2/teams/${id}`,
      {
        headers: {
          "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY,
        },
      }
    );

    res.send(data);
  } catch (e) {
    console.error(e);

    res.status(400).send("Generic error.");
  }
}
