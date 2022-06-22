const menuBtn = document.querySelector('.menu-btn')
const navLinks = document.querySelector('.nav-list')

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('mobile-nav')
  navLinks.classList.toggle('active')
})

const featureSection = document.querySelector('.feature')
const featureHeading = document.querySelector('.feature-heading')
const featureDesc = document.querySelector('.feature-desc')
const featureImg = document.querySelector('.feature-img')
const tabs = document.querySelector('.tabs')

let features = [
  {
    heading: 'Bookmark in one click',
    description:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    imgPath: './images/illustration-features-tab-1.svg',
    altText: 'dashboard',
  },
  {
    heading: 'Intelligent search',
    description:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    imgPath: './images/illustration-features-tab-2.svg',
    altText: 'dashboard with magnifying glass',
  },
  {
    heading: 'Share your bookmarks',
    description:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    imgPath: './images/illustration-features-tab-3.svg',
    altText: 'people waving to each other',
  },
]

function changeTab(index) {
  featureHeading.textContent = features[index].heading
  featureDesc.textContent = features[index].description
  featureImg.src = features[index].imgPath
  featureImg.alt = features[index].altText
}

function changeTabs(e) {
  for (item of tabs.children) {
    item.classList.remove('tab-active')
  }

  e.target.classList.add('tab-active')

  if (e.target.id === 'tab-1') {
    changeTab(0)
  } else if (e.target.id === 'tab-2') {
    changeTab(1)
  } else if (e.target.id === 'tab-3') {
    changeTab(2)
  }
}

tabs.addEventListener('click', (e) => {
  changeTabs(e)
})

//* Attribution
const pop = new Audio('./audio/pop.mp3')
const whoosh = new Audio('./audio/whoosh.mp3')

const attribution = document.querySelector('.attribution')
const attributionImg = document.querySelector('.attribution-img')

attributionImg.addEventListener('click', () => {
  if (attribution.classList.contains('attribution-active')) {
    whoosh.play()
  } else {
    pop.play()
  }

  attribution.classList.toggle('attribution-active')
})
