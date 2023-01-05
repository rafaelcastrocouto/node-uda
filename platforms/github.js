const fetch = require('node-fetch');

const url ="https://api.github.com/users/";
// https://docs.github.com/en/rest/users

async function githubJson (username) {
  const res = await fetch(url+username);
  const json = await res.json();
  return { github: json };
}

exports.json = githubJson;
