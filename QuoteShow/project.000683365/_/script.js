/* Data to Show*/
const data = [
  {
   quote: `“If every flower wanted to be a rose, spring would lose it's beauty.” -St Terese of Lisieux`, 
   emoji: '🌼', 
   image: `url(assets/flower.jpeg)`
  }, 
  {
   quote: `“You aspire to great things? Begin with little ones.” -St Thomas Aquintas`, 
   emoji: '🐝', 
   image: `url(assets/grass.jpeg)`
  },  
  {
   quote: `“Faith is to believe what you do not see; the reward of this faith is to see what you believe.” -Saint Augustine`, 
   emoji: '👁️' , 
   image: `url(assets/sky.jpeg)`
  },
  {
    quote: `“Love and sacrifice are closely linked, like the sunrise and the light. We cannot love without suffering and we cannot suffer without love.” -St Gianna Molla`, 
    emoji: '💙', 
    image: `url(assets/sunrise.webp)`
  },
   {
    quote: `“No one in the world can change Truth. What we can do and and should do is to seek truth and to serve it when we have found it.” -St Maximilian Kolbe`, 
    emoji: '⚔️', 
    image: `url(assets/ww2.jfif)`
  },
  {
   quote: `“True happiness does not consist in the pleasures of this world, or in earthly things, but in peace of conscience, which we only have if we are pure of heart and mind.” -St Pier Giorgio Frassati`, 
   emoji: '⛰️' , 
   image: `url(assets/mountain.jfif)`
  }
];

/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector("blockquote");
// emoji
const emoji = document.querySelector("p");
// background
const bgImage = document.querySelector("body");

// Check-Check: change text
quote.innerHTML = "Quo Vadis? Where are you going?";
// Check-Check: change emoji text
emoji.innerHTML = "🧳";
// Check-Check: background image
bgImage.style.backgroundImage = "url(assets/dirtroad.jpeg)";

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
 */
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", function () {
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;

  // if at LAST item
  if (itemNumber > data.length - 1) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on previous button
prevButton.addEventListener("click", function () {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;

  // if at FIRST item
  if (itemNumber < 0) {
    // reset counting to last item
    itemNumber = data.length - 1;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on random button
randButton.addEventListener("click", function () {
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor(Math.random() * data.length);

  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
});

// listen for keypress next
document.addEventListener("keyup", function () {
  // Next Right Arrow
  if (event.keyCode === 39) {
    // update, then increase item number with each click
    itemNumber = itemNumber + 1;

    // if at LAST item
    if (itemNumber > data.length - 1) {
      // reset counting to first item
      itemNumber = 0;
    }

    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
  }

  // Prev Left Arrow
  if (event.keyCode === 37) {
    // update, then DEcrease item number with each click
    itemNumber = itemNumber - 1;

    // if at FIRST item
    if (itemNumber < 0) {
      // reset counting to last item
      itemNumber = data.length - 1;
    }

    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
  }

  // Random Spacebar
  if (event.keyCode === 32) {
    // generate random number, for total number, of items (data)
    randomNumber = Math.floor(Math.random() * data.length);

    // display data based random number
    quote.innerHTML = data[randomNumber].quote;
    emoji.innerHTML = data[randomNumber].emoji;
    bgImage.style.backgroundImage = data[randomNumber].image;
  }
});