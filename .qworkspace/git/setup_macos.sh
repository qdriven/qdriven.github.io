#! /bin/sh

brew install gh

## config github
git configure --global user.name $1
git configure --global user.email $2
# git config alias.spush 'push --recurse-submodules=on-demand'
# git config alias.supdate 'submodule update --remote --merge'
