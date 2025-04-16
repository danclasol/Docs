# Commit Signing

Commit can be signed to cryptographically prove that a specific person authored a commit or tag, and that it has not been modified since.

- verifying authorship and integrity of code history
- protectes against impersonation (e.g., someone faking your Git user.name and user.email)
- adds a "Verified" badge on GitHub to signal trustworthy commits

## GPG Keys

The traditional method to signing commit is using GPG keys (RSA/ED25519)
