import {
	Box,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from '@mui/material';
import React, { useState } from 'react';

const MuiRadioButton = () => {
	const [value, setValue] = useState('');
	const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};
	console.log(value);
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
			<FormControl id='job-experience-group-label'>
				<FormLabel>Years of experience</FormLabel>
				<RadioGroup
					name='job-experience-group'
					aria-labelledby='job-experience-group'
					value={value}
					onChange={handleValue}
					row
				>
					<FormControlLabel
						control={<Radio size='small' />}
						label='0-2'
						value='0-2'
					/>
					<FormControlLabel
						control={<Radio size='small' />}
						label='3-5'
						value='3-5'
					/>
					<FormControlLabel
						control={<Radio size='small' />}
						label='6-10'
						value='6-10'
					/>
				</RadioGroup>
			</FormControl>
		</Box>
	);
};

export default MuiRadioButton;
