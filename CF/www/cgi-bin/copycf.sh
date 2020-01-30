#!/bin/sh

SRC_PATH=/home/www
DST_PATH=/mnt/cf/www

echo $(date)

echo "Copying /home/www to /mnt/cf/www"

cp $SRC_PATH/index.html $DST_PATH/index.htm
cp $SRC_PATH/*.htm $DST_PATH/
cp $SRC_PATH/cgi-bin/* $DST_PATH/cgi-bin/
cp $SRC_PATH/js/* $DST_PATH/js/
cp $SRC_PATH/css/* $DST_PATH/css/

echo "done."


