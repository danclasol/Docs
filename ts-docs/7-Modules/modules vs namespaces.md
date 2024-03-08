# Design considerations

> 🚩 It is not recommended to combine namespaces and modules in the same project.

While namespaces are easy to use for simple implementations and do not depend on a module loader, modules offer some additional benefits that namespaces do not:

- Declare their dependencies.
- Provide better code reuse.
- Offer strong isolation.
- Hide the internal statements of the module definitions and show only the methods and parameters associated to the declared component.
- Provide better tooling support for bundling.
- Are recommended over namespaces for Node.js applications because modules are the default.
- Can resolve top-down JavaScript flow issues because a reference to an external method or class is instantiated only on method invocation.

And, starting with ECMAScript 2015, modules are native part of the language, and should be supported by all compliant engine implementations. So, for new projects, modules are recommended for code organization.

## Comparions between Namespace and modules

### Code rrganization

- `modules`: organize code into separate files for logical grouping of functionality.
- `namespaces`: organize code into separate files for logical grouping of functionality.

### Scope

- `modules`: execute in their local scope, not in the global scope.
- `namespaces`: execute in their local scope, not in the global scope.

### Dependency Management

- `modules`: declarative relationships specified through imports and exports at the file level.
- `namespaces` cannot declare dependencies explicity.

### Declaration

- `modules`: defined using the export or import keyword within a file, making any file with top-level import or export a module
- `namespaces`: declared using the namespace keyword within a file; namespace statements can be nested across multiple files.

### Comnponent Exposure

- `modules`: use the `export` keyword to expose individual components outside the module.
- `namespaces`: use the `export` keyword to expose individual components outside of the namespace.

### Importing components

- `modules`: use the `import` keyword to use a component from one module in another module.
- `namespaces`: reference another file using triple-slash (`///`) syntax to use a component from one namespace.

### Compilation

- `modules`: compile using `tsc --module` to include the module and its dependent files.
- `namespaces`: compile using `tsc` to generate individual _JavaScript_ files for _TypeScript_ files containing namespaces and their dependencies.

### Multi-files Handling

- `modules`: not possible to compile multi-file modules into a single module.
- `namespaces`: compile all _TypeScript_ files containing namespaces into a single _JavaScript_ file using `tsc --outFile`.

### Loader Mechanism

- `modules`: imported using a module loader API specified during compilation.
- `namespaces`: loaded by specifying the `.js` file names (in order) using the `<script>` tag in the _HTML_ page.

### Re-export capability

- `modules`: re-export components using their original name or rename them.
- `namespaces`: no support for re-exporting components or renaming them.
