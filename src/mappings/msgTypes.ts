// Messages called by the owner
export type MsgUpdateSettings = {
    update_settings: {
      owner_id?: string,
      slot_granularity?: bigint,
      paused?: boolean,
      agent_fee?: any,
      gas_price?: bigint,
      proxy_callback_gas?: bigint,
      min_tasks_per_agent?: bigint,
      agents_eject_threshold?: bigint,
    }
};
export type MsgMoveBalances = {
    move_balances: {
      balances: any[],
      account_id: string,
    } 
};
  
// Messages for tasks
export type MsgCreateTask = {
    create_task: {
      task: TaskRequest
    }
};
export type MsgRemoveTask = {
    remove_task: {
      task_hash: string
    }
};
export type MsgRefillTaskBalance = {
    refill_task_balance: {
      task_hash: string
    }
};
  
// Messages for agents
export type MsgRegisterAgent = {
    register_agent: {
      payable_account_id?: string
    }
};

export type MsgUpdateAgent = {
    update_agent: {
      payable_account_id: string
    }
};
 
export type Coin = {
    denom: string,
    amount: string
}

type TaskRequest = {
  interval: any,
  boundary: any,
  stop_on_fail: boolean,
  actions: any[],
  rules?: Rule[],
}

type Rule = {
  contract_addr: string,
  msg: bigint[],
}