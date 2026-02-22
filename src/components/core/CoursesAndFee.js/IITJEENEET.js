import React from "react";
import SEO from "../../common/SEO";
import { SEO_DATA } from "../../../data/seoData";

function IITJEENEET() {
  return (
    <div className="flex flex-1 justify-center items-center text-white text-[16px] md:text-3xl text-center my-[100px] mx-4">
      <SEO 
        title={SEO_DATA.iitJeeNeet.title}
        description={SEO_DATA.iitJeeNeet.description}
        keywords={SEO_DATA.iitJeeNeet.keywords}
        url={SEO_DATA.iitJeeNeet.url}
      />
      Dear Visitor,
      <br />
      <br />
      Page information available soon...
      <br />
      <br />
      Thanks, New Colony Kakarmatta Varanasi, Uttar Pradesh.
    </div>
  );
}

export default IITJEENEET;
