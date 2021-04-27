import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  paper: {
    borderRadius: '16px',
    minHeight: '400px',
    minWidth: '300px',
    [theme.breakpoints.up('md')]: {
      minHeight: '627px',
      minWidth: '527px'
    }
  },
  backDropStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  headingStyle: {
    paddingTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    fontSize: 28,
    fontWeight: 700
  },
  wrapper: {
    padding: '65px 85px'
  },
  closeButton: {
    padding: '19px 98px',
    boxShadow: '2px 8px 30px rgba(230, 83, 0, 0.18)',
    borderRadius: 8,
    fontSize: 20,
    fontWeight: 600,
    textTransform: 'capitalize',
    marginTop: 48
  }
}))

const SuccessfullyShared = ({ openModal, handleClose }) => {
  const classes = useStyles()

  return (
    <>
      <Dialog
        onClose={handleClose}
        PaperProps={{
          className: classes.paper
        }}
        BackdropProps={{
          className: classes.backDropStyle
        }}
        open={openModal}
      >
        <Box>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            className={classes.wrapper}
          >
            <Box component='img' src='/images/Group 77.svg' alt='success' />
            <Box
              component='h2'
              textAlign='center'
              fontSize='28px'
              fontWeight='700'
              lineHeight='33px'
              mb={0}
            >
              Thank you for <br /> sharing your story!
            </Box>
            <Box
              component='p'
              textAlign='center'
              fontSize='16px'
              lineHeight='28px'
              fontWeight='400'
              color='#4A4A4A'
            >
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor incididunt <br /> ut labore et dolore magna
              aliqua.
            </Box>
            <Button
              onClick={handleClose}
              variant='contained'
              color='secondary'
              className={classes.closeButton}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  )
}

export default SuccessfullyShared
