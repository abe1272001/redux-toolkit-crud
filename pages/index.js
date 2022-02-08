import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import UserCard from '../components/UserCard.jsx';
import { Flex, Box, Input, Stack, Button } from '@chakra-ui/react';
// import styles from '../styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../features/Users/index.js';
export default function Home() {
	const userList = useSelector((state) => state.users.value);
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [userName, setUserName] = useState('');

	const handleAddUser = () => {
		const trimedName = name.trim();
		const trimedUserName = userName.trim();
		if (trimedName === '' || trimedUserName === '') {
			return;
		}

		dispatch(
			addUser({
				id: userList[userList.length - 1].id + 1,
				name: trimedName,
				userName: trimedUserName,
			})
		);
		// reset input
		setName('');
		setUserName('');
		// console.log(userList);
	};
	// console.log(userList);
	return (
		<div>
			<Head>
				<title>Redux Toolkit</title>
				<meta name="description" content="Redux Toolkit CRUD example" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Flex direction="column" mt={3}>
				<Stack>
					<Input
						type="text"
						name="name"
						placeholder="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						type="text"
						name="userName"
						placeholder="Username"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>
					<Button onClick={handleAddUser}>Add User</Button>
				</Stack>
				{/* <Flex> */}
				<div className="user-list">
					{userList.map((user) => {
						return (
							<UserCard
								key={user.id}
								name={user.name}
								userName={user.userName}
								id={user.id}
							/>
						);
					})}
				</div>
				{/* </Flex> */}
			</Flex>
		</div>
	);
}
