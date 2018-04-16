Exprest (Express for REST API)
==============================
Straightforward boilerplate for building REST API with Express.

Getting Started
---------------
```sh
# Clone it
git clone https://github.com/zackyjack/exprest.git

cd exprest

# Make it your own
rm -rf .git && git init && npm init

# Duplicate .env file and edit it
cp .env.example .env
vim .env

# Install dependencies
npm install

# Start development live-reload server
npm run dev

# Start production server
npm start
```

Docker Support
--------------
```sh
cd exprest

# Build your docker
docker build -t <your username>/exprest .

# Run your docker
docker run -p 8080:8080 -d <your username>/exprest

```



