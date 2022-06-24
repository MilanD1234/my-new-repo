import { Image, Text } from "@nextui-org/react";
import Head from "next/head";
const about = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div className="header-text">
        <Text b size={36}>
          About
        </Text>
      </div>
      <Image
        width={640}
        height={360}
        src="/userprofile.jpeg"
        alt="User profile"
        objectFit="cover"
      />
      <div className="user-description">
        <p>
          The whole world has become a small place today. Any information can be
          exchanged by people in few seconds and that, too, in a proper and
          effective way without any loss of data while it is being processed. On
          the one hand, all these different ways of telecommunication and
          information exchange have highlighted the necessity for multipurpose
          development and growth of information technology and on the other, the
          easy access and use of it has boosted the network of information
          exchange. All this has been possible through information technology
          like telephone, fax, telex, computers, internet, e-mail, photocopier,
          printer, scanner, cellular phones, pagers, videophone, digital camera,
          multimedia, etc.
        </p>
      </div>
    </>
  );
};
export default about;
