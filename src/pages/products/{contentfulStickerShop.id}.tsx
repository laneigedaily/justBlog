import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Products({
  data,
}: PageProps<Queries.ProductDetailQuery>) {
  const image = getImage(data.contentfulStickerShop?.preview!);
  return (
    <Layout title={data.contentfulStickerShop?.name!}>
      <GatsbyImage image={image!} alt={data.contentfulStickerShop?.name!} />
      <h2>${data.contentfulStickerShop?.price}</h2>
    </Layout>
  );
}

export const query = graphql`
  query ProductDetail($id: String) {
    contentfulStickerShop(id: { eq: $id }) {
      name
      price
      preview {
        gatsbyImageData(height: 450)
      }
    }
  }
`;
