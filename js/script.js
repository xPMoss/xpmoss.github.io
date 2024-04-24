



function start(){

  //console.log(new CanvasElement())
  //document.body.append( new CanvasElement() );


  // Create container
  let container = document.createElement("div");
  container.classList.add("container");
  container.classList.add("px-4");
  container.classList.add("mb-4");

  // Create row
  let row = document.createElement("div");
  row.classList.add("row"); 

  // Create Html objects
  projects = sortByTitle(projects)
  for (const project of projects) {
    let col = new ProjectElement(project);
    if(project.show){
      row.appendChild(col);
    }
    
      
  }

  // Append to html
  container.appendChild(row);
  document.body.append(container)
    
}



window.onload = ()=>{
  start();


}

let sortByTitle = (list)=>{ 
  list.sort((a, b) => {
    const nameA = a.title.toUpperCase(); // ignore upper and lowercase
    const nameB = b.title.toUpperCase(); // ignore upper and lowercase

    if (nameA < nameB) {
      return -1;
    }

    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
      
  });

  return list

}