ProjectEncomendas 💻
Sistema que Monitora Encomendas | Iniciando estudos React Native com Node.js 🐱‍🚀

Descrição
O ProjectEncomendas é um sistema para monitoramento de encomendas, desenvolvido como um projeto de estudo para a combinação de React Native com Node.js. O projeto visa fornecer uma base para o desenvolvimento de aplicações móveis e de backend, explorando as melhores práticas em programação e arquitetura de software.

Tecnologias Utilizadas
Frontend: React Native
Backend: Node.js
Banco de Dados: MySQL
Gerenciamento de Dependências: npm ou yarn
Ferramenta de Desenvolvimento: Nodemon
Instalação das Dependências
Para instalar as dependências do projeto, execute um dos seguintes comandos:

bash
Copiar código
npm install
ou

bash
Copiar código
yarn install
Executando o Servidor
Para rodar o servidor, execute o seguinte comando em um terminal:

bash
Copiar código
nodemon Controller.js
Nota: O Controller.js foi usado para fins de estudo e desenvolvimento inicial. Em um ambiente de produção, é recomendável configurar o servidor em um arquivo separado, como index.js, seguindo as melhores práticas de desenvolvimento. 😎

Para iniciar o aplicativo, execute:

bash
Copiar código
npm start
ou

bash
Copiar código
expo start
Configuração do Banco de Dados
Antes de rodar o projeto, você precisa configurar o arquivo de banco de dados. Altere o arquivo config.json na pasta models para o ambiente de desenvolvimento:

json
Copiar código
{
  "development": {
    "username": "root",
    "password": null,
    "database": "encomendas",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "origin": "Av. Prudente de Morais, 200 - Natal / RN",
  "geocodingAPI": "SUA_API_KEY_AQUI"
}
Substitua "SUA_API_KEY_AQUI" pela sua chave de API para o serviço de geocodificação, se aplicável.

Estrutura do Projeto
Controller.js: Arquivo principal para execução do servidor (para fins de estudo).
models/: Contém a configuração do banco de dados e os modelos de dados.
routes/: Define as rotas da aplicação.
views/: Contém os componentes de visualização do frontend.
Contribuição
Sinta-se à vontade para contribuir com o projeto! Para isso, siga estas etapas:

Faça um fork do repositório.
Crie uma branch para suas alterações (git checkout -b minha-branch).
Faça commit das suas alterações (git commit -am 'Adiciona uma nova feature').
Envie suas alterações para o repositório (git push origin minha-branch).
Abra um pull request.
Licença
