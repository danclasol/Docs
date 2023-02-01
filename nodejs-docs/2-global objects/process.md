# process

Provides information about, and control over, the current Node.js process.

## cwd()

Returns the current working directory of the Node.js process.

```js
console.log(`Current directory: ${cwd()}`);
```

## argv

Returns an array containing the command-line arguments passed when the Node.js process was launched.

- The first element will be process.execPath
- The second element will be the path to the JavaScript file being executed.
- The remaining elements will be any additional command-line arguments.

Launching the Node.js proccess as:

```js
$ node process-args.js one two=three four
```

```js
console.log(process.argv);
```

Would generate the output:

```js
C:\\Program Files\\nodejs\\node.exe
C:\\Users\\Course\\vs-workspace\\courss-node\\process-args.js'
first argument
two=three
four
```

Using destructuring we can retrieve only the arguments

```js
const [, , ...params] = process.argv;
console.log(params);
```

## env

Returns an object containing the user environment.

```js
console.log(process.env);
```

Would generate the output:

```js
{
  TERM: 'xterm-256color',
  SHELL: '/usr/local/bin/bash',
  USER: 'maciej',
  PATH: '~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin',
  PWD: '/Users/maciej',
  EDITOR: 'vim',
  SHLVL: '1',
  HOME: '/Users/maciej',
  LOGNAME: 'maciej',
  _: '/usr/local/bin/node'
}
```

## exit()

Instructs Node.js to terminate the process synchronously with an exit status of code.

However, Node.js will not terminate until all the 'exit' event listeners are called.

```js
process.exit(); // exitCode: 0
process.exit(2); // exitCode: 2
```

By default exit uses either the 'success' code 0 or the value of `process.exitCode` if it has been set.

```js
process.exitCode = 4;
process.exit();
```

## stdin

Returns a stream connected to stdin (fd 0)

```js
process.stdin;
```

## stdout

Returns a stream connected to stdout (fd 1).

```js
process.stdout;
```

## stderr

Returns a stream connected to stderr (fd 2)

```js
process.stderr;
```
