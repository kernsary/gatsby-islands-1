import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/Layout';

// import styles from './island.module.css';

export default function IslandTemplate({ data }) {
    return (
        <Layout>
            <div>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
            }
        }
    }
`;
