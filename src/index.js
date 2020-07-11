import './styles/styles.css';
import coverImg from './images/se_so_neon_non_adaptation.jpg';
import soundwave from './images/soundwave.png'
import * as Vibrant from 'node-vibrant'


document.getElementById('album').src = coverImg

const img = document.getElementById('album').src
document.getElementById('soundwave_img').src = soundwave

async function getColors() {
    let colors = await Vibrant.from(img).getPalette()
    return colors
}


// Set the background of the cover-color-code here
getColors()
.then(color => console.log(color))
.catch(err => {console.log(err)})

// 








