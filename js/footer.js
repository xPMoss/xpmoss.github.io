
// Footer Element
class FooterContentElement extends HTMLDivElement{

    constructor(){
      super()
  
      this.id = "footer-content"
      this.classList.add("container-fluid")
      this.classList.add("p-0")
      this.classList.add("m-0")
      this.classList.add("fixed-bottom")
      this.classList.add("bg-light")
  
      this.render()
  
      this.addEventListener("ChangeEvent", ()=>{
        this.update()
  
      })
  
    }
  
    render(){
      this.innerHTML = ""
  
      let row = document.createElement("div") 
      row.classList.add("row")
      row.classList.add("p-0")
      row.classList.add("m-0")
      
      let cols = ["1", "2", "3"]
      for (const co of cols) {
        let c = document.createElement("div") 
        c.classList.add("col")
        c.classList.add("p-0", "p-2")
        c.classList.add("m-0")
        c.classList.add("rounded-1", "text-center", "fs-6", "user-select-none")
        c.role = "button"
  
        c.innerText = co
  
        row.append(c)
  
      }
      
  
      this.append(row)
    }
  
    update(){
      this.render()
  
  
      
    }
  
  
  
}
customElements.define('footer-content-element', FooterContentElement, {extends: 'div'})
  
  