# fairdrive-opfs-app

Fairdrive OPFS Sample App

## Install and run

1. `npm install`
2. `npm run start`

## About sample app

This application has three available provider settings (FairOS, IPFS and S3 (Minio client)) and uses Choky React file system component.

## Usage with FairOS

1. Configure `username`, `password` and `RPC`
2. Click `Set as default`
3. Click next icon button `Mounts` and select a pod

## Usage with IPFS

1. Configure `RPC`
2. Click `Set as default`
3. Click next icon button `Mounts` and select a mount (IPFS only has `root`)

## Usage with S3

1. Configure your S3 client configuration, most common configuration requires `Access key id`, `Secret Access key` and `Endpoint`
2. Click `Set as default`
3. Click next icon button `Mounts` and select a bucket (Note: Might required CORS)

## File transfer between providers

You will need the provider name and mount destination. Eg mount: `root` and provider: `ipfs`.

## Known issues

- `S3`: client or API `ListBuckets` sometimes won't work until all CORS and SSL configuration are correctly set.
- `S3`: Invalid password or secret key returns as a CORS error. Be sure to double check your keys.
- `Fairos`: Pod won't open correctly. This sometimes happens if network is slow, the `podOpen` might take sometime before the pod can be query properly.
- `UI`: Delete requires a refresh to display recently removed files

## License

MIT

