



function start(){

    // Create container
    let container = document.createElement("div");
    container.classList.add("container-fluid");

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

start();
