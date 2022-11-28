


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

        this.classList.add("col-sm-6");
        this.classList.add("col-md-4");
        this.classList.add("col-lg-3");
        this.classList.add("col-xl-2");
        this.classList.add("mb-4");
        this.id = this.title;

        let listGroup = document.createElement("div");
        listGroup.classList.add("list-group");

        // Create items
        let item;

        for (let [k, v] of Object.entries(data)) {
            let figure = document.createElement("figure");

            item = document.createElement("div");

            if (k == "title") {
                item = document.createElement("h4");
                item.classList.add("active");
                item.classList.add("text-truncate");
                //data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            }
            else if (k == "image") {
                    item = document.createElement("img");
                    item.classList.add("img-fluid");
                    item.classList.add("disabled");
                    item.classList.add("text-dark");
                

                if (v) {
                    item.src = "./img/" + data.image;
                }
                else{
                    item.src = "https://via.placeholder.com/320x180?text=TEXT";

                }
                
            }
            else{
                if (k == "link") {
                    item = document.createElement("a");
                    item.classList.add("text-truncate");
                    item.classList.add("text-start");
                    item.classList.add("rounded-0");
                    item.classList.add("rounded-bottom");
                    item.classList.add("px-3");
                    item.classList.add("btn");
                    item.classList.add("btn-secondary");
                    item.target = "_blank";
                    item.href = v;
                }

                if (k != "link") {
                    item.classList.add("disabled");
                    item.classList.add("text-dark");
                }


            }
            
            
            
            if (k != "link") {
                //item.classList.add("bg-light");
                item.classList.add("m-0");
                item.classList.add("list-group-item");
                item.classList.add("list-group-item-action");

            }
            
            if (k == "title") {
                item.innerHTML = v;
            }
            else if (k == "image") {
                
            }
            else{
                let uc = k.charAt(0).toUpperCase() + k.slice(1, k.length); // First letter to uppercase
                item.innerHTML = "<small class=''><b>" + uc + ": </b></small><br/>";
                item.innerHTML += v;

            }
                    

            listGroup.appendChild(item);


            //console.log(k)
            //console.log(v)
        }

        

        this.appendChild(listGroup);
        
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