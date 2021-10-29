# Redwood Blog

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Migration
Use
```terminal
 yarn redwood prisma migrate dev
```

### Fire it up

```terminal
yarn start
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.
