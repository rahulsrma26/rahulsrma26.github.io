---
title: Using systemd as a scheduler
comments: true
tags: [linux, service, ai-assisted]
description: Discover how to use systemd as a powerful and flexible scheduler for your Linux system. In this guide, we demonstrate setting up a weekly ZFS scrub on a personal PC using systemd timers. Learn why systemd timers are advantageous over traditional cron jobs, and explore other practical use cases for scheduling tasks such as backups, system updates, and maintenance scripts. Ensure your computer performs regular maintenance tasks even if it's not always running with our step-by-step instructions.
keywords:
  - systemd scheduler
  - systemd timers
  - ZFS scrub automation
  - Linux task scheduling
  - cron vs systemd
  - Weekly ZFS scrub setup
  - systemd timer tutorial
  - Automated maintenance tasks Linux
  - Linux backup scheduling
  - System updates with systemd
  - Personal PC task automation
---

Scheduling tasks on a personal computer is crucial for maintaining performance, performing regular maintenance tasks like backups or scrubs, and automating repetitive actions. While `cron` has been the traditional tool for task scheduling on Unix-like systems, `systemd` timers offer a more robust and flexible alternative, especially for systems that are not always running, like PCs. This blog post will explore how you can use `systemd` as a scheduler, including an example of setting up a weekly ZFS scrub using `systemd` timers.

**Some background:**

I have recently set up a ZFS pool ([tutorial](../zfs-mirror/)) for write-intensive applications, such as creating and destroying Docker containers, web scraping, or generating gigabytes of random images for model training. I want to schedule a weekly scrub, but since it’s a PC, `cron` won’t work reliably due to the variable on/off times of the computer. This is where I started looking for alternatives.

## Why Use `systemd` Timers Over `cron`?

`systemd` timers provide several advantages over `cron`:

- **Persistent Timers**: If a computer is off when the timer is supposed to run, `systemd` can ensure the task is executed as soon as possible once the system is back online.
- **More Powerful Scheduling**: `systemd` timers support a more powerful scheduling syntax, allowing for more complex scheduling scenarios.
- **Unified Management**: Since many modern Linux distributions use `systemd` for service management, using `systemd` timers allows you to manage all services and scheduled tasks uniformly.

## Setting Up a Weekly ZFS Scrub with `systemd` Timer

ZFS scrubbing is a maintenance task that scans the storage pool for data integrity and repairs any inconsistencies. It is essential to run scrubs regularly, especially on systems using SSDs or other storage mediums that benefit from regular checks. In this example, we'll set up a weekly ZFS scrub using `systemd`.

### 1. Creating a `systemd` Service for ZFS Scrub

First, we need to create a `systemd` service file that defines the ZFS scrub command. This service will be executed by our timer.

1. Create a new service file:

   ```bash
   sudo nano /etc/systemd/system/zfs-scrub.service
   ```

2. Add the following content to the file:

   ```ini
   [Unit]
   Description=ZFS scrub for all pools

   [Service]
   Type=oneshot
   ExecStart=/sbin/zpool scrub <pool_name>
   ```

   Replace `<pool_name>` with the name of your ZFS pool (e.g., `mypool`). If you have multiple pools, add multiple `ExecStart` lines:

   ```ini
   ExecStart=/sbin/zpool scrub pool1
   ExecStart=/sbin/zpool scrub pool2
   ```

3. Save and exit the file.

### 2. Creating a `systemd` Timer for the Service

Next, we create a `systemd` timer that will trigger the service on a weekly schedule.

1. Create a new timer file:

   ```bash
   sudo nano /etc/systemd/system/zfs-scrub.timer
   ```

2. Add the following content to the file:

   ```ini
   [Unit]
   Description=Weekly ZFS scrub

   [Timer]
   OnCalendar=weekly
   Persistent=true

   [Install]
   WantedBy=timers.target
   ```

   - **`OnCalendar=weekly`**: This schedules the timer to trigger once a week.
   - **`Persistent=true`**: Ensures that the scrub runs as soon as possible if the PC was off during the scheduled time.

3. Save and exit the file.

### 3. Enabling and Starting the Timer

1. Reload `systemd` to recognize the new service and timer:

   ```bash
   sudo systemctl daemon-reload
   ```

2. Enable the timer so that it starts on boot:

   ```bash
   sudo systemctl enable zfs-scrub.timer
   ```

3. Start the timer immediately:

   ```bash
   sudo systemctl start zfs-scrub.timer
   ```

### 4. Verifying the Timer

To verify that the timer is active and see when it will run next, use:

```bash
systemctl list-timers --all | grep zfs-scrub
```

You should see output indicating when the next run is scheduled.

## Advantages of Using `systemd` Timers for Personal PCs

For personal computers that may not be running 24/7, `systemd` timers provide a reliable way to ensure maintenance tasks are executed regularly:

- **Handles Missed Runs**: Unlike `cron`, `systemd` timers with the `Persistent=true` setting will catch up on missed runs the next time the computer is powered on.
- **Easier Management**: Using `systemctl` commands, you can start, stop, enable, disable, and inspect timers easily.
- **Unified Configuration**: With `systemd`, both services and scheduled tasks are managed in a consistent manner.

## Other Use Cases for `systemd` Timers

In addition to ZFS scrubbing, you can use `systemd` timers to schedule various tasks:

- **Backups**: Schedule regular backups with tools like `rsync`.
- **System Updates**: Run system updates automatically on a regular basis.
- **Maintenance Scripts**: Run custom maintenance scripts that clean up logs, rotate files, or perform other housekeeping tasks.

## Conclusion

`systemd` timers provide a powerful and flexible way to schedule tasks on your Linux system, especially for personal PCs that are not always on. By using `systemd` timers, you can ensure important maintenance tasks like ZFS scrubbing are performed regularly without worrying about whether the computer was on at the scheduled time. With its persistent and robust scheduling capabilities, `systemd` is an excellent choice for automating tasks and maintaining the health of your system.

By following the example provided, you can set up a weekly ZFS scrub to maintain your data integrity and keep your storage pool in top condition. This method can be extended to other maintenance tasks, making `systemd` a versatile scheduler for personal and professional use.

---

First published on 2024-08-14
