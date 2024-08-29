# LEAD

The LEAD function returns values from the next row in the table.

For example, we can compare the date of the current record with the inmediately next date of a previous record.

```sql
SELECT product_id, order_date,
LEAD (ORDER_DATE, 1) OVER (ORDER BY order_date) AS next_order_date
FROM orders;
```

# LAG

The LAG function returns values from a previous row in the table.

For example, we can compare the date of the current record with the inmediately last date of a previous record.

```sql
SELECT product_id, order_date,
LAG (ORDER_DATE, 1) OVER (ORDER BY order_date) AS prev_order_date
FROM orders;
```
