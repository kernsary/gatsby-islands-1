import React from 'react';

import Island from './Island';

export default function IslandList({data}) {

    return (
       <div>
           {data.allMarkdownRemark.edges.map(edge => (
               <Island edge={edge.node}/>
           ))}
       </div>
    );
}