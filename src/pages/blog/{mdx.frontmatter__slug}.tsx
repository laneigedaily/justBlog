import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IBlogPostDetail {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function BlogPost({ data, children }: IBlogPostDetail) {
  const image = getImage(
    data.mdx?.frontmatter?.mainImage?.childImageSharp?.gatsbyImageData!
  );
  return (
    <Layout title="BlogPost">
      <GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title} />
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        slug
        author
        category
        date
        title
        mainImage {
          childImageSharp {
            gatsbyImageData(height: 400)
          }
        }
      }
      body
    }
  }
`;

export const Head = ({ data }: IBlogPostDetail) => {
  return <Seo title={data.mdx?.frontmatter?.title!} />;
};
