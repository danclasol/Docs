# Modifiers

## Access Modifiers

- `public`: everywhere (any class, package)
- `protected`: same package + subclasses (even in other packages)
  - default modifier, if we don't specify any
- `private`: only inside the same class
  - recommended for every properties of the class
  - access to properties with getters and setters
- `default`: same package only (no modifier written)

## Non-Access Modifiers

### For Classes

- `abstract`: cannot be instantiated (must be subclassed)
- `final`: cannot be extended

### For Methods

- `abstract`: no body, must be overridden
- `final`: cannot be overridden
- `static`: belongs to the class, not to instances
  - only one copy shared by all objects of that class
- `synchronized`: thread-safe method

### For Variables

- `final`: constant, can’t be changed after initialization
- `static`: shared across all instances of the class
  - only one copy shared by all objects of that class
