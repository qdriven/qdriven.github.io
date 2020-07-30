#! /bin/sh
rm -rf docs/
hexo clean
hexo generate
mv -f public/* .
git add .
git commit -m "update site"