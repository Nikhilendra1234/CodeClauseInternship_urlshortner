// Accessing the ids for the to perform operation.
const shorten=document.getElementById("Shorten");
const copy=document.getElementById("copy");
// Adding event listener to shrt the url
shorten.addEventListener("click",short);

// Async function for fetching the url data
async function short(){
    let longurl=document.getElementById("longurl").value;
    // using fetch to fetch url data
    let response=await fetch(`https://api.shrtco.de/v2/shorten?url=${longurl}`);
    let data= await response.json();
    console.log(data);
    let shorturl=document.getElementById("shorturl");
    // adding short link value to the input box
    shorturl.value=data.result.short_link2;

 }
// copying the short url to the system clip board
 copy.addEventListener("click",()=>{

    window.navigator.clipboard.writeText=shorturl.value;
 })
