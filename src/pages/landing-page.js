import { Box, Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import AddNewStory from '../components/dialogs/add-new-story'

const useStyles = makeStyles(theme => ({
  customer: {
    backgroundColor: '#222222',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse'
    }
  },
  customer2: {
    backgroundColor: '#FFF8F5',
    display: 'flex',
    justifyContent: 'center',
    padding: '5rem 0',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse'
    }
  },
  shareStory: {
    textTransform: 'uppercase'
  },
  gridContainer: {
    width: '70%',
    margin: '4rem auto'
  },
  generalStyle: {
    borderRadius: 4,
    padding: '0.5rem 1rem',
    marginLeft: '1rem',
    fontWeight: 500,
    fontSize: 13
  },
  genStyle: {
    borderRadius: 4,
    padding: '0.5rem 1rem',
    fontWeight: 500,
    fontSize: 13
  },
  customerStyle: {
    backgroundColor: '#EEF8FF',
    color: '#0D019A'
  },
  vendorStyle: {
    backgroundColor: '#F0FFEE',
    color: '#049A01'
  },
  wonderfullCustomer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '2rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      paddingLeft: 10,
      paddingRight: 10
    }
  },
  heading: {
    fontSize: '48px',
    fontWeight: '700',
    color: '#000',
    [theme.breakpoints.down('sm')]: {
      fontSize: 32
    }
  },
  experienceContainer: {
    maxWidth: '30%',
    marginTop: 64,
    marginLeft: 30,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      marginLeft: 0,
      padding: '0 2rem'
    }
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24
    }
  },
  shareStyle: {
    marginTop: 64,
    [theme.breakpoints.down('sm')]: {
      marginBottom: {
        marginBottom: 54
      }
    }
  },
  josiahExperience: {
    maxWidth: '30%',
    marginTop: 64,
    marginRight: 144,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      marginRight: 0,
      padding: '0 2rem'
    }
  },
  heading2: {
    color: '#242120',
    fontSize: 32,
    fontWeight: '700',
    [theme.breakpoints.down('sm')]: {
      fontSize: 24
    }
  }
}))

const customerStories = [
  {
    id: 1,
    customerImg: '/images/Ellipse 22.svg',
    customerName: 'Joseph Ike',
    location: 'In Ikeja',
    vendor: 'CUSTOMER',
    message:
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.'
  },
  {
    id: 2,
    customerImg: '/images/Ellipse 23.svg',
    customerName: 'Adetola Fashina',
    location: 'Ibadan',
    vendor: 'CUSTOMER',
    message:
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    id: 3,
    customerImg: '/images/Ellipse 24.svg',
    customerName: 'Emmanuel Fayemi',
    location: 'In Akoka',
    vendor: 'CUSTOMER',
    message:
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
  },
  {
    id: 4,
    customerImg: '/images/Ellipse 22 (1).svg',
    customerName: 'Chisom Obilor',
    location: 'In Magodo',
    vendor: 'VENDOR',
    message:
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.'
  },
  {
    id: 5,
    customerImg: '/images/Ellipse 23 (1).svg',
    customerName: 'Adunoluwa Adeyemi',
    location: 'Iwo Road',
    vendor: 'VENDOR',
    message:
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    id: 6,
    customerImg: '/images/Ellipse 24 (1).svg',
    customerName: 'Chidi Okeke',
    location: 'In Somolu',
    vendor: 'VENDOR',
    message:
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
  }
]

const customerStories2 = [
  {
    id: 1,
    customerImg: '/images/Ellipse 22 (2).svg',
    customerName: 'Temi Obadofin',
    vendor: 'VENDOR',
    message:
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.'
  },
  {
    id: 2,
    customerImg: '/images/Ellipse 23 (2).svg',
    customerName: 'Promise Ejiofor',
    vendor: 'VENDOR',
    message:
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    id: 3,
    customerImg: '/images/Ellipse 24 (2).svg',
    customerName: 'Feyisola Arinola',
    vendor: 'VENDOR',
    message:
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
  },
  {
    id: 4,
    customerImg: '/images/Ellipse 22 (3).svg',
    customerName: 'Karen Ibeh',
    vendor: 'VENDOR',
    message:
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.'
  },
  {
    id: 5,
    customerImg: '/images/Ellipse 23 (3).svg',
    customerName: 'Oluchi Uzo',
    vendor: 'VENDOR',
    message:
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    id: 6,
    customerImg: '/images/Ellipse 24 (3).svg',
    customerName: 'Amos Okafor',
    vendor: 'VENDOR',
    message:
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
  }
]

const LandingPage = () => {
  const classes = useStyles()
  const [openModal, setOpenModal] = useState(false)
  const [storyList, setStoryList] = useState([])

  const handleClose = () => setOpenModal(false)

  return (
    <>
      <Box>
        <Box className={classes.wonderfullCustomer}>
          <Box>
            <Box component='h1' className={classes.heading}>
              Amazing <br /> Experiences from Our <br /> Wonderful Customers
            </Box>
            <Box component='p' fontSize='18px' fontWeight='400' color='#494949'>
              Here is what customers and vendors are saying about <br /> us, you
              can share your stories with us too.
            </Box>
          </Box>
          <Box component='img' src='/images/Group 81.svg' maxWidth='100%' />
        </Box>

        <Box className={classes.customer}>
          <Box component='img' src='/images/Group 89.svg' />
          <Box className={classes.experienceContainer}>
            <Box component='h2' className={classes.title}>
              Tolu & Joy’s Experience
            </Box>
            <Box
              onClick={() => setOpenModal(true)}
              border='1px solid rgba(255, 255, 255, 0.4)'
              borderRadius='4px'
              color='white'
              px={4}
              width='6rem'
              display='flex'
              justifyContent='center'
              mb={8}
            >
              CUSTOMER
            </Box>
            <Box component='p' color='white' fontSize='18px'>
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </Box>
            <Box className={classes.shareStyle}>
              <Box
                component='p'
                color='white'
                m={0}
                className={classes.shareStory}
              >
                Share your own story!
              </Box>
              <Box component='img' src='/images/Vector 3.svg' maxWidth='100%' />
            </Box>
          </Box>
        </Box>

        <Box>
          <Box className={classes.gridContainer}>
            <Grid container spacing={6}>
              {customerStories.map(
                ({
                  id,
                  customerImg,
                  customerName,
                  location,
                  vendor,
                  message
                }) => (
                  <Grid key={id} item xs={12} md={4}>
                    <Box component='img' src={customerImg} />
                    <Box
                      component='h3'
                      color='#474747'
                      fontSize='24px'
                      fontWeight='600'
                      mb={0}
                    >
                      {customerName}
                    </Box>
                    <Box display='flex' alignItems='center'>
                      <Box
                        component='p'
                        color='#535353'
                        fontSize='15px'
                        fontWeight='500'
                      >
                        {location}
                      </Box>
                      <Box
                        component='span'
                        className={`${classes.generalStyle} ${
                          vendor === 'CUSTOMER'
                            ? classes.customerStyle
                            : classes.vendorStyle
                        }`}
                      >
                        {vendor}
                      </Box>
                    </Box>
                    <Box component='p' fontSize='16px' fontWeight='400'>
                      {message}
                    </Box>
                  </Grid>
                )
              )}
            </Grid>
          </Box>
        </Box>

        <Box className={classes.customer2}>
          <Box
            maxWidth='30%'
            mr={18}
            mt={8}
            className={classes.josiahExperience}
          >
            <Box component='h2' className={classes.heading2}>
              Josiah’s Experience
            </Box>
            <Box
              border='1px solid rgba(255, 92, 0, 0.4)'
              borderRadius='4px'
              color='#FF5C00'
              px={4}
              width='5rem'
              display='flex'
              justifyContent='center'
              mb={8}
            >
              VENDOR
            </Box>
            <Box component='p' color='#242120' fontSize='18px'>
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </Box>
            <Box mt={8}>
              <Box
                component='p'
                color='#FF5C00'
                m={0}
                className={classes.shareStory}
              >
                Share your own story!
              </Box>
              <Box component='img' src='/images/Vector 3.svg' />
            </Box>
          </Box>
          <Box component='img' src='/images/woman-shoppingbag-card 1.svg' />
        </Box>

        <Box>
          <Box className={classes.gridContainer}>
            <Grid container spacing={6}>
              {customerStories2.map(
                ({
                  id,
                  customerImg,
                  customerName,
                  location,
                  vendor,
                  message
                }) => (
                  <Grid key={id} item xs={12} md={4}>
                    <Box component='img' src={customerImg} />
                    <Box
                      component='h3'
                      fontSize='24px'
                      fontWeight='600'
                      color='#474747'
                      mb={0}
                    >
                      {customerName}
                    </Box>
                    <Box display='flex' alignItems='center'>
                      <Box component='p'>{location}</Box>
                      <Box
                        ml={0}
                        component='span'
                        className={`${classes.vendorStyle} ${classes.genStyle}`}
                      >
                        {vendor}
                      </Box>
                    </Box>
                    <Box component='p' fontSize='16px' fontWeight='400'>
                      {message}
                    </Box>
                  </Grid>
                )
              )}
              {storyList.map((story, storyIdx) => (
                <Grid key={storyIdx} item xs={12} md={4}>
                  <Box component='img' src={story.profileImg} />
                  <Box
                    component='h3'
                    fontSize='24px'
                    fontWeight='600'
                    color='#474747'
                    mb={0}
                  >
                    {story.firstName} {story.lastName}
                  </Box>
                  <Box display='flex' alignItems='center'>
                    {/* <Box component='p'>{location}</Box> */}
                    <Box
                      ml={0}
                      component='span'
                      className={`${classes.vendorStyle} ${classes.genStyle}`}
                    >
                      {story.type}
                    </Box>
                  </Box>
                  <Box component='p' fontSize='16px' fontWeight='400'>
                    {story.story}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
      <AddNewStory
        openModal={openModal}
        handleClose={handleClose}
        storyList={storyList}
        setStoryList={setStoryList}
      />
    </>
  )
}

export default LandingPage
