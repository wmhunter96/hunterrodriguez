### Intro:
So you just purchased a Raspberry Pi, the first thing that you need to do before you can boot it up is install the OS (Operating System).

### Download:
The Raspberry Pi has many Operating Systems that you can choose from. However, I would like to personally recommend [Raspbian](https://www.raspberrypi.org/downloads/raspbian/), as I believe it to be the best all around Operating System, and certainly the best OS for people new to the RPi.

### Writing OS image to SD card:
The next step after you download the OS zip file (raspian.zip) is to write it to the SD card that you intend on booting your pi off of. I would recommend any SD card you can find with a size of >8GB. In order to write your image, I recommend downloading a program called [Etcher](https://www.balena.io/etcher/). This application allows you to write zip files to an SD card without unzipping it which is very useful for our purposes. After Etcher is installed, insert your SD card and Flash! the image onto the card.

### Connect Peripherals:
You can now connect to your new computer by simply attaching a monitor, keyboard, and mouse.

### Set-up SSH:
If you want to access your Rpi without using these peripherals, you can use SSH (Secure Shell). You can access the command prompt of an RPi remotely from a computer on the same network using SSH. If you are not connecting to your RPi using wifi, you can plug your RPi into your router or directly into your host machine via an ethernet cable. You need to enable SSH within the RPi before you can connect to it. To do this run `sudo raspi-config` Select *Interfacing Options > SSH > Yes > OK > Finish!* Alternatively, you can use systemctl to start the service `sudo systemctl enable ssh  &&  sudo systemctl start ssh`

### Connecting via SSH:
Now that your SSH is setup, how do you connect to it? My personal favorite way is to use [Git Bash](https://git-scm.com/downloads) by simply right clicking on the desktop and selecting Git Bash Here. After running Git Bash, a terminal window should appear, within this terminal window, run `ssh pi@IP_OF_PI` the default password for the pi account is " raspberry ". If you do not know the IP address, type `hostname -I` in the RPi command line.
