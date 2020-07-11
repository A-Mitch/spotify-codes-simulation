import './styles/styles.css';
import coverImg from './images/se_so_neon_non_adaptation.jpg';
import soundwave from './images/soundwave.png'
import * as Vibrant from 'node-vibrant'


document.getElementById('album').src = coverImg

const img = document.getElementById('album').src

Vibrant.from(img).getPalette()
.then((palette) => 
    
    console.log(palette)
    // console.log(`${Vibrant.Util.rgbToHex(165, 177, 212)}`)


)
.catch(err => {console.log(err)})


document.getElementById('soundwave_img').src = soundwave





