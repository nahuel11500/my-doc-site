# How to reset the Git History


Recently, I wanted to introduce Conventional Commits to my repo, but it kept failing because of older commits that didn’t follow the format. Since I was the only one working on the project and it was still fresh,I decided to completely reset the main branch history, leaving just a single clean commit.

Here’s how I did it:

On the `main` branch

1. Create a new orphan branch

This gives you a fresh branch with no history.

```
git checkout --orphan temp-main
```

2. Add everything that you want, for me it was everything: 
```
git reset
git add .
git commit -m "feat: init"
```

3. Force push this clean commit to `main` : 
```
git push origin temp-main:main --force
```

4. Sync your local `main` with the new history
```
git checkout main
git fetch origin
git reset --hard origin/main
git branch -D temp-main
```

TL:DR:

```
git checkout --orphan temp-main
git reset
git add .
git commit -m "feat: init"
git push origin temp-main:main --force
git checkout main
git fetch origin
git reset --hard origin/main
git branch -D temp-main
```