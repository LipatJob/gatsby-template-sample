import { Link } from "gatsby";
import React from "react";

export default function ProjectItem({ title, summary, headerImage }) {
  return (
    <Link to="https://lipatjobj.gatsbyjs.io/">
      <div className="transition shadow hover:scale-105 hover:shadow-lg">
        <img src={headerImage} className="w-full" />
        <div className="p-4 min-h-[6em]">
          <p className="mb-2 text-lg font-bold">{title}</p>
          <p>{summary}</p>
        </div>
      </div>
    </Link>
  );
}
