# Character Data Types

Character data types store character (alphanumeric) data in the database character set or national character set.

- less restrictive than other data types
- consequently have fewer properties

# Character set

Character sets is a set of rules that defines how to store and understand characters in different languages and symbols.

In a Oracle database, the Character set must be specified when the database is created. Oracle only allow to specified the character set at database level.

```sql
SELECT * FROM NLS_DATABASE_PARAMETERS
WHERE PARAMETER = 'NLS_CHARACTERSET';
```

## Common Oracle Character Sets

Oracle supports a wide variety of character sets, allowing it to store and manipulate text in different languages and encoding schemes.

- `AL32UTF8`:

  - `UTF-8` encoding (supports all characters in the Unicode standard)
  - most commonly character set in Oracle
  - recommended for multilingual databases

- `UTF8`:

  - old implementation of `UTF-8` encoding
  - deprecated in favor of `AL32UTF8`

- `AL16UTF16`:

  - `UTF-16` encoding
  - stores each Unicode character in 2 bytes

# Lenght Semantics

Length semantics determine how the database interprets the length of character data, especially for `CHAR`, `VARCHAR2`, and similar data types.

## Byte Semantics

The length of a string is measured in bytes.

This is the default behavior for many Oracle databases.

If the database is using a _multibyte_ character set, characters may take more than one byte and storing fewer characters than expected.

```sql
VARCHAR2(10) -- if no specified, bytes is the default
VARCHAR2(10 BYTE) -- may not store 10 characters
```

## Character Semantics

The length is measured in characters.

Each character counts as one unit, no matter how many bytes it requires for storage.

```sql
VARCHAR2(10 CHAR) -- stores 10 characters
```

Character semantics is generally preferred in modern, multilingual databases, while byte semantics is useful for legacy systems or when working with single-byte character sets.

# Character Data Types

## `CHAR`

Fixed-length character data. If the data you insert is shorter than the specified length, Oracle pads the remaining space with spaces.

Uses the database's default character set (defined by `NLS_CHARACTERSET`).

- Length size in bytes or characters
- Maximum size is `2000` _bytes_ or `2000` characters
  - if 2000 characters occupy more than 2000 bytes (multibyte characters) it will produce an error
- Minimum size is 1 _byte_

```sql
CHAR [(size [BYTE | CHAR])]
```

## `NCHAR`

Fixed-length national character data. If the data you insert is shorter than the specified length, Oracle pads the remaining space with spaces.

Stores Unicode values (multi-byte).

Uses the database's national character set (defined by `NLS_NCHAR_CHARACTERSET`), typically `AL16UTF16` or `UTF8`.

- Maximum size is determined by the national character set definition, with an upper limit of `2000` _bytes_
- Minimum size is `1` character

```sql
NCHAR[(size)]
```

## `VARCHAR2`

Variable-length character data.

Uses the database's default character set (defined by `NLS_CHARACTERSET`).

```sql
VARCHAR2(size [BYTE | CHAR])
```

- Length size bytes or characters
- You must specify size
- Minimum size is 1 byte or 1 character
- Maximum size is:
  - `4000` bytes or characters if _MAX_STRING_SIZE_ = _STANDARD_ (default)
  - `32767` bytes or characters if _MAX_STRING_SIZE_ = _EXTENDED_

## `NVARCHAR2`

Variable-length national character data.

Stores Unicode values (multi-byte).

Uses the database’s national character set (defined by `NLS_NCHAR_CHARACTERSET`), typically `AL16UTF16` or `UTF8`.

```sql
NVARCHAR2(size)
```

- You must specify size
- The number of bytes can be up to two times size for `AL16UTF16` encoding and three times size for `UTF8` encoding.
- Maximum size is determined by the national character set definition, with an upper limit of:

  - `4000` bytes if MAX_STRING_SIZE = STANDARD (default)
  - `32767` bytes if MAX_STRING_SIZE = EXTENDED

## `CHAR` vs `VARCHAR2`

- `CHAR` pads the remaining space with spaces while `VARCHAR2` only stores the necessary characters.

- Maximun size `CHAR` is 2000 and maximum size `VARCHAR2` is 4000 (or 32767 for `EXTENDED`)

- It is recommended to always use `VARCHAR2`

## When to use `NCHAR` and `NVARCHAR2`

Used for multilingual support when:

- database character set is ASCII
- need to store data using a _Unicode_ character set

Use only `NCHAR` and `NVARCHAR2` for this very specific case.
Always try to use just `CHAR` and `VARCHAR2`.

# Parameters

## NLS_CHAR_CHARACTERSET

## NLS_NCHAR_CHARACTERSET
