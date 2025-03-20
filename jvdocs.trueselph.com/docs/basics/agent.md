---
id: agents
title: Understanding Agents in JIVAS
sidebar_label: Agents
sidebar_position: 1
---

# Agents in JIVAS

In the JIVAS framework, an **Agent** is a core entity that represents an intelligent, graph-based system capable of interacting with users, processing data, and executing actions. Agents are designed to be modular, extensible, and capable of handling complex workflows through their graph-based architecture.

## Key Features of an Agent

1. **Graph-Based Architecture**  
   Agents are built on a graph structure, where nodes represent various components such as actions, memory, and interactions. This architecture allows for flexible and dynamic workflows.

2. **Action-Oriented**  
   Agents execute tasks through **Actions**, which are modular units of functionality. Actions can be chained, nested, or triggered based on specific conditions.

3. **Memory Management**  
   Agents maintain a **Memory** node to store session-specific data, interactions, and variables. This enables context-aware interactions and continuity across sessions.

4. **Interaction Handling**  
   Agents can process user inputs (utterances) and generate responses. They support various interaction channels like chat, voice, and custom integrations.

5. **Extensibility**  
   Agents can be extended with custom actions, integrations, and configurations to suit specific use cases.

## Components of an Agent

### 1. **Actions**
Actions are the building blocks of an agent's functionality. They define what the agent can do, such as responding to user queries, performing computations, or integrating with external APIs. Examples include:
- **Interact Actions**: Handle user interactions.
- **Model Actions**: Interface with language models.
- **Vector Store Actions**: Manage vector-based data retrieval.

### 2. **Memory**
The memory node stores session-specific data, including:
- Variables
- Interaction history
- Contextual data

This allows agents to maintain state and provide context-aware responses.

### 3. **Descriptors**
Agents are defined and configured using **Descriptors**, which are YAML or JSON files. These descriptors specify the agent's attributes, actions, and dependencies.

### 4. **Logging and Analytics**
Agents support logging and analytics to track interactions, monitor performance, and gather insights.

## Lifecycle of an Agent

1. **Initialization**  
   Agents are initialized using descriptors. This process sets up the agent's graph structure, actions, and memory.

2. **Interaction**  
   Agents process user inputs through the `interact` walker. They execute actions based on intents, context, and predefined workflows.

3. **Updates**  
   Agents can be updated dynamically to add or modify actions, memory, or configurations.

4. **Export and Import**  
   Agents can be exported to descriptors for backup or sharing and imported back into the framework for reuse.

## Example Use Cases

- **Customer Support**: An agent can handle customer queries, escalate issues, and provide automated responses.
- **Knowledge Retrieval**: Integrate with vector databases to retrieve relevant documents based on user queries.
- **Task Automation**: Automate workflows like scheduling, data processing, or API integrations.

## API Endpoints for Agents

JIVAS provides several API endpoints to interact with agents:
- **`/interact`**: Send user inputs to the agent and receive responses.
- **`/action/walker`**: Execute specific actions within the agent.
- **`/export`**: Export the agent's descriptor.

For more details, refer to the [API Documentation](../api).

---

By leveraging the power of agents, JIVAS enables developers to build intelligent, modular, and scalable AI solutions tailored to their needs.
