# Case

The case statement allows you to compare a single value against multiple patterns and execute corresponding blocks of code depending on the match.

- `expression`: The value you want to match against the patterns.
- `pattern`: The value or pattern to match the expression.
- `;;`: Indicates the end of a code block for a particular pattern.
- `*`: The default pattern that matches anything not covered by the other patterns

```sh
case expression in
    pattern1)
        # Code block for pattern1
        ;;
    pattern2)
        # Code block for pattern2
        ;;
    pattern3|pattern4)
        # Code block for pattern3 or pattern4
        ;;
    *)
        # Default code block if no patterns match
        ;;
esac
```
