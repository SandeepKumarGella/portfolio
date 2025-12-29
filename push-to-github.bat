@echo off
echo ========================================
echo Push Portfolio to GitHub
echo ========================================
echo.
echo Please enter your GitHub username:
set /p GITHUB_USERNAME=Username: 
echo.
echo Adding remote repository...
git remote add origin https://github.com/%GITHUB_USERNAME%/portfolio.git
echo.
echo Renaming branch to main...
git branch -M main
echo.
echo Pushing to GitHub...
echo (You'll be prompted for your GitHub credentials)
git push -u origin main
echo.
echo Done! Check your GitHub repository.
pause

