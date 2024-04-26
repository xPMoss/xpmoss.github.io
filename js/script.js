

let headerContent
let navigationContent
let mainContent
let footerContent

let projects = []

//
function start(){

  //console.log(new CanvasElement())
  //document.body.append( new CanvasElement() );
  localStorage.removeItem("previousPage")

  headerContent = new HeaderContentElement()
  document.body.prepend(headerContent)

  navigationContent = new NavigationContentElement()
  headerContent.after(navigationContent)


  // Create mainContent
  mainContent = new MainContentElement()
  navigationContent.after(mainContent)
  // Footer
  footerContent = new FooterContentElement()
  mainContent.after(footerContent)

}



window.onload = ()=>{
  start();

}


//
function update(){
  console.log("update()")
  mainContent.update()

}
