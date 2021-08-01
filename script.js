

let source =[]
fetch("https://api.punkapi.com/v2/beers")
.then ((response) => response.json())
.then ((data) => loadData(data))


const base = document.createElement("div")
base.setAttribute("class","container")
const head = document.createElement("div")
head.innerHTML =`KNOW YOUR BEER`
head.setAttribute("class","header")

const side = document.createElement("div")
side.setAttribute("class","sidebar")
side.innerHTML=`<ul>AVAILABLE BEERS </br>(Click your Favorite)</ul>`
const cont = document.createElement("div")
cont.setAttribute("class","content")
document.body.append(base)
base.append(head)
base.append(side)
base.append(cont)


function loadData(data){
   data.forEach(el => source.push(el))
   displayData(source)
   console.log(source)
}

function displayData(arr){
  arr.forEach(el => {
    const list = document.createElement("a")
    list.setAttribute("class","names")
    list.innerHTML=`${el.id}.${el.name}`
    side.append(list)
  
    list.onclick = function Click() 
    {
    document.querySelector(".content").innerHTML =""
    const title = document.createElement("h3")
    title.setAttribute("class","heading")
    title.innerHTML = `${el.name} : ${el.tagline}`

    const images = document.createElement("div")
    title.setAttribute("class","beerImage")
    images.innerHTML =`<img src="${el.image_url}" alt="no image">`

    const specifications = document.createElement("div")
    specifications.setAttribute("class","spec")
    specifications.innerHTML =`<p><b>Attenuation level : </b> </br> ${el.attenuation_level}</p>
      <p><b>Boil Volume :</b> ${el.boil_volume.value}${el.boil_volume.unit}</p>
      <p><b>IBU :</b> ${el.ibu}</p>
      <p><b>pH :</b> ${el.ph}</p>`

    const description = document.createElement("div")
    description.setAttribute("class","description")
    description.innerHTML =` <p><b>DEATILS :</b> </br> ${el.description}</p>
    <p><b>FOOD COMBINATIONS :</b> ${el.food_pairing}</p>`
    
    
    cont.append(title)
    cont.append(images)
    cont.append(description)
    cont.append(specifications)
    }
    
    
  })
}


