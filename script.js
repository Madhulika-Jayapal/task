function searchImages() {
    var input = document.getElementById('searchInput').value.toLowerCase(); 
    var animals = document.getElementsByClassName('animal'); 

    for (var i = 0; i < animals.length; i++) {
        var caption = animals[i].getAttribute('data-caption').toLowerCase(); 

        if (caption.includes(input)) {
            animals[i].style.display = 'block'; 
        } else {
            animals[i].style.display = 'none'; 
        }
    }
}
