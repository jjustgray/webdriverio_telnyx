FROM mcr.microsoft.com/playwright:v1.45.0-jammy

WORKDIR /app

COPY package*.json ./
RUN apt-get update && apt-get install -y default-jre
RUN npm install

COPY . .

CMD ["npm", "run", "test:chrome"]