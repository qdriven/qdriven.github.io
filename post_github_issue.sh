#!/usr/bin/env bash

TITLE=$1
LABEL=$2
FILE_PATH=$3
echo "cat ${FILE_PATH}"
content=`cat ${FILE_PATH}`
echo $content
gh issue create --title "${TITLE}" --label "${LABEL}" --body "${content}"