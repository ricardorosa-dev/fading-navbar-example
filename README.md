# Tutorial
# Navbar que muda de cor/opacidade quando o usuário rola a página, em ReactJS

## Setup inicial
- um site com conteúdo suficiente para que o usuário possa rolar a página para baixo 
- um componente <Navbar>, que fica acima de tudo, ou seja, tem a position: fixed, top: 0 e width: 100vw (ou 100%). Coloquei também um padding-top: 70px no compoente que contém o texto.

## 1. Estado da Navbar, pra mudar a classe quando rolar a página
- Importar o useState (fora do componente):
```JavaScript
import React, { useState } from 'react';
```
- Criar o estado (dentro do componente):
```JavaScript
const [navbar, setNavbar = useState(false);
```

## 2. Função que altera o estado
- Função:
```JavaScript
const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
```
 - EventListener na janela, para que vai disparar a função no ato de scroll:
 ```JavaScript
 window.addEventListener('scroll', changeBackground);
 ```

## 3. Classe dinâmica no elemento <nav> dentro do componente Navbar
- classe no elemento nav:
```JavaScript
<nav className={navbar ? 'navbar active' : 'navbar'}>
```
- classe .active:
```CSS
.active {
  border: 0;
  background-color: white;
  color: rgb(35,20,64);
  transition: .3s;
}
```

## 4. (Bônus) Glassmorphism
- adicione à classe .active:
```CSS
background-color: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(5px) saturate(105%);
```

---
## Navegando no repositório
Caso queira clonar o projeto:

- Instale as dependências
```
npm install
```

Existem 4 branches nesse repositório: 
```
0-setup
1-state
2-class
4-glass
```
- Para mudar de branch utilize o comando
```
git checkout nome-da-branch
```

Cada branch está atualizada com um passo do tutorial. Utilize o comando <strong>git checkout nome-da-branch</strong> para mudar para qualquer uma delas. A branch <strong>master</strong> está atualizada com a última versão, ou seja, está igual a branch 4-glass.
