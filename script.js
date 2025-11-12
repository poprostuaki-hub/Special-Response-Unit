
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');


    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
            

            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');


            this.style.color = "#000000";
            this.style.webkitTextFillColor = "#000000";


            navButtons.forEach(btn => {
                if (!btn.classList.contains("active")) {
                    btn.style.color = "";
                    btn.style.webkitTextFillColor = "";
                }
            });
        });
    });


    function showPage(pageId) {
        pages.forEach(page => page.classList.remove('active'));
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) selectedPage.classList.add('active');
    }


    showPage('home');
});
