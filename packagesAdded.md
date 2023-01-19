# install

`fastify is a framework similar the express`

```
yarn add fastify
```

```
yarn add typescript -D
```

```
yarn tsc --init
```

```
yarn add tsx -D
```

```
yarn add prisma -D
```

```
yarn add @prisma/client
```

```
yarn add @fastify/cors
```

```
yarn add dayjs
```

# config

`in package.json create a script to run project`

```
"scripts": {
    "dev": "tsx watch src/server.ts"
  },
```

`in tsconfig.json set target: "es2016" to target: "es2020"`

`after install prisma in DEV and install the prisma/client config a use SQLite`

```
yarn prisma init --datasource-provider SQLite
```

`after config in prisma/schema.prisma then models run in terminal`

```
yarn prisma migrate dev
```

`declare a name to migration file`

# run DB Prisma Studio

`yarn prisma studio`

# config a lib ZOD to validation

```
yarn add zod
```
