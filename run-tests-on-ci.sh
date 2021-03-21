export HOSTNAME=localhost
export PORT1=1337
export PORT2=1338
npx testcafe remote ./tests/demo/*.spec.js --env=dev --hostname ${HOSTNAME} --ports ${PORT1},${PORT2} &
pid=$!
open -a Safari http://${HOSTNAME}:${PORT1}/browser/connect
wait $pid