# Abrir Consola Cliente MongoDB

C:\Program Files\MongoDB\Server\4.0\bin

# Gestionar base de datos

## Conectarse a Cluster (Base de datos en cloud MongoDB)

```js
mongo "mongodb+srv://cluster0.0vlsq.mongodb.net/<dbname>" --username user
mongo "mongodb+srv://cluster0.0vlsq.mongodb.net/LearningWithGames" --username user
mongo "mongodb+srv://user:Chipiona.12@cluster0.0vlsq.mongodb.net/LearningWithGames"
```

## Mostrar todas la base de datos creadas

```js
show dbs
```

## Muestra la base de datos en uso (por defecto: test)

```js
db;
```

## Conectar a la base de datos que le pasemos, si no exites la crea. Hasta que no insertemos algun registro no existira realmente

```js
use nombreBaseDatos;
```

## Borrar base de datos

```js
db.dropDatabase();
```

# Collections

## Mostrar collection

```js
show collections
```

## Crear collection

```js
db.createCollection;
```

## Borrar collection

```js
db.nameColletion.drop();
```

## Consultar documentos

```js
db.users.find(); // Busca todo
db.users.findOne(); //Busca solo un documento
```

## Consultas con filtros

```js
db.users.find({ _id: ObjectId("61cdcf269ab443264c77ec0e") }); // Buscar por el \_id
db.users.find({ name: "John" }); // Filtra usuarios de nombre John
db.users.find({ name: "John", age: 25 }); // Usar 2 filtros
db.users.find({ "setting.language": "ES" }); // Filtrar por un campo de un documento embebido
db.users.find({ name: /Joh/ }); // Filtrar por nombre que contengan la palabra 'Joh'
db.users.find({ name: /^Joh/ }); // Filtrar por nombre que empiecen por 'Joh%'
db.users.find({ name: { $regex: "Joh" } }); // Filtrar por una expresion regular
db.users.find({ name: /Joh$/ }); // Filtrar por nombre que empiecen por 'Joh%'
```

## Contar documentos

```js
db.users.count({ "name": "John" }); ## Devuelve el numero de documentos que coninciden con el filtro
```

## Consultar con orden

```js
db.users.find({}).sort({"name": 1});##/ Ordena la busqueda por nombre ascendente
db.users.find({}).sort({"name": -1}); // Ordena la busqueda por nombre descendente
db.users.find({}).sort( { age : -1, posts: 1 } ) // Ordenar por 2 campos
```

# Operadores

# Operaciones DML

## Insertar, si no existe la collection la crea

```js
db.users.insert({
  name: "Daniel",
  password: "1234",
  country: "Spain",
});
```

## Updatear

```js
db.users.updateOne(
  { _id: ObjectId("61cdcf269ab443264c77ec0e") },
  { $set: { name: "Peter" } }
);
db.users.updateMany();
```
