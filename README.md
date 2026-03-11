# Service Budget App

Este é um aplicativo mobile desenvolvido para gerenciar orçamentos de serviços, permitindo a criação, edição, duplicação e acompanhamento de propostas. O projeto foi desenvolvido como parte de um desafio de aprendizado, aplicando conceitos fundamentais de desenvolvimento mobile e navegação pelo curso de React Native da @Rocketseat.

## Funcionalidades

O aplicativo oferece as seguintes funcionalidades principais:

*   **Gestão de Orçamentos:**
    *   Criação de novos orçamentos com informações como título, cliente, status (Rascunho, Enviado, Aprovado, Recusado) e serviços inclusos.
    *   Adição de múltiplos serviços a um orçamento, com quantidades e preços individuais.
    *   Cálculo automático de subtotal, desconto e total do orçamento.
    *   Duplicação de orçamentos existentes.
    *   Filtragem de orçamentos por diferentes status e opções de ordenação.
    *   Alteração de status de orçamentos.
    *   Remoção de orçamentos após confirmação.

*   **Interface e Navegação:**
    *   Tela principal para visualização e filtragem de orçamentos.
    *   Telas intuitivas para criação e edição de orçamentos.
    *   Design baseado em um layout Figma específico, garantindo uma experiência de usuário consistente.

*   **Persistência de Dados:**
    *   Salvamento de orçamentos e filtros selecionados localmente no dispositivo, utilizando `AsyncStorage`.

## Modelo de Dados

### QuoteDoc

| Campo       | Tipo             | Descrição                                         |
| :---------- | :--------------- | :------------------------------------------------ |
| `id`        | `string`         | Identificador único do orçamento                  |
| `client`    | `string`         | Nome do cliente                                   |
| `title`     | `string`         | Título do serviço ou projeto                      |
| `items`     | `Item[]`         | Lista de itens/serviços incluídos no orçamento    |
| `discountPct` | `number` (opcional) | Valor percentual de desconto aplicado             |
| `status`    | `enum`           | Status atual do orçamento (Rascunho, Enviado, Aprovado, Recusado) |
| `createdAt` | `Date`           | Data de criação do orçamento                      |
| `updatedAt` | `Date`           | Data da última atualização do orçamento           |

### Item

| Campo         | Tipo     | Descrição                                         |
| :------------ | :------- | :------------------------------------------------ |
| `id`          | `string` | Identificador único do item                       |
| `description` | `string` | Descrição detalhada do serviço/item               |
| `qty`         | `number` | Quantidade de vezes que o serviço foi realizado   |
| `price`       | `number` | Preço unitário do serviço                         |

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

*   **React Native:** Framework para construção de aplicativos mobile multiplataforma.
*   **Expo:** Ferramenta para desenvolvimento rápido de aplicativos React Native.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
*   **`@react-navigation/native` e `@react-navigation/native-stack`:** Para navegação entre telas.
*   **`@react-native-async-storage/async-storage`:** Para persistência local de dados.
*   **`react-hook-form` e `@hookform/resolvers` com `zod`:** Para gerenciamento de formulários e validação de esquemas.
*   **`expo-font` e `@expo-google-fonts/lato`:** Para gerenciamento de fontes personalizadas.
*   **`react-native-svg`:** Para trabalhar com gráficos vetoriais.

## Como Configurar e Rodar o Projeto

Para configurar e rodar o projeto em seu ambiente de desenvolvimento, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

*   Node.js (versão LTS recomendada)
*   npm ou Yarn
*   Expo CLI (`npm install -g expo-cli`)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/marcelypcosta/service-budget.git
    cd service-budget
    ```

2.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

### Rodando o Aplicativo

1.  Inicie o servidor de desenvolvimento Expo:
    ```bash
    npm start
    # ou
    yarn start
    ```

2.  Você pode rodar o aplicativo em:
    *   **Emulador Android/iOS:** Pressione `a` para Android ou `i` para iOS no terminal.
    *   **Dispositivo físico:** Escaneie o código QR com o aplicativo Expo Go no seu celular.
    *   **Navegador web:** Pressione `w` no terminal (funcionalidade limitada para simulação ).

---

**Desenvolvido por Marcely Costa**
