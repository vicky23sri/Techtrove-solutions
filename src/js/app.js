document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.my-custom-list li a');
    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            tabs.forEach(tab => {
                tab.parentElement.classList.remove('selected');
            });

            this.parentElement.classList.add('selected');

            const targetId = this.getAttribute('data-target');
            const contents = document.querySelectorAll('.content');

            contents.forEach(content => {
                content.classList.add('hidden');
            });

            document.getElementById(targetId).classList.remove('hidden');
        });
    });
});

const mobileMenuToggler = document.getElementById('mobile-menu-toggler');
const megaMenu = document.getElementById('mega-menu');

if (typeof mobileMenuToggler != 'undefined') {
    mobileMenuToggler.addEventListener('click', () => {
        mobileMenuToggler.classList.toggle('menu-toggle-active');
        megaMenu.classList.toggle('hidden');
    });
}


const menuItems = document.querySelectorAll('.pri-menu');

if (typeof mobileMenuToggler != 'undefined') {
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const flag = item.querySelector('.sec-menu').classList.contains('show');
            const submenus = document.querySelectorAll('.sec-menu');
            submenus.forEach(submenu => {
                submenu.classList.remove('show');
            });
            
            if(!flag) item.querySelector('.sec-menu').classList.toggle('show');
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const link = document.getElementById("demo-class-link");
    const form = document.getElementById("demo-class-form");

    if (link && form) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            form.style.display = "block";
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.max-w-2xl');
    var currentIndex = 0;

    function toggleCardsVisibility() {
        cards.forEach(function (card, index) {
            if (index === currentIndex || index === (currentIndex + 1) % cards.length) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        currentIndex = (currentIndex + 2) % cards.length;
    }

    setInterval(toggleCardsVisibility, 10000);
});