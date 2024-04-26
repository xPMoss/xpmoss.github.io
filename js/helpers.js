
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

let createBadge = (data)=>{ 
    let img = document.createElement("img")

    let badge = "https://img.shields.io/badge/"
    badge += data.text
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

*/