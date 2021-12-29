import Logo from './Images/626953_13970.webp'
import './App.css';
import {Alert, Box, Button, Collapse, Typography} from '@mui/material'
import { useEffect, useState } from 'react';
import BackgroundImage1 from './Images/HomeBackground1.webp'
import YoutubeEmbed from './components/videos/YoutubeEmbed';
import MidSection1 from './Images/MidSection1.png'
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
      <Box display={'flex'} marginTop='50px' flexDirection={'column'} height='1500px' maxWidth='100vw'>
          <Box color='white' style={{background: `url(${BackgroundImage1})`, backgroundSize: 'cover'}} height='700px' maxWidth='100vw'>
            <Box pt={5} bgcolor={'rgb(0,0,0,.3)'} width={'100%'} height={'94.5%'} display='flex' flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
              <Typography variant='h5'>Dream Kitchen Designs</Typography>
              <Typography variant='h3'>Custom Kitchen Cabinetry</Typography>
            </Box>
          </Box>
          <Box height='700px' pt={'70px'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Typography display={'flex'} justifyContent={'center'} alignItems={'center'} variant='h3' style={{fontWeight: 'normal'}} className='videoTitle'>Great Woods Cabinetry Video Introduction</Typography>
            <Box width='70%' mt={5}><YoutubeEmbed embedId='i5D4kazb3nE'/></Box>
          </Box>
      </Box>
      <Box maxWidth='100vw'><img style={{width: '100%', height: '700px'}} src={MidSection1}/></Box>
    </div>
  );
}

export default App;
