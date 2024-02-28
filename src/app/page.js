import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Category from "@/components/Category";
import Image from "next/image";
import HotDeal from "@/components/HotDeal";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <HotDeal />
    </>
  );
}
