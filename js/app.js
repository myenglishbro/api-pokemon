
const getRandomInt=(min,max)=>{
    return Math.floor(Math.random()*(max-min))+min;
}



document.addEventListener("DOMContentLoaded", () => {
    const random=getRandomInt(1,151)
    fetchData(random);
});


const fetchData=async(id)=>{
    try{
    const respuesta=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data=await respuesta.json()
    const pokemon={
   img:data.sprites.other.dream_world.front_default,
   nombre:data.name,
   hp:data.stats[0].base_stat,
   experiencia:data.base_experience,
   img_atack:data.sprites.front_default,
   img_defence:data.sprites.back_default,
   img_especial : data.sprites.other.home.front_default,

   ataque:data.stats[1].base_stat,
   defensa:data.stats[2].base_stat,
   especial:data.stats[3].base_stat
    }
    pintarCard(pokemon)
    console.log(data)
    }
    catch(error){
        console.log(error)

    }
}
const pintarCard=(pokemon)=>{
 const container=document.querySelector(".container")
  const template=document.getElementById("template-card").content

  const clone=template.cloneNode(true)
  const fragment=document.createDocumentFragment()

  clone.querySelector('.card-body-contentimg-img').setAttribute('src',pokemon.img)
//   clone.querySelector('.card-body-title').textContent = pokemon.nombre; // Aquí agregamos el nombre
  clone.querySelector('.card-body-title').innerHTML = ` ${pokemon.nombre}
  <span>${pokemon.hp} hp</span>`
  clone.querySelector('.card-body-text').textContent =  pokemon.experiencia +'XP';

//   clone.querySelector('.img-ataque').setAttribute('src',pokemon.img_atack)  
  clone.querySelectorAll('.card-footer-poder h3')[0].textContent=pokemon.ataque      
  clone.querySelectorAll('.card-footer-poder h3')[1].textContent=pokemon.defensa          
  clone.querySelectorAll('.card-footer-poder h3')[2].textContent=pokemon.especial          

  clone.querySelectorAll('.card-footer-poder img')[0].setAttribute('src',pokemon.img_atack)  
  clone.querySelectorAll('.card-footer-poder img')[1].setAttribute('src',pokemon.img_defence)  
  clone.querySelectorAll('.card-footer-poder img')[2].setAttribute('src',pokemon.img_especial)  

  fragment.appendChild(clone)
  container.append(fragment)
}

