import {PictureType } from "../types";
import { useState } from "react";
import './Picture.css';

const Picture = ({image, extraClasses = ''}: PropType) => {
  const [loaded, setLoaded] = useState(false);
  const [startLoading, setStartLoading] = useState(false);
  const backgroundImage = {'backgroundImage': `url(${image.blurImage})`};
  const revealImage = loaded ? 'picture__show' : 'picture__hide';

  return (
    <>

    <div style={backgroundImage} className={`picture-wrapper ${!loaded && 'picture-wrapper--loading'}`}>
      {!loaded && <img 
          className={`${extraClasses} picture__loading`}
          src={image.blurImage}
          alt="portrait" 
          loading="lazy"
          onLoad={() => {setStartLoading(true)}}
        />
      }
      <img 
          className={`${extraClasses} ${revealImage}`}
          src={image.image}
          alt="portrait" 
          onLoad={() => setLoaded(true)}
          loading={startLoading ? 'eager' : 'lazy'}
        />
    </div>
    </>
  );
}

export default Picture;

type PropType = {
  image: PictureType,
  extraClasses?: string,
}