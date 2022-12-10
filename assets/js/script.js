const sections = document.querySelectorAll(".section");
const controls = document.querySelectorAll(".controls");
const secBtn = document.querySelectorAll(".control");
const allSection = document.querySelector(".main-content");

function pageTransitions() {
    //Button Click Active Class
    for (let i = 0; i < secBtn.length; i++){
        secBtn[i].addEventListener('click', function () { 
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '');
            this.classList.add("active-btn");
        });
    }
    //Section Active Class
    allSection.addEventListener('click', function (e) { 
        const id = e.target.dataset.id;
        if (id) {
            //Remove Selected from the other button
            secBtn.forEach((btn) => { 
                btn.classList.remove("active");
            });
            e.target.classList.add("active");
            //hide other sections
            sections.forEach((section) => { 
                section.classList.remove("active");
            });
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    });

    //Toggle Theme
    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener('click', function () { 
        let element = document.body;
        toggleIcon = document.getElementById("toggle-on");
        element.classList.toggle("light-mode");
        toggleIcon.classList.toggle("fa-toggle-on");
    });
}
pageTransitions();