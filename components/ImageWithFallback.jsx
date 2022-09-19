import React, { useState } from 'react';
import Image from 'next/image';

const ImageWithFallback = (props) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      className="backgroundimg-box"
      {...rest}
      alt=""
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback;
