

let random = () => {
    document.getElementById('play').play()
    let i = Math.floor(Math.random() * 6) + 1;
    if (i==1){
document.getElementById('32').src='cube1.png'
    } else
    if (i==2){
document.getElementById('32').src='cube2.png'
    } else
    if (i==3){
document.getElementById('32').src='kosti333.jpg'
    } else
    if (i==4){
document.getElementById('32').src='cube4.png'
    } else
    if (i==5){
document.getElementById('32').src='cube5.png'
    } else
    if (i==6){
document.getElementById('32').src='cube6.png'
    }
}
