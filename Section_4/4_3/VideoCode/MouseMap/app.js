//document.addEventListener('')
//window.innerwidth
//window.innerhieght

//rgb (0,0,0) red = x and y is blue 50/150 
//formula for rgb is 

document.addEventListener('mousemove', function (e) {

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const red = Math.floor((e.clientX / windowWidth) * 255);
    const blue = Math.floor((e.clientY / windowHeight) * 255);

    document.body.style.backgroundColor = `rgb(${red},0,${blue})`;
});