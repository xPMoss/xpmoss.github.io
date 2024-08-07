

//
class BadgeElement extends HTMLDivElement{

  constructor(data){
    super(); // always call super() first in the constructor.

    this.id = "badge-element-" + data.logo
    this.classList.add("col-auto", "p-0", "m-0")

    let badge = "https://img.shields.io/badge/"
    
    if(data.style == "full"){
        badge += data.text
    }
    
    badge += "-" + data.color
    badge += "?style=for-the-badge"
    badge += "&logo=" + data.logo
    badge += "&logoColor=" + data.logoColor

    let img = document.createElement("img")
    img.src = badge

    if(data.classes){
      for(const cl of data.classes){
        img.classList.add(cl)
      }
    }
    

    if(data.link){
      this.href = data.url

    }
    else{

      if(data.description){
        this.setAttribute("role", "button")
        this.addEventListener("click", ()=>{
          console.log("CLICKED!")
  
          
          new PopOverElement({element:this, data:data})
  
        })
      }
     
      this.append(img)

    }

  }
  

}
customElements.define('badge-element', BadgeElement, {extends: 'div'})


//
class PopOverElement extends HTMLDivElement{

  origion = 0

  w = 1280;
  h = 720;

  constructor(data){
    super(); // always call super() first in the constructor.

    this.id = "popover-element"

    this.style.zIndex = "1050"
    
    let bg = document.createElement("div")
    bg.style.zIndex = "1050"
    bg.style.position = "absolute"
    bg.classList.add("bg-dark")
    bg.style.opacity = "0"
    bg.style.width = "100vw"
    bg.style.height = "100vh"
    bg.addEventListener("click", ()=>{
      let animout = this.animateOut(container, this.origion)

        animout.then((data)=>{
          data.finished.then((data)=>{
            this.remove()
            bg.remove()
          })

        })
      
    })
    this.append(bg)

    let container = document.createElement("div")
    container.classList.add("py-2", "px-3", "border", "rounded-1", "shadow-sm", "bg-light")

    container.style.position = "absolute"
    let rect = data.element.getBoundingClientRect()
    container.style.top = rect.top +rect.height/2 + "px"

    let posX = rect.right - rect.width/2
    let vw =  document.body.getBoundingClientRect().right/2
    if(posX < vw){
      container.style.left = rect.right - rect.width/2+ "px"
      this.origion = 0
    }
    else{
      this.origion = "100%"

    }

    container.style.maxWidth = "45vw"

    let header = document.createElement("div")
    header.classList.add("border-bottom", "fw-bold")
    header.innerHTML = data.data.text.replaceAll("_", " ")
    
    let body = document.createElement("div")
    body.innerHTML = data.data.description
    
    container.append(header)
    container.append(body)

    this.append(container)
    
    document.body.prepend(this)

    console.log(container.getBoundingClientRect())
    console.log(this.getBoundingClientRect())

    if(posX < vw){
      
     
    }
    else{
      container.style.left = rect.left - container.getBoundingClientRect().width + rect.width/2 +"px"

      
    }

    //container.style.transform="scale(1)";
    this.animateIn(container, this.origion)
  }

  async animateIn(object, origion){
    console.log("animateIn")
    object.style.transformOrigin= origion + " 0";

    let translateX

    translateX = [
      { transform: "scale(0)"},
      { transform: "scale(1)"},
    ];
     

    const timing = {
      duration: 200,
      iterations: 1,
      //easing: "steps(3, jump-none)"
      easing: "cubic-bezier(0, 0.5, 0, 1)"
    };

    let anim = object.animate(translateX, timing)

    anim.finished.then((data)=>{
      //console.log("data", data)
    })

    return anim

  }

  async animateOut(object, origion){
    console.log("animateIn")
    object.style.transformOrigin= origion + " 0";

    let translateX

    translateX = [
      { transform: "scale(1)"},
      { transform: "scale(0)"},
    ];
     

    const timing = {
      duration: 200,
      iterations: 1,
      easing: "ease-in"
    };

    let anim = object.animate(translateX, timing)

    anim.finished.then((data)=>{
      //console.log("data", data)
    })

    return anim

  }

  

}
customElements.define('popover-element', PopOverElement, {extends: 'div'})

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

  

  constructor(title){
    super(); // always call super() first in the constructor.

    this.classList.add("img-fluid");
    this.classList.add("ratio", "ratio-16x9");
   
    // Size
    //this.style.width = this.w + "px";
    //this.style.height = this.h + "px";

    // Styles
    //this.style.border = "1px solid " + this.colors("HSL", "GREY", 0, 90);

    //console.log(this.width + "x" + this.height)

    this.draw(title);


  }


  draw(title){
    let ctx = this.ctx;

    if (title == "AnimationLibrary") {
      this.al(ctx);
    }

    if (title == "LinkDatabase") {
      this.ld(ctx);
    }

    if (title == "TheMovieApp") {
      this.tma(ctx);
    }

    if (title == "TreeView") {
      this.tw(ctx);
    }

    if (title == "Snake") {
      this.snake(ctx);
    }

    if (title == "3DEngine") {
      this.e(ctx);
    }

    if (title == "My webpage") {
      this.mw(ctx);
    }

    if (title == "Turbosquid") {
      this.ts(ctx);
    }

    if (title == "Calender") {
      this.calender(ctx);
    }
    
    
    if (title == "TheMovieService") {
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

//
class ProjectElement extends HTMLDivElement{
    header
    body = []
    image

    info
    data
    media
    links
    state


    isCollapsed = false

    constructor(data){
        super(); // always call super() first in the constructor.
        //console.log(data)

        this.info = data.info
        this.data = data.data
        this.media = data.media
        this.links = data.links
        this.state = data.state

        this.classList.add("col-sm-12")
        this.classList.add("col-md-6")
        this.classList.add("col-lg-4")
        this.classList.add("col-xl-3")
        this.classList.add("p-0", "m-0")
        this.classList.add("pe-0", "pe-sm-4", "m-0")
        this.classList.add("mb-4");
        this.id = this.info.title

        this.render()

    }

    render(){
           this.innerHTML = ""

      let container = document.createElement("div")
      container.classList.add("col", "p-0", "m-0", "border", "rounded-1")

      let divider = document.createElement("div");
      divider.classList.add("pt-2", "pb-1", "border-bottom");

      // Header
      // #region Header     
      let header = document.createElement("div");
      header.id = "header-" + this.info.title
      header.classList.add("row", "p-0", "px-3", "py-2", "m-0", "bg-light" , "border-bottom")
      let title = document.createElement("h5")
      title.classList.add("col", "p-0", "m-0", "text-truncate", "user-select-none")
      title.innerHTML = this.info.headline
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
      body.id = "body-" + this.info.title
      body.classList.add("col", "p-0", "m-0")
      
      let imageContainer = document.createElement("a")
      imageContainer.classList.add("p-0", "m-0")

      if(this.links.project && this.links.project.url){
        imageContainer.href = this.links.project.url
        imageContainer.target = "_blank"
      }
      else if(this.links.result && this.links.result.url){
        imageContainer.href = this.links.result.url
        imageContainer.target = "_blank"
      }
      
      if(this.media.realtime){
        imageContainer.append(new CanvasElement(this.info.title))
      }
      

      let img = document.createElement("img")
      img.classList.add("img-fluid")
      if (this.media.image) {
        img.src = "img/small/" + this.media.image
        imageContainer.append(img)
      }
      
      
      body.append(imageContainer)

       //
       if(this.info.company){
        let info = document.createElement("div")
        info.id = "company-" + this.info.title

        info.classList.add("col", "p-0", "px-3", "pb-3", "m-0")
        info.innerHTML = "<small class=''><b>" + "Company" + ":</b></small><br/>"
        info.innerHTML += this.info.company
        body.append(info)

      }

      if(this.info.client){
        let info = document.createElement("div")
        info.id = "client-" + this.info.title

        info.classList.add("col", "p-0", "px-3", "pb-3", "m-0")
        info.innerHTML = "<small class=''><b>" + "Client" + ":</b></small><br/>"
        info.innerHTML += this.info.client
        body.append(info)

      }

      //
      if(this.info.info){
        let info = document.createElement("div")
        info.id = "info-" + this.info.title

        info.classList.add("col", "p-0", "px-3", "pb-3", "m-0")
        info.innerHTML = "<small class=''><b>" + "Info" + ":</b></small><br/>"
        info.innerHTML += this.info.info
        body.append(info)

      }

      //
      let techniques = document.createElement("div")
      techniques.classList.add("col", "p-0", "px-3", "pb-3", "m-0")
      techniques.innerHTML = "<small class=''><b>" + "Techniques" + ":</b></small><br/>"

      let techniquesList = this.data.techniques
      techniquesList.sort()

      for (let i = 0; i < techniquesList.length; i++) {
        let teq = techniquesList[i];
        techniques.innerHTML += teq

        if (i < techniquesList.length-2) {
          techniques.innerHTML += ", "
        }

        if (i == techniquesList.length-2) {
          techniques.innerHTML += " and "
        }

      }

      body.append(techniques)

     
      if(this.links.project && this.links.project.url){
        let linkDiv = document.createElement("div")
        linkDiv.id = "links-project-" + this.info.title
        linkDiv.classList.add("col", "p-0", "px-3", "pb-3", "m-0")
        linkDiv.innerHTML += "<small class=''><b>" + "Project" + ":</b></small><br/>"
        let link = document.createElement("a")
        link.classList.add("text-truncate")
        link.target = "_blank"
        link.href = this.links.project.url
        link.innerHTML += this.links.project.text
        linkDiv.append(link)
        body.append(linkDiv)

      }

      if(this.links.result && this.links.result.url){
        let linkDiv = document.createElement("div")
        linkDiv.id = "links-result-" + this.info.title
        linkDiv.classList.add("col", "p-0", "px-3", "pb-3", "m-0")
        linkDiv.innerHTML += "<small class=''><b>" + "Result" + ":</b></small><br/>"
        let link = document.createElement("a")
        link.classList.add("text-truncate")
        link.target = "_blank"
        link.href = this.links.result.url
        link.innerHTML += this.links.result.text
        linkDiv.append(link)
        body.append(linkDiv)

      }
      

      if(this.data.tags){
        let tags = document.createElement("div")
        tags.classList.add("row", "p-0", "px-3", "pb-3", "m-0")
        tags.id = "tags-" + this.info.title

        let tagList = this.data.tags
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




// Main Element
class MainContentElement extends HTMLDivElement{

  currentPage
  pages = []
  projects = []

  constructor(data){
    super()

    this.id = "main-content"
    this.classList.add("container")
    this.classList.add("px-4")
    this.classList.add("mb-4")

    this.createHome()
    this.createProjects()
    this.createLinks()
    this.createAbout()

    this.update()
    this.render()

    this.addEventListener("ChangeEvent", ()=>{
      console.log("ChangeEvent")
      this.update()

    })

  }

  createHome(){
    let row = document.createElement("div")
    row.classList.add("row", "p-0", "m-0", "d-none")

    let col1 = document.createElement("div")
    col1.classList.add("col-12", "p-0", "pb-2", "m-0")
    // My name is...
    col1.innerHTML = 
    `
    My name is Patrik and I am a web- and applications- developer with focus on JavaScript, HTML, CSS and C#.Net.
    `
    row.append(col1)

    // Languages
    let badgeDiv_languages_div = document.createElement("div")
    badgeDiv_languages_div.classList.add("row", "p-0", "m-0", "border", "rounded-1", "px-2")
    badgeDiv_languages_div.innerHTML += `<h4 class="col-12 px-0">Languages</h4>`

    for (const bd of badgeData_languages) {
      let badge = new BadgeElement(bd)
      
      badgeDiv_languages_div.append(badge)
    
    }
    row.append(badgeDiv_languages_div)
    //col.innerHTML += `<br/>`

    let col2 = document.createElement("div")
    col2.classList.add("col-12", "p-0", "pb-2", "m-0")
    // I love to code...
    col2.innerHTML += 
    `
    I love to code some quick functions in Javascript, add some html and css for webb apps, or play with some classes and methods in C#.Net.
    `
    row.append(col2)

    // Frameworks
    let badgeDiv_frameworks_div = document.createElement("div")
    badgeDiv_frameworks_div.classList.add("row", "p-0", "m-0", "border", "rounded-1", "px-2", "col-auto")
    badgeDiv_frameworks_div.innerHTML += `<h4 class="px-0">Frameworks</h4>`

    for (const bd of badgeData_frameworks) {
      let badge = new BadgeElement(bd)
      
      badgeDiv_frameworks_div.append(badge)
    
    }
    row.append(badgeDiv_frameworks_div)
   
    // Check out the projects...
    let col3 = document.createElement("div")
    col3.classList.add("col-12", "p-0", "pb-2", "m-0")
    col3.innerHTML += 
    `
    Check out the projects section for some of my coding- and animation- projects and experiements.

    <br/><br/>
    I have also been working with animation and graphics over the past 10 years.
    <br/>
    My main tools for animations are Cinema 4D, After Effects and Photoshop.
    `
    row.append(col3)

    // Tools
    let badgeDiv = document.createElement("div")
    badgeDiv.classList.add("row", "p-0", "m-0", "border", "rounded-1", "px-2")
    badgeDiv.innerHTML += `<h4 class="px-0">Tools</h4>`

    for (const bd of badgeData_tools) {
      if(bd.type == "dev_tool"){
        let badge = new BadgeElement(bd)

        badgeDiv.append(badge)
      }
    }
    let dist = document.createElement("div")
    dist.classList.add("py-2")
    badgeDiv.append(dist)

    for (const bd of badgeData_tools) {
      if(bd.type == "dev_platform"){
        let badge = new BadgeElement(bd)

        badgeDiv.append(badge)
      }
    }
    let dist2 = document.createElement("div")
    dist2.classList.add("py-2")
    badgeDiv.append(dist2)

    for (const bd of badgeData_tools) {
      if(bd.type == "anim_tool"){
        let badge = new BadgeElement(bd)

        badgeDiv.append(badge)
      }
    }

    row.append(badgeDiv)
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
    for (const project of projectData) {
      if(project.data.tags){
        for (const tag of project.data.tags) {
          tagList.push(tag)

         
        }
      }
    }

    tagList = [...new Set(tagList)]
    tagList.sort()
    for (const tag of tagList) {
      let t = document.createElement("div")
      t.classList.add("col-auto", "p-0", "p-2", "m-0", "mb-2", "me-2", "border", "rounded-1", "user-select-none")

      if(filters.includes(tag)){
        t.classList.add("bg-dark")
      }

      t.innerHTML = tag
      t.addEventListener("click", ()=>{
        console.log("filters", filters)
        


        if(filters.includes(tag)){
          t.classList.remove("bg-dark", "text-light")
          const index = filters.indexOf(tag);
          if (index > -1) { // only splice array when item is found
            filters.splice(index, 1); // 2nd parameter means remove one item only
          }
        }
        else{
          filters.push(tag)
          t.classList.add("bg-dark", "text-light")
          filters = [...new Set(filters)]
          
        }

        for (const project of projectData) {

          let obj = document.getElementById(project.info.title)
          //console.log(obj)

          if(project.state.status == "online" && project.state.show){
            obj.classList.add("d-none")
          }
          

          for(const tag of project.data.tags) {  
            if(filters.includes(tag)){
              obj.classList.remove("d-none")

            }
          }

        }


        if(filters.length < 1){
          for (const project of projectData) {

            let obj = document.getElementById(project.info.title)
            //console.log(obj)
  
            if(project.state.status == "online" && project.state.show){
              obj.classList.remove("d-none")
            }
           
          }
        }
  


        //this.render()
        console.log(filters)
      })


      

      tags.append(t)
      
    }

    row.appendChild(tags)

    let proj = document.createElement("div")
    proj.classList.add("row", "p-0", "m-0")

    projectData = sortByHeadline(projectData)
    for (const project of projectData) {

      let col = new ProjectElement(project);
      this.projects.push(col)

      if(project.state.status == "online" && project.state.show){
        proj.appendChild(col)

      }
    
        
    }

   
    row.appendChild(proj)

    this.pages.push(row)

    for (const pro of this.projects) {
      
      //console.log("project", pro)
        
    }
   

  }

  createLinks(){
    console.log("links")

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

  createAbout(){
    let row = document.createElement("div")
    row.classList.add("row")
    row.classList.add("p-0")
    row.classList.add("m-0")
    row.classList.add("d-none")

    let col = document.createElement("div")
    col.classList.add("col")
    col.classList.add("p-0")
    col.classList.add("m-0")
    col.innerHTML += `<br/><br/><b>About me</b><br/>`
    col.innerHTML += `I am a systems developer with expertise in the programing languages JavaScript, HTML, CSS, C#.Net och SQL. I have experience in both frontend and backend
    development. <br/>
    In addition to this, I have extensive work experience from the media
    industry.
    <br/><br/>
    With a genuine interest in programming, tech and digital graphics, I have the ability to
    learn new techniques and subjects. If there is something missing in my competence I
    learn more about that specific area. I am a creative problem solver, ambitious and
    curious. I am a team player that contributes with knowledge sharing to the team and
    value to his clients.
    <br/><br/>
    I also have an education in Computer Graphics Design, which consists of 2D-,
    3D-graphics and animation. I have been working with media for 10 years and have
    gained experience from working in teams with small and large projects, to a broad
    range of clients.
    <br/><br/>
    In my spare time I enjoy being with my family, photographing, and being in nature. I also
    like to explore new areas in tech and IT. I have amongst other things been doing
    projects with 3D-printers, crypto-mining, and single board computers and electronics.`

    col.innerHTML += `<br/><br/><b>Experience</b>`
    
    col.innerHTML += `<br/>
    Arbetsmiljöverket, Software Engineer, (04/23 till current)`
    col.innerHTML += `<br/>
    CGI, Software Engineer, (08/22 to 02/23)`
    col.innerHTML += `<br/>
    CGI, Internship (04/21 to 06/21 and 12/21 to 02/22)`

    col.innerHTML += `<br/>
    Mediabolaget, 3D Artist / Animator (2012 to 2020)<br/>
    Logical Arts, 3D Artist / Animatör, (2011 till 2012)<br/>
    Blom, 3D Artist, (2010 till 2011)<br/>
    Sehsucht, Intern, (03/10 till 06/10)<br/>
    Stripe (now part of PXLR), Intern, (09/09 till 12/09)
    `

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

    if(this.currentPage=="about"){
      currentPage = this.pages[3]
      currentPageIndex = 3
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

    if(this.previousPage=="about"){
      previousPage = this.pages[3]
      previousPageIndex = 3
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
    console.log("animateIn")
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
      easing: "cubic-bezier(0, 0.5, 0, 1)"
    };

    let anim = object.animate(translateX, timing)

    anim.finished.then((data)=>{
      //console.log("data", data)
    })

    return anim

  }

  async animateOut(animData){
    console.log("animateOut")
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
      easing: "ease-in"
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
      for (const project of this.projects) {
        project.update()
                
      }
  
    }


  }



}
customElements.define('main-content-element', MainContentElement, {extends: 'div'})




