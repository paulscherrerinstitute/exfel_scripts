#!/bin/sh
 
echo -e 'pid\tprio\tnice\tname'
    
for i in $(ps -o pid=)
do
        if [ -e "/proc/$i/stat" ]
        then
                awk '{print $1 "\t" $18 "\t" $19  "\t" $2}' /proc/$i/stat
        fi
done
