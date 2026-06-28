---
title: "Migrating a Stack of Web Services to Docker with Caddy"
summary: "Multiple manually configured web services were moved into Docker Compose with Caddy handling TLS and reverse proxy routing."
category: "Docker & VPS"
tags:
  - "--docker"
  - "--caddy"
  - "--vps"
  - "--nginx"
  - "--ssl"
challenge: "A client ran multiple web services directly on a single server with manual Nginx configs, no container isolation, and SSL managed manually."
outcome: "Services containerised with Docker Compose, Caddy handling TLS automatically, deployment reproducible from a single `docker-compose.yml`."
date: "2026-06"
draft: false
---

## Context

The server hosted several web services that had been installed directly on the host over time. Each service had its own assumptions about ports, logs, configuration paths, and Nginx rules. SSL certificates were managed manually, which made routine maintenance riskier than it needed to be.

The goal was to create a deployment that another technical person could understand quickly. Docker Compose was used to define the services, networks, volumes, and restart behaviour. Caddy replaced the manual TLS process and became the single reverse proxy entry point.

## Before And After

Before the migration, application files, system packages, and proxy configuration were tightly coupled to the host. After the migration, each service had a clearer container boundary, named volumes for persistent data, and a documented path for updates.

The Caddyfile stayed small. Each service was represented by a site block that forwarded traffic to the relevant container and allowed Caddy to handle certificate issuance and renewal. This removed the need to maintain separate certificate commands and reduced the chance of a service being left with stale TLS configuration.

## Maintainability

The most important improvement was reproducibility. A new operator could inspect the `docker-compose.yml`, see which ports were internal, identify the persistent volumes, and understand how traffic reached each application.

The migration was completed with staged service checks rather than a single blind cutover. The handover included the Compose file, Caddyfile notes, backup locations, and a short update procedure. The result was a cleaner VPS deployment that could be maintained without relying on memory of old manual steps.
