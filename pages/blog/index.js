// import { Card, Grid, Text } from "@nextui-org/react";
// import Navbar from "../../components/navbar";
// import Link from "next/link";
// import Head from "next/head";

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:3000/products");
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//     revalidate: 10,
//   };
// };

// const blog = ({ data }) => {
//   return (
//     <>
//       <Head>
//         <title>Blog Page</title>
//       </Head>
//       <Navbar />
//       <div className="header-text">
//         <Text b size={36}>
//           Blog
//         </Text>
//       </div>
//       {data.map((curElement) => {
//         return (
//           <Link href={`/blog/${curElement.id}`}>
//             <div className="card-container">
//               <Card
//                 css={{
//                   p: "$6",
//                   mw: "90%",
//                   m: "auto",
//                   backgroundColor: "#b8caea",
//                 }}
//                 isPressable
//                 isHoverable
//               >
//                 <Card.Header>
//                   <h3>{curElement.id}</h3>
//                   <Grid.Container css={{ pl: "$6" }}>
//                     <Grid xs={12}>
//                       <Text h4 css={{ lineHeight: "$xs" }}>
//                         {curElement.title}
//                       </Text>
//                     </Grid>
//                     <Grid xs={12}>
//                       <Text css={{ color: "$accents8" }}>
//                         {curElement.body}
//                       </Text>
//                     </Grid>
//                   </Grid.Container>
//                 </Card.Header>
//               </Card>
//             </div>
//           </Link>
//         );
//       })}
//     </>
//   );
// };
// export default blog;

import { Card, Grid, Text, Loading } from "@nextui-org/react";
import useSWR from "swr";
import Link from "next/link";
import Head from "next/head";

const fetcher = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  return data;
};

function Blog() {
  const { data } = useSWR("blog", fetcher);

  if (!data)
    return (
      <>
        <div className="Loader">
          <Loading type="points" size="xl" color="white" />
        </div>
      </>
    );
  return (
    <>
      <Head>
        <title>Blog Page</title>
      </Head>
      <div className="header-text">
        <Text b size={36}>
          Blog
        </Text>
      </div>
      {data?.map((currenElement) => {
        return (
          <>
            <Link href={`/blog/${currenElement.id}`}>
              <div className="card-container">
                <Card
                  css={{ p: "$6", mw: "90%", m: "auto" }}
                  isPressable
                  isHoverable
                >
                  <Card.Header>
                    <h3>{currenElement?.id}</h3>
                  </Card.Header>
                  <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                      <Text h4 css={{ lineHeight: "$xs" }}>
                        {currenElement?.title}
                      </Text>
                    </Grid>
                    <Grid xs={12}>
                      <Text css={{ color: "$accents8" }}>
                        {currenElement?.body}
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card>
              </div>
            </Link>
          </>
        );
      })}
    </>
  );
}
export default Blog;
