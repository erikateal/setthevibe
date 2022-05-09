document.getElementById('wheat').onclick = wheatView
document.getElementById('ocean').onclick = oceanView
document.getElementById('office').onclick = officeView
document.getElementById('curtain').onclick = curtainView

function wheatView () {
    document.querySelector('video').src='assets/agape.mp4'
    let audio = new Audio('assets/agape.mp3');
    audio.play();
    document.querySelector('#wheat').style.display= 'none'
    document.querySelector('#ocean').style.display= 'none'
    document.querySelector('#office').style.display= 'none'
    document.querySelector('#curtain').style.display= 'none'
    document.querySelector('h3').style.display= 'none'
}

function oceanView () {
    document.querySelector('video').src='assets/ocean.mp4'
    let audio = new Audio('assets/ocean.mp3');
    audio.play();
    document.querySelector('#wheat').style.display= 'none'
    document.querySelector('#ocean').style.display= 'none'
    document.querySelector('#office').style.display= 'none'
    document.querySelector('#curtain').style.display= 'none'
    document.querySelector('h3').style.display= 'none'
}


function officeView () {
    document.querySelector('video').src='assets/office.mp4'
    let audio = new Audio('assets/office.mp3');
    audio.play();
    document.querySelector('#wheat').style.display= 'none'
    document.querySelector('#ocean').style.display= 'none'
    document.querySelector('#office').style.display= 'none'
    document.querySelector('#curtain').style.display= 'none'
    document.querySelector('h3').style.display= 'none'
}


function curtainView () {
    document.querySelector('video').src='assets/curtain.mp4'
    let audio = new Audio('assets/curtain.mp3');
    audio.play();
    document.querySelector('#wheat').style.display= 'none'
    document.querySelector('#ocean').style.display= 'none'
    document.querySelector('#office').style.display= 'none'
    document.querySelector('#curtain').style.display= 'none'
    document.querySelector('h3').style.display= 'none'
}



