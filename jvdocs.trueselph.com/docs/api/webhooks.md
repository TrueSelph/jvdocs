---
id: api-webhooks
title: Webhooks API
sidebar_label: Webhooks
---

# Webhooks API

The Webhooks API allows executing walkers via webhook keys.

## Endpoints

### `POST /webhook/{key}`

**Description**: Executes a walker using a webhook key.

**Parameters**:
- `key` (path): The encoded key combining walker name, module name, and agent ID.

**Response**:
- `200 OK`: Walker executed successfully.

### `GET /webhook/{key}`

**Description**: Executes a walker using a webhook key (GET method).

**Parameters**:
- Same as `POST /webhook/{key}`.

**Response**:
- `200 OK`: Walker executed successfully.
