import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Quem Somos',
    path: '/quemSomos',
    icon: <GiIcons.GiFootprint />,
    cName: 'nav-text'
  },
  {
    title: 'Revestimentos',
    path: '/revestimentos',
    icon: <GiIcons.GiFootprint />,
    cName: 'nav-text'
  },
  {
    title: 'Serviços',
    path: '/servicos',
    icon: <GiIcons.GiFootprint />,
    cName: 'nav-text'
  },
  {
    title: 'Fale Conosco',
    path: '/faleConosco',
    icon: <GiIcons.GiFootprint />,
    cName: 'nav-text'
  },
]
