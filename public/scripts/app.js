const ColorThief = require('colorthief')

const img = resolve(process.cwd(), '/static/assets/images/se_so_neon_non_adaptation.jpg')
const colorCode = document.querySelector('.cover-color-code');



/* 1. Get an array of color codes
   2. Sort them and find which one matches the color code
   3. Set it as the background color of the container
   4. Rejoice
*/

ColorThief.getPalette(img)
.then(color => {console.log(color)})
.catch(err => {console.log(err)})

