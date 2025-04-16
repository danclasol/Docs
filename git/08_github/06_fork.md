# Fork

A fork is a copy of someone else’s repository under your own GitHub account.

- allow to make changes freely without affecting the original project
- useful for contributing to public repositories

## Fork Workflow

### Create fork

- Go to the repository on GitHub.
- Click the “Fork” button (top right)
- It creates a copy respository under your account

### Clone Your Fork Locally

```sh
git clone https://github.com/your-username/forked-repo.git
cd forked-repo
```

### Sync forks

Pulling Changes from Upstream

```sh
git fetch upstream
git checkout main
git merge upstream/main
```

### Push Changes to Your Fork

Make changes locally, commit them, and push

```sh
git add .
git commit -m "Your message"
git push origin main
```

### Create a Pull Request

Go to your fork on GitHub and click "Compare & pull request" to propose your changes to the original repository.
