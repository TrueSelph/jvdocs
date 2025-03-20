---
id: api-walkers
title: Walkers API
sidebar_label: Walkers
---

# Walkers API

The Walkers API provides endpoints to manage and execute walkers.

## Endpoints

### `POST /walker/import_agent`

**Description**: Imports an agent using a descriptor.

**Request Body**:
- `agent_id`: The agent ID.
- `descriptor`: The agent descriptor.

**Response**:
- `200 OK`: Agent imported successfully.

### `POST /walker/export_agent`

**Description**: Exports an agent's descriptor.

**Request Body**:
- `agent_id`: The agent ID.

**Response**:
- `200 OK`: Agent exported successfully.

### `POST /walker/init_agents`

**Description**: Initializes agents.

**Request Body**:
- `agent_id`: The agent ID.

**Response**:
- `200 OK`: Agents initialized successfully.

### `POST /walker/list_agents`

**Description**: Lists all agents.

**Response**:
- `200 OK`: Agents listed successfully.

### `POST /walker/delete_agent`

**Description**: Deletes an agent.

**Request Body**:
- `agent_id`: The agent ID.

**Response**:
- `200 OK`: Agent deleted successfully.
