import { Blurhash } from "react-blurhash";
import {PictureType } from "../types";
import { useState } from "react";

const Picture = ({image, extraClasses = ''}: PropType) => {
  const [loaded, setLoaded] = useState(false);


  return (
    <>
    {!loaded && 
      <img className={extraClasses} src={image.blurImage} alt="portrait" loading="lazy"/>
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