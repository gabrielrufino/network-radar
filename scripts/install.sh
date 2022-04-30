cd /home/pi
git clone https://github.com/gabrielrufino/network-radar.git
cd network-radar

npm ci
cp .env.example .env

mkdir /home/pi/sqlite
touch /home/pi/sqlite/network-radar.sqlite

sudo cp network-radar.service /etc/systemd/system/
sudo systemctl start network-radar
sudo systemctl enable network-radar
