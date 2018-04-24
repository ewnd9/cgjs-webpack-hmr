# cgjs-webpack-hmr

Run `$ yarn build:watch` in one pane and `$ yarn start` in the other.

Edit "hello" to "world" in `./src/a.js`, you should see:

```sh
hello
world
[HMR] Updated modules:
[HMR]  - ./src/a.js
[HMR] Update applied.
```

## Install

```sh
$ yarn install
```

## Usage

```sh
$ yarn build:watch
$ yarn start:dev
```

## Related

- [`cgjs`](https://github.com/cgjs/cgjs)
- ["Hot reload all the things!"](https://hackernoon.com/hot-reload-all-the-things-ec0fed8ab0)

## License

CC0.
