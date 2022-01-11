import Logo from './Images/626953_13970.webp'
import './App.css';
import {Alert, Box, Button, Collapse, Typography} from '@mui/material'
import { useEffect, useState } from 'react';
import BackgroundImage1 from './Images/HomeBackground1.webp'
import YoutubeEmbed from './components/videos/YoutubeEmbed';
import MidSection1 from './Images/MidSection1.png'
import Award1 from './Images/award1.webp'
import Award2 from './Images/award2.webp'
import Award3 from './Images/award3.webp'
import Award4 from './Images/award4.webp'
import Award5 from './Images/award5.webp'
import Award6 from './Images/award6.webp'
function App() {
  let [topOpen, setTopOpen] = useState(true)
  let [showLogo, setShowLogo] = useState(true)
  useEffect(()=>{
    window.onscroll = () => {
      if(window.pageYOffset === 0){
        setShowLogo(true)
        return
      }
      setShowLogo(false)
    }
  },[])
  return (
    <div className="App">
      <header style={{position: 'fixed', top: 0, zIndex: 999}}>
      <Collapse in={topOpen} style={{width: '100vw'}}>
          <Alert severity="info" action={
            <>
            <Button>Directions</Button>
            <Button onClick={()=>{setTopOpen(false)}}>x</Button>
            </>
          }>
          Open To The Public M-F 8-4:30 or by Appointment
          </Alert>
      </Collapse>
        <Box display='flex' flexDirection={'column'} borderBottom={'1px solid gray'} bgcolor={'white'} pt={2} minHeight={'50px'} minWidth={'100vw'} className='mainNav' position={'fixed'}>
          <Collapse in={showLogo}><Box onClick={()=>{window.scrollTo(0,0)}} height='150px'>
            <img style={{height: '150px'}} src={Logo}/>
          </Box>
          </Collapse>
          <Box maxWidth='100vw' display='flex' justifyContent={'center'}>
          <Button>HOME</Button>
          <Button>KITCHEN CABINETS</Button>
          <Button>GALLERY</Button>
          <Button>MORE CABINETRY SERVICES</Button>
          <Button>CONTACT</Button>
          </Box>
        </Box>
      </header>
      <Box display={'flex'} marginTop='50px' flexDirection={'column'} height='2000px' maxWidth='100vw'>
          <Box color='white' style={{background: `url(${BackgroundImage1})`, backgroundSize: 'cover'}} height='1000px' maxWidth='100vw'>
            <Box pt={5} bgcolor={'rgb(0,0,0,.3)'} width={'100%'} height={'96%'} display='flex' flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
              <Typography variant='h5'>Dream Kitchen Designs</Typography>
              <Typography variant='h3'>Custom Kitchen Cabinetry</Typography>
            </Box>
          </Box>
          <Box height='1100px' pt={'70px'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Typography display={'flex'} justifyContent={'center'} alignItems={'center'} variant='h3' style={{fontWeight: 'normal'}} className='videoTitle'>Great Woods Cabinetry Video Introduction</Typography>
            <Box width='70%' mt={5}>
              <YoutubeEmbed embedId='i5D4kazb3nE'/>
            </Box>
          </Box>
      </Box>
      <Box display='flex' flexDirection={'column'} justifyContent={'center'} alignItems={'center'} pl='25%' pr='25%' color='white' maxWidth='100vw' height='50vh' style={{backgroundImage: `url(${MidSection1})`, backgroundPosition: 'center'}}>
        <Typography variant='h2'>Kitchen Remodeling Experts</Typography>
        <Typography variant='h4'>From design to installation, Great Woods Cabinetry provides you with an exceptional experience purchasing your new kitchen cabinets and accessories. Our knowledgeable sales staff and designers will work with you to transform your kitchen into the space you always wanted it to be.</Typography>
      </Box>
      <Box display='flex' flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height='70vh'>
          <Typography variant='h3' style={{color: '#C2C2C2'}}>Custom Cabinetry Awards</Typography>
          <Typography variant='h4'>Vote For Us!</Typography>
          <Box display={'flex'} height='60%' minWidth='60%' justifyContent={'space-around'} flexWrap={'wrap'} mt={5}>
            <Box width='200px' height='200px' mr={2} style={{backgroundImage: `url(${Award1})`, backgroundSize: 'cover'}}></Box>
            <Box width='200px' height='200px' mr={2} style={{backgroundImage: `url(${Award2})`, backgroundSize: 'cover'}}></Box>
            <Box width='200px' height='200px' mr={2} style={{backgroundImage: `url(${Award3})`, backgroundSize: 'cover'}}></Box>
            <Box width='200px' height='200px' mr={2} style={{backgroundImage: `url(${Award4})`, backgroundSize: 'cover'}}></Box>
            <Box width='200px' height='200px' mr={2} style={{backgroundImage: `url(${Award5})`, backgroundSize: 'cover'}}></Box>
            <Box width='205px' height='200px' mr={2} style={{backgroundImage: `url(${Award6})`, backgroundSize: 'cover'}}></Box>
          </Box>

      </Box>
    </div>
  );
}

export default App;
