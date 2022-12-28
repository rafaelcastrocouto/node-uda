## user data aggregator

`input.json` _via_ POST
```
{
  github: "username",
  facebook: "username",
  instagram: "username"
}
```
`output.json`
```
{
  usernames: ["username", "user", "name"],
  platforms: ["github", "facebook", "instagram"],
  decriptions: ["im cool"],
  links: ["www.url.com"],
  avatar: "link.to.img",
  followers: 123,
  etc...
}
```

### todo list:

-  ☑️ fetch data
-  ☑️ async fetches
-  ☑️ parse json
-  ❎ receive input requests
-  ❎ output aggregated json
-  ❎ use external platform files
-  ❎ more platforms