document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('ul li a');
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
        // if (megaMenu.classList.contains('hidden')) {
        // }
        mobileMenuToggler.classList.toggle('menu-toggle-active');
        // Toggle the 'hidden' class on the mega-menu element
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