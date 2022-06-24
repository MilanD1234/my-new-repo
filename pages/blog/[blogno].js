// import { Card, Grid, Text } from "@nextui-org/react";
// import Navbar from "../../components/navbar";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import Head from "next/head";
// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:3000/products");
//   const data = await res.json();

//   const paths = data.map((currenElement) => {
//     return {
//       params: { blogno: currenElement.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.blogno;
//   const res = await fetch(`http://localhost:3000/products/${id}`);
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };

// const myData = ({ data }) => {
//   const router = useRouter();
//   const id = router.query.blogno;

//   return (
//     <>
//       <Head>
//         <title>{`Blog page | Blog ${id}`}</title>
//       </Head>
//       <Navbar />
//       <Link href={`/blog/${data.id}/${data.id}`}>
//         <div className="card-container">
//           <Card css={{ p: "$6", mw: "90%", m: "auto" }} isPressable>
//             <Card.Header>
//               <h3>{data?.id}</h3>
//             </Card.Header>
//             <Grid.Container css={{ pl: "$6" }}>
//               <Grid xs={12}>
//                 <Text h4 css={{ lineHeight: "$xs" }}>
//                   {data?.title}
//                 </Text>
//               </Grid>
//               <Grid xs={12}>
//                 <Text css={{ color: "$accents8" }}>{data?.body}</Text>
//               </Grid>
//             </Grid.Container>
//           </Card>
//         </div>
//       </Link>
//     </>
//   );
// };
// export default myData;

import { Card, Grid, Text, Loading } from "@nextui-org/react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Header from "next/head";

const fetcher = async () => {
  const response = await fetch(`http://localhost:3000/products`);
  const data = await response.json();
  return data;
};

function Blogid() {
  const { data } = useSWR("blogid", fetcher);
  const router = useRouter();
  console.log(router, "router");
  const id = router?.query?.blogno;

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
      <Header>
        <title>{`Blog page | Blog ${id}`}</title>
      </Header>
      {data?.map((currenElement) => {
        return currenElement.id == id ? (
          <>
            <div
              className="card-container"
              onClick={() =>
                router.push(`/blog/${currenElement.id}/${currenElement.id}`)
              }
            >
              <Card css={{ p: "$6", mw: "90%", m: "auto" }} isPressable>
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
          </>
        ) : (
          ""
        );
      })}
    </>
  );
}
export default Blogid;
