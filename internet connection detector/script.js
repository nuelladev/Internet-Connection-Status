const image = document.getElementById("images");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("herosection");

function setColor() {
    bgColor.classList.add("online");
}

async function connectionStatus() {
  try {
    const fetchResult = await fetch('https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=' + (new Date()).getTime());
    image.src = "./images/online.png";
    setColor();
    return fetchResult.status >= 200 && fetchResult.status < 300;
  } catch (error) {
    console.error(error);
    statusDisplay.textContent = "OOPS!!! looks like  you are offline...Check your connection status!";
    image.src = "./images/offline.png";
    bgColor.classList.remove("online");
  }
}


// Monitor the connection
  setInterval(async () => {
    const result = await connectionStatus();
    if ( result ) {
        statusDisplay.textContent = "You're ONLINE!!! Connection looks good.";
        setColor(); 
    } 
  }, 5000);
  
//   Check Connection When Page Loads
   window.addEventListener("load", async (event) => {
     if ( connectionStatus() ) {
    	statusDisplay.textContent = "Your internet connection looks good!!!"
    } else {
    	statusDisplay.textContent = "Oops!!! Sorry You are offline!!!"
    }
  });





