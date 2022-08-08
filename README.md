# Getting Started

For quick start you may use 
```shell
yarn all
```

## 1. Install dependencies

```shell
yarn
```

## 2. Generate types

```shell
yarn codegen
```

## 3. Build

```shell
yarn build
```

## 4. Might need to remove data from db
```shell
rm -r .data/postgres
```

## 5. Run locally

```shell
yarn start:docker
```

# Query

Below there are some exapmles of query. See the full list in docs.

```shell
query {
 _metadata {
    lastProcessedHeight
    lastProcessedTimestamp
    targetHeight
    chain
    indexerHealthy
  }

  createTasks {
    nodes {
      blockHeight
      sender
      interval
      boundary
      stopOnFail
      actions
      rules
    }
    totalCount
  }

  registerAgents {
    nodes {
      blockHeight
      payableAccountId
      sender
    }
    totalCount
  }

  checkInAgents {
    nodes {
      blockHeight
      sender
    }
    totalCount
  }

  updateAgents {
    nodes {
      blockHeight
      payableAccountId
    }
  }

  proxyCalls {
    nodes {
      blockHeight
    }
  }
  withdrawRewards {
    nodes {
      blockHeight
    }
  }

  registerAgents {
    nodes {
      blockHeight
    }
  }

  moveBalances {
    nodes {
      blockHeight
    }
  }

  updateSettings {
    nodes {
      blockHeight
      agentFeeDenom
      agentFeeAmount
    }
  }

  refillTaskBalances {
    nodes {
      blockHeight
      taskHash
    }
  }

  removeTasks {
    nodes {
      blockHeight
      taskHash
    }
  }
}
```


