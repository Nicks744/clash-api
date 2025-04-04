import React, { useEffect, useState } from "react"; // Importa React e os hooks useEffect e useState
import { fetchCards } from "../api"; // Importa a função fetchCards que busca os dados da API
import Card from "./Card"; // Importa o componente Card, que será usado para exibir cada carta
import "./CardList.css"; // Importa o CSS para o CardList

const CardList = () => {
    const [cards, setCards] = useState([]); // Estado para armazenar a lista de cartas
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento dos dados

    // useEffect é usado para buscar os dados quando o componente for montado
    useEffect(() => {
        async function getCards() {
            const data = await fetchCards(); // Chama a API para buscar as cartas
            setCards(data); // Atualiza o estado com as cartas obtidas
            setLoading(false); // Define que o carregamento terminou
        }
        getCards();
    }, []); // O array vazio faz com que o efeito rode apenas uma vez, na montagem do componente

    // Se os dados ainda estiverem sendo carregados, exibe uma mensagem de carregamento
    if (loading) return <p>Carregando...</p>; 

    return (
        <div>
            
            <div className="card-list">
                {/* Mapeia a lista de cartas e renderiza um componente Card para cada uma */}
                {cards.map((card) => (
                    <Card key={card.id} card={card} /> // Usa o componente Card para exibir as informações da carta
                ))}
            </div>
        </div>
    );
};

export default CardList; // Exporta o componente para ser utilizado em outros arquivos
