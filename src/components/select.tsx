import { Box, MenuItem, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

const MuiSelect = () => {
	const [countries, setCountries] = useState<string[]>([]);
	const handleSelCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setCountries(typeof value === 'string' ? value.split(',') : value);
	};
	console.log(countries);

	return (
		<Box
			style={{
				width: '100vw',
				height: '100vh',
				alignItems: 'center',
				display: 'flex',
				justifyContent: 'center',
				textAlign: 'center',
			}}
		>
			<Box width='250px'>
				<TextField
					fullWidth
					label='Select country'
					value={countries}
					onChange={handleSelCountry}
					select
					SelectProps={{
						multiple: true,
					}}
					size='small'
					color='info'
					helperText='Select your country'
				>
					<MenuItem value='IND'>India</MenuItem>
					<MenuItem value='USA'>USA</MenuItem>
					<MenuItem value='AUS'>Australia</MenuItem>
				</TextField>
			</Box>
		</Box>
	);
};

export default MuiSelect;
