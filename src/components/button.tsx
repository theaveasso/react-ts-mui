import AlarmOnRoundedIcon from '@mui/icons-material/AlarmOnRounded';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import {
	Button,
	ButtonGroup,
	IconButton,
	Stack,
	ToggleButton,
	ToggleButtonGroup,
} from '@mui/material';
import React, { useState } from 'react';

const MuiButton = () => {
	const [formats, setFormats] = useState<string[]>([]);
	const handleToggleButton = (
		_event: React.MouseEvent<HTMLElement>,
		updatedFormats: string[]
	) => {
		setFormats(updatedFormats);
	};
	console.log(formats);
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
			{/* Button Variant */}
			<Stack spacing={2} direction='row'>
				<Button variant='text'>Text</Button>
				<Button variant='contained'>Contained</Button>
				<Button variant='outlined'>Outlined</Button>

				{/* You can use <a> tag href to the variant  */}
				<Button variant='text' href='https://mui.com/'>
					Href
				</Button>
				{/* You also can disable elevation (shadow)*/}
				<Button variant='contained' disableElevation>
					Disable
				</Button>
				<Button variant='outlined' disableRipple>
					Disable
				</Button>
			</Stack>
			{/* Button Color */}
			<Stack spacing={2} direction='row'>
				<Button variant='contained' color='primary'>
					Primary
				</Button>
				<Button variant='contained' color='secondary'>
					Secondary
				</Button>
				<Button variant='text' color='warning'>
					Warning
				</Button>
				<Button variant='text' color='error'>
					Error
				</Button>
				<Button variant='outlined' color='success'>
					Success
				</Button>
				<Button variant='outlined' color='info'>
					Info
				</Button>
			</Stack>

			{/* Button Size */}
			<Stack display='block' spacing={2} direction='row'>
				<Button variant='outlined' size='small'>
					Small
				</Button>
				<Button variant='contained' size='medium'>
					Medium
				</Button>
				<Button variant='outlined' size='large'>
					Large
				</Button>
			</Stack>

			{/* Icon */}
			<Stack display='block' spacing={2} direction='row'>
				<Button variant='contained' startIcon={<AlarmOnRoundedIcon />}>
					Alarm
				</Button>
				<Button
					variant='outlined'
					color='warning'
					endIcon={<AlarmOnRoundedIcon />}
				>
					Alarm
				</Button>
				<IconButton aria-label='alarm' color='error' size='small'>
					<AlarmOnRoundedIcon />
				</IconButton>
			</Stack>
			{/* Button Group */}
			<Stack direction='row'>
				<ButtonGroup
					variant='outlined'
					color='warning'
					size='large'
					aria-label='alignment button group'
				>
					<Button>Previous</Button>
					<Button>Current</Button>
					<Button>Next</Button>
				</ButtonGroup>
			</Stack>

			{/* Toggle Button */}
			<Stack direction='row' spacing={2}>
				<ToggleButtonGroup
					aria-label='alignment text formatting'
					onChange={handleToggleButton}
				>
					<ToggleButton value='bold' aria-label='bold'>
						<FormatBoldIcon />
					</ToggleButton>
					<ToggleButton value='italic' arial-label='italic'>
						<FormatItalicIcon />
					</ToggleButton>
					<ToggleButton value='underlined' arial-label='underlined'>
						<FormatUnderlinedIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</Stack>
		</Stack>
	);
};

export default MuiButton;
