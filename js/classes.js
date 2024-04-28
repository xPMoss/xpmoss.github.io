


//
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

    this.classList.add("img-fluid");
    this.classList.add("ratio", "ratio-16x9");
   
    // Size
    //this.style.width = this.w + "px";
    //this.style.height = this.h + "px";

    // Styles
    //this.style.border = "1px solid " + this.colors("HSL", "GREY", 0, 90);

    //console.log(this.width + "x" + this.height)

    this.draw(data);


  }


  draw(data){
    let ctx = this.ctx;

    if (data.headline == "Animation Library") {
      this.al(ctx);
    }

    if (data.headline == "Link Database") {
      this.ld(ctx);
    }

    if (data.headline == "The Movie App") {
      this.tma(ctx);
    }

    if (data.headline == "Tree view") {
      this.tw(ctx);
    }

    if (data.headline == "Snake") {
      this.snake(ctx);
    }

    if (data.headline == "3D Engine") {
      this.e(ctx);
    }

    if (data.headline == "My webpage") {
      this.mw(ctx);
    }

    if (data.headline == "Turbosquid") {
      this.ts(ctx);
    }

    if (data.headline == "Calender") {
      this.calender(ctx);
    }
    
    
    if (data.headline == "The Movie Service") {
      this.tms(ctx);
    }
    
    


  }

  tms(ctx){
    // BG
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 50);
    ctx.fillRect(0, 0, this.width, this.height);

    let margin = this.width*0.02;

    ctx.fillStyle = this.colors("HSL", "GREY", 0, 80);
    ctx.fillRect(0, 0, this.width, this.height/8);

    // Line 1
   

    // Line 2
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 90);
    ctx.fillRect(0 + margin*4, this.height/8 + margin*2 , this.width - margin*8, this.height/1.4 - margin*2);

   
  }

  calender(ctx){
    // BG
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 100);
    ctx.fillRect(0, 0, this.width, this.height);

    let margin = this.width*0.02;

    // Line 1
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 85);
    ctx.fillRect(this.width/6 + margin, 0 + margin*2, this.width/6 - margin*1.5, this.height/5 - margin*2);

    ctx.fillStyle = this.colors("HSL", "GREY", 0, 85);
    ctx.fillRect(this.width/6*2 + margin, 0 + margin*2, this.width/6 - margin*1.5, this.height/5 - margin*2);

    ctx.fillStyle = this.colors("HSL", "GREY", 0, 85);
    ctx.fillRect(this.width/6*3 + margin, 0 + margin*2, this.width/6 - margin*1.5, this.height/5 - margin*2);

    ctx.fillStyle = this.colors("HSL", "GREY", 0, 85);
    ctx.fillRect(this.width/6*4 + margin, 0 + margin*2, this.width/6 - margin*1.5, this.height/5 - margin*2);

    // Line 2
    ctx.fillStyle = this.colors("HSL", "GREY", 0, 80);
    ctx.fillRect(0 + margin*4, this.height/4 + margin , this.width - margin*8, this.height/1.4 - margin*4);

   
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
        //console.log(x)

        ctx.beginPath();
        ctx.moveTo(0, x);
        ctx.lineTo(this.width, x);
        ctx.stroke();

        
      }

      // Y
      for (let i = -0.5; i < 10; i++) {
        let x = this.height/3.5 * i;
        //console.log(x)

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
customElements.define('canvas-element', CanvasElement, {extends: 'canvas'})



//
class ProjectElement extends HTMLDivElement{
    header
    body = []
    image

    imgSrc

    techniques
    info
    link
    title

    show

    isCollapsed = false

    constructor(data){
        super(); // always call super() first in the constructor.

        this.title = data.title
        this.techniques = data.techniques
        this.info = data.info
        this.link = data.link
        this.headline = data.headline
        this.linkText = data.linkText
        this.image = data.image
        this.imgSrc = data.image

        this.tags = data.tags
        this.show = data.show

        this.classList.add("col-sm-12")
        this.classList.add("col-md-6")
        this.classList.add("col-lg-4")
        this.classList.add("col-xl-3")
        this.classList.add("p-0", "m-0")
        this.classList.add("pe-0", "pe-sm-4", "m-0")
        this.classList.add("mb-4");
        this.id = this.title

        this.render()

    }

    render(){
      let data = {
        title: this.title,
        image: this.imgSrc,
        techniques: this.techniques,
        info: this.info,
        link: this.link,
        linkText: this.linkText,
        headline: this.headline,
        tags: this.tags,
      }

      this.innerHTML = ""

      let container = document.createElement("div")
      container.classList.add("col", "p-0", "m-0", "border", "rounded-1")

      let divider = document.createElement("div");
      divider.classList.add("pt-2", "pb-1", "border-bottom");

      // Header
      // #region Header     
      let header = document.createElement("div");
      header.classList.add("row", "p-0", "px-3", "py-2", "m-0", "bg-light" , "border-bottom")
      let title = document.createElement("h5")
      title.classList.add("col", "p-0", "m-0", "text-truncate", "user-select-none")
      title.innerHTML = data.headline
      header.append(title)
      let closeBtn = document.createElement("div")
      closeBtn.classList.add("col-auto", "px-1", "border", "rounded-1")
      closeBtn.style.cursor = "pointer"
      if (this.isCollapsed) {
        let caretUp = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#808080" class="bi bi-caret-up" viewBox="0 0 32 28">
                        <path d="M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659" transform="scale(2,2)"/>
                      </svg>`

        closeBtn.innerHTML = caretUp
      }
      else{
        
        let caretDown = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#808080" stroke="" viewbox="0 0 32 28" class="bi bi-caret-down">
                          <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" transform="scale(2,2)"></path>
                        </svg>`

        closeBtn.innerHTML = caretDown
      }

      closeBtn.addEventListener("click", ()=>{
        this.collapse()

      })
      header.append(closeBtn)
      // #endregion

      // Body
      let body = document.createElement("div")
      body.classList.add("col", "p-0", "m-0")
      
      let image = document.createElement("a")
      image.classList.add("p-0", "m-0")
      image.href = data.link
      image.target = "_blank"
      image.append(new CanvasElement(data))

      let img = document.createElement("img")
      img.classList.add("img-fluid")
      if (true) {
        
      }
      else{
        
      }
      
      body.append(image)

      let techniques = document.createElement("div")
      techniques.classList.add("col", "p-0", "px-3", "pb-3", "m-0")
      techniques.innerHTML = "<small class=''><b>" + "Techniques" + ":</b></small><br/>"
      techniques.innerHTML += data.techniques
      body.append(techniques)

      if(data.info){
        let info = document.createElement("div")
        info.classList.add("col", "p-0", "px-3", "pb-3", "m-0")
        info.innerHTML = "<small class=''><b>" + "Info" + ":</b></small><br/>"
        info.innerHTML += data.info
        body.append(info)
      }
      

      if(data.link){
        let linkDiv = document.createElement("div")
        linkDiv.classList.add("col", "p-0", "px-3", "pb-3", "m-0")
        linkDiv.innerHTML += "<small class=''><b>" + "Link" + ":</b></small><br/>"
        let link = document.createElement("a")
        link.classList.add("text-truncate")
        link.target = "_blank"
        link.href = data.link
        link.innerHTML += data.linkText
        linkDiv.append(link)
        body.append(linkDiv)

      }
      

      if(data.tags){
        let tags = document.createElement("div")
        tags.classList.add("row", "p-0", "px-3", "pb-3", "m-0")

        let tagList = data.tags
        tagList.sort()

        for (const tag of tagList) {
          let t = document.createElement("small")
          t.classList.add("col-auto", "p-0", "p-2", "m-0", "mb-2", "me-2", "border", "rounded-1", "user-select-none")
          t.innerHTML = tag
    
          tags.append(t)
          
        }
        body.append(tags)
        
      }
      
      // Append
      container.appendChild(header)
      container.appendChild(body)
      this.appendChild(container)

      // Set
      this.header = header
      this.body = body

      // 
      if(this.isCollapsed){
        header.classList.add("rounded-bottom")
        this.body.style.display = "none";
        //this.body.classList.add("d-none")
      }


    }

    update(){

    
   

    }


    collapse(){
      this.isCollapsed = !this.isCollapsed;

      if (this.isCollapsed) {

        this.body.style.display = "none";

      }
      else{
        this.body.style.display = "block";
        //this.image.classList.remove("rounded-bottom")
        //this.image.classList.add("rounded-0")
      }

      //console.log("collapse")
      //console.log(this.isCollapsed)
      this.update()
      this.render()
    }
    
}
customElements.define('project-element', ProjectElement, {extends: 'div'})



//
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
            this.currentPage = "links"
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



// Main Element
class MainContentElement extends HTMLDivElement{

  currentPage
  pages = []

  constructor(data){
    super()

    this.id = "main-content"
    this.classList.add("container")
    this.classList.add("px-4")
    this.classList.add("mb-4")

    this.createHome()
    this.createProjects()
    this.createLinks()

    this.update()
    this.render()

    this.addEventListener("ChangeEvent", ()=>{
      this.update()

    })

  }

  createHome(){
    let row = document.createElement("div")
    row.classList.add("row")
    row.classList.add("p-0")
    row.classList.add("m-0")
    row.classList.add("d-none")

    let col = document.createElement("div")
    col.classList.add("col")
    col.classList.add("p-0")
    col.classList.add("m-0")

    // My name is...
    col.innerHTML = 
    `
    <div class="p-0 pb-2 m-0">
      My name is Patrik and I am a web- and applications- developer with focus on JavaScript, HTML, CSS and C#.Net.
    </div>
    `
    
    // Languages
    let badgeDiv_languages = document.createElement("div")
    badgeDiv_languages.classList.add("border", "rounded-1", "px-2")
    badgeDiv_languages.innerHTML += `<h4>Languages</h4>`

    for (const bd of badgeData_languages) {
      badgeDiv_languages.append(
        createBadge(bd)
      )
    
    }
    col.append(badgeDiv_languages)
    col.innerHTML += `<br/>`

    // I love to code...
    col.innerHTML += 
    `
    <div class="p-0 pb-2 m-0">
      I love to code some quick functions in Javascript, add some html and css for webb apps, or play with some classes and methods in C#.Net.
    </div>
    `
    // Frameworks
    let badgeDiv_frameworks = document.createElement("div")
    badgeDiv_frameworks.classList.add("border", "rounded-1", "px-2", "col-auto")
    badgeDiv_frameworks.innerHTML += `<h4>Frameworks</h4>`

    for (const bd of badgeData_frameworks) {
      badgeDiv_frameworks.append(
        createBadge(bd)
      )
    
    }
    col.append(badgeDiv_frameworks)
    col.innerHTML += `<br/>`

    // Check out the projects...
    col.innerHTML += 
    `
    <div class="p-0 pb-2 m-0">
      Check out the projects section for some of my coding- and animation- projects and experiements.

      <br/><br/>
      I have also been working with animation and graphics over the past 10 years.
      <br/>
      My main tools for animations are Cinema 4D, After Effects and Photoshop.
    </div>
    `
    // Tools
    let badgeDiv = document.createElement("div")
    badgeDiv.classList.add("border", "rounded-1", "px-2")
    badgeDiv.innerHTML += `<h4>Tools</h4>`

    let badgeDiv_dev_tools = document.createElement("div")
    badgeDiv_dev_tools.classList.add("mb-3")
    for (const bd of badgeData_tools) {
      if(bd.type == "dev_tool"){
        badgeDiv_dev_tools.append(
          createBadge(bd)
        )
      }
    }
    badgeDiv.append(badgeDiv_dev_tools)

    let badgeDiv_dev_platform = document.createElement("div")
    badgeDiv_dev_platform.classList.add("mb-3")
    for (const bd of badgeData_tools) {
      if(bd.type == "dev_platform"){
        badgeDiv_dev_platform.append(
          createBadge(bd)
        )
      }
    }
    badgeDiv.append(badgeDiv_dev_platform)

    let badgeDiv_anim_tool = document.createElement("div")
    for (const bd of badgeData_tools) {
      if(bd.type == "anim_tool"){
        badgeDiv_anim_tool.append(
          createBadge(bd)
        )
      }
    }
    badgeDiv.append(badgeDiv_anim_tool)

    col.append(badgeDiv)

    row.append(col)

    this.pages.push(row)

  }

  createProjects(){
    console.log("projects")

    let row = document.createElement("div")
    row.classList.add("row")
    row.classList.add("p-0")
    row.classList.add("m-0")
    row.classList.add("d-none")
  
    let desc = document.createElement("div")
    desc.classList.add("row")
    desc.classList.add("p-0")
    desc.classList.add("m-0", "mb-4")

    let content
    content = `
    <span class="p-0 m-0">
      On this page you can se a collection of work I have done over the years as an developer, 3D-artist and motion designer.
    </span>
    <small class="p-0 m-0">
      (Click on the images to view the content, or click on the links to get more information)
    </small>
    `
    desc.innerHTML = content

    row.appendChild(desc)

    let tags = document.createElement("div")
    tags.classList.add("row", "p-0", "m-0", "mb-3")

    let tagList = []

    for (const project of animationData) {
      if(project.tags){
        for (const tag of project.tags) {
          tagList.push(tag)
        }
      }
    }

    for (const project of projectsData) {
      if(project.tags){
        for (const tag of project.tags) {
          tagList.push(tag)
        }
      }
    }

    tagList = [...new Set(tagList)]
    tagList.sort()
    for (const tag of tagList) {
      let t = document.createElement("div")
      t.classList.add("col-auto", "p-0", "p-2", "m-0", "mb-2", "me-2", "border", "rounded-1", "user-select-none")
      t.innerHTML = tag

      tags.append(t)
      
    }

    row.appendChild(tags)

    let proj = document.createElement("div")
    proj.classList.add("row", "p-0", "m-0")

    projectsData = sortByHeadline(projectsData)
    for (const project of projectsData) {

      let col = new ProjectElement(project);
      projects.push(col)

      if(project.show){
        proj.appendChild(col)

      }
        
    }

    animationData = sortByHeadline(animationData)
    for (const project of animationData) {
      
      let col = new ProjectElement(project);
      projects.push(col)

      if(project.show){
        proj.appendChild(col)

      }
        
    }

    row.appendChild(proj)



    this.pages.push(row)

  }

  createLinks(){
    console.log("projects")

    let row = document.createElement("div")
    row.classList.add("row")
    row.classList.add("p-0")
    row.classList.add("m-0")
    row.classList.add("d-none")

    let col = document.createElement("div")
    col.classList.add("col")
    col.classList.add("p-0")
    col.classList.add("m-0")

    let badgeDiv = document.createElement("div")
    badgeDiv.classList.add("border", "rounded-1", "px-2")
    badgeDiv.innerHTML += `<h4>Social</h4>`

    for (const ld of linksData) {
      badgeDiv.append(
        createBadge(ld)
      )
    
    }
    col.append(badgeDiv)
    row.appendChild(col)

    this.pages.push(row)

  }

  render(){

    let currentPage
    let currentPageIndex

    let previousPage
    let previousPageIndex

    // Show
    if (this.currentPage=="home") {
      currentPage = this.pages[0]
      currentPageIndex = 0
    }

    if(this.currentPage=="projects"){
      currentPage = this.pages[1]
      currentPageIndex = 1
    }

    if(this.currentPage=="links"){
      currentPage = this.pages[2]
      currentPageIndex = 2
    }

    if (this.previousPage=="home") {
      previousPage = this.pages[0]
      previousPageIndex = 0
    }

    if(this.previousPage=="projects"){
      previousPage = this.pages[1]
      previousPageIndex = 1
    }

    if(this.previousPage=="links"){
      previousPage = this.pages[2]
      previousPageIndex = 2
    }

    let animData = {
      currentPage:currentPage,
      currentPageIndex:currentPageIndex,
      previousPage:previousPage,
      previousPageIndex:previousPageIndex
    }

    if(currentPage && currentPage != previousPage){
        // Reset
        this.innerHTML = ""
        for(const page of this.pages){
          page.classList.add("d-none")

        }

        // Create
        for(const page of this.pages){
          this.appendChild(page)

        }


      if (previousPage) {
        let animout = this.animateOut(animData)

        animout.then((data)=>{
          data.finished.then((data)=>{
            let animin = this.animateIn(animData)
          })
          
    
        })
        
      }

      if (!previousPage) {
        currentPage.classList.remove("d-none")

      }
      
     
    }
    
    
    
  }

  async animateIn(animData){
    let object = animData.currentPage

    object.classList.remove("d-none")

    let translateX

    if (animData.previousPageIndex > animData.currentPageIndex) {
      translateX = [
        { transform: "translateX(-100%)", opacity: 0 },
        { transform: "translateX(0)", opacity: 1 },
      ];
    }
    else{
      translateX = [
        { transform: "translateX(100%)", opacity: 0 },
        { transform: "translateX(0)", opacity: 1 },
      ];
    }
     

    const timing = {
      duration: 200,
      iterations: 1,
    };

    let anim = object.animate(translateX, timing)

    anim.finished.then((data)=>{
      //console.log("data", data)
    })

    return anim

  }

  async animateOut(animData){
    let object = animData.previousPage

    object.classList.remove("d-none")

    let translateX

    if (animData.previousPageIndex > animData.currentPageIndex) {
      translateX = [
        { transform: "translateX(0)", opacity: 1 },
        { transform: "translateX(100%)", opacity: 0 },
      ];
    }
    else{
      translateX = [
        { transform: "translateX(0)", opacity: 1 },
        { transform: "translateX(-100%)", opacity: 0 },
      ];
    }


    const timing = {
      duration: 200,
      iterations: 1,
    };

    let anim = object.animate(translateX, timing)

    anim.finished.then((data)=>{
      object.classList.add("d-none")

    })

    return anim
    
   
  }

  update(){
    this.previousPage = localStorage.getItem('previousPage')
    this.currentPage = localStorage.getItem('currentPage')

    if(this.currentPage == null){
      this.currentPage = "home"

    }

    if(this.currentPage=="projects"){
      for (const project of projects) {
       project.update()
                
      }
  
    }


  }



}
customElements.define('main-content-element', MainContentElement, {extends: 'div'})



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


