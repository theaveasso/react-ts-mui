import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import { useState } from 'react';

const MuiTextField = () => {
	const [showHidden, setShowHidden] = useState<boolean>(false);
	const handleToggleShowHidden = () => {
		setShowHidden((prev) => !prev);
	};

	return (
		<Stack
			spacing={4}
			style={{
				width: '100vw',
				height: '100vh',
				alignItems: 'center',
				display: 'flex',
				justifyContent: 'center',
				textAlign: 'center',
			}}
		>
			<Stack spacing={2} direction='row'>
				<TextField label='Outline' variant='outlined' />
				<TextField label='Filled' variant='filled' required />
				<TextField
					label='Standard'
					variant='standard'
					color='success'
				/>
			</Stack>

			<Stack spacing={2} direction='row'>
				<TextField
					label='Weight'
					InputProps={{
						endAdornment: (
							<InputAdornment position='end'>Kg</InputAdornment>
						),
					}}
				/>
				<TextField
					label='Amount'
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>$</InputAdornment>
						),
					}}
				/>
			</Stack>
			<Stack spacing={2} direction='column'>
				<TextField label='Username' required />
				<TextField
					label='Password'
					helperText='8 or more characters'
					type={showHidden ? 'password' : 'text'}
					InputProps={{
						endAdornment: (
							<InputAdornment position='end'>
								{showHidden ? (
									<VisibilityRoundedIcon
										onClick={handleToggleShowHidden}
									/>
								) : (
									<VisibilityOffRoundedIcon
										onClick={handleToggleShowHidden}
									/>
								)}
							</InputAdornment>
						),
					}}
					required
				/>
				<Button variant='contained'>Log In</Button>
				<Button variant='text'>Forget Password</Button>
			</Stack>
		</Stack>
	);
};

export default MuiTextField;
