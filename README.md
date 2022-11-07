# mongodb-replicaset

Sample scripts to start MongoDB Replica Sets

## What you are going to find here?

There is a set of scripts inside project folders. They help you to bring replica set up and down. Each folder has a specific content detailed below

### Replica Set configuration

Start a 3-node replica set and activate replication

#### Enter in sample folder

```bash
cd $PATH_TO_PROJECT/01-simple-replset
```

#### First time starting cluster and replication

```bash
./start-cluster.sh
./start-replication.sh
```

#### Stop and restart cluster (Mongo starts replication automatically if replication is already started)

```bash
./stop-cluster.sh
./restart-cluster.sh
```

#### Purge cluster (After purging you need to start cluster and replication again)

```bash
./purge-cluster.sh
```

#### Purge and start cluster at same script (you need to start replication again)

```bash
./purge-start-cluster.sh
./start-replication.sh
```

#### Change each node configuration as you wish: ports, storage, oplogSize, security, logs, profiling...

```yaml
net:
  port: 27017

storage:
  dbPath: db
  directoryPerDB: true
  journal:
    enabled: true
  mmapv1:
    smallFiles: true

replication:
  oplogSizeMB: 50
  replSetName: rs

systemLog:
  destination: file
  path: db/mongodb.log
  logAppend: true
  timeStampFormat: iso8601-utc

operationProfiling:
  slowOpThresholdMs: 100
```
