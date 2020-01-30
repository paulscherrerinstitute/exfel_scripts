#!/bin/sh

SRC_PATH=/mnt/cf/www
DST_PATH=/home/www

echo $(date)

echo "Copying $SRC_PATH to $DST_PATH"
mkdir -p $DST_PATH
cp $SRC_PATH/index.htm $DST_PATH/index.html
cp $SRC_PATH/*.htm $DST_PATH/
mkdir -p $DST_PATH/cgi-bin
cp $SRC_PATH/cgi-bin/* $DST_PATH/cgi-bin/
mkdir -p $DST_PATH/js
cp $SRC_PATH/js/* $DST_PATH/js/
mkdir -p $DST_PATH/css
cp $SRC_PATH/css/* $DST_PATH/css/
mkdir -p $DST_PATH/include
cp $SRC_PATH/include/* $DST_PATH/include/
mkdir -p $DST_PATH/images
cp $SRC_PATH/images/* $DST_PATH/images/

echo "done."


