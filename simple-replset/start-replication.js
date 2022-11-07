var replStatus;

try {
  replStatus = rs.status();
} catch {}

if (replStatus && replStatus.ok === 1) {
  print(" ### Replication OK");
  printjson(replStatus);
} else {
  let rs_cluster = {
    _id: "rs",
    members: [
      {
        _id: 0,
        host: "localhost:27017",
        priority: 2,
      },
      {
        _id: 1,
        host: "localhost:27018",
        priority: 1,
      },
      {
        _id: 2,
        host: "localhost:27019",
        priority: 1,
      },
    ],
  };
  print(" ### Starting replication...");
  printjson(rs.initiate(rs_cluster));
  sleep(5000);
  print(" ");
  print(" ### Replica Set status");
  printjson(rs.status());
}

var sleep = function (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
};
