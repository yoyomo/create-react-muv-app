#!/usr/bin/env node

const version = require('./package.json').version;
const exec = require('child_process').exec;

const usage = "Usage: npm init react-muv-app my-app";

const arguments = process.argv
const app = arguments[2];

if(!app){
	console.log(usage)
	return
}

create = exec(`git clone https://github.com/yoyomo/react-muv-template.git ${app};
	cd ${app};
	git checkout tags/v${version};
	rm -rf .git;
	git remote rm origin;
	npm install;

	echo "Now run:";
	echo "  cd ${app}";
	echo "  npm start";`);

create.stdout.on('data', function (data) {
	console.log(data.toString());
});

create.stderr.on('data', function (data) {
	console.log(data.toString());
});
