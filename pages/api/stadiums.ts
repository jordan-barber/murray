// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { Data } from '../../types/Stadium';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data }: Data = await axios.get(`${process.env.FOOTBALL_DATA_URL}/v2/competitions/PL/teams`, {
      headers: {
        'X-Auth-Token': process.env.FOOTBALL_DATA_API_KEY
      }
    });

    res.send(data.teams);
  } catch (e) {
    console.error(e);

    res.status(400).send('Generic error.')
  }
}
