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
      // return `lebrondunk.mp4`;
      return `antdunk1.mp4`;
    } else if (isLargerThanMID) {
      return `antdunk1.mp4`;
    } else {
      return `jadunk.mp4`;
    }
  }

  return (
    <>
      <div className="blackBackground"></div>
      <video
        src={determineText()}
        className="backgroundimg"
        autoPlay
        muted
        loop
      ></video>
    </>
  );
}

export default Backgroundimgvideo;
