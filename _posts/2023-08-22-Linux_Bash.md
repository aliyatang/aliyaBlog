---
toc: True
comments: True
layout: post
title: Linux Shell and Bash
description: Tech Talk on Linux and the Bash shell.
type: tangibles
courses: {'csa': {'week': 1}}
categories: ['Tools']
---

## Bash Tutorial
> A brief overview of Bash, on your way to becoming a Linux expert.  <mark>When a computer boots up, a kernel (MacOS, Windows, Linux) is started</mark>.  This kernel provides a shell, or <mark>terminal</mark>, that allows user to interact with a most basic set of commands.  Typically, the casual user will not interact with the shell/terminal as a Desktop User Interface is started by the computer boot up process.  To activate a shell directly, users will run a "terminal" through the Desktop. <mark>VS Code provides ability to activate "terminal"</mark> while in the IDE.

## Variable Prerequisites
> Setup bash shell dependency variables for this page.  Variables are one of the first aspects of programming.  <mark>Variables have "name" and a "value"</mark>.

- Hack Note: Change variables to match your student project.

### Define variable
The following code cell <mark>defines 3 variables and assigns each a value</mark>.  There are some extra command, called a HERE document, that write these variables to a file.  This is so we can use these variables over and over below.


```bash
%%script bash

# Dependency Variables, set to match your project directories

cat <<EOF > /tmp/variables.sh
export project_dir=$HOME/vscode  # change vscode to different name to test git clone
export project=\$project_dir/teacher  # change teacher to name of project from git clone
export project_repo="https://github.com/nighthawkcoders/teacher.git"  # change to project of choice
EOF
```

    bash: fg: %%script: no such job


### Output the value of a variable
The following code cell <mark>outputs the value of the variables</mark>, using the echo command.  For visual understanding in the output, each echo command provide a title before the $variable 


```bash
%%script bash

# Extract saved variables
source /tmp/variables.sh

# Output shown title and value variables
echo "Project dir: $project_dir"
echo "Project: $project"
echo "Repo: $project_repo"
```

    bash: fg: %%script: no such job
    Project dir: /Users/aliyatang/vscode
    Project: /Users/aliyatang/vscode/teacher
    Repo: https://github.com/nighthawkcoders/teacher.git


## Project Setup and Analysis with Bash Scripts
The bash scripts that follow automate what was done in the setup procedures.  The purpose of this is to show that many of the commands we performed can be added to a script, then performed automatically.

### Pull Code
> Pull code from GitHub to your machine. This is a <mark>bash script</mark>, a sequence of commands, that will create a project directory and add the "project" from GitHub to the vscode directory.  There is conditional logic to make sure that clone only happen if it does not (!) exist.   Here are some key elements in this code...

- cd command (change directory), remember this from terminal session
- if statements (conditional statement, called selection statement by College Board), code inside only happens if condition is met


```bash
%%script bash

# Extract saved variables
source /tmp/variables.sh

echo "Using conditional statement to create a project directory and project"

cd ~    # start in home directory

# Conditional block to make a project directory
if [ ! -d $project_dir ]
then 
    echo "Directory $project_dir does not exists... makinng directory $project_dir"
    mkdir -p $project_dir
fi
echo "Directory $project_dir exists." 

# Conditional block to git clone a project from project_repo
if [ ! -d $project ]
then
    echo "Directory $project does not exists... cloning $project_repo"
    cd $project_dir
    git clone $project_repo
    cd ~
fi
echo "Directory $project exists." 
```

    bash: fg: %%script: no such job
    Using conditional statement to create a project directory and project
    Directory /Users/aliyatang/vscode exists.
    Directory /Users/aliyatang/vscode/teacher does not exists... cloning https://github.com/nighthawkcoders/teacher.git
    Cloning into 'teacher'...
    remote: Enumerating objects: 1913, done.        
    remote: Counting objects: 100% (481/481), done.        
    remote: Compressing objects: 100% (185/185), done.        
    remote: Total 1913 (delta 308), reused 462 (delta 296), pack-reused 1432        
    Receiving objects: 100% (1913/1913), 8.53 MiB | 12.16 MiB/s, done.
    Resolving deltas: 100% (1223/1223), done.
    Directory /Users/aliyatang/vscode/teacher exists.


### Look at files Github project
> All computers contain files and directories.  The clone brought more files from cloud to your machine.  Review the bash shell script, observe the commands that show and interact with files and directories.  These were used during setup.

- "ls" lists computer files in Unix and Unix-like operating systems
- "cd" offers way to navigate and change working directory
- "pwd" print working directory
- "echo" used to display line of text/string that are passed as an argument


```bash
%%script bash

# Extract saved variables
source /tmp/variables.sh

echo "Navigate to project, then navigate to area wwhere files were cloned"
cd $project
pwd

echo ""
echo "list top level or root of files with project pulled from github"
ls

```

    bash: fg: %%script: no such job
    Navigate to project, then navigate to area wwhere files were cloned
    /Users/aliyatang/vscode/teacher
    
    list top level or root of files with project pulled from github
    Gemfile		_config.yml	_notebooks	csp.md		indexBlogs.md
    LICENSE		_data		_posts		csse.md		scripts
    Makefile	_includes	assets		images
    README.md	_layouts	csa.md		index.md


### Look at file list with hidden and long attributes
> Most linux commands have options to enhance behavior.  The enhanced listing below shows permission bits, owner of file, size and date.

[ls reference](https://www.rapidtables.com/code/linux/ls.html)


```bash
%%script bash

# Extract saved variables
source /tmp/variables.sh

echo "Navigate to project, then navigate to area wwhere files were cloned"
cd $project
pwd

echo ""
echo "list all files in long format"
ls -al   # all files -a (hidden) in -l long listing
```

    bash: fg: %%script: no such job
    Navigate to project, then navigate to area wwhere files were cloned
    /Users/aliyatang/vscode/teacher
    
    list all files in long format
    total 104
    drwxr-xr-x  23 aliyatang  staff   736 Aug 22 23:35 .
    drwxr-xr-x  20 aliyatang  staff   640 Aug 22 23:35 ..
    drwxr-xr-x  12 aliyatang  staff   384 Aug 22 23:35 .git
    drwxr-xr-x   3 aliyatang  staff    96 Aug 22 23:35 .github
    -rw-r--r--   1 aliyatang  staff   157 Aug 22 23:35 .gitignore
    -rw-r--r--   1 aliyatang  staff   122 Aug 22 23:35 Gemfile
    -rw-r--r--   1 aliyatang  staff  1081 Aug 22 23:35 LICENSE
    -rw-r--r--   1 aliyatang  staff  3131 Aug 22 23:35 Makefile
    -rw-r--r--   1 aliyatang  staff  6853 Aug 22 23:35 README.md
    -rw-r--r--   1 aliyatang  staff   607 Aug 22 23:35 _config.yml
    drwxr-xr-x   6 aliyatang  staff   192 Aug 22 23:35 _data
    drwxr-xr-x  11 aliyatang  staff   352 Aug 22 23:35 _includes
    drwxr-xr-x   6 aliyatang  staff   192 Aug 22 23:35 _layouts
    drwxr-xr-x  38 aliyatang  staff  1216 Aug 22 23:35 _notebooks
    drwxr-xr-x  12 aliyatang  staff   384 Aug 22 23:35 _posts
    drwxr-xr-x   4 aliyatang  staff   128 Aug 22 23:35 assets
    -rw-r--r--   1 aliyatang  staff    92 Aug 22 23:35 csa.md
    -rw-r--r--   1 aliyatang  staff    98 Aug 22 23:35 csp.md
    -rw-r--r--   1 aliyatang  staff   108 Aug 22 23:35 csse.md
    drwxr-xr-x  34 aliyatang  staff  1088 Aug 22 23:35 images
    -rw-r--r--   1 aliyatang  staff  5149 Aug 22 23:35 index.md
    -rw-r--r--   1 aliyatang  staff    53 Aug 22 23:35 indexBlogs.md
    drwxr-xr-x   8 aliyatang  staff   256 Aug 22 23:35 scripts



```bash
%%script bash

# Extract saved variables
source /tmp/variables.sh

echo "Look for posts"
export posts=$project/_posts  # _posts inside project
cd $posts  # this should exist per fastpages
pwd  # present working directory
ls -l  # list posts
```

    bash: fg: %%script: no such job
    Look for posts
    /Users/aliyatang/vscode/teacher/_posts
    total 176
    -rw-r--r--  1 aliyatang  staff   7685 Aug 22 23:35 2023-08-16-Tools_Equipment.md
    -rw-r--r--  1 aliyatang  staff   4650 Aug 22 23:35 2023-08-16-pair_programming.md
    -rw-r--r--  1 aliyatang  staff   7137 Aug 22 23:35 2023-08-17-markdown-html_fragments.md
    -rw-r--r--  1 aliyatang  staff   6659 Aug 22 23:35 2023-08-23-javascript-calculator.md
    -rw-r--r--  1 aliyatang  staff  10642 Aug 22 23:35 2023-08-30-agile_methodolgy.md
    -rw-r--r--  1 aliyatang  staff   3849 Aug 22 23:35 2023-08-30-javascript-music-api.md
    -rw-r--r--  1 aliyatang  staff   5312 Aug 22 23:35 2023-09-06-javascript-motion-mario-oop.md
    -rw-r--r--  1 aliyatang  staff   4812 Aug 22 23:35 2023-09-13-java-free_response.md
    -rw-r--r--  1 aliyatang  staff  13220 Aug 22 23:35 2023-10-16-java-api-pojo-jpa.md
    -rw-r--r--  1 aliyatang  staff   6819 Aug 22 23:35 2023-11-13-jwt-java-spring.md



```bash
%%script bash

# Extract saved variables
source /tmp/variables.sh

echo "Look for notebooks"
export notebooks=$project/_notebooks  # _notebooks is inside project
cd $notebooks   # this should exist per fastpages
pwd  # present working directory
ls -l  # list notebooks
```

    bash: fg: %%script: no such job
    Look for notebooks
    /Users/aliyatang/vscode/teacher/_notebooks
    total 1472
    -rw-r--r--  1 aliyatang  staff   13014 Aug 22 23:35 2023-08-01-cloud_database.ipynb
    -rw-r--r--  1 aliyatang  staff    8992 Aug 22 23:35 2023-08-01-mario_player.ipynb
    -rw-r--r--  1 aliyatang  staff   43705 Aug 22 23:35 2023-08-02-cloud-workspace-automation.ipynb
    -rw-r--r--  1 aliyatang  staff   22060 Aug 22 23:35 2023-08-03-mario_block.ipynb
    -rw-r--r--  1 aliyatang  staff   11791 Aug 22 23:35 2023-08-03-mario_platform.ipynb
    -rw-r--r--  1 aliyatang  staff   19450 Aug 22 23:35 2023-08-03-mario_tube.ipynb
    -rw-r--r--  1 aliyatang  staff   24387 Aug 22 23:35 2023-08-04-mario_background.ipynb
    -rw-r--r--  1 aliyatang  staff    3496 Aug 22 23:35 2023-08-07-mario_lesson.ipynb
    -rw-r--r--  1 aliyatang  staff   10110 Aug 22 23:35 2023-08-15-java-hello.ipynb
    -rw-r--r--  1 aliyatang  staff   25624 Aug 22 23:35 2023-08-16-github_pages_setup.ipynb
    -rw-r--r--  1 aliyatang  staff   16156 Aug 22 23:35 2023-08-16-linux_shell.ipynb
    -rw-r--r--  1 aliyatang  staff   11466 Aug 22 23:35 2023-08-16-python_hello.ipynb
    -rw-r--r--  1 aliyatang  staff    9425 Aug 22 23:35 2023-08-23-github_pages_anatomy.ipynb
    -rw-r--r--  1 aliyatang  staff   22668 Aug 22 23:35 2023-08-23-java-console_games.ipynb
    -rw-r--r--  1 aliyatang  staff    9038 Aug 22 23:35 2023-08-23-python_tricks.ipynb
    -rw-r--r--  1 aliyatang  staff   10152 Aug 22 23:35 2023-08-30-javascript_top_10.ipynb
    -rw-r--r--  1 aliyatang  staff    9689 Aug 22 23:35 2023-08-30-showcase-S1-pair.ipynb
    -rw-r--r--  1 aliyatang  staff    7192 Aug 22 23:35 2023-09-05-python-flask-anatomy.ipynb
    -rw-r--r--  1 aliyatang  staff   22157 Aug 22 23:35 2023-09-06-AWS-deployment.ipynb
    -rw-r--r--  1 aliyatang  staff   14380 Aug 22 23:35 2023-09-06-java-primitives.ipynb
    -rw-r--r--  1 aliyatang  staff   11671 Aug 22 23:35 2023-09-06-javascript-input.ipynb
    -rw-r--r--  1 aliyatang  staff   13706 Aug 22 23:35 2023-09-12-java_menu_class.ipynb
    -rw-r--r--  1 aliyatang  staff    9562 Aug 22 23:35 2023-09-13-java_fibonaccii_class.ipynb
    -rw-r--r--  1 aliyatang  staff   44217 Aug 22 23:35 2023-09-13-javascript_output.ipynb
    -rw-r--r--  1 aliyatang  staff   43423 Aug 22 23:35 2023-09-13-python-pandas_intro.ipynb
    -rw-r--r--  1 aliyatang  staff   11578 Aug 22 23:35 2023-09-20-java-image_2D.ipynb
    -rw-r--r--  1 aliyatang  staff   26739 Aug 22 23:35 2023-09-20-javascript_motion_dog.ipynb
    -rw-r--r--  1 aliyatang  staff   13599 Aug 22 23:35 2023-10-02-java-spring-anatomy.ipynb
    -rw-r--r--  1 aliyatang  staff   12429 Aug 22 23:35 2023-10-09-java-chatgpt.ipynb
    -rw-r--r--  1 aliyatang  staff   15632 Aug 22 23:35 2023-10-09-javascript_api.ipynb
    -rw-r--r--  1 aliyatang  staff  113091 Aug 22 23:35 2023-10-09-python_machine_learing_fitness.ipynb
    -rw-r--r--  1 aliyatang  staff   16271 Aug 22 23:35 2023-11-13-jwt-python-flask.ipynb
    -rw-r--r--  1 aliyatang  staff   15951 Aug 22 23:35 2023-11-13-vulnerabilities.ipynb
    -rw-r--r--  1 aliyatang  staff   18328 Aug 22 23:35 2023-11-20-jwt-java-spring-challenge.md
    -rw-r--r--  1 aliyatang  staff   10745 Aug 22 23:35 2024-01-04-cockpit-setup.ipynb
    drwxr-xr-x  3 aliyatang  staff      96 Aug 22 23:35 files



```bash
%%script bash

# Extract saved variables
source /tmp/variables.sh

echo "Look for images in notebooks, print working directory, list files"
cd $notebooks/images  # this should exist per fastpages
pwd
ls -l
```

    bash: fg: %%script: no such job
    Look for images in notebooks, print working directory, list files
    bash: cd: /Users/aliyatang/vscode/teacher/_notebooks/images: No such file or directory
    /Users/aliyatang/vscode/teacher/_notebooks
    total 1472
    -rw-r--r--  1 aliyatang  staff   13014 Aug 22 23:35 2023-08-01-cloud_database.ipynb
    -rw-r--r--  1 aliyatang  staff    8992 Aug 22 23:35 2023-08-01-mario_player.ipynb
    -rw-r--r--  1 aliyatang  staff   43705 Aug 22 23:35 2023-08-02-cloud-workspace-automation.ipynb
    -rw-r--r--  1 aliyatang  staff   22060 Aug 22 23:35 2023-08-03-mario_block.ipynb
    -rw-r--r--  1 aliyatang  staff   11791 Aug 22 23:35 2023-08-03-mario_platform.ipynb
    -rw-r--r--  1 aliyatang  staff   19450 Aug 22 23:35 2023-08-03-mario_tube.ipynb
    -rw-r--r--  1 aliyatang  staff   24387 Aug 22 23:35 2023-08-04-mario_background.ipynb
    -rw-r--r--  1 aliyatang  staff    3496 Aug 22 23:35 2023-08-07-mario_lesson.ipynb
    -rw-r--r--  1 aliyatang  staff   10110 Aug 22 23:35 2023-08-15-java-hello.ipynb
    -rw-r--r--  1 aliyatang  staff   25624 Aug 22 23:35 2023-08-16-github_pages_setup.ipynb
    -rw-r--r--  1 aliyatang  staff   16156 Aug 22 23:35 2023-08-16-linux_shell.ipynb
    -rw-r--r--  1 aliyatang  staff   11466 Aug 22 23:35 2023-08-16-python_hello.ipynb
    -rw-r--r--  1 aliyatang  staff    9425 Aug 22 23:35 2023-08-23-github_pages_anatomy.ipynb
    -rw-r--r--  1 aliyatang  staff   22668 Aug 22 23:35 2023-08-23-java-console_games.ipynb
    -rw-r--r--  1 aliyatang  staff    9038 Aug 22 23:35 2023-08-23-python_tricks.ipynb
    -rw-r--r--  1 aliyatang  staff   10152 Aug 22 23:35 2023-08-30-javascript_top_10.ipynb
    -rw-r--r--  1 aliyatang  staff    9689 Aug 22 23:35 2023-08-30-showcase-S1-pair.ipynb
    -rw-r--r--  1 aliyatang  staff    7192 Aug 22 23:35 2023-09-05-python-flask-anatomy.ipynb
    -rw-r--r--  1 aliyatang  staff   22157 Aug 22 23:35 2023-09-06-AWS-deployment.ipynb
    -rw-r--r--  1 aliyatang  staff   14380 Aug 22 23:35 2023-09-06-java-primitives.ipynb
    -rw-r--r--  1 aliyatang  staff   11671 Aug 22 23:35 2023-09-06-javascript-input.ipynb
    -rw-r--r--  1 aliyatang  staff   13706 Aug 22 23:35 2023-09-12-java_menu_class.ipynb
    -rw-r--r--  1 aliyatang  staff    9562 Aug 22 23:35 2023-09-13-java_fibonaccii_class.ipynb
    -rw-r--r--  1 aliyatang  staff   44217 Aug 22 23:35 2023-09-13-javascript_output.ipynb
    -rw-r--r--  1 aliyatang  staff   43423 Aug 22 23:35 2023-09-13-python-pandas_intro.ipynb
    -rw-r--r--  1 aliyatang  staff   11578 Aug 22 23:35 2023-09-20-java-image_2D.ipynb
    -rw-r--r--  1 aliyatang  staff   26739 Aug 22 23:35 2023-09-20-javascript_motion_dog.ipynb
    -rw-r--r--  1 aliyatang  staff   13599 Aug 22 23:35 2023-10-02-java-spring-anatomy.ipynb
    -rw-r--r--  1 aliyatang  staff   12429 Aug 22 23:35 2023-10-09-java-chatgpt.ipynb
    -rw-r--r--  1 aliyatang  staff   15632 Aug 22 23:35 2023-10-09-javascript_api.ipynb
    -rw-r--r--  1 aliyatang  staff  113091 Aug 22 23:35 2023-10-09-python_machine_learing_fitness.ipynb
    -rw-r--r--  1 aliyatang  staff   16271 Aug 22 23:35 2023-11-13-jwt-python-flask.ipynb
    -rw-r--r--  1 aliyatang  staff   15951 Aug 22 23:35 2023-11-13-vulnerabilities.ipynb
    -rw-r--r--  1 aliyatang  staff   18328 Aug 22 23:35 2023-11-20-jwt-java-spring-challenge.md
    -rw-r--r--  1 aliyatang  staff   10745 Aug 22 23:35 2024-01-04-cockpit-setup.ipynb
    drwxr-xr-x  3 aliyatang  staff      96 Aug 22 23:35 files


### Look inside a Markdown File
> "cat" reads data from the file and gives its content as output


```bash
%%script bash

# Extract saved variables
source /tmp/variables.sh

echo "Navigate to project, then navigate to area wwhere files were cloned"

cd $project
echo "show the contents of README.md"
echo ""

cat README.md  # show contents of file, in this case markdown
echo ""
echo "end of README.md"

```

    bash: fg: %%script: no such job
    Navigate to project, then navigate to area wwhere files were cloned
    show the contents of README.md
    
    ## Teacher Blog site
    This site is intended for the development of Teacher content.  This blogging site is built using GitHub Pages [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).
    - The purpose is to build lessons and distribute across different Computer Science sections (CSSE, CSP, CSA), a pathway that covers 3 years of High School Instruction.
    - The primary languages and frameworks that are taught are `JavaScript/HTML/CSS`, `Python/Flask`, `Java/Spring`.  Read below for more details.
    - In this course, Teacher content is not exclusively developed by Teachers.  In fact, many Students have been invited to develop and publish content into this repository.  Their names will appear as authors on the content which they aided in producing.
    - This site has incorporated ideas and has radically modified scripts from the now deprecated [fastpages](https://github.com/fastai/fastpages) repository.
    - This site includes assistance and guideance from ChatGPT, [chat.openai.com](https://chat.openai.com/) 
    
    ### Courses and Pathway
    The focus of the Del Norte Computer Science three-year pathway is `Full Stack Web Development`.  This focus provides a variety of technologies and exposures.  The intention of the pathway is breadth and exposure.
    - `JavaScript` documents are focused on frontend development and for entry class into the Del Norte Computer Science pathway.  JavaScript documents and materials are a prerequisites to Python and Java classes.
    - `Python` documents are focused on backend development and requirements for the AP Computer Science Principles exam.
    - `Java` documents are focused on backend development and requirements for the AP Computer Sciene A exam.
    - `Data Structures` materials embedded into JavaScript, Python, or Java documents are focused on college course articulation.
    
    ### Resources and Instruction
    The materials, such as this README, as well as `Tools`, `DevOps`, and `Collaboration` resources are integral part of this course and Computer Science in general.  Everything in our environment is part of our learning of Computer Science. 
    - `Visual Studio Code` is key the code-build-debug cycle editor used in this course, [VSCode download](https://code.visualstudio.com/).  This is an example of a resource, but inside of it it has features for collaboration.
    - `Tech Talks`, aka lectures, are intended to be interactive and utilize `Jupyter Notebooks` and Websites.  This is an example of blending instruction and tools together, which in turn provide additional resources for learning.  For instance, deep knowledge on  GitHub Pages and Notebooks are valuable in understanding principles behind Full Stack Development and Data Science. 
    
    ## GitHub Pages
    All `GitHub Pages` websites are managed on GitHub infrastructure. GitHub uses `Jekyll` to tranform your content into static websites and blogs. Each time we change files in GitHub it initiates a GitHub Action that rebuilds and publishes the site with Jekyll.  
    - GitHub Pages is powered by: [Jekyll](https://jekyllrb.com/).
    - Publised teacher website: [nighthawkcoders.github.io/teacher](https://nighthawkcoders.github.io/teacher/)
    
    ## Preparing a Preview Site 
    In all development, it is recommended to test your code before deployment.  The GitHub Pages development process is optimized by testing your development on your local machine, prior to files on GitHub
    
    Development Cycle. For GitHub pages, the tooling described below will create a development cycle  `make-code-save-preview`.  In the development cycle, it is a requirement to preview work locally, prior to doing a VSCode `commit` to git.
    
    Deployment Cycle.  In the deplopyment cycle, `sync-github-action-review`, it is a requirement to complete the development cycle prior to doing a VSCode `sync`.  The sync triggers github repository update.  The action starts the jekyll build to publish the website.  Any step can have errors and will require you to do a review.
    
    ### WSL and/or Ubuntu installation requirements
    - The result of these step is Ubuntu tools to run preview server.  These procedures were created using [jekyllrb.com](https://jekyllrb.com/docs/installation/ubuntu/)
    ```bash
    # 
    # WSL/Ubuntu setup
    #
    mkdir mkdir vscode
    git clone https://github.com/nighthawkcoders/teacher.git
    # run script, path vscode/teacher are baked in script
    ~/vscode/teacher/scripts/activate_ubuntu.sh
    #=== !!!Start a new Terminal!!! ===
    #=== Continue to next section ===
    ```
    
    ### MacOs installation requirements 
    - Ihe result of these step are MacOS tools to run preview server.  These procedures were created using [jekyllrb.com](https://jekyllrb.com/docs/installation/macos/). 
    
    ```bash
    # 
    # MacOS setup
    #
    mkdir mkdir vscode
    git clone https://github.com/nighthawkcoders/teacher.git
    # run script, path vscode/teacher are baked in script
    ~/vscode/teacher/scripts/activate_macos.sh
    #=== !!!Start a new Terminal!!! ===
    #=== Continue to next section ===
    ```
    
    
    ### Run Preview Server
    - The result of these step is server running on: http://0.0.0.0:4100/teacher/.  Regeneration messages will run in terminal on any save and update site upon refresh.  Terminal is active, press the Enter or Return key in the terminal at any time to see prompt to enter commands.
    
    - Complete installation
    ```bash
    cd ~/vscode/teacher
    bundle install
    make
    ```
    - Run Server.  This requires running terminal commands `make`, `make stop`, `make clean`, or `make convert` to manage the running server.  Logging of details will appear in terminal.   A `Makefile` has been created in project to support commands and start processes.
    
        - Start preview server in terminal
        ```bash
        cd ~/vscode/teacher  # my project location, adapt as necessary
        make
        ```
    
        - Terminal output of shows server address. Cmd or Ctl click http location to open preview server in browser. Example Server address message... 
        ```
        Server address: http://0.0.0.0:4100/teacher/
        ```
    
        - Save on ipynb or md activiates "regeneration". Refresh browser to see updates. Example terminal message...
        ```
        Regenerating: 1 file(s) changed at 2023-07-31 06:54:32
            _notebooks/2024-01-04-cockpit-setup.ipynb
        ```
    
        - Terminal message are generated from background processes.  Click return or enter to obtain prompt and use terminal as needed for other tasks.  Alway return to root of project `cd ~/vscode/teacher` for all "make" actions. 
            
    
        - Stop preview server, but leave constructed files in project for your review.
        ```bash
        make stop
        ```
    
        - Stop server and "clean" constructed files, best choice when renaming files to eliminate potential duplicates in constructed files.
        ```bash
        make clean
        ```
    
        - Test notebook conversions, best choice to see if IPYNB conversion is acting up.
        ```bash
        make convert
        ```
        
    end of README.md


## Env, Git and GitHub
> Env(ironment) is used to capture things like path to Code or Home directory.  Git and GitHub is NOT Only used to exchange code between individuals, it is often used to exchange code through servers, in our case deployment for Website.   All tools we use have a behind the scenes relationships with the system they run on (MacOS, Windows, Linus) or a relationship with servers which they are connected to (ie GitHub).  There is an "env" command in bash.  There are environment files and setting files (.git/config) for Git.  They both use a key/value concept.

- "env" show setting for your shell
- "git clone" sets up a director of files
- "cd $project" allows user to move inside that directory of files
- ".git" is a hidden directory that is used by git to establish relationship between machine and the git server on GitHub.  


```bash
%%script bash

# This command has no dependencies

echo "Show the shell environment variables, key on left of equal value on right"
echo ""

env
```

    bash: fg: %%script: no such job
    Show the shell environment variables, key on left of equal value on right
    
    MANPATH=/opt/homebrew/share/man::
    rvm_bin_path=/Users/aliyatang/.rvm/bin
    VSCODE_CRASH_REPORTER_PROCESS_TYPE=extensionHost
    GEM_HOME=/Users/aliyatang/.rvm/gems/ruby-2.5.0
    SHELL=/bin/zsh
    TMPDIR=/var/folders/h6/z_st21kd1bj6l0f07rpnsdrm0000gn/T/
    IRBRC=/Users/aliyatang/.rvm/rubies/ruby-2.5.0/.irbrc
    HOMEBREW_REPOSITORY=/opt/homebrew
    CONDA_SHLVL=1
    PYTHONUNBUFFERED=1
    CONDA_PROMPT_MODIFIER=(base) 
    ORIGINAL_XDG_CURRENT_DESKTOP=undefined
    OLDPWD=/Users/aliyatang/vscode/teacher/_notebooks
    MallocNanoZone=0
    MY_RUBY_HOME=/Users/aliyatang/.rvm/rubies/ruby-2.5.0
    PYTHONIOENCODING=utf-8
    USER=aliyatang
    COMMAND_MODE=unix2003
    CONDA_EXE=/Users/aliyatang/opt/anaconda3/bin/conda
    rvm_path=/Users/aliyatang/.rvm
    SSH_AUTH_SOCK=/private/tmp/com.apple.launchd.2vuKK9VyiI/Listeners
    __CF_USER_TEXT_ENCODING=0x1F5:0x0:0x0
    PAGER=cat
    ELECTRON_RUN_AS_NODE=1
    VSCODE_AMD_ENTRYPOINT=vs/workbench/api/node/extensionHostProcess
    rvm_prefix=/Users/aliyatang
    PATH=/Users/aliyatang/.rvm/gems/ruby-2.5.0/bin:/Users/aliyatang/.rvm/gems/ruby-2.5.0@global/bin:/Users/aliyatang/.rvm/rubies/ruby-2.5.0/bin:/Users/aliyatang/.gem/ruby/2.7.7/bin:/Users/aliyatang/.rubies/ruby-2.7.7/lib/ruby/gems/2.7.0/bin:/Users/aliyatang/.rubies/ruby-2.7.7/bin:/Users/aliyatang/opt/anaconda3/bin:/Users/aliyatang/opt/anaconda3/condabin:/opt/homebrew/bin:/opt/homebrew/sbin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/aliyatang/.rvm/bin:/Users/aliyatang/.rvm/bin
    __CFBundleIdentifier=com.microsoft.VSCode
    CONDA_PREFIX=/Users/aliyatang/opt/anaconda3
    PWD=/Users/aliyatang/vscode/teacher
    notebooks=/Users/aliyatang/vscode/teacher/_notebooks
    VSCODE_HANDLES_UNCAUGHT_ERRORS=true
    project_repo=https://github.com/nighthawkcoders/teacher.git
    project=/Users/aliyatang/vscode/teacher
    project_dir=/Users/aliyatang/vscode
    XPC_FLAGS=0x0
    PS1=[PEXP\[\]ECT_PROMPT>
    RUBY_ENGINE=ruby
    XPC_SERVICE_NAME=0
    rvm_version=1.29.12 (latest)
    SHLVL=1
    HOME=/Users/aliyatang
    VSCODE_NLS_CONFIG={"locale":"en-us","osLocale":"en-us","availableLanguages":{},"_languagePackSupport":true}
    HOMEBREW_PREFIX=/opt/homebrew
    GEM_ROOT=/Users/aliyatang/.rubies/ruby-2.7.7/lib/ruby/gems/2.7.0
    LOGNAME=aliyatang
    CONDA_PYTHON_EXE=/Users/aliyatang/opt/anaconda3/bin/python
    VSCODE_IPC_HOOK=/Users/aliyatang/Library/Application Support/Code/1.77-main.sock
    VSCODE_CODE_CACHE_PATH=/Users/aliyatang/Library/Application Support/Code/CachedData/7f329fe6c66b0f86ae1574c2911b681ad5a45d63
    GEM_PATH=/Users/aliyatang/.rvm/gems/ruby-2.5.0:/Users/aliyatang/.rvm/gems/ruby-2.5.0@global
    RUBY_ROOT=/Users/aliyatang/.rubies/ruby-2.7.7
    CONDA_DEFAULT_ENV=base
    VSCODE_PID=35482
    posts=/Users/aliyatang/vscode/teacher/_posts
    INFOPATH=/opt/homebrew/share/info:
    HOMEBREW_CELLAR=/opt/homebrew/Cellar
    VSCODE_L10N_BUNDLE_LOCATION=
    VSCODE_CWD=/
    RUBY_VERSION=ruby-2.5.0
    _=/usr/bin/env



```bash
%%script bash

# Extract saved variables
source /tmp/variables.sh

cd $project

echo ""
echo "show the secrets of .git"
cd .git
ls -l

echo ""
echo "look at config file"
cat config
```

    bash: fg: %%script: no such job
    
    show the secrets of .git
    total 56
    -rw-r--r--   1 aliyatang  staff     21 Aug 22 23:35 HEAD
    -rw-r--r--   1 aliyatang  staff    312 Aug 22 23:35 config
    -rw-r--r--   1 aliyatang  staff     73 Aug 22 23:35 description
    drwxr-xr-x  15 aliyatang  staff    480 Aug 22 23:35 hooks
    -rw-r--r--   1 aliyatang  staff  11702 Aug 22 23:35 index
    drwxr-xr-x   3 aliyatang  staff     96 Aug 22 23:35 info
    drwxr-xr-x   4 aliyatang  staff    128 Aug 22 23:35 logs
    drwxr-xr-x   4 aliyatang  staff    128 Aug 22 23:35 objects
    -rw-r--r--   1 aliyatang  staff    112 Aug 22 23:35 packed-refs
    drwxr-xr-x   5 aliyatang  staff    160 Aug 22 23:35 refs
    
    look at config file
    [core]
    	repositoryformatversion = 0
    	filemode = true
    	bare = false
    	logallrefupdates = true
    	ignorecase = true
    	precomposeunicode = true
    [remote "origin"]
    	url = https://github.com/nighthawkcoders/teacher.git
    	fetch = +refs/heads/*:refs/remotes/origin/*
    [branch "main"]
    	remote = origin
    	merge = refs/heads/main


## Advanced Student Request - Make a file in Bash
> This example was requested by a student (Jun Lim, CSA). The request was to make jupyer file using bash, I adapted the request to markdown.  This type of thought will have great extrapolation to coding and possibilities of using List, Arrays, or APIs to build user interfaces.  JavaScript is a language where building HTML is very common.

> To get more interesting output from terminal, this will require using something like mdless (https://github.com/ttscoff/mdless).  This enables see markdown in rendered format.
- On Desktop [Install PKG from MacPorts](https://www.macports.org/install.php)
- In Terminal on MacOS
    - [Install ncurses](https://ports.macports.org/port/ncurses/)
    - ```gem install mdless```
    
> Output of the example is much nicer in "jupyter"


```bash
%%script bash

# This example has error in VSCode, it run best on Jupyter
cd /tmp

file="sample.md"
if [ -f "$file" ]; then
    rm $file
fi

tee -a $file >/dev/null <<EOF
# Show Generated Markdown
This introductory paragraph and this line and the title above are generated using tee with the standard input (<<) redirection operator.
- This bulleted element is still part of the tee body.
EOF

echo "- This bulleted element and lines below are generated using echo with standard output (>>) redirection operator." >> $file
echo "- The list definition, as is, is using space to seperate lines.  Thus the use of commas and hyphens in output." >> $file
actions=("ls,list-directory" "cd,change-directory" "pwd,present-working-directory" "if-then-fi,test-condition" "env,bash-environment-variables" "cat,view-file-contents" "tee,write-to-output" "echo,display-content-of-string" "echo_text_>\$file,write-content-to-file" "echo_text_>>\$file,append-content-to-file")
for action in ${actions[@]}; do  # for loop is very similar to other language, though [@], semi-colon, do are new
  action=${action//-/ }  # convert dash to space
  action=${action//,/: } # convert comma to colon
  action=${action//_text_/ \"sample text\" } # convert _text_ to sample text, note escape character \ to avoid "" having meaning
  echo "    - ${action//-/ }" >> $file  # echo is redirected to file with >>
done

echo ""
echo "File listing and status"
ls -l $file # list file
wc $file   # show words
mdless $file  # this requires installation, but renders markown from terminal

rm $file  # clean up termporary file
```

    bash: fg: %%script: no such job
    
    File listing and status
    -rw-r--r--  1 aliyatang  wheel  809 Aug 22 23:36 sample.md
          15     132     809 sample.md
    bash: mdless: command not found


## Hack Preparation.
> Review Tool Setup Procedures and think about some thing you could verify through a Shell notebook.

- Come up with your own student view of this procedure to show your tools are installed. It is best that you keep the few things you understand, add things later as you start to understand them.

- Name and create blog notes on some Linux commands you will use frequently.
    - ls: list files/directories in current directory
    - cd: change current directory
    - pwd: print current working directory
    - mkdir: create new directory
    - rm: remove files/directories
    - cp: copy files/directories
    - mv: move (rename) files/directories
    - cat: display contents of file
    - grep: search for pattern in files
    - chmod: change file perms
 
- Is there anything we use to verify tools we installed? Review versions?
    - We can use these commands to verify installed tools and check their versions:
    - [tool_name] --version: check tool version information
    - which [tool_name]: find location of executable binary
    - whereis [tool_name]: info about tool, like binary, source, documentation locations, etc.
    echo $PATH: lists directories where executable files are located

- How would you update a repository?  Use the git command line? 
1. Navigate to repository directory:
    - cd [directory_name]
3. Pull changes from remote and merge into current local branch:
    - git pull
    - git pull origin [master_branch_name]
4. Commit changes:
    - git commit -m
5. Push changes:
    - git push
    - git push origin [your_branch_name]
