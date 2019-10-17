FROM node:12.9-slim
#Hacemos las dos lineas de abajo porque esto aumenta mucho la eficiencia del build, al hacer el npm install solo sobre el package.json
WORKDIR /opt
COPY . /opt
RUN npm install
ARG PORT
ENV PORT=$PORT
EXPOSE $PORT
CMD ["node", "server.js"]