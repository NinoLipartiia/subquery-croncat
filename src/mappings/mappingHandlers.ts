import { ProxyCall, CreateTask, RegisterAgent } from "../types";
import { CosmosMessage } from "@subql/types-cosmos";

type MsgProxyCall = {
  proxy_call: {}
};
type MsgCreateTask = {
  create_task: {}
};
type MsgRegisterAgent = {
  create_task: {}
};

export async function handleProxyCall(
  message: CosmosMessage<{ sender: string; msg: MsgProxyCall }> 
): Promise<void> {
  const ProxyCallRecord = ProxyCall.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    agent: message.msg.decodedMsg.sender,
  });
  await ProxyCallRecord.save();
}

export async function handleCreateTask(
  message: CosmosMessage<{ sender: string; msg: MsgCreateTask }>
): Promise<void> {
  const CreateTaskRecord = CreateTask.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    user: message.msg.decodedMsg.sender,
  });
  await CreateTaskRecord.save();
}

export async function handleRegisterAgent(
  message: CosmosMessage<{ sender: string; msg: MsgRegisterAgent }> 
): Promise<void> {
  const RegisterAgentRecord = RegisterAgent.create({
    id: `${message.tx.hash}-${message.idx}`,
    blockHeight: BigInt(message.block.block.header.height),
    user: message.msg.decodedMsg.sender,
  });
  await RegisterAgentRecord.save();
}
