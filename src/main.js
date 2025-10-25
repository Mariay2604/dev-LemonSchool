window.addEventListener('load', ()=> {


const burgerBtn = document.querySelector('#burger');
const mobileContainer = document.querySelector('#mobile-container');
const body = document.querySelector('body');

burgerBtn.addEventListener('click', ()=> {
  mobileContainer.classList.toggle('hidden')
  burgerBtn.classList.toggle('after:bg-purple')
  burgerBtn.classList.toggle('before:bg-purple')
  body.classList.toggle('overflow-hidden')
})


const tabs = document.querySelectorAll('.tabs')

const installTabs =()=> {
  const tabsButtons = document.querySelectorAll('[data-tab-content]')
  const tabContent = document.querySelectorAll('.tab-content')

  const removeActiveClassForNav =()=> {
    tabsButtons.forEach(item => item.classList.remove('bg-purple'))
  }


  const hiddenContentTabs =()=> {
    tabContent.forEach(item => item.classList.add('hidden'))
  }

  tabsButtons.forEach((item, index, array)=>{
    const tabsButtons = item.getAttribute('data-tab-content');

    item.addEventListener('click', ()=> {
      removeActiveClassForNav()
      item.classList.add('bg-purple')
      const showContent = document.getElementById(tabsButtons)
      hiddenContentTabs()
      showContent.classList.remove('hidden')
    })
  })
}

let partnerSwiper;

function initSwiper () {
  if (window.innerWidth >= 768 && !partnerSwiper) {
     partnerSwiper = new Swiper(".swiper", {
      slidesPerView: 6,
      breakpoints: {
        1024: { slidesPerView: 4 },
        768: { slidesPerView: 3 },
      },
     });
  } else if (window.innerWidth < 768 && !partnerSwiper) {
    partnerSwiper.destroy(true, true);
    partnerSwiper = null;
  }
}

window.addEventListener("load", initSwiper);
window.addEventListener("resize", initSwiper);

document.querySelectorAll('.tabs').length ? installTabs() : null;
document.querySelectorAll('img').length ? getLoremImage() : null;

})