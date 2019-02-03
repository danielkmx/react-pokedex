import React from 'react';



const ListPokemon = (props) => {

    if(props.pokemon.sprites){
    const habilidades = props.pokemon.abilities.map(element => {
        return <li key={element.ability.url}>{element.ability.name}</li>
    })
    const tipos = props.pokemon.types.map(element => {
        return <li key={element.type.url}>{element.type.name}</li>
    })


    return (
        
<div class="ui card">
  <div class="image">
    <img src={props.pokemon.sprites.back_default} />
  </div>
  <div class="content">
    <a class="header">{props.pokemon.name}</a>
    <div class="meta">
      <span class="date">Habilidades</span>
      <ul>
    {habilidades}
</ul>
    </div>
    <div class="description">
    <span class="date">Tipos</span>
    <ul>
    {tipos}
</ul>
    </div>
  </div>
</div>
       
    );

    }
    return(
        <div></div>
    );
};

export default ListPokemon;



