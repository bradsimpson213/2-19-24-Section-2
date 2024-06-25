FROM node:18-alpine3.20

ENV FLASK_APP = my_app
ENV FLASK_DEBUG = False
ENV FLASK_ENV = production

EXPOSE 3000

WORKDIR /app 

COPY package,json .

RUN npm install 

RUN pip install 

COPY . .

CMD ["npm", "start"]
CMD ["param1", "param2"]
CMD npm start 
