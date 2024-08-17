import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Myresume from "@/components/Myresume";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner />
      <Aboutme />
      <Myresume />
    </main>
  );
}
