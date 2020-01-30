#!/bin/sh
#
# Prepared by: Waldemar Koprek
#
# The scripts performs hard reset of the GPAC

# do first file system synchronization in case some files are not saved on CF card
sync

# restart the whole GPAC
/mnt/cf/usr/bin/mwr 0x80003000 4 1
