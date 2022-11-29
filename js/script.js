



function start(){

  //console.log(new CanvasElement())
  //document.body.append( new CanvasElement() );


  // Create container
  let container = document.createElement("div");
  container.classList.add("container-fluid");
  container.classList.add("px-4");

  // Create row
  let row = document.createElement("div");
  row.classList.add("row"); 

  // Create Html objects
  for (const project of projects) {
    let col = new ProjectElement(project);
    row.appendChild(col);
      
  }

  // Append to html
  container.appendChild(row);
  document.body.append(container)
    
}



window.onload = ()=>{
  start();


}

