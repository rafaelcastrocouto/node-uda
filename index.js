const express = require('express');
const app = express();

async function uda (req, res) {
  //todo validate
  const platforms = req.body;
  
  const promises = Object.keys(platforms).map(function (platform) {
    const api = require('./platforms/'+platform+'.js');
    const username = platforms[platform];
    
    return api.json(username);
  });
  
  const data = await Promise.all(promises);
  const str = JSON.stringify(data);
  
  res.send(str);
}

app.get('/', express.static('demo'));

app.use(express.urlencoded({ extended: true }));
app.post('/uda', uda);

app.listen(3000, () => {
  console.log('server started');
});
