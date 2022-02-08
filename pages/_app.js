import Layout from '../components/layouts/main.jsx';
import { Provider as ReduxProvider } from 'react-redux';
import Chakra from '../components/Chakra.jsx';

import { store } from '../app/store.js';
// import '../styles/globals.css';

function WebSite({ Component, pageProps }) {
	return (
		<ReduxProvider store={store}>
			<Chakra>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Chakra>
		</ReduxProvider>
	);
}

export default WebSite;
