# Getting Started

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

Query `proxy_call`:
```shell
query {
  proxyCalls(
    	last: 3
    	orderBy: ID_DESC
  ) {
    nodes {
      nodeId
     	id
  	}
  }
}
```

Query `create_task`:
```shell
query {
  createTasks(
    	last: 3
    	orderBy: ID_DESC
  ) {
    nodes {
      nodeId
     	id
      blockHeight
      sender
  	}
  }
}
```

Query `register_agent`:
```shell
query {
  registerAgents(
    	last: 3
    	orderBy: ID_DESC
  ) {
    nodes {
      nodeId
     	id
      blockHeight
      sender
  	}
  }
}
```

Query metadata:
```shell
query {
    _metadata {
		  lastProcessedHeight 
  	 lastProcessedTimestamp
      targetHeight
      chain
      specName
      genesisHash
      indexerHealthy
      indexerNodeVersion
      queryNodeVersion
      rowCountEstimate {
        table
        estimate
      }
       dynamicDatasources
	}
}
```


