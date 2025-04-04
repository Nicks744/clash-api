const express = require("express"); // Importa o Express para criar o servidor
const cors = require("cors"); // Importa o CORS para permitir requisições de outras origens
const axios = require("axios"); // Importa o Axios para fazer requisições HTTP

const app = express(); // Inicializa o servidor Express
app.use(cors()); // Habilita o CORS para permitir requisições do frontend

// 🔹 Token de autenticação para acessar a API do Clash Royale (substitua pelo seu token real)
const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImM5YmVmMWI3LWRhOTktNDMzNy1iNzIwLTNkZTE0MDZlOTBkOSIsImlhdCI6MTc0MzgwMjA5Nywic3ViIjoiZGV2ZWxvcGVyLzE2OGQ5MmRiLTYxODMtNmM1Yi05ZmRhLWQ4NGFlYTE4Mzg4NSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTEuMjA1LjEyOS4xNCIsIjE3Ny4xNjEuMTg2LjIzOSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.Xcw_Dhp4smS5wW72Muc6CaNq0eKfgsN28Jlcr2GQlVaXuNDabXOmeRacEnx3cxHz-xzNT_kpb7Qnyi_Wtt0SrQ"; 

// Rota para buscar os cards do Clash Royale
app.get("/cards", async (req, res) => {
    try {
        console.log("Buscando dados da API Clash Royale..."); // Mensagem no console para depuração

        // Faz a requisição GET para a API oficial do Clash Royale
        const response = await axios.get("https://api.clashroyale.com/v1/cards", {
            headers: {
                Authorization: `Bearer ${API_KEY}`, // Adiciona o token de autenticação
                "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
            },
        });

        console.log("Dados recebidos com sucesso!"); // Confirma que os dados foram recebidos
        res.json(response.data); // Retorna os dados da API como resposta em formato JSON
    } catch (error) {
        console.error("Erro ao buscar os cards:", error.message); // Exibe o erro no console
        res.status(500).json({ error: "Erro ao buscar os cards", details: error.message }); // Retorna erro ao cliente
    }
});

// Define a porta na qual o servidor vai rodar
const PORT = 5000;

// Inicia o servidor e exibe uma mensagem no console
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
