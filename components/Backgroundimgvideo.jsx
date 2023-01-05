import React from 'react';
import { Image, useMediaQuery } from '@chakra-ui/react';
function Backgroundimgvideo() {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  const [isLargerThanHD, isDisplayingInBrowser] = useMediaQuery([
    '(min-width: 1920px)',
    '(display-mode: browser)',
  ]);

  const [isLargerThanMID, isDisplayingInBrowserMID] = useMediaQuery([
    '(min-width: 1280px)',
    '(display-mode: browser)',
  ]);

  function determineText() {
    if (isLargerThanHD) {
      return (
        // <video
        //   src="antdunk1.mp4"
        //   className="backgroundimg"
        //   autoPlay
        //   muted
        //   loop
        // ></video>
        <Image
          src="/bron.jpg"
          alt="Background Image"
          className="backgroundimg"
          fallbackSrc="/1 copy.jpg"
        />
      );
    } else {
      return (
        <Image
          src="/bron.jpg"
          alt="Background Image"
          className="backgroundimg"
          fallbackSrc="/1 copy.jpg"
        />
      );
    }
  }

  return (
    <>
      <div className="blackBackground"></div>
      {determineText()}
    </>
  );
}

export default Backgroundimgvideo;
