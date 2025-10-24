# Maven Repository

In Maven, repositories are locations where Maven stores and retrieves project dependencies (libraries, plugins, etc.).

There are three main types of repositories:

- Local Repository
- Central Repository
- Remote Repository

## Local repository

Caches all dependencies downloaded from remote repositories and stores them on your computer.

- by default is stored in `C:\Users\<username>\.m2\repository`

When you build a project, Maven first checks the local repository before looking online.

- takes precedence during dependency resolution
- ./m2/repository

## Central repository

The default online repository Maven uses when it can’t find a dependency locally.

- https://mvnrepository.com/
- Maintained by the Apache Maven community
- no configuration needed — it’s included by default

## Remote/private repository

Used by organizations or teams to host internal or third-party libraries not available on Maven Central.

Configuration example in `pom.xml`:

```xml
<repositories>
  <repository>
    <id>company-repo</id>
    <url>https://repo.mycompany.com/maven2</url>
  </repository>
</repositories>
```
