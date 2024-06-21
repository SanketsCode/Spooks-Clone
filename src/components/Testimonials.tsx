import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-10 dark:bg-trueGray-800 space-y-3">
            <p className="text-2xl text-gray-400">E-Commerce Store Boost : </p>
            <p className="text-2xl leading-normal ">
              Increased <Mark>sales by 150%</Mark> through targeted SEO and PPC
              campaigns.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-10 dark:bg-trueGray-800 space-y-3">
            <p className="text-2xl text-gray-400">
              Brand Awareness Campaign :{" "}
            </p>
            <p className="text-2xl leading-normal ">
              Enhanced <Mark>social media</Mark> presence and engagement for a
              leading fashion brand.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-10 dark:bg-trueGray-800 space-y-3">
            <p className="text-2xl text-gray-400">Bulk SMS Campaign :</p>
            <p className="text-2xl leading-normal ">
              Successfully executed a large-scale SMS campaign for a retail
              client, increasing foot <Mark>traffic by 30%</Mark>.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
