#! /bin/sh
echo "current path: "`pwd`
git add .
git commit -m "$1"
remotes=`git remote`
for repo in ${remotes}
do
    git push ${repo} master
    # echo ${repo}
done