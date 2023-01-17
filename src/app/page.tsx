import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto my-auto">
      <Navbar />
      <hr />
      <div className="w-full items-center h-auto">
        <h1 className="font-['Rowdies'] mt-10 text-[2rem] text-white text-center self-center">
          Twitter User Data
        </h1>
      </div>
    </main>
  );
}
