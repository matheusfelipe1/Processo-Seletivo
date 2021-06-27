# Processo-Seletivo
#Boa tarde!
#Este é meu projeto o processo seletivo da empresa brunsker , consiste numa API e CRUD de locação e venda e imoveis , cujo possui o backend no FrameWork Laravel (linguagem Php) e #o frontend em Angular.
#Antes de começar gostaria de dizer que , optei por fazer com que o sistema (Brunsker) fosse tanto o sistema de cadastro de imoveis quanto uma empresa que possui estes imóveis que #são deles mesmos para a venda ou locação. Visando isto, pense na brunsker como uma rede a qual possuí varias filiais em todo o território nacional... sendo assim no backend , #aonde eu fiz as migrations, optei por colocar as colunas e-mail, cnpj e contato como NÃO CHAVES ÚNICAS. Porque eu segui a linha de raciocínio que cada imóvel que fosse #cadastrado, deveria conter dados das empresa , ou seja , das filiais mais próximas de cada imóvel cadastrado. Assim poderia conter vários imóveis em uma só região que ai deveria #cadastrar os mesmos campos como e-mail, cnpj e contato.

#versão do NodeJs: v15.9.0
#versao do PHP: PHP 7.3.28
#versão do Composer : version 2.1.0
#Laravel Installer 4.2.6

#para rodar o projeto em sua máquina , siga os passos:

#1 vá até a raiz do projeto e entre na pasta "backend"
#2 rode o comando
#"composer install --no-dev
#composer update --no-dev" (isso se seu composer estiver global)
#mas se não estiver rode este
#"php composer.phar install --no-dev
#php composer.phar update --no-dev"

#3 dentro da pasta "backend" terá um arquivo chamado ".env.example" ele estará na 10° posição , logo abaixo do arquivo ".editorconfig", RENOMEIE o arquivo ".env.example" para #".env"
#4 após renomear para ".env" entre neste arquivo, vá até a linha 10 a 15 e configura o banco de dados de acordo com a sua máquina. colocando a porta, o banco, usuário e senha (NÃO #ESQUEÇA DE CRIAR UM SCHEMA/DATABASE NO SEU SGBD)
#5 após isso rode o comando "php artisan migrate", após vá até seu banco de dados e veja se a tabela "table_houses" foi gerada
#6 agora é rodar o "php artisan serve" que o servidor irá subir.

#7 vá até a pasta do frontend e rode "npm install" para instalar as dependências.
#8 rode o comando "npm start" para subir o servidor.
