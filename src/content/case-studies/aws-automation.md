---
title: "Automating AWS Infrastructure for a Small Business Client"
summary: "An anonymised AWS environment was reviewed, rightsized, and given practical backup and monitoring routines without claiming invented savings."
category: "Linux & Cloud"
tags:
  - "--aws"
  - "--bash"
  - "--automation"
  - "--ec2"
challenge: "A small business was paying for over-provisioned EC2 instances and had no automated backups or monitoring."
outcome: "Rightsized infrastructure, S3 lifecycle policies for backups, CloudWatch alerts deployed. Ongoing costs reduced without inventing a specific percentage."
date: "2026-06"
draft: false
---

## Context

The client had a small AWS footprint that had grown one decision at a time. It was not broken, but it had become harder to reason about. EC2 instances were larger than the workloads required, backups depended on manual checks, and there was no clear alerting path when a service became unhealthy.

The first step was an audit, not a rebuild. I reviewed the active EC2 instances, attached storage, security groups, IAM access, DNS records, backup habits, and the actual services running on each host. The goal was to separate what was business-critical from what was simply still running because nobody had revisited it.

## What Changed

Rightsizing came first. Instances were reviewed against observed workload patterns, installed services, and the amount of headroom the client actually needed. Where a smaller instance class was appropriate, the change was staged and documented so the client understood the rollback path.

Backups were moved from informal manual handling to a simple repeatable flow. S3 was used as the durable storage target, with lifecycle policies to keep storage under control over time. The backup process was scripted so it could be checked and rerun without depending on a particular person remembering the steps.

Monitoring was kept practical. CloudWatch alarms were added for the signals that mattered to the environment, including availability and backup failure conditions. Alerts were designed to surface actionable problems rather than create noise.

## Handover

The client received a concise runbook covering what had changed, where backups lived, how lifecycle rules worked, and what to check when an alert fired. The outcome was not a claim of dramatic transformation. It was a cleaner, easier-to-maintain AWS setup with lower ongoing cost pressure and fewer manual operations.
