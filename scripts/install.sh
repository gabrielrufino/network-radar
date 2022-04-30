cd /home/pi
git clone https://github.com/gabrielrufino/network-radar.git
cd network-radar

npm ci

sudo cp network-radar.service /etc/systemd/system/
sudo systemctl start network-radar
sudo systemctl enable network-radar
