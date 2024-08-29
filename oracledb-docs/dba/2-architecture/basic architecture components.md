# Oracle Database Server Architecture

A basic Oracle Database system consists of two main components:

- **Oracle database**: is a set of files located on disk that store data

- **Oracle instance**: is a set of memory structures that manage database files. An instance xonsists of shared memory structures and a set of Oracle processes

# Oracle instance

When instance is started, Oracle database allocates a memory called System Global Area, of SGA and starts Oracle background processes.

An Oracle instance is composed of two components:

## **System Global Area (SGA)**

SGA is a group of shared-memory structures known as SGA components that contains data and control information for one Oracle database instance.

Information stored in the SGA is shared by all server and background processes.

Lists the components of the SGA:

### **Database Buffer Cache**

Before data stored in the database can be queried or modified, it must be read from a disk and stored in the buffer cache.

All user processes connected to the database share access to the buffer cache.

For optimal performance, the buffer cache should be large enough to avoid frequent disk I/O operations.

Can contains:

- Keep Pool
- Recycle Pool

### **Shared Pool**

The shared pool caches information that is shared among users:

- SQL statements that can be reused
- Information from the data dictionary such as user account data, table and index descriptions, and privileges
- Stored procedures, which are executable code that is stored in the database

### **Redo Log Buffer**

This buffer improves performance by caching redo information until it can be written to the physical online redo log files stored on disk.

### **Large Pool**

This optional area is used to buffer large I/O requests for various server processes.

### **Java Pool**

The Java pool is an area of memory that is used for all session-specific Java code and data within the Java Virtual Machine (JVM).

### **Stream Pool**

The Streams pool is an area of memory that is used by the Oracle Streams feature.

### **Result cache**

The result cache buffers query results.

If a query is run for which the results are stored in the result cache, then the database returns the query results from the result cache instead of rerunning the query.

This SGA component speeds the execution of frequently run queries.

### **PGA (Program Global Area)**

Rxistira un PGA por cada usuario conectado

- UGA
- Stack
- Sort Area
- Hash Area
- Bitmap Areas
- Datos sesion y cursores

## **Processes**

Each process in an Oracle instance performs a specific job.

By dividing the work of Oracle and database applications into several processes, multiple users and applications can connect to a single database instance simultaneously while the system maintains excellent performance.

### Types of Processes

The processes in an Oracle system can be categorized into two major groups:

- **User processes** run the application or Oracle tool code.
- **Oracle processes** run the Oracle database server code. They include server processes and background processes.

### User processes

Los usuarios que se conectan a la base de datos tienen sus propios procesos PGA (Process Global Area)

Por seguridad, un usuario no solicita el acceso directamente a la base de datos, si no que se solicita a un componente llamado listener.

Este listener crea un proceso servidor, llamado PGA, que es el que utiliza finalmente el proceso usuario

When requested by SQL statement, data is read from data file and stored in SGA or in the Program Global Area, PGA, of a server process.

### Server processes

Bacis Oracle Database background processes

- **Database Writer Process (DBWn)**: encargado de escribir el contenido de los buffer en los datafiles. Los procesos DBWn son los responsables de escribir los buffers modificados (dirty) en la cache de buffer a disco.

- **Log Writer Process (LGWR)**: Este proceso es el que se encarga de escribir el contenido del búfer de _Redo Log_ en los ficheros de _Redo Log Online_.

- **Checkpoint Process (CKPT)**: Almacena información de los checkpoint en el fichero de control y en la cabecera de los archivos de datos.

- **System Monitor (SMON)**: Se encarga del recovery y de la instancia en el arranque y de limpiar segmentos temporales y no utilizados.

- **Process Monitor (PMON)**: Se encarga del recovery de un proceso al fallar. Monitoriza sesiones, limpia el buffer cache y libera recursos.

- **Recover Process (REC0)**: Solo para entornos distribuidos. Recupera transacciones distribuidas incorrectas.

- **Listener Registration (LREG)**: Registra información de la instancia y los procesos dispatcher con el listener.

- **Archiver (ARCn)**: Copia los _redo log_ archivados

# Oracle Database

Oracle Database is a set of files stored in the storage system.

There are three basic database files:

- **Control files**: contain database structure and synchronization information.
- **Redo log files**: store changes made to the database
  - **Online**: permiten el recovery de la base de datos en caso de caída. Contiene las transacciones que se van generando.
  - **Archivados**: Historico de las transacciones de la base de datos. Usados para Recovery
- **Data files**: user data is stored in a set of data files which physically reside on a disk in the storage system.
- **Parameter file**: fichero de parámetro de la base de datos.
- **Backup**: ficheros de copia de seguridad
- **Traza y alert**: ficheros de traza y log de la base de datos.

Data files are organized in tablespaces. Each tablespace contains one or more data files.
