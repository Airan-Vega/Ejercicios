FROM alpine:3.10.2
RUN apk --update add nginx
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./front/ /var/www/html/
RUN mkdir -p /run/nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]