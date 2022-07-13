import { Typography } from '@mui/material'
import React from 'react'

const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1" component='div' gutterBottom>h1 heading</Typography>
        <Typography variant="h2">h2 heading</Typography>
        <Typography variant="h3">h3 heading</Typography>
        <Typography variant="h4">h4 heading</Typography>
        <Typography variant="h5">h5 heading</Typography>
        <Typography variant="h6">h6 heading</Typography>

        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitle2</Typography>

        <Typography variant="body1"> body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
        </Typography>
        <hr/>
        <Typography variant="body2"> body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
        </Typography>
        <hr/>

        <Typography variant='button'>button text</Typography><br/>
        <Typography variant='caption'>caption text</Typography><br/>
        <Typography variant='overline'>overline text</Typography>


    </div>
  )
}

export default MuiTypography