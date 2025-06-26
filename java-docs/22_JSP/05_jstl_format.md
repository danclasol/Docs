# Formatting tags

## Install

Import the library at the top of the `.jsp` file

```jsp
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
```

## Tags list

### `<fmt:formatNumber>`

To render numerical value with specific precision or format.

```jsp
<fmt:formatNumber value="12345.678" type="number" />
<fmt:formatNumber value="0.95" type="percent" />
<fmt:formatNumber value="99.99" type="currency" currencySymbol="$" />
```

### `<fmt:parseNumber>`

Parses the string representation of a number, currency, or percentage.

```jsp
<fmt:parseNumber var="parsedNumber" value="1234.56" type="number" />
```

### `<fmt:formatDate>`

Formats a date and/or time using the supplied styles and pattern.

```jsp
<fmt:formatDate value="${now}" pattern="dd/MM/yyyy" />
<fmt:formatDate value="${now}" type="date" dateStyle="short" />
```

### `<fmt:parseDate>`

Parses the string representation of a date and/or time

```jsp
<fmt:parseDate var="parsedDate" value="2024-12-31" pattern="yyyy-MM-dd" />
```

### `<fmt:bundle>`

Loads a resource bundle to be used by its tag body.

```jsp
<fmt:setBundle basename="messages" />
```

### `<fmt:setLocale>`

Stores the given locale in the locale configuration variable.

```jsp
<fmt:setLocale value="es_ES" />
```

### `<fmt:setBundle>`

Loads a resource bundle and stores it in the named scoped variable or the bundle configuration variable.

```jsp
<fmt:bundle basename="labels">
  <fmt:message key="title.home" />
</fmt:bundle>
```

### `<fmt:timeZone>`

Specifies the time zone for any time formatting or parsing actions nested in its body.

```jsp
<fmt:timeZone value="GMT+2">
  <fmt:formatDate value="${now}" pattern="yyyy-MM-dd HH:mm z" />
</fmt:timeZone>
```

### `<fmt:setTimeZone>`

Stores the given time zone in the time zone configuration variable

```jsp
<fmt:setTimeZone value="America/New_York" scope="session" />
```

### `<fmt:message>`

Displays an internationalized message.

```jsp
<fmt:setBundle basename="messages" />
<fmt:message key="welcome.message" />
```

### `<fmt:requestEncoding>`

Sets the request character encoding

```jsp
<fmt:requestEncoding value="UTF-8" />
```
