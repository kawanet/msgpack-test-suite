#!/usr/bin/env node

var fs = require("fs");
var YAML = require("js-yaml");

function CLI() {
  var out = {};

  process.argv.slice(2).forEach(it);

  function it(file) {
    var name = file.split("/").pop();
    var yaml = fs.readFileSync(file, "utf-8");
    var data = YAML.safeLoad(yaml);
    if (data) out[name] = data;
  }

  var json = JSON.stringify(out, null, 1);
  json = json.replace(/(\[|\d+,)\n\s*(-?\d+)/g, "$1 $2");
  json = json.replace(/(\[|\d+,)\n\s*(-?\d+)/g, "$1 $2");
  json = json.replace(/(\d+)\n\s*(])/g, "$1 $2");
  json += "\n";

  process.stdout.write(json);
}

CLI();
