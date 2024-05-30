# Pokemon App

## Descrição
Este é um aplicativo de demonstração que utiliza a PokeAPI para exibir informações sobre Pokémons. O aplicativo foi desenvolvido utilizando Ionic com Angular conforme solicita o desafio.
Estarei atualizando o repositorio constantemente.

## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) (normalmente instalado junto com o Node.js)
- [Ionic CLI](https://ionicframework.com/docs/cli) (versão 6 ou superior)
- [Android Studio](https://developer.android.com/studio) (para desenvolvimento em Android)
- [Java Development Kit (JDK)](https://adoptium.net/) (JDK 11 ou 17)

## Instalação

1. Clone o repositório para sua máquina local:

   ```sh
   git clone https://github.com/Baanzito/Poke-dex

2. Navegue até o diretório do projeto:

    ```sh
    cd Poke-dex

3. Instale as dependências do projeto:

    ```sh
    npm install

## Executando no Navegador

1. Para executar o aplicativo no navegador, use o comando ionic serve:

    ```sh
    ionic serve

## Executando no Android

Antes de rodar o aplicativo em um dispositivo Android, você precisará configurar o ambiente:

1. Configurar o Java Development Kit (JDK):

    Certifique-se de que o JDK está instalado e as variáveis de ambiente JAVA_HOME e PATH estão configuradas corretamente.

2. Instalar o Android Studio:

    Baixe e instale o Android Studio.
    Configure o Android SDK e crie um AVD (Android Virtual Device) se necessário.

## Executando no Dispositivo Android

1. Construa o aplicativo para Android:

    ```sh
    npx cap add android

2. Sincronize os arquivos do projeto com a plataforma Android:

    ```sh
    npx cap sync

3. Conecte um dispositivo Android ao seu computador via USB ou inicie um emulador Android.

4. Execute o aplicativo no dispositivo Android:

    ```sh
    npx cap run android --target=Pixel_3a_API_34 --external --public-host=26.173.170.226

    Se você estiver usando um emulador, substitua Pixel_3a_API_34 pelo nome do seu dispositivo virtual.
