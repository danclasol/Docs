# Variables scope

In Java, as in any programming language, each variable has a scope. This is the segment of the program where a variable can be used and is valid.

## Class Scope

Each variable declared inside of a class’s brackets with private access modifier but outside of any method, has class scope.

- can be used everywhere in the class
- but not outside of it

```java
public class ClassScopeExample {
    private Integer amount = 0;

    public void exampleMethod() {
        amount++;
    }

    public void anotherExampleMethod() {
        Integer anotherAmount = amount + 4;
    }
}
```

We can see that ClassScopeExample has a class variable amount that can be accessed within the class’s methods.

If we don’t use private, it will be accessible from the entire package. Check access modifiers article for additional information.

## Method Scope

When a variable is declared inside a method, it has method scope and it will only be valid inside the same method

```java
public class MethodScopeExample {
   public void methodA() {
      Integer area = 2;
   }

   public void methodB() {
      // compiler error, area cannot be resolved to a variable
      area = area + 2;
   }
}
```

In _methodA_, we created a method variable called area. For that reason, we can use area inside methodA, but we can’t use it anywhere else.

## Loop Scope

If we declare a variable inside a loop, it will have a loop scope and will only be available inside the loop

```java
public class LoopScopeExample {
   List<String> listOfNames = Arrays.asList("Joe", "Susan", "Pattrick");

   public void iterationOfNames() {
      String allNames = "";

      for (String name : listOfNames) {
         allNames = allNames + " " + name;
      }

      // compiler error, name cannot be resolved to a variable
      String lastNameUsed = name;
   }
}
```

We can see that method _iterationOfNames_ has a method variable called name.

This variable can be used only inside the loop and is not valid outside of it.

## Bracket Scope

We can define additional scopes anywhere using brackets `{}`

```java
public class BracketScopeExample {
   public void mathOperationExample() {

      Integer sum = 0;
      {
         Integer number = 2;
         sum = sum + number;
      }

      // compiler error, number cannot be solved as a variable
      number++;
   }
}
```

The variable number is only valid within the brackets.

## Scopes and Variable Shadowing

Imagine that we have a class variable, and we want to declare a method variable with the same name

```java
public class NestedScopesExample {
   String title = "Baeldung";

   public void printTitle() {
      System.out.println(title);
      String title = "John Doe";
      System.out.println(title);
   }
}
```

The first time that we are printing title, it will print _Baeldung_. After that, declare a method variable with the same name and assign to it the value _John Doe_.

The title method variable overrides the possibility to access to the class variable title again. That’s why the second time, it will print _John Doe_.
