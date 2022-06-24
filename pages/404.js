import Head from "next/head";

const pagenotFound = () => {
  return (
    <>
      <Head>
        <title>Error-404</title>
      </Head>
      <div className="error-page">
        <h1>Error:404 -- Page Not Found!</h1>
        <h3>Page is Not Found What You Are Looking For!!!!</h3>
      </div>
    </>
  );
};
export default pagenotFound;
