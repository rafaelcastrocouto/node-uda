const fetch = require('node-fetch');

const key = process.env['twitter'];

const url ="https://api.twitter.com/1.1/users/show.json?screen_name=";

async function twitterJson (username) {
  const res = await fetch(url+username, {
    headers: { authorization: key }
  });
  const json = await res.json();
  return { twitter: json };
}

exports.json = twitterJson;