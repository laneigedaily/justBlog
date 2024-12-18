import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";
import { graphql, Link, PageProps } from "gatsby";

export default function Blog({ data }: PageProps<Queries.BlogPostQuery>) {
  return (
    <Layout title="Blog">
      <section className="grid">
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h3>{file.frontmatter?.title}</h3>
              <h5>
                {file.frontmatter?.author} in : {file.frontmatter?.category}
              </h5>
              <h6>{file.frontmatter?.date}</h6>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPost {
    allMdx {
      nodes {
        frontmatter {
          slug
          title
          category
          date(formatString: "YYYY.MM.DD")
          author
        }
      }
    }
  }
`;

export const Head = () => {
  return <Seo title="Blog"></Seo>;
};
