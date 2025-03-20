---
id: api-sso
title: SSO API
sidebar_label: SSO
---

# SSO API

The SSO API enables Single Sign-On operations for user authentication.

## Endpoints

### `GET /sso/{platform}/{operation}`

**Description**: Initiates an SSO operation for the specified platform.

**Parameters**:
- `platform` (path): The SSO platform (e.g., Google, Facebook).
- `operation` (path): The operation to perform (e.g., login, logout).
- `redirect_uri` (query): Optional redirect URI.
- `state` (query): Optional state parameter.

**Response**:
- `200 OK`: Operation successful.

### `GET /sso/{platform}/{operation}/callback`

**Description**: Handles the callback for an SSO operation.

**Parameters**:
- Same as `/sso/{platform}/{operation}`.

**Response**:
- `200 OK`: Callback handled successfully.

### `POST /sso/attach`

**Description**: Attaches an SSO account to a user.

**Request Body**:
- `platform`: The SSO platform.
- `id`: The user ID.
- `email`: The user email.

**Response**:
- `200 OK`: SSO account attached successfully.

### `DELETE /sso/detach`

**Description**: Detaches an SSO account from a user.

**Request Body**:
- `platform`: The SSO platform.

**Response**:
- `200 OK`: SSO account detached successfully.
