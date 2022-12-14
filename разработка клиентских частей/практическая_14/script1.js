const dogbtn = document.getElementById("dogbtn");
const catbtn =  document.getElementById("catbtn");

async function getDog(){
    const resp = await fetch("https://dog.ceo/api/breeds/image/random");
    const data =  await resp.json();
    console.log(data);
    showdata(data.message);
}
getDog();

function showdata(dogimage){
    document.getElementById("dog").innerHTML = `
    <img src="${dogimage}" alt="">
    `
}


dogbtn.addEventListener("click",()=>{
    getDog();
});


async function getCat(){
    const resp = await fetch("https://aws.random.cat/meow");
    const data =  await resp.json();
    console.log(data);
    showdataCat(data.file);
}
getCat();

function showdataCat(catimage){
    document.getElementById("cat").innerHTML = `
    <img src="${catimage}" alt="">
    `
}
catbtn.addEventListener("click",()=>{
    getCat();
});