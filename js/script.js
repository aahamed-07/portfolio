//Code for typing text animation
const text = document.querySelector(".text-2");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Developer";
    }, 0);

    setTimeout(() => {
        text.textContent = "Logo Designer";
    }, 4000);

    setTimeout(() => {
        text.textContent = "Content Writer";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);
//


//Code for Load more Button in Project Section
let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 2;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.project-container .project-box-container .project-box')];
    for (var i = currentItem; i < currentItem + 2; i++) {
        boxes[i].style.display = 'inline-block';

    }
    currentItem += 2;
    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
}

//


//Code for Loading JSON data in Project Section
var projectlist = [{
        sno: 1,
        name: 'UI Library',
        descb: 'UI Library with HTML, CSS & JS',
        photo: 'assets/img/website-design-icon-wh.svg',
        links: 'http://google.com',
        date: '2022-2024'
    },
    {
        sno: 2,
        name: 'Object Detection YOLOv8 ',
        descb: 'Real Time Object Detection using YOLOv8 in Python',
        photo: 'assets/img/tech-icon-wh.svg',
        links: 'http://google.com',
        date: '2023'
    },
    {
        sno: 3,
        name: 'Ecommerce Website',
        descb: 'Ecommerce Website using MERN Stack',
        photo: 'assets/img/bag-icon-wh.svg',
        links: 'http://google.com',
        date: '2024'
    },
    {
        sno: 4,
        name: 'Video Playing Service',
        descb: 'In build process',
        photo: 'assets/img/video-playlist-icon-wh.svg',
        links: 'http://google.com',
        date: '2023-?'
    },
];

var singleproject = projectlist.map((p) => {
    return `
            <div class="project-box">
                <div class="project-image">
                    <img src="${p.photo}">
                </div>
                <div class="project-content">
                    <h3>${p.name}</h3>
                    <p>${p.descb}</p>
                    <a href="${p.links}" class="project-btn"><i class="fa fa-github">
                    </i>Repository</a>
                    <div class="project-icons">
                        <span><i class="fa fa-calendar"></i>${p.date}</span>
                        <span><i class="fa fa-user"></i>ALi</span>
                    </div>
                </div>
            </div>`;

});
document.getElementById('projects-main-box').innerHTML = singleproject.join("");

console.log(singleproject);

console.log(projectlist);
//


//Code for Loading JSON data in Services Section
var serviceList = [{
        sno: 1,
        icon_name: 'color-palette-outline',
        icon_color: '#fd6494',
        heading: 'Logo Design',
        text: "Crafting bold, modern logos with minimalistic elegance and abstract flair, your brand's unique identity perfected.",
    },
    {
        sno: 2,
        icon_name: 'code-outline',
        icon_color: '#4eb7ff',
        heading: 'Web Development',
        text: 'Crafting sleek, responsive web designs for modern online presence, front-end expertise tailored to your needs.',
    },
    {
        sno: 3,
        icon_name: 'create-outline',
        icon_color: '#43f390',
        heading: 'Content Writing',
        text: 'Delivering captivating fiction and technical content tailored words that engage and inform, transforming ideas into reality.',
    },
    {
        sno: 4,
        icon_name: 'glasses-outline',
        icon_color: '#cd57ff',
        heading: 'Proof Reading',
        text: 'Thorough proofreading, spotting errors and discrepancies to polish your documents for flawless clarity and accuracy.',
    },
];

var singleService = serviceList.map((p) => {
    return `
            <div class="serviceBox">
                <div class="serv-icon" style="--i:${p.icon_color}">
                    <ion-icon name="${p.icon_name}"></ion-icon>
                </div>
                <div class="serv-content">
                    <h2>${p.heading}</h2>
                    <p>${p.text}</p>
                </div>
            </div>`;

});

document.getElementById('services-main-box').innerHTML = singleService.join("");

console.log(singleService);

console.log(serviceList);
//