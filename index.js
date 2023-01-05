const express = require('express');
const app = express();

const available = ['github','twitter','facebook'];

async function uda (platforms) {
  const agg = function (platform) {;
    const username = platforms[platform];
    let data;
    if (!available.includes(platform)) {
      data = { 'platform error': platform+' not supported' };
    } else if (!username) {
      data = { 'username error': username+' not supported' };
    } else {
      const api = require('./platforms/'+platform+'.js')
      data = api.json(username);
    }
    return data;
  };
  const promises = Object.keys(platforms).map(agg);
  const data = await Promise.all(promises);
  return data;
}

app.get('/', express.static('demo'));

app.use(express.urlencoded({ extended: true }));
app.post('/uda', async (req, res) => {
  const platforms = req.body;
  const data = await uda(platforms);
  const str = JSON.stringify(data);
  res.send(str);
});

app.listen(3000, () => {
  console.log('server started');
});
