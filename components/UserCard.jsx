import { useState } from 'react';
import { Box, Heading, Text, Button, Input } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { deleteUser, updateUser } from '../features/Users/index.js';
import { useSelector, useDispatch } from 'react-redux';

function UserCard({ id, name, userName }) {
	const [newUsername, setNewUsername] = useState('');
	const dispatch = useDispatch();
	const handleUserDelete = () => {
		dispatch(deleteUser(id));
	};
	const handleUserUpdate = (e) => {
		if (e.key === 'Enter') {
			dispatch(updateUser({ id, userName: newUsername }));
			setNewUsername('');
		}
	};
	return (
		<Box
			maxW="sm"
			borderWidth="1px"
			borderRadius="lg"
			px={4}
			py={2}
			mx="auto"
			my={3}
			overflow="hidden"
		>
			<Heading mb={2}>{name}</Heading>
			<Text fontSize="xl" mb={2}>
				{userName}
			</Text>
			<Input
				type="text"
				placeholder="update user name..."
				value={newUsername}
				onChange={(e) => setNewUsername(e.target.value)}
				onKeyPress={handleUserUpdate}
			/>
			<Box textAlign="right">
				<Button
					leftIcon={<CloseIcon color="white" />}
					colorScheme="red"
					size="sm"
					onClick={handleUserDelete}
				>
					Delete
				</Button>
			</Box>
		</Box>
	);
}

export default UserCard;
