const fs = require("fs");
const path = require("path");

const walkDir = process.argv[2];

let tree = {
  files: [],
  dirs: []
};

const getPathName = path => {
  return path.replace(__dirname, "").replace(/\\/g, "/");
};

var readFile = (dir, done) => {
  fs.readdir(dir, (err, list) => {
    if (err) {
      return done(err);
    }
    let pending = list.length;
    if (!pending) {
      return done(null, tree);
    }
    list.forEach(file => {
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          readFile(file, (err, res) => {
            tree.dirs.push(getPathName(file));
            if (!--pending) done(null, tree);
          });
        } else {
          tree.files.push(path.basename(file));
          if (!--pending) done(null, tree);
        }
      });
    });
  });
};

readFile(walkDir, function(err, tree) {
  if (err) throw err;
  console.log(JSON.stringify(tree));
});
