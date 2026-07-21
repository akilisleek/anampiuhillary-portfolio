# AnampiuHillary Portfolio App

Professional portfolio website for Hillary Anampiu Gitonga.

## Deploy with Vercel CLI

```powershell
cd "C:\Users\hp\Downloads\anampiuhillary_portfolio_app_v1"
npm i -g vercel
vercel login
vercel --prod
```

When Vercel asks:

- Set up and deploy? `Y`
- Which scope? Choose your personal account
- Link to existing project? `N`
- Project name: `anampiuhillary`
- Directory: `./`
- Build command: leave blank
- Output directory: `.`
- Development command: leave blank

## GitHub repo option

```powershell
git init
git config user.name "Hillary Anampiu"
git config user.email "anampiuhillary@gmail.com"
git add .
git commit -m "Publish AnampiuHillary portfolio"
gh repo create anampiuhillary-portfolio --public --source . --remote origin --push
```
