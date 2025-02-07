# Check configuration

Para consultar la configuración en _git_ podemos usar el siguiente comando:

```
git config --list
```

Para mostrar sólo la configuración global de git

```
git config --global --list
```

Mestra la configuración del git del sistema (si existe)

```
git config --system --list
```

Alternativamente, puedes usar el parámetro --show-scope para saber de dónde
proviene cada configuración:

```
git config --list --show-scope
```

Para saber el valor de una configuración en particular:

```
git config user.email
```

# Set name and email

Para hacer que tus commits se asocien a tu nombre y aparezca correctamente tu
avatar en plataformas como _GitHub_, necesitas realizar la siguiente configuración:

Ejecuta en la terminal estos comandos:

```git
git config --global user.name "<your_name>"
git config --global user.email "<your_email>"
```

Si omites el parámetro `--global` te permitirá poder configurar tu nombre y
correo para cada repositorio.

```
$ cd <tu directorio de repositorio>
$ git config user.name "<your_name>"
$ git config user.email "<your_email>"
```

# Set default editor

For example, to set Visual Studio Code as the default editor use the following code:

```
git config --global core.editor "code"
```

Other examples:

```
git config --global core.editor "atom" # Atom
git config --global core.editor "subl" # Sublime Text
git config --global core.editor "nano" # Nano
```
