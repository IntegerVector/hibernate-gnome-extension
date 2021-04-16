# Hibernate GNOME extension

This is a stupid simple extension for enabling hibernation option for GNOME desktop environment

## Before installation

**IMPORTANT:** this extension requires you to have configured and preinstalled some software!

1. **Install components:**
    ```bash
    # for Debian based distros:
    $ sudo apt install pm-utils hibernate
    ```
    find and install `pm-utils` and `hibernate` for your system

2. **Configure swap partition or swapfile:**
    basically you need to have swap space with size like your RAM, or bigger
    Then you should find UUID of your swap (if you are using swap file, then swap file offset too)
    use:
    ```bash
    # to get UUID:
    $ findmnt -no UUID -T /path_to_your_swap
    # to get swap file offset:
    $ filefrag -v /swapfile | awk '{ if($1=="0:"){print substr($4, 1, length($4)-2)} }'
    ```
    *for more information see [this](https://wiki.archlinux.org/index.php/Power_management/Suspend_and_hibernate)*
    
3. **Grub configuration:**
    edit `/etc/default/grub` file
    you need to find or add `GRUB_CMDLINE_LINUX_DEFAULT` option to this file
    Set UUID (and offset if you are using swapfile) like this:
    ```
    # if you use swap partition:
    GRUB_CMDLINE_LINUX_DEFAULT="quiet splash resume=UUID=YOUR_VALUE"
    # if you use swapfile:
    GRUB_CMDLINE_LINUX_DEFAULT="quiet splash resume=UUID=YOUR_VALUE resume_offset=YOUR_OFFSET"
    ```
    Finally run:
    ```bash
    $ sudo update-grub
    $ reboot
    ```

4. **Test hibernation:**
    to test if hibernation works run this command:
    ```bash
    $ sudo systemctl hibernate
    ```
    If hibernation works, then you can install this extension, if not, google your problems...
    
## Installation
Clone extension project:
```bash
$ git clone https://github.com/IntegerVector/hibernate-gnome-extension.git
```

run `install` script:
```bash
$ ./install
```
It will pull changes from main branch and install extension to you system

Finally, you can enable extension using "Extensions" app (or tweak tools in older GNOME versions).
