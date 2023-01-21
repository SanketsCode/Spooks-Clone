import React from "react";

type User = {
  name: string;
  username: string;
  id: string;
  img: {
    id: string;
    author: string;
    width: string;
    height: string;
    url: string;
    download_url: string;
  };
  public_metrics: {
    followers_count: string | undefined | number;
    following_count: string | undefined | number;
    tweet_count: string | undefined | number;
    listed_count: string | undefined | number;
  };
};
export default function Card({
  name,
  username,
  id,
  img,
  public_metrics,
}: User) {
  // console.log(img.download_url);

  return (
    <div className="w-[90%] bg-[#3d466d] h-auto p-4 m-10 rounded-lg flex items-center shadow-lg">
      <img
        src={img.download_url}
        className="rounded-full w-24 h-24 border-white border"
        alt={username}
      />

      <div className="flex-row ml-5">
        <div className="flex items-center">
          <h1 className="m-3 text-xl text-white">Name : {name}</h1>
          <h3 className="bg-white pl-[3px] pr-[3px] h-6 ml-2 rounded-md w-auto">
            ID: {id}
          </h3>
        </div>

        {public_metrics.followers_count && public_metrics.following_count && (
          <div className="flex">
            <h3 className="bg-green-300  pl-[px] pr-[5px] h-6 ml-2 rounded-md w-auto">
              Followers Count :{public_metrics.followers_count}
            </h3>
            <h3 className="bg-red-300 pl-[5px] pr-[5px] h-6 ml-2 rounded-md w-auto">
              Following Count : {public_metrics.following_count}
            </h3>
          </div>
        )}
        {!public_metrics.followers_count ||
          (!public_metrics.following_count && (
            <div className="flex">
              <h3 className="bg-green-300  pl-[px] pr-[5px] h-6 ml-2 rounded-md w-auto">
                Followers Count :{public_metrics.followers_count}
              </h3>
              <h3 className="bg-red-300 pl-[5px] pr-[5px] h-6 ml-2 rounded-md w-auto">
                Following Count : {public_metrics.following_count}
              </h3>
            </div>
          ))}
        <h2 className="m-3 text-xl text-white">Username : {username}</h2>
      </div>
    </div>
  );
}
