
// select the menuIcon and assign to variable
let mmClose = document.getElementById('mobile-x');

// select the mobile nav menu and assign to variable
let mm = document.querySelector('.mobile-nav');

// select the hamburger menu, add event listener to display menu.
// onclick doesn't work here for some reason.
let mmOpen = document.querySelector('#mobileNavToggle');

// any click to a mobile nav element will hide the menu
// but reveal when an element is clicked.
let mmClick = document.querySelectorAll('.mobile-nav li a');
mmClick.forEach( (item) => {
    item.addEventListener('click', function(){
        mm.classList.toggle('expanded');
    })
})

mmOpen.addEventListener('click', function(){
    mm.classList.toggle('expanded');
})

// add event listener to execute function when icon clicked
mmClose.onclick = function() {
    // add/remove the 'expanded' class from the menu on clicks
    mm.classList.toggle('expanded');
};