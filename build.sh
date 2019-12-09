#!/bin/bash

set -ev

cd exampleSite/
hugo --themesDir ../../
cp -rf public/resources/ .
cd ..
