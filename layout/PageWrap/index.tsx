import { Container } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { Footer, Nav } from "../../components";
import { APP_NAME } from "../../constants";

type PageWrapProps = {
  title?: string;
  children: React.ReactNode;
  container?: React.ElementType;
};

const PageWrap: React.FC<PageWrapProps> = ({ title, children, container }) => {
  const Component = container || Container;
  return (
    <>
      <Head>
        <title>{`${APP_NAME} ${title ? " - " + title : ""}`}</title>
        <meta name="description" content="Dorny Muba's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Component {...(!container && { ...{ maxW: "container.md", pt: 16 } })}>
        {children}
      </Component>
      <Footer />
    </>
  );
};

export default PageWrap;
