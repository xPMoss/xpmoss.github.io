


class ProjectElement extends HTMLDivElement{

    techniques;
    info;
    link;
    title;

    constructor(data){
        super(); // always call super() first in the constructor.

        this.title = data.title;
        this.techniques = data.techniques;
        this.info = data.info;
        this.link = data.link;

        this.classList.add("col-6");
        this.classList.add("mb-4");
        this.id = this.title;

        let row = document.createElement("div");
        row.classList.add("row");

        let col = document.createElement("div");
        col.classList.add("col");

        let listGroup = document.createElement("div");
        listGroup.classList.add("list-group");

        // Create items
        let item;

        for (let [k, v] of Object.entries(data)) {

            item = document.createElement("div");
            

            if (k == "title") {
                item = document.createElement("h4");
                item.classList.add("active");
                //data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            }
            else{
                
                
                item.classList.add("disabled");
                item.classList.add("text-dark");
            }
            
            item.classList.add("m-0");
            item.classList.add("list-group-item");
            item.classList.add("list-group-item-action");
            
           
            if (k == "title") {
                item.innerHTML = v;
            }
            else{
                let uc = k.charAt(0).toUpperCase() + k.slice(1, k.length); // First letter to uppercase
                item.innerHTML = "<small class='text-secondary'><b>" + uc + ": </b></small><br/>";
                item.innerHTML += v;

            }
            

            listGroup.appendChild(item);
            //console.log(k)
            //console.log(v)
        }

        let colR = document.createElement("div");
        colR.classList.add("col");

        col.appendChild(listGroup);
        row.appendChild(col);
        row.append(colR);
        this.appendChild(row);

        //return this;
    }
    
}

customElements.define('project-element', ProjectElement, {extends: 'div'});






/*
 <div class="container-fluid">
    <div class="row">
      <div class="col-auto">
        <div class="list-group">
          <h4 href="#" class="list-group-item list-group-item-action active">
            Animation Library
          </h4>
          <div class="list-group-item list-group-item-action disabled text-dark">
            <small>Techniques:<br/></small>Javascript
          </div>
          <div class="list-group-item list-group-item-action disabled text-dark">
            <small>Info:<br/></small>For easy animation directly in Html code.
          </div>
          <a href="https://github.com/xPMoss/anim.lib" class="list-group-item list-group-item-action" target="_blank">
            <small>Link:<br/></small>https://github.com/xPMoss/anim.lib
          </a>
        </div>

      </div>
    </div>



*/