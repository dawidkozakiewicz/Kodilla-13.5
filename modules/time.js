var os = require('os');

process.stdin.setEncoding('utf8');
var uptime = os.uptime();

function getUptime(uptime) {
  var uptime = os.uptime();
  var hours = Math.floor(uptime / 3600);
  var minutes = Math.floor((uptime % 3600) / 60);
  var seconds = Math.floor(((uptime % 3600) % 60) % 60);
  console.log(hours + " hours, ".america + minutes + " minutes, ".america + seconds + " seconds.".america);

}

exports.getUptime = getUptime;
