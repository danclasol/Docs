## BigDecimal and BigInteger

For very large numbers or numbers requiring high precision (e.g., financial calculations), Java provides the BigDecimal and BigInteger classes.

## BigDecimal

```java
import java.math.BigDecimal;

BigDecimal bd1 = new BigDecimal("12345.6789");
BigDecimal bd2 = new BigDecimal("98765.4321");

BigDecimal sum = bd1.add(bd2);  // Add two BigDecimal numbers
```

## BigInteger

```java
import java.math.BigInteger;

BigInteger bigInt1 = new BigInteger("100000000000000000000000000000");
BigInteger bigInt2 = new BigInteger("200000000000000000000000000000");

BigInteger result = bigInt1.add(bigInt2);  // Add very large integers
```
