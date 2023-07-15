let textBox = document.querySelector('#textBox')
let calc = document.querySelector('#calc')
let mainBox = document.getElementById('flexBox')
let photo = document.getElementById('photo')
let valueHolder = document.getElementById('value')
let value = document.createElement('p')
let image = document.querySelector('img')
let planetName = document.querySelector('select')
valueHolder.appendChild(value)
mainBox.style.overflow = 'hidden'
mainBox.style.display = 'grid'
mainBox.style.gridTemplateColumns = '1fr 1fr'
mainBox.style.columnGap = '10px'




image.style.width = '70%'
photo.style.overflowWrap = 'wrap'
image.style.objectFit = 'content'

valueHolder.style.alignItems = 'center'
valueHolder.style.justifyContent = 'center'
value.style.fontSize = '25px'
value.style.fontweight = '500'
value.style.color = 'white'


/* checking for string or not*/
const isString = (data)=>{
   if(isNaN(data))
   return true
   else
   return false
}



 let calculate = ()=>{
   const data = textBox.value
   if(isString(data))
   {
      display = document.createElement('p')
      display.textContent = 'You must Enter Mass in Numeric Value ....Ex:- 500, 40 , 60'
      display.style.fontSize = '20'
      display.style.color = 'red'
      display.style.padding = '5px'
      display.style.margin = '10px'
      document.querySelector('h1').after(display)
      setTimeout(()=>document.querySelector('header').removeChild(display),3000)
   }
   else{
      switch(planetName.value)
      {
         case 'None':
            value.textContent = 'Select Planet to Calculete'
            break
         case 'Earth':
            value.textContent = data*9.81
            image.src = 'Images/earth.png'
            break
         case 'Mars':
            value.textContent = data*3.31
            image.src = 'Images/mars.png'
            break
         case 'Venus':
            value.textContent = data*8.87
            image.src = 'Images/venus.png'
            break
         case 'Jupiter':
            value.textContent = data*24.79
            image.src = 'Images/jupiter.png'
            break
         case 'Pluto':
            value.textContent = data*0.62
            image.src = 'Images/pluto.png'
            break
         case 'Neptune':
            value.textContent = data*11.15
            image.src = 'Images/neptune.png'
            break
         case 'Mercury':
            value.textContent = data*3.37
            image.src = 'Images/mercury.png'
            break
         case 'Saturn':
            value.textContent = data*10.44
            image.src = 'Images/saturn.png'
            break
         case 'Uranus':
            value.textContent = data*8.69
            image.src = 'Images/uranus.png'
            break
         case 'Moon':
            value.textContent = data*1.62
            image.src = 'Images/moon.png'
            break
         default:
            break
      }
      
   }
   
    
 }