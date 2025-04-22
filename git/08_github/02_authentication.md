# Authentication

You have to verify your identity when accessing a remote repository in GitHub, typically during operations like push, pull, clone, or fetch.

- ensures only authorized users can read/write to a repository
- secures communication channel between your local machine and the GitHub server

Common authentication methods:

- HTTPS
- SSH Key
- OAuth/SSO

## HTTPS Authentication

You access the repo via an HTTPS URL.

Git prompts you for a username and password.

Modern services (like GitHub) no longer allow password login; instead, they require a Personal Access Token (PAT) in place of your password.

✅ Pros:

- Easy to set up
- Works through firewalls

❌ Cons:

- Must re-enter token unless you use a credential helper

## SSH Authentication

You use an SSH key pair (public/private).

You add your public key to your Git hosting account (e.g., GitHub).

Git uses your private key to authenticate silently.

✅ Pros:

- Secure and seamless once set up
- No need to enter credentials each time

❌ Cons:

- Setup takes a few steps (creating keys, configuring, etc.)

## OAuth or SSO (Single Sign-On)

Used in corporate environments or platforms like GitHub Enterprise.

Authenticates via a third-party login (Google, Microsoft, etc.).
