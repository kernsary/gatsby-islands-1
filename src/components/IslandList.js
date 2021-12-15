import React from 'react';

import {graphql, useStaticQuery} from 'gatsby';

import { Link } from 'gatsby';

export default function IslandList( {region} ) {


    const data = useStaticQuery(graphql`
      {
        allMarkdownRemark
            (
            sort: { fields: frontmatter___title, order: ASC }
            )
         {
            edges {
                node {
                    frontmatter {
                        title
                        region
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
           <h3>{region}</h3>
           <div>
               {data.allMarkdownRemark.edges.map(edge => (
                   <div><Link to={edge.node.fields.slug}>{edge.node.frontmatter.region === region && edge.node.frontmatter.title}</Link></div>
               ))}
           </div>
        </div>
    );
}