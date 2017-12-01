#!/usr/bin/env bash -c make

YAML=src/*.yaml
JSON=dist/msgpack-test-suite.json

all: $(JSON)

clean:
	/bin/rm -f $(JSON)

$(JSON): $(YAML)
	node bin/yaml2json.js $(YAML) > $(JSON)
