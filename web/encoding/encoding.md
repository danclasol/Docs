# Character encoding

Character encoding is the process of mapping characters (letters, symbols, numbers) to specific binary sequences (bytes) so they can be stored, processed, and transmitted by computers.

Different encodings map the same characters to different binary representations, which is why understanding and choosing the correct encoding is essential in multilingual and cross-platform environments.

## How encodings works

When a character is typed or stored, the system converts it into a binary sequence using the selected character encoding.

For example:

- the letter `A` require 1 byte: `01000001`
- the letter `é` require 2 bytes: `11000011` `10101001`

## Unicode Standard

The Unicode Standard is a universal character encoding system designed to represent text and symbols from all writing systems in the world.

It assigns a unique number, called a code point, to every character, no matter the platform, program, or language. This allows consistent representation of text across different systems and languages.

For example:

```
The letter A has the code point U+0041.
The emoji 😀 has the code point U+1F600.
```

## Types of Character Encoding

### ASCII (American Standard Code for Information Interchange)

- **Bit size**:
  - `7-bit` encoding
  - values 0–127
- **Characters**:
  - basic English letters (A-Z, a-z)
  - digits (0-9)
  - punctuation marks
  - control characters (like newline, tab)
- **Usage**:
  - primarily used in older systems
  - applications that only require basic Latin characters
- **_Limitation_**:
  - Only supports 128 characters, so it's not suitable for non-English languages.

### Extended ASCII

- **Bit size**:
  - `8-bit` encoding
  - values 0–255
- **Characters**:
  - Supports all standard _ASCII_ characters
  - plus 128 additional characters for various symbols and accented letters
- **Usage**:
  - Adds some international character support
  - But limited to specific languages (like Western European languages).
- **Common Variants**:
  - `ISO-8859-1` (Latin-1): An 8-bit extension that supports Western European languages.
  - `Windows-1252`: A Microsoft variant of `ISO-8859-1` with additional symbols and punctuation.

### UTF-8 (Unicode Transformation Format – 8-bit)

- **Bit size**:
  - Variable-length encoding
  - 1 to 4 bytes per character
- **Characters**:
  - Can represent every character in the Unicode standard
- **Usage**:
  - The most widely used encoding on the web, capable of encoding characters from virtually every language in the world.
  - It's backward-compatible with _ASCII_
- **Advantages**:
  - Efficiency: _ASCII_ characters are stored in 1 byte, while more complex characters use 2–4 bytes
- **Compatibility**:
  - Most modern systems and databases (like Oracle's `AL32UTF8`) use _UTF-8_

### UTF-16 (Unicode Transformation Format – 16-bit)

- **Bit size**:
  - Variable-length encoding
  - either 2 or 4 bytes per character
- **Characters**:
  - Can represent all Unicode characters
- **Usage**: Often used in internal data processing and certain applications (e.g., Windows OS)
- **Advantages**:
  - Efficient for representing languages where most characters require more than 1 byte (e.g., Asian languages)
- **Disadvantages**:
  - Uses more storage for basic Latin characters compared to `UTF-8`

### UTF-32 (Unicode Transformation Format – 32-bit)

- **Bit size**:
  - Fixed-length encoding
  - 4 bytes per character
- **Characters**:
  - Represents every Unicode character directly in 4 bytes
- **Usage**:
  - Rarely used in practice due to inefficiency (4 bytes for every character)
- **Advantages**:
  - Simplicity, since every character is the same size (4 bytes)
- **Disadvantages**:
  - Wasteful for most characters, especially for texts primarily using Latin characters
