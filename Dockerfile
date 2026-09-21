FROM node:22-slim

# Устанавливаем системные зависимости и ключи для репозиториев
RUN apt-get update && apt-get install -y \
    wget \
    gnupg \
    ca-certificates \
    curl \
    default-jre \
    --no-install-recommends

# 1. Установка Google Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/googlechrome-linux-keyring.gpg \
    && echo "deb [arch=amd64 signed-by=/usr/share/keyrings/googlechrome-linux-keyring.gpg] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
    && apt-get update \
    && apt-get install -y google-chrome-stable \
    --no-install-recommends

# 2. Установка Mozilla Firefox
RUN apt-get install -y firefox-esr \
    --no-install-recommends

# 3. Установка Microsoft Edge
RUN curl -sSL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor -o /usr/share/keyrings/microsoft-archive-keyring.gpg \
    && echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-archive-keyring.gpg] https://packages.microsoft.com/repos/edge stable main" >> /etc/apt/sources.list.d/microsoft-edge.list \
    && apt-get update \
    && apt-get install -y microsoft-edge-stable \
    --no-install-recommends

# Очищаем кэш пакетов для уменьшения размера образа
RUN rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Кэшируем зависимости npm
COPY package*.json ./
RUN npm ci

# Копируем исходники проекта
COPY . .

CMD ["npm", "test"]