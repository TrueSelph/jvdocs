---
id: build-your-first-agent
title: Build Your First Agent
sidebar_label: Build Your First Agent
---

# Build Your First Agent

This tutorial will guide you through creating your first agent in JIVAS. By the end, you'll have a working agent that you can interact with and customize.

---

## 1. Setting Up Your JIVAS Project

To start, bootstrap a new JIVAS project using the `jvcli` command-line tool.

```sh
# Install jvcli if not already installed
pip install jvcli

# Create a new project
jvcli startproject my_first_agent
cd my_first_agent
```

This creates a new directory with the necessary files and structure for your JIVAS project.

---

## 2. Downloading a Demo Agent from the JPR

The Jivas Package Repository (JPR) hosts pre-built agents and actions. Download a demo agent to get started.

```sh
# Download the demo agent
jvcli download agent trueselph/demo-agent
```

This command downloads the demo agent and makes it available in your project.

---

## 3. Launching the JIVAS Server

To interact with your agent, you need to start the JIVAS server. This server handles requests and manages agent interactions.

```sh
# Start the JIVAS server
jac jvserve main.jac
```

The server will run on `http://localhost:8000` by default. You can access the jivas api documentation at `http://localhost:8000/docs`.

## 4. Importing the Demo Agent

Once downloaded, import the demo agent into your project.

```sh
# Import the demo agent
sh/importagent.sh trueselph/demo-agent 
```

This command imports the demo agent into your project, making it available for interaction.

---

## 4. Interacting with the Agent Using JIVAS Manager Interface

JIVAS provides a web-based interface for interacting with agents. Start the JIVAS Manager to access this interface.

```sh
# Start the JIVAS Manager
sh/startclient.sh
```

Open your browser and navigate to `http://localhost:8501` to access the JIVAS Manager. Here, you can interact with your agent by sending messages and receiving responses. You can also view the action apps and their configurations.

---

## 5. Advanced: Configuring Actions in JIVAS Manager

To customize your agent, configure its actions using the JIVAS Manager.

1. Navigate to the **Actions** tab in the JIVAS Manager.
2. Select an action to edit or create a new one.
3. Modify the action's logic, inputs, or outputs as needed.
4. Save your changes and test the updated action.

For example, you can add a custom action to handle specific user queries or integrate with external APIs.

---

Congratulations! You've built and interacted with your first agent in JIVAS. Explore the framework further to create more advanced agents tailored to your needs.
