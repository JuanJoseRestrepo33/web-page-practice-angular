# Despliegue en Heroku

## Requisitos previos

- Cuenta en [Heroku](https://heroku.com)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) instalado
- Repositorio Git inicializado

## Pasos para desplegar

1. **Inicializar Git** (si no está hecho):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Crear app en Heroku**:
   ```bash
   heroku create tu-nombre-app
   ```
   O sin nombre para que Heroku genere uno aleatorio:
   ```bash
   heroku create
   ```

3. **Desplegar**:
   ```bash
   git push heroku main
   ```
   Si tu rama principal es `master`:
   ```bash
   git push heroku master
   ```

4. **Abrir la app**:
   ```bash
   heroku open
   ```

## Comandos útiles

- Ver logs: `heroku logs --tail`
- Abrir consola: `heroku run bash`
- Escalar dynos: `heroku ps:scale web=1`

## Cómo funciona

- Heroku ejecuta `heroku-postbuild` (hace `ng build`)
- Luego inicia el servidor con `npm start` (node server.js)
- El servidor Express sirve los archivos estáticos de Angular en el puerto dinámico `process.env.PORT`
