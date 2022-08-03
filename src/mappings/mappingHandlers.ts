import { UpdateSettings, MoveBalances, 
  RegisterAgent, UpdateAgent, UnregisterAgent, WithdrawReward, CheckInAgent, ProxyCall,
  CreateTask, RemoveTask, RefillTaskBalance} from "../types";
import { CosmosMessage } from "@subql/types-cosmos";
import { MsgUpdateSettings, MsgMoveBalances, MsgRegisterAgent, MsgUpdateAgent,
  MsgCreateTask, MsgRemoveTask, MsgRefillTaskBalance, Coin } from './msgTypes'
// import { writeFileSync } from 'fs';

export async function handleUpdateSettings(
  message: CosmosMessage<{ sender: string; msg: MsgUpdateSettings }>
): Promise<void> {
  //throw JSON.stringify(message);
  const UpdateSettingsRecord = UpdateSettings.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
    ownerId: message.msg.decodedMsg.msg.update_settings?.owner_id,
    slotGranularity: message.msg.decodedMsg.msg.update_settings?.slot_granularity,
    paused: message.msg.decodedMsg.msg.update_settings?.paused,
    agentFeeDenom: message.msg.decodedMsg.msg.update_settings?.agent_fee.denom,
    agentFeeAmount: message.msg.decodedMsg.msg.update_settings?.agent_fee.amount,
    gasPrice: message.msg.decodedMsg.msg.update_settings?.gas_price,
    proxyCallbackGas: message.msg.decodedMsg.msg.update_settings?.proxy_callback_gas,
    minTasksPerAgent: message.msg.decodedMsg.msg.update_settings?.min_tasks_per_agent,
    agentsEjectThreshold: message.msg.decodedMsg.msg.update_settings?.agents_eject_threshold,
  });
  await UpdateSettingsRecord.save();
}

export async function handleMoveBalances(
  message: CosmosMessage<{ sender: string; msg: MsgMoveBalances }>
): Promise<void> {
  //throw JSON.stringify(message);
  const MoveBalancesRecord = MoveBalances.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
    accountId: message.msg.decodedMsg.msg.move_balances.account_id,
    balances: JSON.stringify(message.msg.decodedMsg.msg.move_balances.balances)
  });
  await MoveBalancesRecord.save();
}

export async function handleCreateTask(
  message: CosmosMessage<{ sender: string; msg: MsgCreateTask; }>
): Promise<void> {
  //throw JSON.stringify(message);
  const CreateTaskRecord = CreateTask.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
    interval: JSON.stringify(message.msg.decodedMsg.msg.create_task.task.interval),
    boundary: JSON.stringify(message.msg.decodedMsg.msg.create_task.task.boundary),
    stopOnFail: message.msg.decodedMsg.msg.create_task.task.stop_on_fail,
    actions: JSON.stringify(message.msg.decodedMsg.msg.create_task.task.actions),
    rules: JSON.stringify(message.msg.decodedMsg.msg.create_task.task.rules),
  });
  await CreateTaskRecord.save();
}

export async function handleRemoveTask(
  message: CosmosMessage<{ sender: string; msg: MsgRemoveTask }>
): Promise<void> {
  const RemoveTaskRecord = RemoveTask.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
    taskHash: message.msg.decodedMsg.msg.remove_task.task_hash,
  });
  await RemoveTaskRecord.save();
}

export async function handleRefillTaskBalance(
  message: CosmosMessage<{ sender: string; msg: MsgRefillTaskBalance; }>
): Promise<void> {
  const CreateRefillTaskBalance = RefillTaskBalance.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
    taskHash: message.msg.decodedMsg.msg.refill_task_balance.task_hash,
  });
  await CreateRefillTaskBalance.save();
}

export async function handleRegisterAgent(
  message: CosmosMessage<{ sender: string; msg: MsgRegisterAgent }> 
): Promise<void> {
  // console.log('PROCESSING RegisterAgent');
  // console.log(message);
  // writeFileSync('/tmp/register_agent.txt', JSON.stringify(message));
  // throw JSON.stringify(message);
  const RegisterAgentRecord = RegisterAgent.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
    payableAccountId: message.msg.decodedMsg.msg.register_agent?.payable_account_id,
  });
  await RegisterAgentRecord.save();
}

export async function handleUpdateAgent(
  message: CosmosMessage<{ sender: string; msg: MsgUpdateAgent }> 
): Promise<void> {
  const UpdateAgentRecord = UpdateAgent.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
    payableAccountId: message.msg.decodedMsg.msg.update_agent?.payable_account_id,
  });
  await UpdateAgentRecord.save();
}

export async function handleUnregisterAgent(
  message: CosmosMessage<{ sender: string }> 
): Promise<void> {
  const RegisterUnregisterAgent = UnregisterAgent.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
  });
  await RegisterUnregisterAgent.save();
}

export async function handleWithdrawReward(
  message: CosmosMessage<{ sender: string }> 
): Promise<void> {
  const WithdrawRewardRecord = WithdrawReward.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
  });
  await WithdrawRewardRecord.save();
}

export async function handleCheckInAgent(
  message: CosmosMessage<{ sender: string }> 
): Promise<void> {
  const CheckInAgentRecord = CheckInAgent.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
  });
  await CheckInAgentRecord.save();
}

export async function handleProxyCall(
  message: CosmosMessage<{ sender: string }> 
): Promise<void> {
  const ProxyCallRecord = ProxyCall.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
  });
  await ProxyCallRecord.save();
}
