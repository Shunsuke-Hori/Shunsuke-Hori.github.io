@echo off

for /f "tokens=*" %%A in ('git status --porcelain') do (
    set "changes_found=true"
)

if defined changes_found (
    echo Unstaged changes found. The submodule update is available only when there is no unstaged changes. Exiting...
    pause
    exit /b 1
) else (
    echo No unstaged changes found.
)

echo Updating the submodule(s)...

@REM git checkout main || (echo Failed with error in checking out main branch && pause2 && exit /b)

@REM echo Running git submodule update --remote...
git submodule update --remote || (echo Failed with error in updating subodule(s) && pause && exit /b)

git add .
git commit -m "Submodule update by update_CV.bat on `date`" || (echo Failed with error in committing the change or nothing to commit && pause && exit /b)
git push origin main || (echo Failed with error in pushing the commit && pause && exit /b)

pause