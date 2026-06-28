---
title: "Emergency Linux Server Audit and Hardening"
summary: "An inherited VPS was audited, patched, locked down, and given basic monitoring so the owner could operate it with less uncertainty."
category: "Linux & Cloud"
tags:
  - "--linux"
  - "--security"
  - "--bash"
  - "--ubuntu"
challenge: "A client inherited a VPS with unknown configuration history, outdated packages, open ports, and no monitoring."
outcome: "Full audit completed, attack surface reduced, SSH hardened, fail2ban deployed, unattended-upgrades enabled, monitoring configured."
date: "2026-06"
draft: false
---

## Context

The client had inherited a Linux VPS and did not know what had been installed, exposed, or left running. The priority was to understand the current state before changing it. That meant starting with a controlled audit and preserving enough notes to explain every remediation step.

The review covered users, SSH configuration, open listening ports, running services, package update status, firewall rules, cron jobs, logs, disk usage, and backup assumptions. The goal was not to make the server perfect. It was to reduce obvious risk quickly without breaking the business service it hosted.

## Audit And Remediation

The exposed service list was checked against what the application actually needed. Unused services were disabled, firewall rules were tightened, and SSH access was moved to a more defensible configuration with key-based access. Fail2ban was deployed to reduce repeated automated login attempts.

Package updates were applied in a staged way. Unattended upgrades were enabled for security updates, and the client was given clear notes about what still required manual review. Logs were checked for obvious warning signs and recurring errors so the hardening work did not ignore existing operational problems.

Basic monitoring was added to make future issues visible. The monitoring setup was intentionally simple: enough to warn about availability and resource pressure without creating a large new system to administer.

## Result

The client finished with a documented server baseline, a smaller exposed attack surface, hardened remote access, automated security updates, and practical monitoring. No claim was made that the server was immune to compromise. The value was moving from unknown risk to a known, maintained configuration.
