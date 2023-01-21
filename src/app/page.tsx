import Image from "next/image";
import Navbar from "@/components/Navbar";
import Card from "@/components/card";
// import Twitter from 'twitter';

export default async function Home(props: any) {
  const ImgRes = await fetch(`https://picsum.photos/v2/list?page=2&limit=100`);
  const ImgData = await ImgRes.json();

  type User = {
    name: string;
    username: string;
    id: string;
    public_metrics: {
      followers_count: number | string | undefined;
      following_count: number | string | undefined;
      listed_count: number | string | undefined;
      tweet_count: number | string | undefined;
    };
  };

  let newData: User[] = [];
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/api/users`);
    const data = await res.json();
    newData = data.data;
  } catch (error) {
    console.log(error);
  }

  return (
    <main className="max-w-4xl mx-auto my-auto">
      <Navbar />
      <hr />
      <div className="w-full items-center h-auto">
        <h1 className="font-['Rowdies'] mt-10 text-[2rem] text-white text-center self-center">
          Twitter User Data
        </h1>
      </div>
      {newData &&
        newData.map((user: User, i: number) => (
          <Card
            key={user.id}
            name={user.name}
            username={user.username}
            id={user.id}
            img={ImgData[i]}
            followers={
              user.public_metrics.followers_count
                ? user.public_metrics.followers_count
                : 0
            }
            following={
              user.public_metrics.following_count
                ? user.public_metrics.following_count
                : 0
            }
          />
        ))}

      {newData.length == 0 && (
        <h3 className="font-['Rowdies'] mt-10 text-[2rem] text-white text-center self-center">
          Too Many Request Please Check After Some time
        </h3>
      )}
    </main>
  );
}
