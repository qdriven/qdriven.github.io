#! /bin/sh
COMMENTS=$1
for DIR in `ls`;
do
    if [ -d $DIR/.git ];
    then
            echo "updating location: " $DIR;
            cd $DIR
            # your commands here...
            git add .
            git commit -m '${COMMENTS}'
            cd ..
    fi
done
# git push -u origin master
git push --recurse-submodules