import React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";

export default function AboutUs() {
  return (
    <Layout title="About-us">
      <p>about-us</p>
    </Layout>
  );
}

export const Head = () => {
  return <Seo title="About-us"></Seo>;
};
