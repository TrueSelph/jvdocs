---
sidebar_position: 1
---

# Getting Started with Jivas

Welcome to the **Jivas Agentic Framework**! Let's get started with installing the framework and setting up your first project.

## Installation

To install Jivas, you'll need to use `pip`. Run the following commands in your terminal:

```bash
pip install jivas
pip install git+https://github.com/TrueSelph/jaseci.git@fast_import_v2#egg=jaclang&subdirectory=jac
```

Ensure you have Python installed on your system before running these commands.

## Create Your First Jivas Project

Once Jivas is installed, you can create a new project using the `jvcli` command-line tool. Run the following command:

```bash
jvcli startproject my_project
```

This will create a new Jivas project named `my_project` in your current directory.

## Project Structure

When you run the `jvcli startproject` command, the following files and folders are created:

- **actions/**: This folder contains the action packages for your Jivas agents. Actions are the tasks that your agents can perform based on your specifications. Pre-built actions can be downloaded from the [Jivas Package Repository (JPR)](https://jpr.trueselph.com) via the `jvcli`  download command.
- **daf/**: This folder is used for Digital Agent File (DAF) packages, which include all configurations, knowledge, and memory snapshots for your agents.
- **sh/**: This folder contains optional shell scripts to help with initializing and managing your Jivas project.
  - `inituser.sh`: Script to initialize a user and obtain a token.
  - `initagents.sh`: Script to initialize agents.
  - `importagent.sh`: Script to import a demo agent.
  - `serve.sh`: Script to serve the Jivas app.
  - `startclient.sh`: Script to launch the Jivas client.
- **tests/**: This folder is for writing test cases for your project.
- **main.jac**: The main entry point for your Jivas application, written in the Jac language.
- **.env**: Environment configuration file for storing environment settings and secrets.
- **README.md**: A guide to help you get started with your project.

Each of these components plays a crucial role in building and managing your Jivas AI project.

## Next Steps

- Navigate to your project directory: `cd my_project`
- Explore the generated files and start building your AI agents!

For more details, check out the rest of the documentation.
