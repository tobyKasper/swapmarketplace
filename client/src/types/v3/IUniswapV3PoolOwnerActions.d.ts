/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface IUniswapV3PoolOwnerActionsInterface extends ethers.utils.Interface {
  functions: {
    'collectProtocol(address,uint128,uint128)': FunctionFragment
    'setFeeProtocol(uint8,uint8)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'collectProtocol', values: [string, BigNumberish, BigNumberish]): string
  encodeFunctionData(functionFragment: 'setFeeProtocol', values: [BigNumberish, BigNumberish]): string

  decodeFunctionResult(functionFragment: 'collectProtocol', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setFeeProtocol', data: BytesLike): Result

  events: {}
}

export class IUniswapV3PoolOwnerActions extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: IUniswapV3PoolOwnerActionsInterface

  functions: {
    collectProtocol(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    setFeeProtocol(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>
  }

  collectProtocol(
    recipient: string,
    amount0Requested: BigNumberish,
    amount1Requested: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  setFeeProtocol(
    feeProtocol0: BigNumberish,
    feeProtocol1: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  callStatic: {
    collectProtocol(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }>

    setFeeProtocol(feeProtocol0: BigNumberish, feeProtocol1: BigNumberish, overrides?: CallOverrides): Promise<void>
  }

  filters: {}

  estimateGas: {
    collectProtocol(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    setFeeProtocol(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>
  }

  populateTransaction: {
    collectProtocol(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    setFeeProtocol(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>
  }
}
