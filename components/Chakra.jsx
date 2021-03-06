import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
};

const theme = extendTheme({ colors });

const Chakra = ({ children }) => {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Chakra;
