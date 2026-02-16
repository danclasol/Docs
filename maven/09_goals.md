# Goals

Each phase is a sequence of goals, and each goal is responsible for a specific task.

When we run a phase, all goals bound to this phase are executed in order.

## Example of goals bound a phases

- `compiler:compile`: bound to the compile phase
- `compiler:testCompile`: bound to test-compile phase
- `surefire:test`: bound to the test phase
- `install:install`: bound to the install phase
- `jar:jar` or `war:war`: bound to the package phase

## Common commands

### `help`

We can list all goals bound to a specific phase and their plugins using the command:
```sh
mvn help:describe -Dcmd=PHASENAME
```