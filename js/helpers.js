
let sortByTitle = (list)=>{ 
    list.sort((a, b) => {
      const nameA = a.info.title.toUpperCase(); // ignore upper and lowercase
      const nameB = b.info.title.toUpperCase(); // ignore upper and lowercase
  
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

let sortByHeadline = (list)=>{ 
    list.sort((a, b) => {
      const nameA = a.info.headline.toUpperCase(); // ignore upper and lowercase
      const nameB = b.info.headline.toUpperCase(); // ignore upper and lowercase
  
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

let createBadge = (data)=>{ 
    let img = document.createElement("img")

    let badge = "https://img.shields.io/badge/"
    
    if(data.style == "full"){
        badge += data.text
    }
    
    badge += "-" + data.color
    badge += "?style=for-the-badge"
    badge += "&logo=" + data.logo
    badge += "&logoColor=" + data.logoColor

    img.src = badge

    if(data.classes){
        for(const cl of data.classes){
            img.classList.add(cl)
        }
    }
    

    if(data.link){
        let a = document.createElement("a")
        a.href = data.url

        a.append(img)
        return a
    }
    else{
        return img
    }
    
}


/*
    localStorage.setItem('user', JSON.stringify(this.userData));

    const user = JSON.parse(localStorage.getItem('user')!);



<a href="https://vimeo.com/cgfx"><img alt="vimeo" src="https://img.shields.io/badge/Vimeo-1AB7EA?style=for-the-badge&logo=vimeo&logoColor=white"></a>

<a href="https://vimeo.com/cgfx">vimeo.com/cgfx</a>


<a href="https://www.behance.net/xpm35"><img alt="behance" src="https://img.shields.io/badge/behance-1769FF?style=for-the-badge&logo=behance&logoColor=white"></a>

<a href="https://www.behance.net/xpm35">behance.net/xpm35</a>



    col.append(createBadge({logo:"html5", text:"html", color:"E34F26", logoColor:"white", classes:["me-2"], link:false, url:""}))
    col.append(createBadge({logo:"css3", text:"css", color:"1572B6", logoColor:"white", classes:[], link:false, url:""}))


*/