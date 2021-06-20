import React from 'react';
import Target from "../assets/iconTarget.png";
import TecnologiaExclusiva from "../assets/iconTecnologiaExc.png";
import Document from "../assets/iconDocument.png";
import Laptop from "../assets/iconLaptop.png";

export const CardsHome = [
  {
    path: '/revestimentos',
    imageCard: Target,
    titleCards: 'Vantagens',
    subTitleCards: 'Garantia de 8 anos.',
  },
  {
    path: '/quemSomos',
    imageCard: TecnologiaExclusiva,
    titleCards: 'Tecnologia Exclusiva',
    subTitleCards: 'Equipamentos de tecnologia de alta qualidade.',
  },
  {
    path: '/servicos',
    imageCard: Document,
    titleCards: 'Serviços Oferecidos',
    subTitleCards: 'Profissionais treinados e capacitados para executar serviços especializados',
  },
  {
    path: '/faleConosco',
    imageCard: Laptop,
    titleCards: 'Solicite Orçamento',
    subTitleCards: 'Entre em contato conosco e solicite orçamento.',
  },
]
