import React from 'react'
import Box from '@material-ui/core/Box'
import { Button, makeStyles, TextField, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  footerContainer: {
    backgroundColor: '#25201D',
    padding: '28px 0 102px'
  },
  newsLetter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    height: '50vh',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  formContainer: {
    padding: '0.25rem',
    display: 'flex',
    background: 'rgba(255, 255, 255, 0.2);',
    borderRadius: 6
  },
  inputField: {
    padding: '0 0.75rem',
    height: '3.5rem',
    flexGrow: 1,
    border: 'none',
    outline: 'none',
    borderBottom: 'none'
  },
  buttonStyle: {
    fontSize: 13,
    fontWeight: '500',
    backgroundColor: 'white',
    padding: '13px 24px'
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Box className={classes.footerContainer}>
      <Box pl={28} pr={60} className={classes.newsLetter}>
        <Box
          component='img'
          src='/images/subscribe-banner 1.svg'
          alt='subscribe banner'
          position='absolute'
          top='-50px'
        />
        <Box ml='auto' mt={-20}>
          <Box component='h1' color='white' fontSize='40px' fontWeight='700'>
            Be a member <br /> of our community 🎉
          </Box>
          <Box component='p' color='white' fontSize='14px' fontWeight='400'>
            We’d make sure you’re always first to know what’s <br /> happening
            on Vasiti—thus, the world.
          </Box>
          <form
            onSubmit={e => e.preventDefault()}
            className={classes.formContainer}
          >
            <TextField
              className={classes.inputField}
              placeholder='enter your email address'
              fullWidth
            />
            <Button className={classes.buttonStyle}>SUBSCRIBE</Button>
          </form>
        </Box>
      </Box>
      <Box display='flex' justifyContent='center'>
        <Box pr={15} color='white'>
          <Box component='h3'>Company</Box>
          <Typography>About us</Typography>
          <Typography>Term of Use</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Press & Media</Typography>
        </Box>

        <Box pr={15} color='white'>
          <Box component='h3'>Products</Box>
          <Typography>About us</Typography>
          <Typography>Term of Use</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Press & Media</Typography>
        </Box>

        <Box pr={15} color='white'>
          <Box component='h3'>Careers</Box>
          <Typography>About us</Typography>
          <Typography>Term of Use</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Press & Media</Typography>
        </Box>

        <Box pr={15} color='white'>
          <Box component='h3'>Get in touch</Box>
          <Typography>About us</Typography>
          <Typography>Term of Use</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Press & Media</Typography>
        </Box>

        <Box pr={15} color='white'>
          <Box component='h3'>Join our community</Box>
          <Typography>About us</Typography>
          <Typography>Term of Use</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Press & Media</Typography>
        </Box>

        <Box color='white'>
          <Box component='h3'>Join our community</Box>
          <Box component='img' src='/images/fb.svg' mr={2} />
          <Box component='img' src='/images/ig.svg' mr={2} />
          <Box component='img' src='/images/tw.svg' mr={2} />
          <Box component='img' src='/images/in.svg' />
          <Box component='p'>Email Newsletter</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
