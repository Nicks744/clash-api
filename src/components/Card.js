import React from "react"; // Importa a biblioteca React
import "./Card.css"; // Importa o arquivo de estilos CSS específico do Card

// Define o componente funcional Card, que recebe a propriedade 'card'
const Card = ({ card }) => {
    return (
        // Aplica a classe CSS da raridade dinamicamente, convertendo o nome da raridade para minúsculas
        <div className={`card ${card.rarity.toLowerCase()}`}> 
            <img src={card.iconUrls.medium} alt={card.name} className="imgCard" /> {/* Exibe a imagem da carta */}
            <h3>{(card.name)}</h3> {/* Exibe o nome da carta */}
            <p className="elixir">Custo: {card.elixirCost} 
            <img src="/elixir.png" alt="Elixir" className="elixir-icon" />
            {/* Exibe o custo de elixir */} </p>

            <p className="rarity">Raridade: {card.rarity}</p> {/* Exibe a raridade da carta */}
            
        </div>
    );
};

export default Card; // Exporta o componente para ser utilizado em outros arquivos
