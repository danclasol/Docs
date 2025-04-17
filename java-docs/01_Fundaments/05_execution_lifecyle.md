# Execution lifecycle of a program

Life cycle of a java program tells us what happens right from the point when we type source code in a text editor to the point that source code is converted into machine code.

There are three main stages in the life cycle of a java program.

- **Compilation**:

  - source code of the application is converted into bytecode using the “javac” compiler

    ```sh
    javac MyProgram.java
    ```

    Creates the file _MyProgram.class_ (bytecode)

- **Class Loading**:
  - bytecode is loaded into memory and the necessary class files are prepared for execution
- **Bytecode Execution**:

  - JVM executes the bytecode and the program runs

    JVM executes main method

    ```sh
    java MyProgram
    ```

## Java Virtual Machine (JVM)

The JVM is responsible for managing the last phase.

This includes:

- loading the bytecode
- allocating memory
- converting the bytecode into native machine code

In other words, the JVM handles the task of translating the bytecode into machine code that is specific to the target platform and executing it.

This is a complex process because each microprocessor architecture “understands” a different set of instructions (e.g., x86, ARM, MIPS, PowerPC, etc.).

The JVM also provides runtime services such as memory management, thread synchronization, and exception handling.
