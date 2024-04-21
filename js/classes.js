





class CanvasElement extends HTMLCanvasElement{

  ctx = this.getContext('2d');
  
  w = 1280;
  h = 720;


  colors = (cs, color, sat, value)=>{
    let result;

    let red;
    let green;
    let blue;

    let h;
    let s;
    let l;

    

    if(cs == "RGB") {
      if(color == "RED") {
        red = value;
        green = 0;
        blue = 0;
  
      }

      if(color == "GREEN") {
        red = 0;
        green = value;
        blue = 0;
  
      }

      if(color == "BLUE") {
        red = 0;
        green = 0;
        blue = value;
  
      }

      if(color == "GREY") {
        red = value;
        green = value;
        blue = value;
  
      }

      
      result = "rgb("+ red + ", " + green + ", " + blue + ")";

    }



    if (cs == "HSL") {
      if(color == "RED") {
        h = 0;
        s = sat + "%";
        l = value + "%";
  
      }

      if(color == "GREEN") {
        h = 110;
        s = sat + "%";
        l = value + "%";
  
      }

      if(color == "BLUE") {
        h = 230;
        s = sat + "%";
        l = value + "%";
  
      }

      if(color == "GREY") {
        h = 0;
        s = sat + "%";
        l = value + "%";
  
      }


      result = "HSL("+ h + ", " + s + ", " + l + ")";
      
    }

    /*


    let HSL_RED_:"hsl(0, 100%, 100%)",

    RGB_RED_250:"rgb(250, 0, 0)",
    RGB_RED_225:"rgb(225, 0, 0)",
    RGB_RED_200:"rgb(200, 0, 0)",
    RGB_RED_175:"rgb(175, 0, 0)",
    RGB_RED_125:"rgb(125, 0, 0)",

    // Hue Sat Light
    
    RGB_GREEN_250:"rgb(0, 250, 0)",



    RGB_GREEN_250:"rgb(0, 0, 250)",

    RGB_YELLOW_250:"rgb(250, 250, 0)",



    RGB_PURPLE_250:"rgb(250, 0, 250)",

    RGB_PINK_250:"rgb(250, 0, 125)",


    RGB_LIGHT:"rgb(250, 250, 250)",

    RGB_GREY_225:"rgb(225, 225, 225)",
    RGB_GREY_200:"rgb(200, 200, 200)",
    RGB_GREY_175:"rgb(175, 175, 175)",
    RGB_GREY_150:"rgb(150, 150, 150)",
    RGB_GREY_125:"rgb(125, 125, 125)",
    RGB_GREY_100:"rgb(100, 100, 100)",
    RGB_GREY_75:"rgb(75, 75, 75)",
    RGB_GREY_50:"rgb(50, 50, 50)",
    RGB_GREY_25:"rgb(25, 25, 25)",

    RGB_DARK:"rgb(10, 10, 10)",

    RGB_BLACK:"rgb(0, 0, 0)",

    */

    return result;

  }

  

  constructor(data){
    super(); // always call super() first in the constructor.

    this.classList.add("img");
    this.classList.add("img-fluid");
    this.classList.add("ratio");
    this.classList.add("ratio-16x9")
   
    // Size
    //this.style.width = this.w + "px";
    //this.style.height = this.h + "px";

    // Styles
    this.style.border = "1px solid " + this.colors("HSL", "GREY", 0, 90);

    console.log(this.width + "x" + this.height)

    this.draw(data);


  }


  draw(data){
    let ctx = this.ctx;

    if (data.title == "Animation Library") {
      this.al(ctx);
    }

    if (data.title == "Link Database") {
      this.ld(ctx);
    }

    if (data.title == "The Movie App") {
      this.tma(ctx);
    }

    if (data.title == "Tree view") {
      this.tw(ctx);
    }

    if (data.title == "Snake") {
      this.snake(ctx);
    }

    if (data.title == "3D Engine") {
      this.e(ctx);
    }

    if (data.title == "My webpage") {
      this.mw(ctx);
    }

    if (data.title == "Turbosquid") {
      this.ts(ctx);
    }


    
    

    


  }



  al(ctx){
    // BG
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 100);
    ctx.fillRect(0, 0, this.width, this.height);

    let margin = this.width*0.02;

    // Line 1
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 85);
    ctx.fillStyle = this.colors("HSL", "GREEN", 40, 60);
    ctx.fillRect(0 + margin, 0 + margin, this.width/3 - margin*1.5, this.height/2 - margin*2);

    ctx.fillStyle = this.colors("HSL", "GREY", 0, 70);
    ctx.fillStyle = this.colors("HSL", "RED", 90, 60);
    ctx.fillRect(this.width/3 + margin, 0 + margin, this.width/3 - margin*2, this.height/2 - margin*2);

    ctx.fillStyle = this.colors("HSL", "GREY", 0, 90);
    ctx.fillStyle = this.colors("HSL", "BLUE", 60, 60);
    ctx.fillRect(this.width/3*2 + margin, 0 + margin, this.width/3 - margin*2, this.height/2 - margin*2);

    // Line 2
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 95);
    ctx.fillStyle = "HSL(60, 80%, 70%)";
    ctx.fillRect(0 + margin, this.height/2 + margin , this.width/3 - margin*2, this.height/2 - margin*2);

    ctx.fillStyle = this.colors("HSL", "GREY", 0, 65);
    ctx.fillStyle = "HSL(270, 80%, 70%)";
    ctx.fillRect(this.width/3 + margin, this.height/2 + margin, this.width/3 - margin*2, this.height/2 - margin*2);

    ctx.fillStyle = this.colors("HSL", "GREY", 0, 75);
    ctx.fillStyle = "HSL(330, 60%, 80%)";
    ctx.fillRect(this.width/3*2 + margin, this.height/2 + margin, this.width/3 - margin*2, this.height/2 - margin*2);



  }

  ld(ctx){
    // BG
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 100);
    ctx.fillRect(0, 0, this.width, this.height);

    let margin ={
      x:this.width*0.2,
      y:this.width*0.2,

    } 

    margin = this.width*0.02;

    // Line 1
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 90);
    ctx.fillRect(0 + margin, 0 + margin, this.width - margin*2, this.height/10);

    
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 90);
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.fillRect(this.width/4 *i + margin, (this.height/10 * 2) + (this.height/4*j)*0.95 + margin*j*0.8, (this.width/4) - (margin*2), this.height/4 - margin );

        
      }

        
    }
    


  }

  tma(ctx){
    // BG
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 100);
    ctx.fillRect(0, 0, this.width, this.height);

    let margin ={
      x:this.width*0.2,
      y:this.width*0.2,

    } 

    margin = this.width*0.02,

    // Line 1
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 90);
    ctx.fillRect(0 + margin, 0 + margin, this.width/100*19*3 - margin*2, this.width/100*9*3);

    
    
    
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 100);
    ctx.fillRect(this.width/3, this.height - this.width/3 - margin, (this.width/1.5), this.width/3 + margin );

    ctx.fillStyle = this.colors("HSL", "GREY", 0, 90);
    for (let i = 0; i < 4; i++) {
      ctx.fillRect(this.width/6 *i + margin + this.width/3, this.height - this.width/5 - margin, (this.width/6) - (margin*2), this.width/5 );
        
    }
    
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 80);
    ctx.fillRect(margin + this.width/3, this.height - this.width/3, this.width/3 - (margin*2), this.width/20  );
    ctx.fillRect(margin + this.width/3, this.height - this.width/3 + this.width/20 +margin*0.75, this.width/1.5 - (margin*2), this.width/20-margin );


  }

  tw(ctx){
    // BG
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 100);
    ctx.fillRect(0, 0, this.width, this.height);

    // Init variabels
    let distance;
    let points;
    let size;
    let margin = this.width*0.02;

    let grid = (ctx)=>{
      
      ctx.strokeStyle = this.colors("HSL", "GREY", 0, 60);
      ctx.setLineDash([this.width/100, this.width/100]);

      // X
      for (let i = -1; i < 10; i++) {
        let x = this.height/3.5 * i;
        console.log(x)

        ctx.beginPath();
        ctx.moveTo(0, x);
        ctx.lineTo(this.width, x);
        ctx.stroke();

        
      }

      // Y
      for (let i = -0.5; i < 10; i++) {
        let x = this.height/3.5 * i;
        console.log(x)

        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, this.height);
        ctx.stroke();

        
      }

      ctx.setLineDash([0, 0]);

    }

    grid(ctx);

    //Set
    points = [
      { x:this.height/3.5*1 + this.height/3.5/2, y:this.height/3.5*0.5 + this.height/3.5/2 },
      { x:this.height/3.5*4 + this.height/3.5/2, y:this.height/3.5*0.5 + this.height/3.5/2 },
      { x:this.height/3.5*2.5 + this.height/3.5/2, y:this.height/3.5*2 + this.height/3.5/2 },
      { x:this.height/3.5*2.5 + this.height/3.5/2, y:-this.height/3.5*1 + this.height/3.5/2 },
      { x:this.height/3.5*5.5 + this.height/3.5/2, y:-this.height/3.5*1 + this.height/3.5/2 },
      { x:this.height/3.5*2.5 + this.height/3.5/2, y:this.height/3.5*3.5 + this.height/3.5/2 },
    ]

    size = {
      x:this.height/3.5,
      y:this.height/3.5,
    }

    ctx.strokeStyle = this.colors("HSL", "GREY", 0, 60);
    
    distance = {
      x:points[0].x-points[2].x,
      y:points[0].y-points[2].y,
    }
    // Draw lines
    ctx.beginPath();
    ctx.moveTo(points[2].x, points[2].y);
    ctx.lineTo(points[2].x, points[0].y -distance.y/2);
    ctx.lineTo(points[0].x, points[0].y -distance.y/2);
    ctx.lineTo(points[0].x, points[0].y);
    ctx.stroke();

    distance = {
      x:points[1].x-points[2].x,
      y:points[1].y-points[2].y,
    }
    ctx.beginPath();
    ctx.moveTo(points[2].x, points[2].y);
    ctx.lineTo(points[2].x, points[1].y-distance.y/2);
    ctx.lineTo(points[1].x, points[1].y-distance.y/2);
    ctx.lineTo(points[1].x, points[1].y);
    ctx.stroke();

    distance = {
      x:points[3].x-points[1].x,
      y:points[3].y-points[1].y,
    }
    ctx.beginPath();
    ctx.moveTo(points[1].x, points[1].y);
    ctx.lineTo(points[1].x, points[3].y-distance.y/2);
    ctx.lineTo(points[3].x, points[3].y-distance.y/2);
    ctx.lineTo(points[3].x, points[3].y);
    ctx.stroke();

    distance = {
      x:points[4].x-points[1].x,
      y:points[4].y-points[1].y,
    }
    ctx.beginPath();
    ctx.moveTo(points[1].x, points[1].y);
    ctx.lineTo(points[1].x, points[4].y-distance.y/2);
    ctx.lineTo(points[4].x, points[4].y-distance.y/2);
    ctx.lineTo(points[4].x, points[4].y);
    ctx.stroke();

    distance = {
      x:points[5].x-points[2].x,
      y:points[5].y-points[2].y,
    }
    ctx.beginPath();
    ctx.moveTo(points[2].x, points[2].y);
    ctx.lineTo(points[2].x, points[5].y-distance.y/2);
    ctx.lineTo(points[5].x, points[5].y-distance.y/2);
    ctx.lineTo(points[5].x, points[5].y);
    ctx.stroke();

    // Line 0
    ctx.fillRect(points[3].x - size.x/2, points[3].y - size.y/2, size.x, size.y);
    ctx.fillRect(points[4].x - size.x/2, points[4].y - size.y/2, size.x, size.y);

    // Draw rects
    // Line 1
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 80);
    ctx.fillRect(points[0].x - size.x/2, points[0].y - size.y/2, size.x, size.y);
    ctx.fillRect(points[1].x - size.x/2, points[1].y - size.y/2, size.x, size.y);

    // Line 2
    ctx.fillRect(points[2].x - size.x/2, points[2].y - size.y/2, size.x, size.y);

    // Line 3
    ctx.fillRect(points[5].x - size.x/2, points[5].y - size.y/2, size.x, size.y);
    


    
    

    
    
   
    


  }

  snake(ctx){
    let margin = this.width*0.02;

    // BG
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 20);
    ctx.fillRect(0, 0, this.width, this.height);

    // Line 1
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 60);
    ctx.fillRect(0 + margin, 0 + margin, this.width*0.75 - margin*1, this.height - margin*2);

    // Line 1
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 80);
    ctx.fillRect(0 + margin*2, 0 + margin*2, this.width*0.35, this.height*0.2);

    ctx.fillRect(0 + margin*2, 0 + margin*3 + this.height*0.2, this.width*0.3, this.height*0.1);


    
  }

  e(ctx){
    let margin = this.width*0.02;



    // BG
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 98);
    ctx.fillRect(0, 0, this.width, this.height);

    // Line 1
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 90);
    ctx.fillRect(this.width/2 - this.width*0.6/2, this.height*0.2, this.width*0.6, this.height*0.6);

    // Line 1
    ctx.fillStyle = this.colors("HSL", "RED", 90, 60);
    ctx.fillRect(this.width/2 - this.width*0.2/2, this.height - this.width*0.2 - this.width*0.2/3, this.width*0.2, this.width*0.2);

   
  }

  mw(ctx){
    
    let margin = this.width*0.02;

    // BG
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 100);
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.fillStyle = this.colors("HSL", "GREY", 0, 20);
    ctx.fillRect(0, 0, this.width, this.height/8);

    ctx.fillStyle = this.colors("HSL", "GREY", 0, 30);
    ctx.fillRect(0, this.height - this.height/10, this.width, this.height/10);

    ctx.fillStyle = this.colors("HSL", "GREY", 0, 80);
    ctx.fillRect(0 + margin*3, this.height/8 + margin, this.width*0.6, this.height*0.07);

    // Line 1
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 95);
    ctx.fillRect(0 + margin*3, this.height/8 + margin*4, this.width*0.2, this.height/4);
    ctx.fillRect(this.width*0.2 + margin*4, this.height/8 + margin*4, this.width*0.2, this.height/4);
    ctx.fillRect(this.width*0.2*2 + margin*5, this.height/8 + margin*4, this.width*0.2, this.height/4);
    ctx.fillRect(this.width*0.2*3 + margin*6, this.height/8 + margin*4, this.width*0.2, this.height/4);

    ctx.fillRect(0 + margin*3, this.height/8 + margin*4 + this.height/4 + margin, this.width*0.2, this.height/4);
    ctx.fillRect(this.width*0.2 + margin*4, this.height/8 + margin*4 + this.height/4 + margin, this.width*0.2, this.height/4);

  }

  ts(ctx){
    let margin = this.width*0.02;

    // BG
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 100);
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.fillStyle = "HSL(200, 20%, 10%)";
    ctx.fillRect(0, 0, this.width, this.height/8);
    ctx.fillStyle = "HSL(200, 10%, 60%)";
    ctx.fillRect(0, 0 + this.height/8, this.width, this.height/10);

    ctx.fillStyle = this.colors("HSL", "GREY", 0, 80);
    ctx.fillRect(0 + margin*2.5, this.height/8+ this.height/10 + margin, this.width*0.6, this.height*0.07);

    let size = this.width*0.15;
    // Line 1
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 95);
    //ctx.fillRect(0 + margin*2, this.height/8 + + this.height/10 + margin*2 + this.height*0.07, size, size);
    for (let i = 1; i < 6; i++) {
      ctx.fillRect(size*i + margin*i*2 -size+margin*0.5, this.height/8 + this.height/10 + margin*2 + this.height*0.07, size, size);
      
    }

    for (let i = 1; i < 6; i++) {
      ctx.fillRect(size*i + margin*i*2 -size+margin*0.5, this.height/8 + this.height/10 + margin*2 + this.height*0.07 + size+ margin, size, size);
      
    }
   

  
  }





  

  

}
customElements.define('canvas-element', CanvasElement, {extends: 'canvas'});


class ProjectElement extends HTMLDivElement{
    header;
    body = [];
    image;

    imgSrc;

    techniques;
    info;
    link;
    title;

    isCollapsed = false;

    constructor(data){
        super(); // always call super() first in the constructor.

        this.title = data.title;
        this.techniques = data.techniques;
        this.info = data.info;
        this.link = data.link;
        this.image = data.image
        this.imgSrc = data.image

        this.classList.add("col-sm-12");
        this.classList.add("col-md-6");
        this.classList.add("col-lg-4");
        this.classList.add("col-xl-3");
        this.classList.add("p-0", "m-0")
        this.classList.add("mb-4");
        this.id = this.title;

        this.render()

    }

    render(){
      let data = {
        title: this.title,
        image: this.imgSrc,
        techniques: this.techniques,
        info: this.info,
        link: this.link,
        
      }

      this.innerHTML = ""

      let listGroup = document.createElement("div");
      listGroup.classList.add("list-group");


      // Create items
      //-->
      let item;

      for (let [k, v] of Object.entries(data)) {
          let figure = document.createElement("figure");

          item = document.createElement("div");

          if (k == "title") {
              item = document.createElement("div");
              item.classList.add("active");
              item.classList.add("text-truncate");


              item.style.background = "HSL(0, 0%, 40%)"
              item.style.border = "none"

              item.style.userSelect = "none"
              
              let row = document.createElement("div");
              row.classList.add("row");
              row.classList.add("pe-2");
              row.classList.add("text-truncate");
              row.classList.add("justify-content-between");

              let header = document.createElement("h4");
              header.classList.add("col-10");
              header.classList.add("text-truncate");
              header.innerHTML = v;

              let closeBtn = document.createElement("div");
              closeBtn.classList.add("col-auto");
              closeBtn.classList.add("border");
              closeBtn.classList.add("rounded");
              closeBtn.style.cursor = "pointer"
              if (this.isCollapsed) {
                let caretUp = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up" viewBox="0 0 16 10">
                
                <path d="M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659" />
              </svg>`

                closeBtn.innerHTML = caretUp
              }
              else{
                
                let caretDown = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" stroke="" viewbox="0 0 32 28" class="bi bi-caret-down">
                
                <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" transform="scale(2,2)"></path>
                </svg>`

                closeBtn.innerHTML = caretDown
              }
              
              closeBtn.onmouseover = ()=>{
                closeBtn.style.background = "HSL(200, 40%, 40%)"
              }

              closeBtn.onmouseleave = ()=>{
                closeBtn.style.background = "HSL(0, 0%, 40%)"
              }

              closeBtn.onmousedown = ()=>{
                closeBtn.style.background = "HSL(200, 20%, 60%)"
              }

              closeBtn.onmouseup = ()=>{
                closeBtn.style.background = "HSL(200, 40%, 40%)"
              }


              closeBtn.addEventListener("click", ()=>{
                this.collapse();

              })
              //data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">

            this.header = item;

            row.append(header)
            row.append(closeBtn)
            item.append(row)
            

          }
          else if (k == "image") {
                item = document.createElement("a");
                //item.classList.add("disabled");
                item.classList.add("text-dark");
                item.href = data.link;
                item.target = "_blank"

                let img = document.createElement("img");
                img.classList.add("img-fluid");
                
                //img.classList.add("p-0");
              

              if (v) {
                img.src = "./img/" + data.image;
              }
              else{
                img.src = "https://via.placeholder.com/320x180?text=TEXT";

              }

              item.append(new CanvasElement(data));

              this.image = item;
              
              //item.append(img);
              
          }
          else{
              if (k == "link") {
                  item = document.createElement("a");
                  item.classList.add("text-truncate");

                  item.classList.add("list-group-item");
                  item.classList.add("list-group-item-action");
  
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
              
          }
          else if (k == "image") {
              
          }
          else{
              let uc = k.charAt(0).toUpperCase() + k.slice(1, k.length); // First letter to uppercase
              item.innerHTML = "<small class=''><b>" + uc + ":</b></small><br/>";
              item.innerHTML += v;

          }

          if (k != "title" && k != "image") {
            this.body.push(item);
          }
                  
          if(this.isCollapsed && k !="title"){
            item.style.display = "none";
          }

          listGroup.appendChild(item);

          //console.log(k)
          //console.log(v)
      }
      //<--

      this.appendChild(listGroup);
    }

    update(){

      
      this.render()
   

    }


    collapse(){
      this.isCollapsed = !this.isCollapsed;

      if (this.isCollapsed) {

        for (const item of this.body) {
          item.style.display = "none";
          
        }
        this.image.classList.remove("rounded-0")
        this.image.classList.add("rounded-bottom")
      }
      else{
        for (const item of this.body) {
          item.style.display = "block";
          
        }
        this.image.classList.remove("rounded-bottom")
        this.image.classList.add("rounded-0")
      }

      //console.log("collapse")
      //console.log(this.isCollapsed)
      this.update()
    }
    
}
customElements.define('project-element', ProjectElement, {extends: 'div'});

class CaretDowmElement{

  constructor(){
    let svg = document.createElement("svg")
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    svg.setAttribute("width", "16")
    svg.setAttribute("height", "16")
    svg.setAttribute("fill", "red")
    svg.setAttribute("viewbox", "0 0 16 16")
    svg.classList.add("bi", "bi-caret-down")

    
    let path = document.createElement("path")
    path.setAttribute("d", "M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659")
   
    svg.appendChild(path)

    return svg

  }

}


/*

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
</svg>

*/


