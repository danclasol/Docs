# Configurar repositorio del proyecto

## Crear proyecto

1. Github.com > Your profile > Repositories - Click "New"

## Enlazar proyecto local con repositorio en Github

Desde Terminal de nuestros proyecto:

1. Inicializar respositorio en el proyecto

```
git init
```

2. Crear fichero `.gitignore` de excepciones para indicar que no suba el contenido de `node_modules`

3. Añadir ficheros que si queremos subir al repositorio. Este estado se denomina `Stage`.

- Por comandos:

  ```
  git add .
  ```

- Por pestaña 'Source Control', añadiendo todos los ficheros como `Stage changes`

4. Commitear cambios

- Por comandos:

```
git commit -m "First commit"
```

- Por pestaña 'Source Control', pulsando 'Commit'

5. Crear rama

```
git branch -M main
```

6. Conectar con Github

```
git remote add origin https://github.com/dani16/template-node-project.git
```

7. Subir cambios

```
git push -u origin main
```
