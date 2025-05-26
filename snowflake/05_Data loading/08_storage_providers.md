# Store Integration

In Snowflake, a Storage Integration is a secure, pre-configured object that lets Snowflake access external cloud storage (like AWS S3, Azure Blob Storage, or Google Cloud Storage) without exposing access credentials such as access keys or secrets.

- secure access to external storage (read/write)
- required for external stages (for COPY INTO / EXPORT / external tables)
- simplifies IAM or service principal management
- keeps credentials out of SQL scripts and user sessions

## Main Store Providers

### AWS S3 Integration

- update AWS IAM Role Policy to trust Snowflake

```sql
CREATE STORAGE INTEGRATION my_s3_integration
TYPE = EXTERNAL_STAGE
STORAGE_PROVIDER = S3
ENABLED = TRUE
STORAGE_AWS_ROLE_ARN = 'arn:aws:iam::123456789012:role/mySnowflakeRole'
STORAGE_ALLOWED_LOCATIONS = ('s3://my-bucket/path/');
```

### Azure Blob Integration

- grant Snowflake’s service principal access in Azure (usually via RBAC or access policies)

```sql
CREATE STORAGE INTEGRATION my_azure_integration
TYPE = EXTERNAL_STAGE
STORAGE_PROVIDER = AZURE
ENABLED = TRUE
AZURE_TENANT_ID = '<your-tenant-id>'
STORAGE_ALLOWED_LOCATIONS = ('azure://myaccount.blob.core.windows.net/mycontainer/');
```

### Google Cloud Platform

- grant access to that Snowflake-provided service account in GCP

```sql
CREATE STORAGE INTEGRATION my_gcs_integration
TYPE = EXTERNAL_STAGE
STORAGE_PROVIDER = GCS
ENABLED = TRUE
STORAGE_GCP_SERVICE_ACCOUNT = 'snowflake-sa@gcp-project.iam.gserviceaccount.com'
STORAGE_ALLOWED_LOCATIONS = ('gcs://my-bucket/path/');
```

## Using Store Ingteration

Create a stage that consumes the store integrations

```sql
CREATE STAGE external_stages.aws_csv_folder
    URL = 's3://<your-bucket-name>/<your-path>'
    STORAGE_INTEGRATION = s3_int
    FILE_FORMAT = my_csv_fileformat

```
