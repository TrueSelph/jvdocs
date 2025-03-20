---
id: memory
title: Understanding Memory in JIVAS
sidebar_label: Memory
sidebar_position: 3
---

# Memory in JIVAS

The **Memory** system in JIVAS is a core component that enables agents to maintain state, store interactions, and provide context-aware responses. It is designed to be modular, extensible, and efficient, ensuring that agents can handle complex workflows and maintain continuity across sessions.

## Key Features of Memory

1. **Session Management**  
   Memory is organized into **Frames**, where each frame represents a session. This allows agents to isolate and manage interactions for individual users or sessions.

2. **Interaction History**  
   Memory stores a history of interactions, enabling agents to reference past exchanges and maintain context.

3. **Variable Storage**  
   Memory allows agents to store and retrieve variables specific to a session, enabling dynamic and personalized interactions.

4. **Pruning and Optimization**  
   Memory supports pruning mechanisms to manage the size of interaction histories, ensuring optimal performance.

5. **Export and Import**  
   Memory can be exported for backup or analysis and imported to restore or replicate sessions.

## Components of Memory

### 1. **Frames**
Frames are the root nodes of the memory graph. Each frame corresponds to a single session and contains:
- **Session ID**: A unique identifier for the session.
- **User Name**: Optional metadata for identifying the user.
- **Variables**: A dictionary for storing session-specific data.
- **Interactions**: A linked list of interaction nodes representing the session's history.

### 2. **Interactions**
Interactions are nodes within a frame that represent individual exchanges between the agent and the user. Each interaction contains:
- **Utterance**: The user's input.
- **Response**: The agent's output.
- **Context Data**: Metadata and additional information about the interaction.
- **Events**: Logged events related to the interaction.

### 3. **Edges**
Memory uses directional edges to link nodes:
- **Advance**: Connects one interaction to the next.
- **Retrace**: Connects one interaction to the previous one.
- **Tail**: Links the frame to the most recent interaction.

## Memory Operations

### Adding Interactions
Agents can add new interactions to a frame using the `add_interaction` method. This method appends a new interaction node to the session's history.

### Retrieving Interactions
The `get_interactions` method retrieves the list of interactions for a frame. This can be used to generate transcripts or analyze session history.

### Managing Variables
Memory provides methods to set, get, and delete variables within a frame:
- `variable_set(key, value)`: Stores a variable.
- `variable_get(key, default)`: Retrieves a variable.
- `variable_del(key)`: Deletes a variable.

### Pruning Interactions
To optimize memory usage, agents can prune interactions using the `prune_interactions` method. This removes older interactions while retaining the most recent ones.

### Exporting and Importing Memory
Memory can be exported to a structured format (e.g., JSON or YAML) using the `export_memory` method. This allows for backup, sharing, or analysis. The `import_memory` method can be used to restore memory from an exported file.

## Example Use Cases

1. **Personalized Interactions**  
   Store user preferences and context to provide tailored responses.

2. **Session Continuity**  
   Maintain a history of interactions to enable seamless conversations across multiple exchanges.

3. **Analytics and Insights**  
   Export memory to analyze user behavior and improve agent performance.

4. **Backup and Recovery**  
   Export memory for backup and restore it in case of system failures.

## API Endpoints for Memory

JIVAS provides API endpoints to interact with the memory system:
- **`/memory/export`**: Export memory for a specific session or all sessions.
- **`/memory/import`**: Import memory from a file.
- **`/memory/prune`**: Prune interactions for a specific session.

For more details, refer to the [API Documentation](./api).

---

By leveraging the memory system, JIVAS enables agents to deliver intelligent, context-aware, and efficient interactions tailored to user needs.
