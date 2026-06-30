// تأثيرات احترافية عند تمرير الفأرة وتغيير شفافية الـ Navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.backgroundColor = 'rgba(11, 11, 11, 0.98)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.backgroundColor = 'rgba(11, 11, 11, 0.95)';
    }
});

// تهيئة وإغلاق القائمة المنسدلة تلقائياً في شاشات الموبايل عند الضغط على الروابط الداخلية
const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-menu-item');
const menuToggle = document.getElementById('navbarNav');
if (menuToggle) {
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});
    navLinks.forEach((l) => {
        l.addEventListener('click', () => { 
            if(window.innerWidth < 992) { bsCollapse.hide(); } 
        });
    });
}
