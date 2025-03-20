---
id: api-user-management
title: User Management API
sidebar_label: User Management
---

# User Management API

The User Management API provides endpoints for user registration, authentication, and account management.

## Endpoints

### `POST /user/register`

**Description**: Registers a new user.

**Request Body**:
- `email`: The user's email.
- `password`: The user's password.

**Response**:
- `200 OK`: User registered successfully.

### `POST /user/login`

**Description**: Logs in a user.

**Request Body**:
- `email`: The user's email.
- `password`: The user's password.

**Response**:
- `200 OK`: User logged in successfully.

### `POST /user/send-verification-code`

**Description**: Sends a verification code to the user.

**Response**:
- `200 OK`: Verification code sent.

### `POST /user/verify`

**Description**: Verifies a user using a code.

**Request Body**:
- `code`: The verification code.

**Response**:
- `200 OK`: User verified successfully.

### `POST /user/change_password`

**Description**: Changes the user's password.

**Request Body**:
- `old_password`: The current password.
- `new_password`: The new password.

**Response**:
- `200 OK`: Password changed successfully.

### `POST /user/forgot_password`

**Description**: Initiates a password reset process.

**Request Body**:
- `email`: The user's email.

**Response**:
- `200 OK`: Password reset initiated.

### `POST /user/reset_password`

**Description**: Resets the user's password.

**Request Body**:
- `code`: The reset code.
- `password`: The new password.

**Response**:
- `200 OK`: Password reset successfully.
