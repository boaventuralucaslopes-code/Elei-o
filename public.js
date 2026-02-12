const opcoes = [
  {
    nome: "Quem é Pietro Lança?",
    imagem: "arara.jpeg",
    descricao: "Pietro Lança, 17 anos, estudante, estrategista acadêmico e atual Pai da Educação 67.<br> Conhecido por sua atuação firme na Organização das Nações Unidas da Sala do Fundão, Pietro construiu sua trajetória com base em três pilares: inteligência, responsabilidade e sempre ter a matéria quando ninguém mais tem.<br><br> Amigo da sociedade estudantil, defensor dos prazos justos e líder natural nos trabalhos em grupo, Pietro representa estabilidade, organização e aquele colega que salva o PDF às 23:59.<br><br> Pietro não promete milagres.<br> Promete presença. Promete matéria completa."
  },
  {
    nome: "Por que votar em Pietro Lança?",
    imagem: "aristoteles.png",
    descricao: "Porque 67 não é só um número.<br> É um projeto educacional.<br><br> Votar 67 é escolher:<br><br> Ordem no caos do grupo da turma.<br>Estratégia nos trabalhos.<br> Apoio nos dias de prova.<br> E acesso garantido às matérias organizadas.<br><br> Enquanto alguns oferecem promessas, o 67 oferece resultado.<br><br> 67 é Educação.<br> 67 é compromisso.<br> 67 é o MEC da sala.<br>"
  },
  {
    nome: "Quais as qualificações de Pietro Lança?",
    imagem: "raiox.png",
    descricao: "✔ Inglês fluente (Yes, we can passar de ano.)<br>✔ Expert em Matemática (resolve até conta de dividir grupo de trabalho).<br>✔ Português afiado (corrige redação e ainda explica o porquê).<br>✔ Química dominada (inclusive a química social da turma).<br><br>Além disso:<br><br>Sempre pronto para ajudar colegas.<br><br>Organizado.<br><br>Responsável.<br><br>Capaz de transformar desespero pré-prova em plano estratégico.<br><br>Pietro Lança não é apenas um candidato.<br>É um investimento acadêmico.<br><br>Vote 67. Educação acima de tudo. 📚🗳️"

  }
];

const container = document.getElementById("container");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalNome = document.getElementById("modalNome");
const modalDescricao = document.getElementById("modalDescricao");
const fechar = document.getElementById("fechar");

function renderizarCandidatos() {
  opcoes.forEach((opcao, index) => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <img src="${opcao.imagem}" alt="${opcao.nome}">
      <h3>${opcao.nome}</h3>
    `;

    div.addEventListener("click", () => {
      abrirModal(index);
    });

    container.appendChild(div);
  });
}

function abrirModal(index) {
  modalImg.src = opcoes[index].imagem;
  modalNome.innerText = opcoes[index].nome;
  modalDescricao.innerHTML = opcoes[index].descricao;
  modal.style.display = "flex";
}

fechar.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

renderizarCandidatos();
