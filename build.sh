#!/bin/sh

jekyll build

cd wd2uk
yarn build

cd ..
cp -r _site/* ~/blog/release
rm -r ~/blog/release/wd2uk/*
cp -r wd2uk/dist/* ~/blog/release/wd2uk
