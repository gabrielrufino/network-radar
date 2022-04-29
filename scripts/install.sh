cd /home/pi
git clone https://github.com/gabrielrufino/network-radar.git
cd network-radar

npm ci

cp network-radar.service /etc/systemd/system/
systemctl start network-radar
systemctl enable network-radar
