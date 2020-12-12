function darkFunc (){
    document.getElementsByClassName('app-root')[0].style.background = '#5a5757';
    for (let i = 0; i < 206;i++){
document.getElementsByTagName('li')[i].style.boxShadow = 'none';
    }
    
    document.getElementsByTagName('svg')[1].style.display = 'block';
            document.getElementsByTagName('svg')[2].style.display = 'none';
}
function whiteFunc (){
            document.getElementsByClassName('app-root')[0].style.background = '#ffffff';
            document.getElementsByTagName('svg')[1].style.display = 'none';
            document.getElementsByTagName('svg')[2].style.display = 'block'; 
}