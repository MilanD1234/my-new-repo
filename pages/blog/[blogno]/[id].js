import { Card, Grid, Text, Loading } from "@nextui-org/react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Header from "next/head";

const fetcher = async () => {
  const response = await fetch(`http://localhost:3000/products`);
  const data = await response.json();
  console.log(data, "data");
  return data;
};

function Blogid() {
  const { data } = useSWR("blogid", fetcher);
  const router = useRouter();
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
      {data?.map((currenElement) => {
        return currenElement.id == id ? (
          <>
            <Header>
              <title>Description</title>
            </Header>
            <div className="card-container">
              <Card css={{ p: "$6", mw: "90%", m: "auto" }}>
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
