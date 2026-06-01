# Git Workflow — Branch, Push & Merge into main

Use this workflow for every change from now on.

---

## Step-by-step (exact commands)

### 1. Go to project folder

```powershell
cd d:\LearnPlaywright2X
```

### 2. Switch to main and get latest code

```powershell
git checkout main
git pull origin main
```

### 3. Create and switch to a new branch

Replace `feature/chapter-06-operators` with a short name for your work:

```powershell
git checkout -b feature/chapter-06-operators
```

**Branch naming examples:**
- `feature/chapter-06-operators`
- `feature/template-literals`
- `fix/comparison-operator-notes`

### 4. Make your code changes

Edit files in Cursor, then check status:

```powershell
git status
```

### 5. Stage and commit on the branch

```powershell
git add .
git status
git commit -m "Add Chapter 06 comparison and ternary operators"
```

Or stage specific files only:

```powershell
git add chapter_06_Operator/38_confusing_comparison.js
git commit -m "Add confusing == vs === examples"
```

### 6. Push the branch to GitHub

First push — set upstream:

```powershell
git push -u origin feature/chapter-06-operators
```

Next pushes on the same branch:

```powershell
git push
```

---

## Merge into main

### Option A — GitHub Pull Request (recommended)

1. After `git push -u origin your-branch-name`, open GitHub.
2. Click **Compare & pull request**.
3. Base: `main` ← Compare: `your-branch-name`
4. Review changes → **Create pull request** → **Merge pull request**.
5. On your machine, update local main:

```powershell
git checkout main
git pull origin main
```

6. (Optional) Delete local branch after merge:

```powershell
git branch -d feature/chapter-06-operators
```

---

### Option B — Merge locally (no PR)

```powershell
git checkout main
git pull origin main
git merge feature/chapter-06-operators
git push origin main
```

If merge succeeds, delete the feature branch:

```powershell
git branch -d feature/chapter-06-operators
```

---

## Quick copy-paste template

Replace branch name and commit message each time:

```powershell
cd d:\LearnPlaywright2X
git checkout main
git pull origin main
git checkout -b feature/your-branch-name

# ... make changes ...

git add .
git status
git commit -m "Your commit message here"
git push -u origin feature/your-branch-name

# Then merge via GitHub PR (Option A) OR locally (Option B)
```

---

## Useful checks

```powershell
git branch                  # list branches (* = current)
git branch -a               # list local + remote branches
git status                  # see changed / staged files
git log --oneline -5        # last 5 commits
git config user.name        # Git user for this repo
git config user.email       # Git email for this repo
```

---

## If something goes wrong

| Problem | Fix |
|--------|-----|
| Push rejected (remote has new commits) | `git pull origin main` on main, then rebase or merge into your branch |
| Wrong files staged | `git restore --staged <file>` |
| Wrong branch | `git checkout main` then create branch again |
| Merge conflict | Fix conflicted files → `git add .` → `git commit` |
| Undo last commit (not pushed) | `git reset --soft HEAD~1` |

---

## Old workflow (direct to main — do not use)

```powershell
# git add .
# git commit -m "message"
# git push origin main
```

Use the branch workflow above instead.
