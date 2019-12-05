import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import "@fremtind/jkl-core/core.min.css";
import "../pages/style.scss";

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { html } = markdownRemark;

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    );
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`;
