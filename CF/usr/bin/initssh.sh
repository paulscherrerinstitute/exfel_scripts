#!/bin/sh
#
################################################################################
# Configure host keys for SSH protocol
# The host keys have to be generated only once and then re-used after restart
# Copy the generated key files to /mnt/cf/etc/dropbear with some FAT16 compliant
# names. If the files exist at the next start then do not regenerate them
################################################################################
echo "Configuring host keys for SSH protocol..."
if [ -f /mnt/cf/etc/dropbear/dss_key ]
then
  echo "  copying dss_key"
  if [ -f /etc/dropbear/dss_key ]
  then
    mv /etc/dropbear/dss_key /etc/dropbear/dropbear_dss_host_key
  else
    mkdir -p /etc/dropbear
    cp /mnt/cf/etc/dropbear/dss_key /etc/dropbear/dropbear_dss_host_key
  fi
else
  echo "  generating dss_key"
  mkdir -p /etc/dropbear
  cd /etc/dropbear
  dropbearkey -t dss -f dropbear_dss_host_key
  mkdir -p /mnt/cf/etc/dropbear
  cp dropbear_dss_host_key  /mnt/cf/etc/dropbear/dss_key
fi

if [ -f /mnt/cf/etc/dropbear/rsa_key ]
then
  echo "  copying rsa_key"
  if [ -f /etc/dropbear/rsa_key ]
  then
    mv /etc/dropbear/rsa_key /etc/dropbear/dropbear_rsa_host_key
  else
    mkdir -p /etc/dropbear
    cp /mnt/cf/etc/dropbear/rsa_key /etc/dropbear/dropbear_rsa_host_key  
  fi
else
  echo "  generating rsa_key"
  mkdir -p /etc/dropbear
  cd /etc/dropbear
  dropbearkey -t rsa -f dropbear_rsa_host_key
  mkdir -p /mnt/cf/etc/dropbear
  cp dropbear_rsa_host_key  /mnt/cf/etc/dropbear/rsa_key
fi
echo "done"