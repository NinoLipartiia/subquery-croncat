// Messages called by the owner
export type MsgUpdateSettings = {
    updateSettings: {
      ownerId?: string,
      slotGranularity?: bigint,
      paused?: boolean,
      agentFee?: Coin,
      gasPrice?: bigint,
      proxyCallbackGas?: bigint,
      minTasksPerAgent?: bigint,
      agentsEjectThreshold?: bigint,
      //treasuryId?: string
    }
};
export type MsgMoveBalances = {
    moveBalances: {
      //balances: Balance[],
      accountId: string,
    } 
};
  
  // Messages for tasks
export  type MsgCreateTask = { //??
    createTask: {}
};
export type MsgRemoveTask = {
    removeTask: {
      taskHash: string
    }
};
export type MsgRefillTaskBalance = {
    refillTaskBalance: {
      taskHash: string
    }
};
  
// Messages for agents
export type MsgRegisterAgent = {
    registerAgent: {
      payableAccountId?: string
    }
};

export type MsgUpdateAgent = {
    updateAgent: {
      payableAccountId: string
    }
};
export type MsgUnregisterAgent = {
    unregisterAgent: {}
  };

export type MsgWithdrawReward = {
    withdrawReward: {}
};
export type MsgCheckInAgent = {
    checkInAgent: {}
};
export type MsgProxyCall = {
    proxyCall: {}
};
 
interface Coin {
    denom: string,
    amount: bigint
}
