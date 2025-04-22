# `tag`

Create, list, delete or verify a tag object signed with GPG

```sh
git tag
```

## Common Uses

Create tag

```sh
git tag TAG_NAME
```

List existing tags

```sh
git tag
```

Push a single tag

```sh
git push origin v1.0
```

Push all tags

```sh
git push origin --tags
```

Delete tags locally

```sh
git tag -d v1.0
```

Delete tags locally on remote

```sh
git push origin --delete tag v1.0
```

Create a tag for a past commit

```sh
git tag -a v1.0 <commit-hash> -m "Tagging commit as v1.0"
```
