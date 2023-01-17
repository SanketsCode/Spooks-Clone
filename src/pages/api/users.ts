// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { count } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from 'twitter-api-sdk';
import { AuthClient } from 'twitter-api-sdk/dist/types';

type User = {
    name : string,
    id: string,
    username : string
}

type FollowersData = {
    data : User[] | undefined
}

const bearer_token : string | AuthClient = process.env.TWITTER_BEARER_TOKEN ? process.env.TWITTER_BEARER_TOKEN : '' ;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FollowersData>
) {
     const client = new Client( 'AAAAAAAAAAAAAAAAAAAAAARJkAEAAAAABdakbtVR9hjuXgAeCE%2BDvY6HTls%3DTaXxbSCVuYstanQDeoXX9pSC8G6GP7SSZdkcmBlIAkXLrm5zF4' );

  const followers = (await client.users.usersIdFollowers("102"));
  
  
  res.status(200).json({data:  followers.data});
}
