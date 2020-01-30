echo off

cd mkdosfs
mkdosfs -v -F 16 -n GPAC %1%
cd ../CF
timeout /T 5 /NOBREAK
xcopy /E /Y * %1%
dir %1%
cd ..
