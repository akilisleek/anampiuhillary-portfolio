# Hillary Anampiu Portfolio V4 Pro

This is a fuller professional portfolio package with the organization and structure expected from a serious full-stack developer portfolio.

## Sections

- Hero
- Capability summary
- Services / What I Build
- Selected Work
- Featured HomelinkGlobal case study
- GoldTower private automation project
- Business systems and dashboards
- Process
- Technical stack
- Experience
- Contact

## Deploy to existing GitHub + Vercel

```powershell
cd "C:\Users\hp\Downloads\anampiuhillary_portfolio_v4_pro\anampiuhillary_portfolio_v4_pro"

git init
git config user.name "Hillary Anampiu"
git config user.email "anampiuhillary@gmail.com"

git add .
git commit -m "Rebuild portfolio as professional V4"

git remote add origin https://github.com/akilisleek/anampiuhillary-portfolio.git
git branch -M main
git push -u origin main --force

vercel --prod
```

If origin already exists:

```powershell
git remote set-url origin https://github.com/akilisleek/anampiuhillary-portfolio.git
git push -u origin main --force
vercel --prod
```
