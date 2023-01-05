const fetch = require('node-fetch');

const key = process.env['facebook'];

const facebookId = process.env['facebookId'];

const Facebook = require('facebook-node-sdk');
//https://github.com/amachang/facebook-node-sdk

const facebook = new Facebook({
  appID: facebookId.toString(),
  secret: key.toString()
});
// https://developers.facebook.com/docs/graph-api/reference/user/

async function facebookJson (username) {
  const api = (id) => new Promise((resolve) => {
    facebook.api('/'+id, (err, data) => resolve(data || err) );
  });
  const json = await api(username);
  return { facebook: json };
}

exports.json = facebookJson;