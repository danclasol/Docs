# SSH

Usando el protocolo SSH, te puedes conectar y autenticar con servicios y servidores remotos.

Con las claves SSH puedes conectarte a GitHub sin necesidad de proporcionar el nombre de usuario y el personal access token en cada visita.

También puedes usar una clave SSH para firmar confirmaciones.

# Generar clave SSH

## Algoritmo

Debemos seleccionar una de los siguientes algoritmos de generacion:

- _rsa_: algoritmo bastante antiguo. No recomendable.
  - Tamaño minimo 2048 bits. Mas recomendable 4086 bits
- _dsa_: algoritmo bastante antiguo. No recomendable.
  - Tamaño usado normalmente 1024 bits
- _ecdsa_: el más usado por ser el más compatible.
  - Soporta 3 tamaños de claves: 256, 384, 521bits
- _ed25519_: el más nuevo, pero todavía no tiene mucha compatibilidad

## Tamaño de clave

Tambien, debemos elegir un tamaño de clave que segun el algoritmo seleccionado tendremos un rango disponible.

Lo mas recomendable es coger el mayor tamaño posible, para conseguir mas seguridad.

## Generar clave

Ejectuar en el Git Bash lo siguientes:

- _ssh-keygen_: comando para generar clave
- _ecdsa_: tipo de algoritmo
- _521_: tamaño de clave del algoritmo
- _email_: guardar comentario junto con la clave

```
$ ssh-keygen -t ecdsa -b 521 -C "your_email@example.com"
```

A continución, nos pedirá que confirmemos la siguiente información:

- Localización donde se guardará la clave.
- Contraseña que será requerida cada vez que usemos la clave. Es opcional si queremos más seguridad

Una vez terminado, se crearán 2 ficheros de claves en el directorio que hayamos indicado anteriormente:

- clave private: _clave_
- clave publica: _clave.pub_

## Fichero configuracion

Para que el sistema sepa como utilizar estas clave, debemos crear el fichero de configuración en nuestro sistema, si no lo tenemos creado ya.

Lo crearemos en la misma carpeta en el que esten las claves con el nombre `config`

### Definir hosts

En este fichero, indicaremos que cuando hagamos peticiones a los diferentes servicios o IPs utilice una de las claves que tenemos generadas en `./ssh`.

- _Host_ [HOST_NAME]: nombre del servicio o host
  - _User_: username de Github
  - _Hostname_: direccion del servicio o dominio
  - _PreferredAuthentications_: tipo de autenticacion por ssh
  - _IdentifyFile_: localizacion clave privada

```
Host github.com
    User username
    Hostname github.com
    PreferredAuthentications publickey
    IdentifyFile ~/.ssh/github
```

# Conectar con Github

Después de generar la clave, puedes agregar la clave a tu cuenta en GitHub.com para habilitar la autenticación para las operaciones de Git a través de SSH.

1. Ir a Settings > Access - SSH and GPG keys
2. Click en "New SSH Key"
3. Añadir key
   - Titulo: nombre para identificar nuestra key
   - Key: copiamos el contenido del fichero de la clave publica

A partir de ahora, cada vez que el sistema conecte con Github lo hara a traves de esta clave SSH y no nos solicitará contraseña, a no ser que le hayamos puesto contraseña a la clave

Podemos hacer una prueba con:

```
ssh -T git@github.com
```

A continuacion, nos hara la siguiente pregunta, a la que contestaremos _yes_:

```
Are you sure you want to continue connectinog (yes/no/[fingerprint])? yes

Warning: Permanently added 'github.com,192.1.1.16' (ECDSA) to the list of known hosts.
Hi user! You've successfully authenticated, but GitHub does not provide shell access.
```
