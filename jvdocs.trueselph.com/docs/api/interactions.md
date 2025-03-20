---
id: api-interactions
title: Interactions API
sidebar_label: Interactions
---

# Interactions API

The Interactions API provides endpoints to interact with agents.

## Endpoints

### `POST /interact`

**Description**: Interacts with an agent.

**Request Body**:
- `agent_id`: The agent ID.
- `utterance`: The user's input.
- `session_id`: The session ID.
- `tts`: Whether to enable text-to-speech.
- `verbose`: Whether to enable verbose mode.

**Response**:
- `200 OK`: Interaction processed successfully.
