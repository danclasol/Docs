# `HEAD`

In _Git_, `HEAD` is a pointer that represents the current branch and commit you are working on.

It usually points to the latest commit of the currently checked-out branch, but we can move between commits, so `HEAD` might not always be the last commit.

Some commands use `HEAD` to indicate the current location or where to move.

###

To check the value of `HEAD` use the following command

```sh
git symbolic-ref HEAD ##refs/heads/main
```

or otro lado, si lo que quieres no es tener la referencia de la
rama pero sí el valor del HEAD en el que estás, puedes usar el comando git rev-parse
HEAD.

To check the current value of the `HEAD` use

```sh
git rev-parse HEAD ##5d689b826e172a7a5b78ce60c30b7d0e0891197c
```
