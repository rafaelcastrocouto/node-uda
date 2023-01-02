## user data aggregator

`input.json` _via_ POST
```
{
  "github": "username",
  "twitter": "username",
  "instagram": "username"
}
```
`output.json`
```
{[
  {"github":
    {"login":"username","id":99999,"node_id":"ABCDEF","avatar_url":"http://avatar", ..."}
  },
  { "twitter":
    {"id":99999, "name":"username","screen_name":"screenname", ...}
  },
  { "instagram": {"id": 999, ...} }
]}
```

### todo list:

-  ☑️ fetch data
-  ☑️ async fetches
-  ☑️ parse json
-  ☑️ receive input requests
-  ☑️ output aggregated json
-  ☑️ use external platform files
-  ☑️ online demo
-  ❎ more platforms
-  ❎ validate input
-  ❎ output filters
-  ❎ cors options