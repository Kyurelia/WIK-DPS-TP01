# Utilise une image de Node.js LTS comme base
FROM node:14

# Crée le répertoire de travail dans le conteneur
WORKDIR /app

# Copie le fichier package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Crée un nouvel utilisateur non privilégié
RUN useradd -m -s /bin/bash -u 1958 noroot

# Définit l'utilisateur par défaut
USER noroot

# Copie le reste des fichiers de l'application dans le conteneur et transfère les droits à un utilisateur fictif "noroot".
COPY --chown=noroot:noroot . .

# Compile le code TypeScript en JavaScript
RUN npx tsc

# Expose le port sur lequel l'application écoute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]


