---
id: actions
title: Understanding Actions in JIVAS
sidebar_label: Actions
sidebar_position: 2
---

# Actions in JIVAS

Actions are the fundamental building blocks of an agent's functionality in the JIVAS framework. They define the tasks an agent can perform, ranging from processing user inputs to integrating with external APIs. Actions are modular, reusable, and can be chained or nested to create complex workflows.

## Purpose of Actions

Actions enable agents to:
- **Process User Inputs**: Handle user utterances and generate responses.
- **Perform Computations**: Execute logic or calculations as part of workflows.
- **Integrate with APIs**: Connect to external services or databases.
- **Extend Functionality**: Add custom behaviors to agents.

## Types of Actions

### 1. **Interact Actions**
Interact Actions handle user interactions and are often used to process utterances, classify intents, and generate responses.

```jac
// Example of an Interact Action
node InteractAction :Action: {
    has weight: int = 0;

    can touch(visitor: interact_graph_walker) -> bool {
        # Authorize or deny execution
        return True;
    }

    can execute(visitor: interact_graph_walker) -> dict {
        # Implement action logic
        return {"response": "Hello, how can I help you?"};
    }
}
```

### 2. **Model Actions**
Model Actions interface with language models (e.g., GPT) to generate responses or perform tasks like summarization.

```jac
// Example of a Model Action
node ModelAction :Action: {
    has model_name: str = "gpt-4";
    has model_temperature: float = 0.7;

    can invoke(prompt_messages: list, prompt_variables: dict) -> dict {
        # Call the model and return the result
        return {"result": "Generated response from the model"};
    }
}
```

### 3. **Vector Store Actions**
Vector Store Actions manage vector-based data retrieval, enabling tasks like semantic search and retrieval-augmented generation (RAG).

```jac
// Example of a Vector Store Action
node VectorStoreAction :Action: {
    has vector_store_name: str = "my_vector_store";

    can search(query: str) -> list {
        # Perform a vector search
        return [{"document": "Relevant document content"}];
    }
}
```

## Pre-Built Actions and the JPR

Pre-built actions can be downloaded from the [Jivas Package Repository (JPR)](https://jpr.trueselph.com). The JPR hosts a collection of reusable actions that can be integrated into your agents.

### Downloading Actions from the JPR

To download actions from the JPR, use the `jvcli` command-line tool:

```sh
jvcli download action <namespace>/<action-name> --version <version>
```

For example:

```sh
jvcli download action trueselph/greeting-action --version 1.0.0
```

This command downloads the specified action and makes it available for use in your agent.

## Creating Custom Actions

You can create custom actions to extend the functionality of your agents. Here's an example of a custom action:

```jac
// Custom Action Example
node CustomAction :Action: {
    has description: str = "A custom action for demonstration";

    can execute(visitor: interact_graph_walker) -> dict {
        # Custom logic
        return {"response": "This is a custom action response"};
    }
}
```

## Registering Actions

Actions must be registered with an agent to be used. This can be done programmatically or via descriptors.

```jac
// Registering an Action
walker register_action :graph_walker: {
    can on_agent with Agent entry {
        here.get_actions().register_action(action_data={
            "label": "CustomAction",
            "description": "A custom action",
            "enabled": True
        });
    }
}
```

## Managing Actions

### Listing Actions

To list all actions associated with an agent, use the `list_actions` walker:

```jac
walker list_actions :interact_graph_walker: {
    can on_agent with Agent entry {
        visit [-->](`?Actions);
    }

    can on_actions with Actions entry {
        report here.get_all();
    }
}
```

### Updating Actions

Actions can be updated dynamically using the `update_action` walker:

```jac
walker update_action :interact_graph_walker: {
    has action_id: str = "";
    has action_data: dict = {};

    can on_actions with Actions entry {
        visit [-->](`?Action)(?id==self.action_id);
    }

    can on_action with Action entry {
        here.update(data=self.action_data);
    }
}
```

---

By leveraging actions, developers can build intelligent, modular, and scalable AI solutions tailored to their needs. Learn how to create and manage your own actions to enhance the capabilities of your JIVAS agents [here](/docs/category/actions).
