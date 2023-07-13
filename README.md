# Template da aula de React Router

## Índice

-   [1. Configurações Iniciais](#1-configurações-iniciais)
-   [1. Prática 1](#2-prática-1)
-   [3. Prática 2](#3-prática-2)
-   [4. Prática 3](#4-prática-3)
-   [5. Fixação](#5-fixação)

## 1. Configurações Iniciais

-   Como o react router é uma biblioteca, precisamos instalá-la. Fazemos isso executando o seguinte comando na raiz do projeto:

    ```
    npm install react-router-dom
    ```

## 2 Prática 1

### Enunciado

-   Configure o site usando React Router, existem 2 Páginas na aplicação:
    -   `HomePage` será acessada no path `/`
    -   `ProfilePage` será acessada no path `/profile/:name`
-   Crie a pasta `routes` e dentro dela um componente `Router.js`
-   Dentro de `Router.js`, faça o roteamento dessas páginas para que fiquem acessíveis por URLs

### Resolução

1. Dentro da `src` criei uma pasta chamada `routes` e dentro dessa pasta criei o arquivo `Router.js`

2. Em `Router.js` criei um componente com o seguinte código:

    ```
    import React from 'react'

    const Router = () => {
    return (
        <div>

        </div>
    )
    }

    export default Router
    ```

3. Em `Router.js`, criei o `BrowserRouter` que engloba as rotas. Dentro dele criei o `Routes`, e dentro de `Routes` o `Route`, e esse último pode ser uma tag única, ficando da seguinte forma:

    ```
    import React from 'react';
    import { BrowserRouter, Route, Routes } from 'react-router-dom';

    const Router = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route />
                </Routes>
            </BrowserRouter>
        );
    };

    export default Router;
    ```

    - Importante:
        - Todos esses components precisam ser importados!
        - Todos esses componentes **precisam** estar dentro do `return`!

4. Dentro de `Route` iremos passar o `path` e precisamos indicar também qual é o elemento que irá ser chamado na tela através do `element`. Ficando da seguinte forma:

    ```
    (...)
    import HomePage from '../pages/HomePage';
    import ProfilePage from '../pages/ProfilePage';

    (...)
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile/:name" element={<ProfilePage />} />
        </Routes>
    (...)
    ```

-   Importante:
    -   É preciso **importar** os componentes que irei chamar dentro do `element`

5. Em `App.js` chamei o `Router` e chamei seu componente da seguinte forma:

    ```
    (...)

    import Router from './routes/Router';

    (...)

    <Router />

    ```

## 3 Prática 2

### Enunciado

-   Agora faremos a navegação entre as telas"
-   Olhe para o `Header`:
    -   Existem dois botões que vamos usar para a navegação entre as páginas
    -   Crie um arquivo na pasta routes chamado de `coordinator.js`
-   Dentro do `coordinator.js`, crie as funções:
    -   `goToHome`: direciona para a página `HomePage`
    -   `goToProfile`: direciona para a página `ProfilePage` de um **nome** específico (ex: bananinha)

### Resolução

-   Função que leva à página inicial:

    ```
    (...)

    import { useNavigate } from 'react-router-dom';

    (...)

    const navegate = useNavigate();

    const goToHome = () => {
        navegate('/');
    };

    (...)

    <StyledButton onClick={() => {goToHome()}}>
        Ir para página inicial
    </StyledButton>

    (...)
    ```

    -   Importante:
        -   Não esquecer que é preciso importar o `useNavigate`
        -   Não esquecer de chamar a função criada dentro do `OnClick`

-   Função que leva à página de profile:

    ```
    (...)

    const goToProfile = (name) => {
            navegate(`/profile/${name}`);
        };

    (...)

    <StyledButton onClick={() => {goToProfile('easley')}}>
        Ir para página inicial
    </StyledButton>
    ```

    -   Importante:
        -   usar crase na hora de passar o path pq vou usar uma variável

-   Organização com coordinator:

    -   Dentro de `routes` criar um arquivo chamado `coordinator.js`
    -   Passar as funções `goToHome` e `goToProfile` do `Header.js` para o `coordinator.js`
    -   Em `Header.js` passar o `navegate` como **primeiro** parâmetro para todas as funções
    -   O código ficou assim em `Header`:
        ```
                <StyledButton
                onClick={() => {
                    goToHome(navegate);
                }}
            >
                Ir para página inicial
            </StyledButton>
            <StyledButton
                onClick={() => {
                    goToProfile(navegate, 'easley');
                }}
            >
                Ir para página de perfil
            </StyledButton>
        ```
    -   O código ficou assim em `coodinator.js`:

        ```
        export const goToHome = (navegate) => {
        navegate('/');
        };

        export const goToProfile = (navegate, name) => {
            navegate(`/profile/${name}`);
        };
        ```

    -   Importante:
        -   Não esquecer de **exportar** as funções no `coordinator.js`;
        -   Não esquecer de **importar** as funções no `Header.js`;
        -   A ordem dos parâmetros da função importa!

## 4 Prática 3

### Enunciado

-   Na página `ProfilePage`, recupere o nome enviado por meio dos parâmetros de caminho (path params)
-   Altere a mensagem "Página acerca do usuário" para exibir o **nome** enviado pelos parâmetros de caminho, em vez de "usuário"
    -   Ex: "A página acerca de **bananinha**"

### Resolução

-   Agora iremos ver como capturar o `path params`. Primeiro preciso verificar em qual página tem a informação que eu quero, usei o `useParams()` para fazer essa captura em `ProfilePage.js`:

    ```
    (...)

    import { useParams } from 'react-router-dom';

    (...)

    function ProfilePage() {
        const params = useParams();

        // todo objeto:
        // console.log(params);
        // vendo todo objeto vejo que name é o nome da propriedade:
        // console.log(params.name);

        return (
            <MainContainer>
                <Header />
                <h1>Página acerca do {`${params.name}`}</h1>
            </MainContainer>
        );
    }

    export default ProfilePage;
    ```

## 5 Fixação

### Enunciado

-   Crie mais uma página para a aplicação, será a página de erro:
    -   Crie um arquivo chamado `ErroPage.js`
    -   Adicione o ErrorPage no Router e atribua o seu path como sendo "\*"
-   Com isto feito, caso o uauário erre o caminho(url), ele não cairá em uma página vazia

### Resolução

-   Na pasta `pages` adicionei o arquivo `ErroPage.js` com a seguinte estrutura:

    ```
    import React from 'react';
    import Header from '../components/Header';

    const ErroPage = () => {
        return (
            <>
                <Header />
                <h1>Página de Error</h1>
            </>
        );
    };

    export default ErroPage;
    ```

-   No aquivo `Router.js` adicionei a rota da seguinte maneira:
    -   Importei:
        ```
        import ErroPage from '../pages/ErroPage';
        ```
    -   Chamei:
        ```
        <Route path="*" element={<ErroPage />} />
        ```
