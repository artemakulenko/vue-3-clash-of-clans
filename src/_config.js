export const process = {
  dev: true
}

export const site = {
  home: process.dev ? 'http://localhost:8080' : 'https://ya.ru'
}

export const app = {
  title: 'Logo',
} 


export const links = [
  {
    title: 'home',
    alias: 'home',
    url: '/',
  },
  {
    title: 'about',
    alias: 'about',
    url: '/about',
  },
]