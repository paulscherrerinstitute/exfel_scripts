#!/bin/sh

fn_disp_mac ()
{
val=$(/mnt/cf/usr/bin/mrd $1 $2 1)
p=${val/*$1/$1}
p=${p:22}
n=0
for i in $p 
do
	printf "$i"
	n=$(($n+1))
	if [ $n -eq $2 ]; then
		return
	else
		printf ":"
	fi
done
} 

fn_disp_string ()
{
val=$(/mnt/cf/usr/bin/mrd $1 $2 1)
p=${val/*$1/$1}
p=${p:22}
n=0
for i in $p 
do
	if [ $n -eq $2 ]; then
		return
	fi
	n=$(($n+1))
	printf "\x$i"
done
} 

# Board type
printf "MMC Type: "
fn_disp_string 0x80003B00 6
printf "\nMMC2 S/N: "
fn_disp_string 0x80003B10 8
printf "\n  PS S/N: "
fn_disp_string 0x80003B20 8
printf "\n  FW ver: "
fn_disp_string 0x80003C00 4
printf "\n  SW ver: "
fn_disp_string 0x80003C04 4
printf "\nMMC2 MAC: "
fn_disp_mac 0x80003B06 6
echo ""
