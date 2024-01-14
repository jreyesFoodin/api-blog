
# Prueba Api blog


## Tech Stack

- Nodejs
- Koa
- Mysql
- Knex

## Instala el proyecto

Instalar mi proyecto con npm

```bash
    cd my-project
    npm install
    npm run dev
```

## API Reference

#### Get all blog

```http
  GET /Blog/list
```


#### ListBlogById

```http
  GET /Blog/listBlogById
```

| header | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of item to fetch |

####  CreatedBlog

```http
  Post /Blog/createdBlog
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `int` | **Required**. title of item to fetch |
| `author`      | `int` | **Required**. author of item to fetch |
| `publicationDate`      | `int` | **Required**. publicationDate of item to fetch |
| `content`      | `int` | **Required**. content of item to fetch |


####  UpdateBlog

```http
  Put /Blog/updateBlog
```

| header | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of item to fetch |

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `int` | **Required**. title of item to fetch |
| `author`      | `int` | **Required**. author of item to fetch |
| `publicationDate`      | `int` | **Required**. publicationDate of item to fetch |
| `content`      | `int` | **Required**. content of item to fetch |


####  RemoverBlog

```http
  Put /Blog/removerBlog
```

| header | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of item to fetch |


## 🚀 About Me
Desarrollador de JavaScript con más de 7 años de experiencia en el desarrollo web y aplicaciones móviles híbridas. Adoro los desafíos y busco constantemente nuevas oportunidades estimulantes. Mantenerme actualizado y aprender continuamente es mi enfoque constante.

Me considero autodidacta y, al mismo tiempo, valoro los consejos de mi equipo para seguir evolucionando. Mi interés se centra especialmente en el Backend, donde construyo APIs sólidas y diseño infraestructuras eficientes.

Como meta personal, aspiro a convertirme en un experto DevOps, integrando mis habilidades en el ciclo completo de desarrollo y operaciones. Estoy emocionado por las perspectivas emocionantes que este viaje tecnológico tiene reservadas para mí.


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/juan-reyes-celestino-48b82857/)

[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/helloJuanxoRc)


## Creador

- [@jreyesFoodin](https://github.com/jreyesFoodin)