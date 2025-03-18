"use strict";

const disciplinas = [
    { nome: "PWBE", cor: "yellow", icon: "pwbe.png" },
    { nome: "PWFE", cor: "red", icon: "pwfe.png" },
    { nome: "PPDM", cor: "blue", icon: "ppdm.png" },
    { nome: "PRO", cor: "pink", icon: "pro.png" },
    { nome: "SOP", cor: "green", icon: "sop.png" }
];

function criarCard(disciplina) {
    const cardsContainer = document.getElementById("cards-container");
    const card = document.createElement("div");
    card.classList.add("container");
    card.style.borderColor = disciplina.cor;
    
    const imagem = document.createElement("img");
    imagem.src = disciplina.icon || "https://via.placeholder.com/300";
    imagem.alt = `Ícone de ${disciplina.nome}`;
    
    const titulo = document.createElement("h2");
    titulo.textContent = disciplina.nome;
    
    const descricao = document.createElement("p");
    descricao.textContent = "Descrição breve sobre " + disciplina.nome;
    
    const botao = document.createElement("button");
    botao.textContent = "Clique aqui";
    botao.style.backgroundColor = disciplina.cor;
    
    card.appendChild(imagem);
    card.appendChild(titulo);
    card.appendChild(descricao);
    card.appendChild(botao);
    
    cardsContainer.appendChild(card);
}

disciplinas.forEach(criarCard);