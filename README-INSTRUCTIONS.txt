EZEXCHANGE WINDOWS DESKTOP APP
==============================

This project builds a Windows x64 .exe installer using GitHub Actions.
You do NOT need Node.js, Electron, Android Studio, or a local build setup.

WHAT THE APP DOES
-----------------
- Opens https://ezexchange.pythonanywhere.com in its own desktop window.
- Uses the ezexchange icon.
- Creates a desktop shortcut and Start Menu shortcut during installation.
- Keeps your existing PythonAnywhere backend and data.
- Downloads are handled by the normal Chromium download manager.

IMPORTANT
---------
This is an online desktop wrapper. An internet connection is required.
It does not copy your website, database, or uploaded files onto the PC.
Website changes on PythonAnywhere appear in the desktop app automatically.
This starter does not add new native file-sharing features.

BUILD WITHOUT INSTALLING DEVELOPMENT TOOLS
------------------------------------------
1. Sign in to GitHub: https://github.com/
2. Create a NEW repository named:
   ezexchange-windows
   Choose Public or Private as you prefer. Do not add a README/license/gitignore
   when creating it; an empty repository is easiest.
3. Open the new repository.
4. Choose "Add file" > "Upload files".
5. Extract this ZIP on your computer, then upload ALL its contents, including:
   - package.json
   - main.js
   - assets/ (icon.png and icon.ico)
   - .github/workflows/build-windows.yml
   IMPORTANT: GitHub's web uploader may hide dot-folders. If you cannot upload
   .github through the web interface, create the workflow using GitHub's
   "Add file" > "Create new file" and enter this exact path:
   .github/workflows/build-windows.yml
   Paste the contents from the same file in this project.
6. Commit the files to the main branch.
7. Open the repository's "Actions" tab.
8. Select "Build ezexchange for Windows".
9. Click "Run workflow" if it has not already started automatically.
10. Wait for the workflow to finish successfully.
11. Open the completed workflow run and scroll to "Artifacts".
12. Download "ezexchange-Windows-Installer".
13. Extract the downloaded artifact ZIP. It contains the .exe installer.
14. Run the .exe on your Windows PC and follow the installer.

UPDATES
-------
For ordinary website updates, just update PythonAnywhere; no new desktop
installer is needed. To change the desktop wrapper or icon, update this GitHub
repository and the workflow will build a fresh installer.

SECURITY
--------
The app only embeds the public HTTPS website. Never put PythonAnywhere
passwords, API keys, database files, or secret keys in this repository.
If you choose a public repository, its source files are visible to everyone.

WINDOWS SMARTSCREEN
-------------------
Windows may show an "Unknown publisher" or SmartScreen warning because this
installer is not code-signed. Only install the build you created from your
own GitHub repository. A public code-signing certificate is needed to remove
that warning reliably.
