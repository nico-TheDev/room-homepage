// DATA

const data = [
    {
        id: 1,
        title: " Discover innovative ways to decorate ",
        desc:
            " We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        img: [
            "./images/mobile-image-hero-1.jpg",
            "./images/desktop-image-hero-1.jpg",
        ],
    },
    {
        id: 2,
        title: "We are available all across the globe",
        desc: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
            Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
            store locator. Any questions? Don't hesitate to contact us today.`,
        img: [
            "./images/mobile-image-hero-2.jpg",
            "./images/desktop-image-hero-2.jpg",
        ],
    },
    {
        id: 3,
        title: "  Manufactured with the best materials",
        desc: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
            to ensure that every product is made as perfect and as consistent as possible. With three decades of 
            experience in this industry, we understand what customers want for their home and office.`,
        img: [
            "./images/mobile-image-hero-3.jpg",
            "./images/desktop-image-hero-3.jpg",
        ],
    },
];

// STATE

let current = 0;

// DOM ELEMENT

const currentImg = document.querySelectorAll(".currentImg"),
    currentText = document.querySelector(".currentText"),
    nextBtn = document.querySelector(".nextBtn"),
    prevBtn = document.querySelector(".prevBtn"),
    menuBtn = document.querySelector(".menuBtn"),
    closeBtn = document.querySelector('.closeBtn'),
    mobileNav = document.querySelector('.mobileNav');

// render new slide

function renderSlide() {
    const slide = data[current];
    currentText.innerHTML = `
    <h2 class="font-semibold text-3xl leading-tight mb-4 lg:font-bold">
        ${slide.title}
    </h2>
    <p class="text-DarkGray text-xs mb-8">
        ${slide.desc}
    </p>

    <a href="#" class="font-semibold text-md inline-flex items-center tracking-3 hover:text-VeryDarkGray">
        SHOP NOW
        <svg
            class="fill-current ml-4"
            width="40"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
        >
        <path
            d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
            fill-rule="nonzero"
        />
    </svg>
    </a>
    `;
    currentImg.forEach((node, i) => {
        node.setAttribute("src", slide.img[i]);
    });
}

function nextSlide() {
    if (current === data.length - 1) {
        current = 0;
    } else {
        current++;
    }

    renderSlide();
}
function prevSlide() {
    if (current > 0) {
        current--;
    } else {
        current = data.length - 1;
    }

    renderSlide();
}

function openNav(){
    mobileNav.classList.remove("translate-x-full")
}

function closeNav(){
    mobileNav.classList.add("translate-x-full")
}

// EVENT LISTENERS

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
menuBtn.addEventListener('click',openNav);
closeBtn.addEventListener('click',closeNav);
renderSlide();
