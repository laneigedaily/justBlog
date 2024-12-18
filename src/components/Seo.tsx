import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface ISeo {
  title: String;
}

export default function Seo({ title }: ISeo) {
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <title>
      {title} | {data.site?.siteMetadata?.title}
    </title>
  );
}
