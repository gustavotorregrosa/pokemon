FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
# ENTRYPOINT ["tail", "-f", "/dev/null"]
ENTRYPOINT ["npm", "run", "start:prod"]