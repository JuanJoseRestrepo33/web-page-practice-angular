# Abuelita Karina — Cards App

Aplicación Angular responsive para web y móvil, con página de cards interactivas. Lista para desplegar en Heroku.

## Despliegue en Heroku

### Requisitos previos

- Cuenta en [Heroku](https://heroku.com)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) instalado
- Node.js 18+ o 20+
- Git

### Pasos para desplegar

1. **Inicializar Git** (si aún no lo has hecho):

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Crear la app en Heroku**:

   ```bash
   heroku create
   ```

   O con un nombre específico:

   ```bash
   heroku create abuelita-karina-cards
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

### Cómo funciona en Heroku

- **heroku-postbuild**: ejecuta `ng build` para compilar Angular
- **npm start**: inicia el servidor Express que sirve los archivos estáticos
- El puerto lo asigna Heroku automáticamente (`process.env.PORT`)

### Dominio personalizado

Para usar tu propio dominio en lugar de `*.herokuapp.com`:

1. En Heroku: Settings → Domains → **Add domain** (añade `www.tudominio.com` o `tudominio.com`)
2. Heroku te mostrará un DNS target tipo `xxx.herokudns.com`
3. En tu proveedor de dominios, crea un **CNAME** que apunte a ese target:
   - Host: `www` (o `@` según tu proveedor)
   - Valor: `skeletal-sailfish-xxx.herokudns.com` (el que te dio Heroku)

Documentación oficial: [Custom Domain Names for Apps - Heroku Dev Center](https://devcenter.heroku.com/articles/custom-domains)

### Comandos útiles de Heroku

| Comando                    | Descripción              |
| -------------------------- | ------------------------ |
| `heroku logs --tail`       | Ver logs en tiempo real  |
| `heroku run bash`          | Abrir consola remota     |
| `heroku ps:scale web=1`    | Asegurar un dyno activo  |
| `heroku domains`           | Ver dominios y DNS target|

---

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (hot reload)
npm run serve

# Probar build de producción (igual que Heroku)
npm run build
npm start
```

La app estará en `http://localhost:4200/` (desarrollo) o `http://localhost:8080/` (producción).

---

## Editar contenido

Los textos e imágenes se editan en **`src/app/data/cards.data.ts`**:

| Campo         | Descripción                                      |
| ------------- | ------------------------------------------------- |
| `title`       | Nombre en la card                                |
| `fullContent` | Texto completo que aparece al hacer clic         |
| `imageUrl`    | Foto de perfil (URL o `assets/avatars/foto.jpg`)  |
| `icon`        | Símbolo alternativo si no usas foto (★, ◆, ►)   |

Las imágenes locales van en **`public/assets/avatars/`** y se referencian como `assets/avatars/nombre.jpg`.

---

## Características

- Responsive (web y móvil)
- Cards con fotos de perfil
- Modal con texto completo al hacer clic
- Foto principal con popup de mensaje especial
- Tema claro/oscuro automático
- Desplegable en Heroku

---

## Stack técnico

- Angular 19
- Express (servidor estático)
- SCSS
- Node.js 20.x
