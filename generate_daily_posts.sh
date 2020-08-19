#! /bin/sh

DAILY=`date +%Y-%m-%d`
FILE_NAME=$1
hexo new dailypost ${DAILY}-${FILE_NAME}
mv source/_posts/${DAILY}-${FILE_NAME}.md source/_posts/daily