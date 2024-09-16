FROM node:18 as builder

COPY ./common/package*.json ./common/ 
RUN npm install --prefix common

COPY ./common ./common
RUN npm run build --prefix common


COPY ./backend/package*.json ./backend/ 
RUN npm install --prefix backend

COPY ./backend ./backend
RUN npm run build --prefix backend


FROM node:18-alpine

COPY --from=builder backend/dist ./backend
COPY --from=builder backend/package*.json ./backend/

RUN npm install --only=production --prefix backend

ENTRYPOINT ["node", "backend/main.js"]