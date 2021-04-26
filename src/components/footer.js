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
    height: '50vh',
    paddingLeft: 224,
    paddingRight: 480,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      padding: '0 30px',
      height: '100%'
    }
  },
  formContainer: {
    padding: '0.25rem',
    display: 'flex',
    background: 'rgba(255, 255, 255, 0.2);',
    borderRadius: 6,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 70
    }
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
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      placeItems: 'center',
      gridGap: '2rem'
    }
  },
  newsLetterContent: {
    marginTop: -160,
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0
    }
  },
  newsHeading: {
    color: 'white',
    fontSize: 40,
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      fontSize: 30
    }
  },
  footerLinks: {
    color: 'white',
    paddingRight: 120,
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0
    }
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Box className={classes.footerContainer}>
      <Box className={classes.newsLetter}>
        <Box
          component='img'
          src='/images/subscribe-banner 1.svg'
          alt='subscribe banner'
          maxWidth='100%'
        />
        <Box className={classes.newsLetterContent}>
          <Box component='h1' className={classes.newsHeading}>
            Be a member <br /> of our community 🎉
          </Box>
          <Box component='p' color='white' fontSize='13px' fontWeight='400'>
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
      <Box className={classes.footerContent}>
        <Box className={classes.footerLinks}>
          <Box component='h3'>Company</Box>
          <Typography>About us</Typography>
          <Typography>Term of Use</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Press & Media</Typography>
        </Box>

        <Box className={classes.footerLinks}>
          <Box component='h3'>Products</Box>
          <Typography>About us</Typography>
          <Typography>Term of Use</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Press & Media</Typography>
        </Box>

        <Box className={classes.footerLinks}>
          <Box component='h3'>Careers</Box>
          <Typography>About us</Typography>
          <Typography>Term of Use</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Press & Media</Typography>
        </Box>

        <Box className={classes.footerLinks}>
          <Box component='h3'>Get in touch</Box>
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
