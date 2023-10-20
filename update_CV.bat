@echo off

echo Updating the submodule(s)...

git checkout main || (echo Failed with error in checking out main branch && pause2 && exit /b)

echo Running git submodule update --remote...
git submodule update --remote || (echo Failed with error in updating subodule(s) && pause && exit /b)


@REM Check the Git status
git submodule foreach --recursive (
    cd %%path%%
    git add .
    git commit -m "Your commit message"
    cd ..
)


@REM git commit -m submodule update --remote || echo Failed with error in updating subodule(s) && pause && exit /b



pause