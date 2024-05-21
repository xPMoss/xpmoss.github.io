
// Header Element
class HeaderContentElement extends HTMLDivElement{
  
    constructor(){
      super()
  
      this.id = "header-content"
      this.classList.add("container-fluid")
      this.classList.add("p-0", "px-4", "pb-4", "pt-3")
      this.classList.add("m-0")
  
      this.render()
  
      this.addEventListener("ChangeEvent", ()=>{
        this.update()
  
      })
  
    }
  
    render(){
      this.innerHTML = ""
  
      let mainRow = document.createElement("div")
      mainRow.classList.add("row")
  
      let avatarCol = document.createElement("div")
      avatarCol.classList.add("col-3", "col-md-2", "col-lg-1")
      avatarCol.classList.add("p-0")
      avatarCol.classList.add("m-0")
  
      let avatarImg = document.createElement("img")
      avatarImg.classList.add("img-fluid", "rounded-circle", "border", "bg-blue")
      avatarImg.src = "img\\avatar_geometric_512.png"
  
      let mainCol = document.createElement("div")
      mainCol.classList.add("col")
      mainCol.classList.add("p-0", "ps-4")
      mainCol.classList.add("m-0")
  
      avatarCol.appendChild(avatarImg)
      mainRow.appendChild(avatarCol, mainCol)
      this.appendChild(mainRow)
  
    }
  
    update(){
      this.render()
  
      
    }
  
  
  
}
customElements.define('header-content-element', HeaderContentElement, {extends: 'div'})
  
  // Navigation Element
class NavigationContentElement extends HTMLDivElement{
    previousPage
    currentPage
  
    constructor(){
      super()
  
      this.id = "navigation-element"
      this.classList.add("container-fluid")
      this.classList.add("p-0")
      this.classList.add("m-0", "mb-4")
      this.classList.add("sticky-top")
      this.classList.add("bg-light")
  
      this.update()
      this.render()
  
      this.setupSwipeNavigation()
      
      this.addEventListener("ChangeEvent", ()=>{
        this.update()
  
      })
  
    }
  
    setupSwipeNavigation(){
      let touchstartX = 0
      let touchendX = 0
  
      let touchstartY = 0
      let touchendY = 0
          
      let previousPageIndex
      let currentPageIndex
  
      document.addEventListener('touchstart', e => {
        //console.log("touchstart", e)
        touchstartX = 0
        touchendX = 0
  
        touchstartY = 0
        touchendY = 0
  
        switch (this.currentPage) {
          case 'home':
            currentPageIndex = 0
            break;
          case 'projects':
            currentPageIndex = 1
            break;
          case 'links':
            currentPageIndex = 2
            break;
          case 'about':
            currentPageIndex = 3
            break;
          default:
            break;
  
        }
  
        touchstartX = e.changedTouches[0].screenX
        touchstartY = e.changedTouches[0].screenY
      })
  
      document.addEventListener('touchend', e => {
        //console.log("touchend", e)
        touchendX = e.changedTouches[0].screenX
        touchendY = e.changedTouches[0].screenY
  
        let swipping = false
        let distanceX = Math.abs(touchstartX - touchendX)
        let distanceY = Math.abs(touchstartY - touchendY)
  
        console.log("distanceX", distanceX)
        console.log("distanceY", distanceY)
  
        if (touchendX < touchstartX && distanceX > 100 && distanceY < 100){
          //console.log('swiped left!')
  
          swipping = true
  
          switch (currentPageIndex) {
            case 0:
              this.previousPage = "home"
              this.currentPage = "projects"
              break;
            case 1:
              this.previousPage = "projects"
              this.currentPage = "links"
              break;
            case 2:
              this.previousPage = "links"
              this.currentPage = "about"
              break;
            case 3:
                this.previousPage = "about"
                this.currentPage = "about"
                break;
            default:
              break;
    
          }
  
          
  
        }
        
        if (touchendX > touchstartX && distanceX > 100 && distanceY < 100){
            //console.log('swiped right!')
  
            swipping = true
  
            switch (currentPageIndex) {
              case 0:
                this.previousPage = "home"
                this.currentPage = "home"
                break;
              case 1:
                this.previousPage = "links"
                this.currentPage = "home"
                break;
              case 2:
                this.previousPage = "links"
                this.currentPage = "projects"
                break;
              case 3:
                this.previousPage = "projects"
                this.currentPage = "about"
                break;
              default:
                break;
      
            }
              
        } 
  
        if(swipping){
          localStorage.setItem('previousPage', this.previousPage);
          localStorage.setItem('currentPage', this.currentPage);
          document.body.dispatchEvent(NavigateEvent);
    
          swipping = false
    
        }
  
        
        
        //console.log(this.previousPage +"=>"+ this.currentPage)
        //console.log('swipping', swipping)
      })
  
      
  
    }
  
    render(){
      this.innerHTML = ""
  
      let row = document.createElement("div") 
      row.classList.add("row")
      row.classList.add("p-0")
      row.classList.add("m-0")
  
      let linkObjects = [
        {
          title: "Home",
          page: "home"
        },
        {
          title: "Projects",
          page: "projects"
        },
        {
          title: "Links",
          page: "links"
        },
        {
          title: "About",
          page: "about"
        },
      ]
  
      for (const lo of linkObjects) {
        let li = document.createElement("div")
        li.classList.add("col")
        li.classList.add("p-0", "p-2")
        li.classList.add("m-0")
        li.classList.add("rounded-1", "text-center", "fs-4", "user-select-none")
        li.role = "button"
  
        li.innerText = lo.title
        
        li.addEventListener("click",()=>{
  
          console.log("clicked!", lo.page)
  
          localStorage.setItem('currentPage', lo.page);
  
          if(this.currentPage != lo.page){
            localStorage.setItem('previousPage', this.currentPage);
            document.body.dispatchEvent(NavigateEvent);
          }
  
        })
  
  
        //
        if(this.currentPage == lo.page){
          li.classList.add("border", "text-decoration-underline", "active")
        }
  
        row.appendChild(li)
  
  
      }
  
      this.appendChild(row)
     
  
    }
  
    update(){
      this.previousPage = localStorage.getItem('previousPage')
      this.currentPage = localStorage.getItem('currentPage')
  
      if(this.currentPage == null){
        this.currentPage = "home"
  
      }
      
    }
  
  
  
}
customElements.define('navigation-content-element', NavigationContentElement, {extends: 'div'})