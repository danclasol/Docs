# APEX_MAIL Package

Package to send an email from an Oracle APEX application.

- built on top of the Oracle-supplied UTL_SMTP package

- UTL_SMTP package must be installed and functioning to use APEX_MAIL

- APEX installs the database job ORACLE_APEX_MAIL_QUEUE, which periodically sends all mail message stored in the active mail queue.

# Procedures

## APEX_MAIL.SEND

Use APEX_MAIL.SEND to send an outbound email message from your application.

### Syntax

```sql
APEX_MAIL.SEND(
    p_to                        IN    VARCHAR2,
    p_from                      IN    VARCHAR2,
    p_body                      IN  [ VARCHAR2 | CLOB ],
    p_body_html                 IN  [ VARCHAR2 | CLOB ] DEFAULT NULL,
    p_subj                      IN    VARCHAR2 DEFAULT NULL,
    p_cc                        IN    VARCHAR2 DEFAULT NULL,
    p_bcc                       IN    VARCHAR2 DEFAULT NULL,
    p_replyto                   IN    VARCHAR2);
```

## APEX_MAIL.PUSH_QUEUE

Use APEX_MAIL.PUSH_QUEUE to deliver mail messages stored in APEX_MAIL_QUEUE.

### Syntax

```sql
APEX_MAIL.PUSH_QUEUE(
    p_smtp_hostname             IN    VARCHAR2 DEFAULT NULL,
    p_smtp_portno               IN    NUMBER   DEFAULT NULL);
```

## APEX_MAIL.ADD_ATTACHMENT

Use APEX_MAIL.ADD_ATTACHMENT to send an outbound email message from your application as an attachment.

### Syntax

```sql
APEX_MAIL.ADD_ATTACHMENT(
    p_mail_id                   IN    NUMBER,
    p_attachment                IN    BLOB,
    p_filename                  IN    VARCHAR2,
    p_mime_type                 IN    VARCHAR2);
```
