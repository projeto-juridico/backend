# Use a imagem oficial do Node.js como base
FROM node:14

# Crie e defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta que o aplicativo vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "index.js"]
