function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(link) {
    const container = document.createElement('nav')
    link.forEach(item => {
      const navLinks = document.createElement("a")
      navLinks.href = item.href
      navLinks.textContent = item.textContent
      navLinks.title = item.title
      container.append(navLinks)
    })
    return container
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    const card = document.createElement("div")
    card.classList.add("learner-card")

    const userID = document.createElement("p")
    userID.textContent = `Learner ID: ${learner.id}`
    const nameL = document.createElement("p")
    nameL.textContent = learner.fullName
    const dobL = document.createElement("p")
    dobL.textContent = `Date of Birth: ${learner.dateOfBirth}`
    const FavLangunage = document.createElement("p")
    const favLan = languages.find(lang => lang.id === learner.favLanguage)
    FavLangunage.textContent = `Favorite Language: ${favLan.name}`;

    [nameL,userID, dobL, FavLangunage].forEach(item => {
      card.append(item)
    })

    card.addEventListener("click",()=>{
      document.querySelectorAll(".learner-card").forEach(card =>{
        card.classList.remove("active")
      })
      card.classList.add("active")
    })

    return card
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    learners.forEach(learner => {
      const learnerCard = buildLearnerCard(learner, languages)
      document.querySelector("section").append(learnerCard)
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    const footer = document.createElement('footer')
    const contactDiv = document.createElement("div")
    contactDiv.className = "company-info"
    const companyName = document.createElement("p")
    companyName.textContent = footerData.companyName
    const companyAdress = document.createElement("p")
    companyAdress.textContent = footerData.address
    const companyMailText = document.createElement("p")
    companyMailText.innerHTML = `Email: <a href="mailto:example.com">${footerData.contactEmail}`
    contactDiv.append(companyName)
    contactDiv.append(companyAdress)
    contactDiv.append(companyMailText)


    const socialMedia = document.createElement("div")
    socialMedia.className = "social-media"

    for (let platform in footerData.socialMedia) {
      const anchorTags = document.createElement("a")
      anchorTags.href = footerData.socialMedia[platform]
      anchorTags.textContent = platform.charAt(0).toUpperCase() + platform.slice(1)
      socialMedia.append(anchorTags)
    }
    const tagLine = document.createElement("div")
    const date = new Date()
    tagLine.textContent = `© ${footerData.companyName.toUpperCase()} ${date.getFullYear()}`
    footer.append(contactDiv)
    footer.append(socialMedia)
    footer.append(tagLine)
    return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card
  document.addEventListener("click",evt=>{
    if(evt.target === document.querySelector("section"))
      {
        const learner = document.querySelectorAll(".learner-card")
        learner.forEach(card =>{
          card.classList.remove("active")
        })
      }
  })
  //  ✨ do your magic here

}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
