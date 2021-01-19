
const Therm=()=>{
    let thermid=document.getElementById('therm');
    thermid.innerHTML="&#xf2ca";
    thermid.style.color="white";
    setTimeout(() => {
        thermid.innerHTML="&#xf2ca";
        thermid.style.color="yellow";       
    }, 1000);
    setTimeout(() => {
        thermid.innerHTML="&#xf2c9";
        thermid.style.color="pink";
    }, 2000);
    setTimeout(() => {
        thermid.innerHTML="&#xf2c8";
        thermid.style.color="blue";
    }, 3000);
    setTimeout(() => {
        thermid.innerHTML="&#xf2c7";
        thermid.style.color="red";
    }, 4000);
}
Therm();
setInterval(() => {
    Therm();
}, 5000);

