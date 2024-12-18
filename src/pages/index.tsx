import * as React from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

export default function Index({ data }: PageProps<Queries.MainQueryQuery>) {
  return (
    <Layout title="Useful Homepage For Developer">
      <div className="grid" style={{ gridTemplateColumns: "repeat(4, auto)" }}>
        {data.allContentfulBlog.nodes.map((sticker) => (
          <article>
            <GatsbyImage
              image={getImage(sticker.image?.gatsbyImageData!)!}
              alt={sticker.title!}
              className="image-margin"
            />
            {/* <Link to={`/products/${sticker.id}`}> */}
            <h2>{sticker.title}</h2>
            <h4>{sticker.comment}</h4>
            {/* </Link> */}
          </article>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query MainQuery {
    allContentfulBlog {
      nodes {
        id
        comment
        title
        image {
          gatsbyImageData(
            height: 250
            width: 480
            formats: PNG
            placeholder: BLURRED
          )
        }
      }
    }
  }
`;

export const Head = () => {
  return <Seo title="Home"></Seo>;
};
