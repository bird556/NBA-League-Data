import PropTypes from 'prop-types';
import { Flex, Box } from '@chakra-ui/react';
function Button({ name }) {
  const instaGram = () => {
    if (name === 'LeBron James') {
      return `https://www.instagram.com/kingjames/`;
    }
  };
  console.log(instaGram());

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
            followed.innerHTML = `Followed`;
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
