# Security policy

## Reporting

Report suspected vulnerabilities privately through GitHub's
[private vulnerability reporting](https://github.com/monkeybad/hypit-provider-minimax-h3/security/advisories/new).
Do not open a public issue containing credentials, signed media URLs, private API payloads or
other sensitive deployment details.

## Credentials

API keys belong in a Hypit credential store through:

```bash
hypit auth login minimax-h3.selfhosted
```

Never place a key in `hypit.runtime.json`, a Source, a Run, an environment committed to Git, a
GitHub issue or a public chat. The Provider redacts credential values and URLs from public failure
messages, but logs created outside the Provider may contain sensitive data and should be reviewed
before sharing.
