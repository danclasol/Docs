Ver usuarios

```
SHOW USER;
```

Crear Usuario

```
CREATE USER fdf IDENTIFIED BY 123;

ALTER SESSION SET = "_ORACLE_SCRIPT" = TRUE;

CREATE USER fdf IDENTIFIED BY 123;
```

Dar permisos a usuario

```
GRANT DBA TO STUDENT;
```

Abrir base de datos

```
alter database open;
```

Conectarse como ADMIN

- Enter ADMIN user.

  - Si no sabemos el usuario admin, existe un truco para ingresar el usuario admin:

    ```
    CONN /AS SYSDBA
    ```

With Oracle multitenant your can open the pdb and save the state:

```
sqlplus / as sysdba # to the CDB
alter pluggable database orclpdb open;
alter pluggable database orclpdb save state;
```
