TRACEUR_FLAGS=--modules commonjs --generators parse --block-binding parse

build: src
	traceur --dir src/ out/ $(TRACEUR_FLAGS)

test: build
	mocha out/test

server: build
	node out/server/server.js

.PHONY: build test