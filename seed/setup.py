#!/usr/bin/python
from subprocess import call
call('mongoimport -db test -c session --jsonArray seed.json', shell=True)
