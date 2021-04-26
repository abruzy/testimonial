import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  mainLinksStyle: {
    textDecoration: 'none',
    padding: '0 1rem',
    color: '#242120',
    fontSize: '13px',
    fontWeight: '400',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  navWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    paddingLeft: 84,
    paddingRight: 84,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 30
    }
  },
  signUpButtonStyle: {
    backgroundColor: '#FF5C00',
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 4,
    boxShadow: '1px 4px 8px rgba(239, 88, 3, 0.2)',
    color: 'white',
    fontWeight: '500'
  },
  secondaryLinksStyle: {
    padding: '0 64px',
    textDecoration: 'none',
    color: '#000000',
    fontSize: 13
  },
  secondary: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '55px',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    boxShadow: '1px 4px 4px rgba(0, 0, 0, 0.04)',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}))

const mainNavLinks = [
  {
    id: 1,
    text: 'ABOUT US',
    path: '/about-us'
  },
  {
    id: 2,
    text: 'STORIES',
    path: '/stories'
  },
  {
    id: 3,
    text: 'CONTACT',
    path: '/contact'
  },
  {
    id: 4,
    text: 'LOGIN',
    path: '/login'
  },
  {
    id: 5,
    text: 'SIGN UP',
    path: '/sign-up'
  }
]

const secondaryNavLinks = [
  {
    id: 1,
    text: 'MARKETPLACE',
    path: '/#!'
  },
  {
    id: 2,
    text: 'WHOLESALE CENTER',
    path: '/#!'
  },
  {
    id: 3,
    text: 'SELLER CENTER',
    path: '/#!'
  },
  {
    id: 4,
    text: 'SERVICES',
    path: '/#!'
  },
  {
    id: 5,
    text: 'INTERNSHIPS',
    path: '/#!'
  },
  {
    id: 6,
    text: 'EVENTS',
    path: '/#!'
  }
]

const NavBar = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.navWrapper}>
        <Box
          component='img'
          src='/images/Vasiti-Logo-black 1.svg'
          alt='brand-logo'
        />
        <Box flex='1' />
        {mainNavLinks.map(({ id, text, path }) => (
          <NavLink
            key={id}
            to={path}
            className={`${classes.mainLinksStyle} ${
              id === 5 ? classes.signUpButtonStyle : ''
            }`}
          >
            {text}
          </NavLink>
        ))}
      </Box>
      <Box className={classes.secondary}>
        {secondaryNavLinks.map(({ id, text, path }) => (
          <NavLink key={id} to={path} className={classes.secondaryLinksStyle}>
            {text}
          </NavLink>
        ))}
      </Box>
    </>
  )
}

export default NavBar
