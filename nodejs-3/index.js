'use strict';

const fs = require('fs');
const path = require('path');

function readDirRecursive(startDir) {
	const readDirQueue = []
	const fileList = {
		files: [],
		dirs: []
  };

  function getDir(path){
    return path.replace(__dirname, "").replace(/\\/g, "/");
  };

	function readDir(dir) {
		function getItemList(readDir) {
			return new Promise((resolve, reject) => {
				fs.readdir(readDir, (err, itemList) => {
					if (err) {
						return reject(err);
					}

					resolve(itemList.map((item) => path.resolve(readDir, item)));
				});
			});
		}

		function getItemListStat(itemList) {
			function getStat(itemPath) {
				return new Promise((resolve, reject) => {
					fs.stat(itemPath, (err, stat) => {
						if (err) {
							return reject(err);
						}
						resolve({ itemPath, isDirectory: stat.isDirectory() });
					});
				});
			}

			return Promise.all(itemList.map(getStat));
		}

		function processItemList(itemList) {
			for (const { itemPath, isDirectory } of itemList) {
				if (isDirectory) {
					readDirQueue.push(itemPath);
					fileList.dirs.push(getDir(itemPath))
					continue;
				} else {
					fileList.files.push(getDir(itemPath));
				}
			}
			if (readDirQueue.length > 0) {
				return readDir(readDirQueue.shift());
			}

			return fileList;
		}

		return getItemList(dir)
			.then(getItemListStat)
			.then(processItemList);
	}

	return readDir(startDir);
}

const pathToDir = path.join(__dirname, process.argv[2])

readDirRecursive(pathToDir)
	.then((itemList) => console.log(JSON.stringify(itemList)))
	.catch((err) => console.log(err));
