BABEL_FLAGS=--blacklist=es6.blockScoping,es6.constants,es6.forOf,regenerator 

build: src
	babel src --out-dir out $(BABEL_FLAGS)

test: build
	mocha out/test

server: build
	node out/server/server.js

.PHONY: build test