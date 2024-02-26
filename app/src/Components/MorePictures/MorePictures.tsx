import React, { useEffect, useState } from "react";
import { imageLibrary } from "../../imageLibrary";
import Picture from "../Picture/Picture";
import "./MorePictures.css";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { Link } from "react-router-dom";

export default function MorePictures() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const library = [...imageLibrary].reverse();

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const breakBlocks = () => {
    if (windowWidth >= 768) {
      const blocks = [
        library.slice(0, library.length / 3),
        library.slice(
          library.length / 3,
          library.length / (3 / 2)
        ),
        library.slice(library.length / (3 / 2), library.length),
      ];
      return blocks;
    }
    const blocks = [
      library.slice(0, imageLibrary.length / 2),
      library.slice(library.length / 2, imageLibrary.length),
    ];
    return blocks;
  };

  const splitImageBlocks = breakBlocks();
  const layoutCssClass =
    windowWidth >= 768
      ? "more-projects__pictures--lg"
      : "more-projects__pictures--sm";

  return (
    <>
      <ScrollToTop />
      <section className="more-projects">
        <header className="more-projects__header">
          <Link to="/">
            <h1>
              Blackeye <span>V</span>isuals
            </h1>
          </Link>
        </header>
        '
        <div className={`more-projects__pictures ${layoutCssClass}`}>
          {splitImageBlocks.map((block) => (
            <ul>
              {block.map((image) => (
                <li>
                  <Picture image={image} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>
    </>
  );
}
