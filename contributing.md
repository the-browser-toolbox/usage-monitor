# Contributor's Guide

### Getting Started
1.  Fork the project on GitHub.

2.  Clone the project.
      ```shell
    git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
    ```

3.  Create a branch specific to the issue you are working on.

    ```shell
    git checkout -b "branch_name"
    ```

4.  Open up the project in your favorite text editor, select the file you want
    to contribute to, and make your changes.

5.  Add your modified
    files to Git,

    ```shell
    git add path/to/filename.ext
    ```

    You can also add all unstaged files using:

    ```shell
    git add .
    ```

    **Note:** using a `git add .` will automatically add all files. You can do a
    `git status` to see your changes, but do it **before** `git add`.

6.  Commit your changes using a descriptive commit message.

    ```shell
    git commit -m "Brief Description of Commit"
    ```

7.  Push your commits to your GitHub Fork:

    ```shell
    git push -u origin branch-name
    ```

8.  Submit a pull request.

    Within GitHub, visit this main repository and you should see a banner
    suggesting that you make a pull request.
