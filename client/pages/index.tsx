import Head from "next/head";
import Layout from "src/components/Layout/Layout";
import Container from "src/components/Layout/Container";
import PostsView from "src/components/PostsView/PostsView";

// Our index page
const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Admin UI Homepage</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Container className="align-items-center justify-content-start mt-8 h-full flex-column">
          <PostsView></PostsView>
        </Container>
      </Layout>
    </>
  );
};

export default IndexPage;
