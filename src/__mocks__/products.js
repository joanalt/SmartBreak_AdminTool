import { v4 as uuid } from "uuid";

export const products = [
  {
    id: uuid(),
    description: "Equipa que trata da criação da identidade visual e das páginas dos produtos.",
    title: "Design",
    membros: "6",
  },
  {
    id: uuid(),
    description: "Equipa referente à implementação das páginas criadas pela equipa de design.",
    title: "Front-end",
    membros: "6",
  },
  {
    id: uuid(),
    description: "Equipa criadora da base de dados e da ligação entre ela e dos dados do produto.",
    title: "Back-end",
    membros: "10",
  },
  {
    id: uuid(),
    description:
      "Equipa que trata do marketing publicitário da empresa e dos projetos inseridos nela.",
    title: "Marketing",
    membros: "4",
  },
  {
    id: uuid(),
    description: "Equipa que gerencia as relações das pessoas com a empresa.",
    title: "Recursos humanos",
    membros: "8",
  },
  {
    id: uuid(),
    description: "Equipa encarregue de fazer os pagamentos, gerir o dinheiro, entre outros.",
    title: "Financeira",
    membros: "8",
  },
];
