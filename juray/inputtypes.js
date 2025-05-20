const colorpicker = document.getElementById('favcolor')
colorpicker.addEventListener('input',function(){
    document.body.style.backgroundColor=colorpicker.value
})