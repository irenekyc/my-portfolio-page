const portfolioContainer = document.querySelector('.portfolio-container')
const informationCardContainer = document.querySelector('.introduction-card')
const closeModalBtn = document.querySelector('.close-Modal')
const informationContainer = document.querySelector('.introduction-container')

const HTMLCode= {
    landingpageCard: `<div class=" card landingpageCard">
    <div class="video-container">
    <video src="Project videos/landinPage-animated.mov" autoplay muted></video>
    </div>
    <div class="details-container">
    <h1 class="intro-title"> Animated Landing Page</h1>
    <h3 class="intro-subtitle"> I have coded a landing page with animation </h3>
    <a href="https://irenekyc.github.io/animated-landing-page/" target="_blank">Link to project ></a>
    </div></div>`,
    parallaxCard : `<div class=" card parallax-card">
    <div class="video-container">
    <video src="Project videos/parallax-effect.mov" autoplay muted></video>
    </div>
    <div class="details-container">
    <h1 class="intro-title"> Parallax Effect</h1>
    <h3 class="intro-subtitle"> I have coded a parallax effect. This is one of my favourite </h3>
    <a href="https://irenekyc.github.io/parallax-effect/" target="_blank">Link to project ></a>
    </div>
    </div>`,
    hover3D : `<div class=" card hover-3d">
    <div class="video-container">
    <video src="Project videos/3D Card Hover.mov" autoplay muted></video>
    </div>
    <div class="details-container">
    <h1 class="intro-title"> Hover 3D Effect</h1>
    <h3 class="intro-subtitle"> This is an amazing coding to reveal more information in a creative way</h3>
    <a href="https://irenekyc.github.io/hover-3d-effects/" target="_blank">Link to project ></a>
    </div>
    </div>`,
    infoReveal : `<div class=" card revealOnHover">
    <div class="video-container">
    <video src="Project videos/card-hover-reveal.mov" autoplay muted></video>
    </div>
    <div class="details-container">
    <h1 class="intro-title"> Information reveal on hover</h1>
    <h3 class="intro-subtitle"> This is another way to reveal information on hover. Which one do you prefer?</h3>
    <a href="https://irenekyc.github.io/info-reveal-on-hover/" target="_blank">Link to project ></a>
    </div>
    </div>`,
    imageSlider : `<div class=" card image-slider">
    <div class="video-container">
    <video src="Project videos/image-slider.mov" autoplay muted></video>
    </div>
    <div class="details-container">
    <h1 class="intro-title"> Image Slider</h1>
    <h3 class="intro-subtitle"> Browsing image on click, I didnt include any JS code, pure CSS. I like it! What about you?</h3>
    <a href="https://irenekyc.github.io/image-slider/" target="_blank">Link to project ></a>
    </div>
    </div>`,
    photoGalleryFlex : `<div class=" card photoGalleryFlex">
    <div class="video-container">
    <video src="Project videos/photo-gallery-flexbox.mov" autoplay muted></video>
    </div>
    <div class="details-container">
    <h1 class="intro-title"> Photo Gallery - Flexbox</h1>
    <h3 class="intro-subtitle"> Browsing image hover, the image will reveal once you hover on the image. No JS, pure CSS</h3>
    <a href="https://irenekyc.github.io/photo-gallery-flexbox/" target="_blank">Link to project ></a>
    </div>
    </div>`,
    photoGalleryGrid : `<div class=" card photoGalleryGrid">
    <div class="video-container">
    <video src="Project videos/photo-Gallery-grid.mov" autoplay muted></video>
    </div>
    <div class="details-container">
    <h1 class="intro-title"> Photo Gallery - Grid</h1>
    <h3 class="intro-subtitle"> Inspiring by most online photo resources portal, color image reveal on hover with a simple overlay about author</h3>
    <a href="https://irenekyc.github.io/photo-gallery-grid/" target="_blank">Link to project ></a>
    </div>
    </div>`,
}

portfolioContainer.addEventListener('click', (e)=>{
    let clickElement = e.target.parentNode.id
    revealInfo(clickElement)
    if(window.innerWidth<=767){
        informationContainer.style.transform="translateY(0)"
        informationContainer.style.opacity="1"
        closeModal()
    }
    
  
})

const closeModal = ()=>{
    informationContainer.addEventListener('click', (e)=>{
        if (e.target.id==="closeModal"){
            informationContainer.style.transform="translateY(-100vh)"
            informationContainer.style.opacity="0"
        }
    })

}
const revealInfo = (id)=>{
    informationCardContainer.innerHTML = ""
    informationCardContainer.insertAdjacentHTML('beforeend', HTMLCode[id])
}



