#!/bin/sh

mypid=$(ps | awk '/gpacsrv/ {print $1}')

for i in $mypid
do
	myprc=$(ps | awk "/$i/ "'{print substr($0, index($0,$4))}')
	echo "  killing process: $myprc"
	kill -s SIGINT $i
done
echo "done."

