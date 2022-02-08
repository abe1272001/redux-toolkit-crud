import { Box, Container } from '@chakra-ui/react';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';

function main({ children }) {
	return (
		<Box as="main" pb={8}>
			<Container maxW="container.md">
				<Navbar />
				{children}
				<Footer />
			</Container>
		</Box>
	);
}

export default main;
