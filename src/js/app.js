// document.addEventListener('DOMContentLoaded', function () {
//     const tabs = document.querySelectorAll('.my-custom-list li a');
//     tabs.forEach(tab => {
//         tab.addEventListener('click', function (e) {
//             e.preventDefault();

//             tabs.forEach(tab => {
//                 tab.parentElement.classList.remove('selected');
//             });

//             this.parentElement.classList.add('selected');

//             const targetId = this.getAttribute('data-target');
//             const contents = document.querySelectorAll('.content');

//             contents.forEach(content => {
//                 content.classList.add('hidden');
//             });

//             document.getElementById(targetId).classList.remove('hidden');
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.my-custom-list li a');
    const contents = document.querySelectorAll('.content');
    let currentIndex = 0;
    let intervalId;  

    function showContent(index) {
        contents.forEach(content => {
            content.classList.add('hidden');
        });

        tabs.forEach(tab => {
            tab.parentElement.classList.remove('selected');
        });

        contents[index].classList.remove('hidden');
        tabs[index].parentElement.classList.add('selected');
    }

    function nextContent() {
        currentIndex = (currentIndex + 1) % contents.length;
        showContent(currentIndex);
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            showContent(index);
            currentIndex = index;
            
            clearInterval(intervalId);
        });
    });

    intervalId = setInterval(nextContent, 5000);
});

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-list-item');
    const tabContents = document.querySelectorAll('.tab-content');
    let currentIndex = 0;
    let intervalId;

    function changeTab() {
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });

        tabs.forEach(t => {
            t.classList.remove('active');
        });

        currentIndex = (currentIndex + 1) % tabs.length;

        tabs[currentIndex].classList.add('active');
        tabContents[currentIndex].classList.remove('hidden');
    }

    function resetInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(changeTab, 5000);
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabContents.forEach(content => {
                content.classList.add('hidden');
            });

            tabContents[index].classList.remove('hidden');

            tabs.forEach(t => {
                t.classList.remove('active');
            });

            tab.classList.add('active');
            currentIndex = index;

            resetInterval(); 
        });
    });

    intervalId = setInterval(changeTab, 5000);
    tabs[0].click();
});

//sidebar
document.addEventListener("DOMContentLoaded", function () {
    var mobileMenuButton = document.getElementById("mobile-menu-toggler");
    var megaMenu = document.getElementById("mega-menu");
    var sidebarOverlay = document.getElementById("sidebar-overlay");

    mobileMenuButton.addEventListener("click", function () {
        megaMenu.classList.toggle("open");
        sidebarOverlay.classList.toggle("open");
    });

    sidebarOverlay.addEventListener("click", function () {
        megaMenu.classList.remove("open");
        sidebarOverlay.classList.remove("open");
    });
});

//modal
function openModal() {
    document.getElementById('modal').classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

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