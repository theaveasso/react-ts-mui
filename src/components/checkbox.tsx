import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorderRounded';
import {
	Box,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
} from '@mui/material';
import React, { useState } from 'react';

const MuiCheckbox = () => {
	const [value, setValue] = useState(false);
	const [skillValue, setSkillValue] = useState<string[]>([]);

	const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.checked);
	};
	const handleSkillCheckbox = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const index = skillValue.indexOf(event.target.value);
		if (index === -1) {
			setSkillValue([...skillValue, event.target.value]);
		} else {
			setSkillValue(
				skillValue.filter((skill) => skill !== event.target.value)
			);
		}
	};
	console.log(skillValue);
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
			<Box>
				<FormControlLabel
					control={
						<Checkbox
							onChange={handleCheckbox}
							checked={value}
							size='small'
						/>
					}
					label='I accept terms and conditions'
				/>
				<Box>
					<Checkbox
						icon={<BookmarkBorderIcon />}
						checkedIcon={<BookmarkIcon />}
						checked={value}
						onChange={handleCheckbox}
						disableTouchRipple
					/>
				</Box>
				<Box>
					<FormControl>
						<FormLabel>Skills</FormLabel>
						<FormGroup row>
							<FormControlLabel
								label='HTML'
								value='html'
								control={
									<Checkbox
										size='small'
										color='error'
										checked={skillValue.includes('html')}
										onChange={handleSkillCheckbox}
									/>
								}
							></FormControlLabel>
							<FormControlLabel
								label='CSS'
								value='css'
								control={
									<Checkbox
										size='small'
										color='error'
										checked={skillValue.includes('css')}
										onChange={handleSkillCheckbox}
									/>
								}
							></FormControlLabel>
							<FormControlLabel
								value='javascript'
								label='JavaScript'
								control={
									<Checkbox
										size='small'
										color='error'
										checked={skillValue.includes(
											'javascript'
										)}
										onChange={handleSkillCheckbox}
									/>
								}
							/>
						</FormGroup>
					</FormControl>
				</Box>
			</Box>
		</Box>
	);
};

export default MuiCheckbox;
