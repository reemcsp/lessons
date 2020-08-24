# Git
git is a version control tool

## Adding git to a project
```bash
git init
```

## Tracking files for the first time
Adding spefific files / folders
```bash
git add file_name.js
git add folder_name
git add whatever.whocares
```

Adding everything
```bash
git add .
```

## Status
```bash
git status
```

## Save change
```bash
git commit -m "Changed cps icon"
```

## Add Changes to github
```bash
git push -u origin master
```


# Classic Example
He have this folder structure:
```
cps-tester/
-index.js
-package.json
```

```bash
git init

git add .
git commit -m "Initial Commit"

git remote set-url origin github_url

git push -u origin master
```

## Ignore files
```bash
touch .gitignore
git add .gitignore
git commit -m "added .gitignore"
```