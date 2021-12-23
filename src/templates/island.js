import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/Layout';

// import styles from './island.module.css';

export default function IslandTemplate({ data }) {
    return (
        <Layout>
            <div>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <p>{data.markdownRemark.frontmatter.information}</p>
                <img src={data.markdownRemark.frontmatter.image} alt={data.markdownRemark.frontmatter.title}></img>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                information
                image
            }
        }
    }
`;
