#! /bin/sh

COMMENTS=$1

commit_it()
{
    echo "current folder is "`pwd`
    git add .
    git commit -m "$COMMENTS"
    git push
}

commit_it
echo "commit current repo commits"
cd .qworkspace
commit_it
# for DIR in `ls -a`;
# do
#     if [ -d $DIR/.git ];
#     then
#             echo "updating location: " $DIR;
#             cd $DIR
#             git status
#             git add .
#             git commit -m "${COMMENTS}"
#             git push
#             cd ..
#     fi
# done
# # git push -u origin master
# git push --recurse-submodules=on-demand

# git config alias.spush 'push --recurse-submodules=on-demand'
# git config alias.supdate 'submodule update --remote --merge'

## git clone $1  --recurse-submodules

