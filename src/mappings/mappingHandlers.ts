import { UpdateSettings, MoveBalances, 
  RegisterAgent, UpdateAgent, UnregisterAgent, WithdrawReward, CheckInAgent, ProxyCall,
  CreateTask, RemoveTask, RefillTaskBalance} from "../types";
import { CosmosMessage } from "@subql/types-cosmos";
import { MsgUpdateSettings, MsgMoveBalances, 
  MsgRegisterAgent, MsgUpdateAgent, MsgUnregisterAgent, MsgWithdrawReward, MsgCheckInAgent, MsgProxyCall,
  MsgCreateTask, MsgRemoveTask, MsgRefillTaskBalance } from './msgTypes'

export async function handleUpdateSettings(
  message: CosmosMessage<{ sender: string; msg: MsgUpdateSettings }>
): Promise<void> {
  const UpdateSettingsRecord = UpdateSettings.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
    ownerId: message.msg.decodedMsg.msg.updateSettings?.ownerId,
    slotGranularity: message.msg.decodedMsg.msg.updateSettings?.slotGranularity,
    paused: message.msg.decodedMsg.msg.updateSettings?.paused,
    agentFeeDenom: message.msg.decodedMsg.msg.updateSettings?.agentFee.denom,
    agentFeeAmount: message.msg.decodedMsg.msg.updateSettings?.agentFee.amount,
    gasPrice: message.msg.decodedMsg.msg.updateSettings?.gasPrice,
    proxyCallbackGas: message.msg.decodedMsg.msg.updateSettings?.proxyCallbackGas,
    minTasksPerAgent: message.msg.decodedMsg.msg.updateSettings?.minTasksPerAgent,
    agentsEjectThreshold: message.msg.decodedMsg.msg.updateSettings?.agentsEjectThreshold,
  });
  await UpdateSettingsRecord.save();
}

export async function handleMoveBalances(
  message: CosmosMessage<{ sender: string; msg: MsgMoveBalances }>
): Promise<void> {
  const MoveBalancesRecord = MoveBalances.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
    //accountId:  message.msg.decodedMsg.msg.moveBalances.accountId,
  });
  await MoveBalancesRecord.save();
}

export async function handleCreateTask(
  message: CosmosMessage<{ sender: string; msg: MsgCreateTask }>
): Promise<void> {
  const CreateTaskRecord = CreateTask.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
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
    taskHash: message.msg.decodedMsg.msg.removeTask.taskHash,
  });
  await RemoveTaskRecord.save();
}

export async function handleRefillTaskBalance(
  message: CosmosMessage<{ sender: string; msg: MsgRefillTaskBalance }>
): Promise<void> {
  const CreateRefillTaskBalance = RefillTaskBalance.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
    taskHash: message.msg.decodedMsg.msg.refillTaskBalance.taskHash,
  });
  await CreateRefillTaskBalance.save();
}

export async function handleRegisterAgent(
  message: CosmosMessage<{ sender: string; msg: MsgRegisterAgent }> 
): Promise<void> {
  const RegisterAgentRecord = RegisterAgent.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
    payableAccountId: message.msg.decodedMsg.msg.registerAgent?.payableAccountId,
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
    //payableAccountId: message.msg.decodedMsg.msg.updateAgent.payableAccountId,
  });
  await UpdateAgentRecord.save();
}

export async function handleUnregisterAgent(
  message: CosmosMessage<{ sender: string; msg: MsgUnregisterAgent }> 
): Promise<void> {
  const RegisterUnregisterAgent = UnregisterAgent.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
  });
  await RegisterUnregisterAgent.save();
}

export async function handleWithdrawReward(
  message: CosmosMessage<{ sender: string; msg: MsgWithdrawReward }> 
): Promise<void> {
  const WithdrawRewardRecord = WithdrawReward.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
  });
  await WithdrawRewardRecord.save();
}

export async function handleCheckInAgent(
  message: CosmosMessage<{ sender: string; msg: MsgCheckInAgent }> 
): Promise<void> {
  const CheckInAgentRecord = CheckInAgent.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
  });
  await CheckInAgentRecord.save();
}

export async function handleProxyCall(
  message: CosmosMessage<{ sender: string; msg: MsgProxyCall }> 
): Promise<void> {
  const ProxyCallRecord = ProxyCall.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    sender: message.msg.decodedMsg.sender,
  });
  await ProxyCallRecord.save();
}
