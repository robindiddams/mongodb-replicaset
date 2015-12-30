#!/bin/bash

# 6 tries
TIMEOUT=6
COUNT=0

# Checking if mongo is up
while ! mongo --eval "var rs_cluster=$(cat replication-cluster.json);" start-replication.js; do 
  ((COUNT++));
  sleep 1; 
  echo " ";
  echo " ### Waiting for Mongo instance 27017 startup... ${COUNT}s"; 
  (($COUNT > $TIMEOUT)) && 
    echo " ### Cannot start replication: Timeout while trying to connect Mongo instance 27017" &&  
    exit 1;
done


