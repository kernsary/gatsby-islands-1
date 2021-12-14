import React from 'react';

import {graphql, useStaticQuery} from 'gatsby';

import { Link } from 'gatsby';

export default function IslandList() {
    const data = useStaticQuery(graphql`
      {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                    }
                    fields {
                        slug
                    }
                }
            }
        }
      }
    `);

    return (
       <div>
           {data.allMarkdownRemark.edges.map(edge => (
               <div><Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link></div>
           ))}
       </div>
    );
}