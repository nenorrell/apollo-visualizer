NODE=14

network:
	./network.sh

compile:
	docker run --user node -i --rm --name compile-visualizer -e NODE_ENV=production -v `pwd`:/usr/src/app -w /usr/src/app node:${NODE} npm run-script build

install:
	docker run -i --rm --name install-visualizer -v `pwd`:/usr/src/app -w /usr/src/app node:${NODE} npm install ${PCKG}

install-dev:
	docker run -i --rm --name install-visualizer -v `pwd`:/usr/src/app -w /usr/src/app node:${NODE} npm install ${PCKG} --save-dev

down:
	docker-compose down

up:
	docker-compose up

run: down install up

analyze-bundle:
	docker run --user node -i --rm --name compile-visualizer -e NODE_ENV=production -v `pwd`:/usr/src/app -w /usr/src/app node:${NODE} npm run-script analyze
	docker run -i --rm -p "8888:8888" \
	--name bundle-analyzer -v `pwd`:/usr/src/app \
	-w /usr/src/app node:${NODE} \
	./node_modules/.bin/webpack-bundle-analyzer ./build/stats.json ./build -h 0.0.0.0