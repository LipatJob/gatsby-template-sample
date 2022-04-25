import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectSection() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              summary
              headerImage
              title
            }
          }
        }
      }
    }
  `);

  const projects = data.allMdx.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    summary: node.frontmatter.summary,
    headerImage: node.frontmatter.headerImage,
  }));

  return (
    <div className="grid w-full max-w-screen-md grid-cols-2 gap-8 mx-auto">
      {projects.map(({ title, summary, headerImage }) => (
        <ProjectItem
          title={title}
          summary={summary}
          headerImage={headerImage}
        />
      ))}
    </div>
  );
}
