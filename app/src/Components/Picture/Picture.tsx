import { Blurhash } from "react-blurhash";
import {PictureType } from "../types";
import { useState } from "react";
import LazyLoad from "react-lazy-load";

const Picture = ({image, extraClasses = ''}: PropType) => {
  const [loaded, setLoaded] = useState(false);

  console.log(loaded);

  return (
    <>
    {!loaded && 
      <Blurhash 
        hash={image.blurHash}
        width={400}
        height={500}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
    }
      <img 
        className={extraClasses}
        src={image.image} 
        alt="portrait" 
        onLoad={() => setLoaded(true)}
        style={loaded ? {} : {'display': 'none'}}
      />
    </>
  );
}

export default Picture;

type PropType = {
  image: PictureType,
  extraClasses?: string,
}