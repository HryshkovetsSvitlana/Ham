import arrayImages from './js/constant.js'

let dataArr = arrayImages

// Tabs //

const tabs = document.querySelector('.tabs-services')
tabs.addEventListener('click', (event) => {
  const tabsTitle = document.querySelectorAll('.services-tab')
  tabsTitle.forEach((item) => {
    if (item.classList.contains('active')) {
      item.classList.remove('active')
      document.querySelector(item.dataset.tab).classList.remove('active')
    }
    event.target.classList.add('active')

    const tabContent = document.querySelector(event.target.dataset.tab)
    tabContent.classList.add('active')
  })
})

function postCardImages(arr) {
  arr.forEach((el) => {
    const cardImg = document.createElement('div')
    cardImg.classList.add('card-img')
    const setImages = document.querySelector('.set-images')
    setImages.append(cardImg)

    const velum = document.createElement('div')
    velum.classList.add('velum')
    cardImg.prepend(velum)

    const velumIcons = document.createElement('div')
    velumIcons.classList.add('velum-icons')
    velum.prepend(velumIcons)

    const right = document.createElement('div')
    right.classList.add('right')
    right.classList.add('velum-icon')
    velumIcons.prepend(right)

    const left = document.createElement('div')
    left.classList.add('left')
    left.classList.add('velum-icon')
    velumIcons.prepend(left)

    const velumColor = document.createElement('span')
    velumColor.classList.add('velum-color')
    velumColor.innerText = 'creative design'
    velum.append(velumColor)

    const velumColorLight = document.createElement('span')
    velumColorLight.classList.add('velum-color-light')
    let velumColorLightText = el.category
    velumColorLight.innerText = velumColorLightText
    velum.append(velumColorLight)

    const wrapperImg = document.createElement('img')
    wrapperImg.classList.add('wrapper-img')
    wrapperImg.setAttribute('src', el.img)
    cardImg.prepend(wrapperImg)
  })
}
postCardImages(arrayImages.slice(0, 12))

// Load more //

const loadMore = document.querySelector('#loadMore')
loadMore.addEventListener('click', (event) => {
  loadMore.style.display = 'none'
  document.querySelector('.preloader').style.display = 'flex'
  setTimeout(() => {
    let quantity = document.querySelectorAll('.card-img').length
    if (quantity < dataArr.length) {
      postCardImages(dataArr.slice(quantity, (quantity += 12)))
    }
    document.querySelector('.preloader').style.display = 'none'
    loadMore.style.display = 'block'

    if (quantity >= dataArr.length) {
      loadMore.style.display = 'none'
    }
  }, 2000)
})

// Filter //

const itemsWorkSection = document.querySelector('.items-work-section')
itemsWorkSection.addEventListener('click', (event) => {
  const cardImages = document.querySelectorAll('.card-img')
  if (cardImages) {
    cardImages.forEach((cardImage) => cardImage.remove())
  }

  if (event.target.innerText === 'ALL') {
    dataArr = arrayImages
  } else {
    dataArr = arrayImages.filter((cardImage) => {
      return cardImage.category.toLocaleUpperCase() === event.target.innerText
    })
  }
  postCardImages(dataArr.slice(0, 12))

  if (dataArr.length > 12) {
    loadMore.style.display = 'block'
  } else {
    loadMore.style.display = 'none'
  }

  const workSectionItem = document.querySelectorAll('.work-section-item')
  workSectionItem.forEach((item) => {
    if (item.classList.contains('active-item')) {
      item.classList.remove('active-item')
    }
    event.target.classList.add('active-item')
  })
})

// Slider //

const swiper = new Swiper('.mySwiper', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
})
const swiper2 = new Swiper('.mySwiper2', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
})
