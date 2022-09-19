import Router from 'next/router';

const Lineloader = () => {
  Router.events.on('routeChangeStart', () => {
    const blur = document.getElementById('blurEffect');
    const animation = document.getElementById('animationEffect');
    blur.classList.add('blurry');
    animation.classList.add('lds-ellipsis');
  });

  Router.events.on('routeChangeComplete', () => {
    const blur = document.getElementById('blurEffect');
    const animation = document.getElementById('animationEffect');
    blur.classList.remove('blurry');
    animation.classList.remove('lds-ellipsis');
  });

  return (
    <>
      <div
        //
        id="blurEffect"
        className=""
        // className="blurry"
      >
        <div
          id="animationEffect"
          className=""
          // className="lds-ellipsis"
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Lineloader;
