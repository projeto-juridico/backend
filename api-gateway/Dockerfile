# Usando uma imagem base oficial do Node.js
FROM node:18

# Definindo o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copiando o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalando as dependências do projeto
RUN npm install

# Copiando o restante do código da aplicação
COPY . .

# Copiar o arquivo .env para dentro do contêiner
COPY .env .env

# Expondo a porta em que a aplicação vai rodar
EXPOSE 7505

# Definindo a variável de ambiente NODE_ENV como "production"
ENV NODE_ENV=production

# Rodando o comando de build (caso você esteja usando TypeScript e queira compilar)
RUN npm run build

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
