import { Flex, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function StatsBox({ perGame, stat }) {
  return (
    <Box w="5rem">
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <p>{perGame}</p>
        <h4>{stat ? stat : 0}</h4>
      </Flex>
    </Box>
  );
}

export default StatsBox;

StatsBox.propTypes = {
  perGame: PropTypes.string,
  stat: PropTypes.string,
};
