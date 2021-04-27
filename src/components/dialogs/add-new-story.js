import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Radio,
  RadioGroup,
  TextareaAutosize,
  TextField,
  Typography
} from '@material-ui/core'

// import cancelIcon from '../../assets/images/cancelIcon.svg'
// import cautionIcon from '../../assets/images/cautionIcon.png'
import SuccessfullyShared from './successfully-shared'

const useStyles = makeStyles(theme => ({
  paper: {
    borderRadius: '16px',
    minHeight: '400px',
    minWidth: '300px',
    [theme.breakpoints.up('md')]: {
      minHeight: '705px',
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
  formContainer: {
    padding: '43px 32px'
  },
  shareStoryButton: {
    display: 'block',
    marginLeft: 'auto',
    padding: '19px 40px',
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: 600,
    boxShadow: '2px 8px 30px rgba(230, 83, 0, 0.18)',
    borderRadius: 8
  },
  inputLabel: {
    marginBottom: 13
  }
}))

const AddNewStory = ({ openModal, handleClose, storyList, setStoryList }) => {
  const classes = useStyles()
  const [openSuccessModal, setOpenSuccessModal] = useState(false)
  const [newStory, setNewStory] = useState({
    profileImg: '',
    firstName: '',
    lastName: '',
    story: '',
    type: ''
  })

  const handleModalClose = () => setOpenSuccessModal(false)
  const handleChange = e => {
    setNewStory(prevStory => ({
      ...prevStory,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = e => {
    e.preventDefault()
    const copyOfStoryList = [...storyList]
    copyOfStoryList.push(newStory)
    setStoryList(copyOfStoryList)
    handleClose()
  }

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
          <Box component='h2' className={classes.headingStyle}>
            Share your amazing story!
          </Box>
          <form onSubmit={handleSubmit} className={classes.formContainer}>
            <Grid container spacing={4}>
              <Grid item md={12}>
                <InputLabel className={classes.inputLabel}>
                  Upload your Picture
                </InputLabel>
                <FormControl fullWidth>
                  <TextField
                    type='file'
                    name='profileImg'
                    value={newStory.profileImg}
                    onChange={handleChange}
                    placeholder='Choose Image'
                    variant='outlined'
                  />
                </FormControl>
              </Grid>
              <Grid item md={6}>
                <InputLabel className={classes.inputLabel}>
                  First Name
                </InputLabel>
                <FormControl fullWidth>
                  <TextField
                    name='firstName'
                    value={newStory.firstName}
                    onChange={handleChange}
                    variant='outlined'
                  />
                </FormControl>
              </Grid>
              <Grid item md={6}>
                <InputLabel className={classes.inputLabel}>
                  Last Name
                </InputLabel>
                <FormControl fullWidth>
                  <TextField
                    name='lastName'
                    value={newStory.lastName}
                    onChange={handleChange}
                    variant='outlined'
                  />
                </FormControl>
              </Grid>
              <Grid item md={12}>
                <InputLabel className={classes.inputLabel}>
                  Share your story
                </InputLabel>
                <FormControl fullWidth>
                  <TextareaAutosize
                    name='story'
                    value={newStory.story}
                    onChange={handleChange}
                    rowsMin={7}
                  />
                </FormControl>
              </Grid>
              <Grid item md={6}>
                <Typography>What did you interact with Vasiti as?</Typography>
              </Grid>
              <Grid item md={6}>
                <FormControl fullWidth>
                  <RadioGroup
                    name='type'
                    value={newStory.type}
                    onChange={handleChange}
                    row
                  >
                    <FormControlLabel
                      value='Customer'
                      control={<Radio color='secondary' />}
                      label='Customer'
                    />
                    <FormControlLabel
                      value='Vendor'
                      control={<Radio color='secondary' />}
                      label='Vendor'
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item md={12}>
                <Button
                  onClick={() => {
                    handleClose()
                    setOpenSuccessModal(true)
                  }}
                  type='submit'
                  variant='contained'
                  color='secondary'
                  className={classes.shareStoryButton}
                >
                  Share your story!
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Dialog>
      <SuccessfullyShared
        openModal={openSuccessModal}
        handleClose={handleModalClose}
      />
    </>
  )
}

export default AddNewStory
