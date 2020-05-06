window.onload = function() {
    let my_image = document.querySelector('img');
    my_image.onclick = function() {
        let my_src = my_image.getAttribute('src');
        if (my_src === 'images/chicagobulss.png') {
            my_image.setAttribute('src', 'images/nbalogo.png');
        } else {
            my_image.setAttribute('src', 'images/chicagobulss.png');
        }
    }
}