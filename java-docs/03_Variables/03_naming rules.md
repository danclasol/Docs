## Naming Rules

- Must start with a letter (a–z, A–Z), underscore (\_), or dollar sign ($)

  ✅ myVar, _\_counter_, $temp

  ❌ 1value, @score

- Can contain letters, digits, underscores, and dollar signs

  ✅ count1, user_name, price$USD

- Cannot be a Java reserved keyword

  ❌ int, class, public, void, etc.

- Case-sensitive

  - myVar and myvar are two different variables.

## Naming Convention

- Use camelCase for variable names

  - firstName, totalPrice, numberOfStudents

- Start with a lowercase letter

  ✅ age, totalAmount
  ❌ Age, TotalAmount (used for classes)

- Be descriptive but concise

  ✅ emailAddress, scoreAverage

  ❌ x, data1 (unless it's temporary or in small scopes like loops)

- Constants are written in ALL_CAPS_WITH_UNDERSCORES

  ✅ _MAX_SPEED_, _PI_, _DEFAULT_TIMEOUT_

- Avoid using `$` and `_` unless there's a reason

  - `$` is mainly used by generated code, and `_` by convention is for constants or private fields in some styles.
