make build:
	cd server && $(MAKE) build
	cd client && $(MAKE) build

make up:
	docker-compose up

make down:
	docker-compose down