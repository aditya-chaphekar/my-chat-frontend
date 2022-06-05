import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Grid, Hidden, InputAdornment, TextField, Typography } from '@mui/material'

const Login = () => (
  <Grid container justifyContent='center'>
    <Hidden smDown>
      <Grid item sm={4} />
    </Hidden>
    <Grid
      item
      xs={12}
      md={4}
      p={{ xs: 3, md: 10 }}
      textAlign='center'
      justifyContent='center'
      direction='column'
    >
      <Typography fontStyle='bold' variant='h3' my={{ xs: 5, md: 10 }}>
        Log in.
      </Typography>
      <TextField
        sx={{ width: '300px', paddingBottom: '50px' }}
        placeholder='Phone Number'
        InputProps={{
          // className: 'mobileNumber',
          startAdornment: (
            <InputAdornment position='start'>
              <FontAwesomeIcon icon={faMobileAlt} />
            </InputAdornment>
          ),
        }}
      />
      <Button variant='contained' sx={{ width: '300px' }}>
        Send OTP
      </Button>
    </Grid>
    <Hidden mdDown>
      <Grid item md={4} />
    </Hidden>
  </Grid>
)

export default Login
