/*function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY;
    for (let num of nums) {
        if (num > max_num) {
            max_num = num
        }
    }
    return max_num;
}

numbers = [2, 50, 10, 16 , 20]

console.log(find_max(numbers))

*/

const menuBtn = document.querySelector('#open-menu-btn');
const closeMenu = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.nav__menu');



// open nav menu
menuBtn.addEventListener('click', () => {
    menu.style.display = 'initial';
    closeMenu.style.display = 'initial';
    menuBtn.style.display = 'none';
})

const closeNav = () => {
    menu.style.display = 'none';
    closeMenu.style.display = 'none';
    menuBtn.style.display = 'initial';
}

closeMenu.addEventListener('click', closeNav);



// close nav menu when menu items are clicked 

if (window.innerWidth < 1024) {
    menu.querySelectorAll('li a').forEach(navItem => {
        navItem.addEventListener('click', closeNav);
    })
}


// change navbar styles on scroll

const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {
    navigation.classList.toggle('window-scroll', window.scrollY > 0);
})




// fetches testimonials from testimonials array
const fetchTestimonials = () => {
    let testimonialsContainer = document.querySelector('.testimonials__container');
    testimonialsContainer.innerHTML = '';

    // loop through the array and print the testimonials
    testimonials.forEach(testimonial => {
        const newTestimonial = document.createElement('article');
        newTestimonial.className = 'testimonial';
        newTestimonial.innerHTML = `
                <p>
                    "${testimonial.quote}"
                </p>
                <div class="testimonial__client">
                    <span class="avatar">
                        <img src="images/${testimonial.avatar}.jpg" alt="">
                    </span>
                    <div class="testimonial__work">
                        <p><b>${testimonial.name}</b></p>
                        <small>${testimonial.title}</small>
                    </div>
                </div>
        `;

        testimonialsContainer.append(newTestimonial);
    })

}


window.addEventListener('load', fetchTestimonials)