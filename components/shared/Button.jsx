import PropTypes from 'prop-types';
import { Flex, Box } from '@chakra-ui/react';
import { FaThumbsUp } from 'react-icons/fa';
function Button({ name }) {
  const instaGram = () => {
    if (name === 'LeBron James') {
      return `https://www.instagram.com/kingjames/`;
    } else if (name === 'Stephen Curry') {
      return `https://www.instagram.com/stephencurry30/`;
    }
  };

  return (
    <Flex gap="1.2rem" alignItems="center">
      <Box marginLeft="3.6rem">
        <button
          id="btn-follow"
          onClick={(e) => {
            const btn = document.getElementById('btn-follow');
            btn.style.border = '2px rgba(92, 148, 13, 0.7) solid';
            btn.style.backgroundColor = 'rgba(102, 168, 15, 0.5)';
            const followed = document.getElementById('follow');
            followed.innerHTML = `
            <div style="display: flex;">
            Followed             <img
              style="height: 25px; display: inline-block; transform: translate(8px, -2px);"
              src="https://i.giphy.com/media/CWTz6ddR9Hsj35kE4l/giphy.webp"
              alt=""
            />
            </div>
            `;
          }}
        >
          <a id="follow" target="_blank" rel="noreferrer" href={instaGram()}>
            Follow
            <span id="plus-sign"> +</span>
          </a>
        </button>
      </Box>
    </Flex>
  );
}

export default Button;

Button.propTypes = {
  name: PropTypes.string,
};
