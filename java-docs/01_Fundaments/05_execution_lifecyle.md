# Execution lifecycle of a program

Life cycle of a java program tells us what happens right from the point when we type source code in a text editor to the point that source code is converted into machine code.

There are three main stages in the life cycle of a java program.

- **Compilation**:

  - java compiler (_javac_) translate the source code of the application into bytecode files
  - bytecode is stored in _.class_ files
  - bytecode is the intermediate representation of the Java code
  - manually compilattion in a shell
    ```sh
    javac MyProgram.java
    ```

- **Class Loading**:

  - bytecode files are loaded into memory
  - the necessary class files are prepared for execution

- **Bytecode verification**

  - bytecodes are check there aren't security problems

- **Bytecode Execution**:

  - JVM converts the bytecode into native machine code

  - JVM executes the program, executing the main method

  - manually execute a java bytecode file
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
