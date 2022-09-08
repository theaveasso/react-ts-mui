import { Typography } from '@mui/material';

const MuiTypography = () => {
	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				alignItems: 'center',
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				textAlign: 'center',
			}}
		>
			<Typography variant='h1'>Heading 1</Typography>
			<Typography variant='h2'>Heading 2</Typography>
			<Typography variant='h3'>Heading 3</Typography>
			<Typography variant='h4'>Heading 4</Typography>
			<Typography variant='h5'>Heading 5</Typography>
			<Typography variant='h6'>Heading 6</Typography>

			<Typography variant='subtitle1'>Sub title 1</Typography>
			<Typography variant='subtitle2'>Sun title 2</Typography>

			<Typography variant='body1'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Consequatur deserunt, ad earum dicta autem odit qui
				perspiciatis. Optio et provident harum fuga iusto nostrum, illum
				quas blanditiis, perferendis distinctio necessitatibus.
			</Typography>
			<Typography variant='body2'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
				commodi sint amet maiores explicabo ab perferendis magnam
				repudiandae numquam, cumque blanditiis excepturi exercitationem
				dignissimos molestias! Eaque amet voluptatibus dicta ducimus?
			</Typography>

			{/* For semantic HTML */}
			{/* if you want to use h5 style but with h1 tag */}
			<Typography variant='h4' component='h1' gutterBottom>
				Heading 1 tag with Heading 4 style
			</Typography>
		</div>
	);
};

export default MuiTypography;
