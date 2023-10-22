/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/PoImage.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */

/**
 *
 */
const projectList = [
  {
    title: "PHP Certification Final Proyect",
    description: "This is the final proyect for the PHP Certification. It's a web page.",
    url: "https://github.com/EpicModoDios/Proyecto_Final_PHP_15_03_2021",
  },

  {
    title: "Public POO drive folder",
    description: "This is a public drive folder with all the POO information.",
    url: "https://drive.google.com/drive/folders/1cXOhnBJIFbbmSksRkCurSOpOyr1uoBDM?usp=sharing",
  },

  {
    title: "Public Data structure drive folder",
    description: "This is a public drive folder with all the Data structure information.",
    url: "https://drive.google.com/drive/folders/1-1boOB6grvKCgbC6-kpKUaHXOFsyZkT3?usp=share_link",
  },

  {
    title: "Public discrete mathematics drive folder",
    description: "This is a public drive folder with all the discrete mathematics information.",
    url: "https://drive.google.com/drive/folders/1NDuLqvvN_aTJFO2ihdrdaHtRL92FdhB0?usp=share_link",
  },
];

const MoreInfo = () => {
  return (
    <section className="padding" id="MoreInfo">
      <h2 style={{ textAlign: "center" }}>MoreInfo</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
