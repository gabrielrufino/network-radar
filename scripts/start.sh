FOLDER=/home/pi/network-radar
NOHUP=/usr/bin/nohup
NPM=/home/pi/.nvm/versions/node/v10.23.0/bin/npm

cd $FOLDER
$NOHUP $NPM start </dev/null &>/dev/null &
