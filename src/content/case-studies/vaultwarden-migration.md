---
title: "Self-Hosted Password Manager: Vaultwarden on a Hardened VPS"
summary: "A commercial password manager migration was handled with Vaultwarden, Docker, Caddy, Tailscale controls, and automated backup routines."
category: "Docker & VPS"
tags:
  - "--docker"
  - "--vaultwarden"
  - "--caddy"
  - "--linux"
  - "--security"
challenge: "A client needed to move from a commercial password manager to a self-hosted solution for data sovereignty reasons."
outcome: "Vaultwarden deployed behind Caddy reverse proxy, Tailscale access control, automated SQLite backups to S3, migration of existing vault."
date: "2026-06"
draft: false
---

## Context

The client wanted control over where password vault data lived, but did not want to replace one operational risk with another. A self-hosted password manager has to be treated as sensitive infrastructure from day one. The work was scoped around secure deployment, recoverable backups, and documentation that a technical owner could follow later.

Vaultwarden was selected because it provided the required Bitwarden-compatible workflow while remaining lightweight enough for a hardened VPS. Docker Compose gave the deployment a repeatable shape, and Caddy handled public TLS termination without a fragile manual certificate process.

## Architecture

The service was deployed as a small Docker Compose stack with Vaultwarden isolated from the host as much as practical. Caddy sat in front of the container and handled HTTPS, headers, and reverse proxy routing. Administrative access was restricted separately, with Tailscale used for controlled private access where appropriate.

The Caddy configuration was kept intentionally plain: a single site block, automatic HTTPS, and a reverse proxy to the Vaultwarden container. The important part was not clever syntax. It was making the path from internet traffic to the application obvious enough to audit.

## Backups And Migration

The existing vault was exported and imported as part of a planned migration window. The backup strategy focused on the SQLite database and configuration required to restore the service. Automated backup jobs produced archives and copied them to S3, with retention handled outside the live VPS.

The handover included restore notes, the Compose file structure, Caddy configuration notes, and a checklist for applying Vaultwarden updates. The client gained control over the deployment while still having a practical recovery path if the VPS or container failed.
