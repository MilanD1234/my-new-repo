import { Image } from "@nextui-org/react";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="index-image">
        <Image src="/index.png" alt="Default Image" objectFit="cover" />
      </div>
    </>
  );
};
export default index;
