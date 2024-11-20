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
  PayableOverrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface ISwapRouter02Interface extends ethers.utils.Interface {
  functions: {
    'approveMax(address)': FunctionFragment
    'approveMaxMinusOne(address)': FunctionFragment
    'approveZeroThenMax(address)': FunctionFragment
    'approveZeroThenMaxMinusOne(address)': FunctionFragment
    'callPositionManager(bytes)': FunctionFragment
    'exactInput(tuple)': FunctionFragment
    'exactInputSingle(tuple)': FunctionFragment
    'exactOutput(tuple)': FunctionFragment
    'exactOutputSingle(tuple)': FunctionFragment
    'getApprovalType(address,uint256)': FunctionFragment
    'increaseLiquidity(tuple)': FunctionFragment
    'mint(tuple)': FunctionFragment
    'multicall(bytes32,bytes[])': FunctionFragment
    'selfPermit(address,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment
    'selfPermitAllowed(address,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment
    'selfPermitAllowedIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment
    'selfPermitIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment
    'swapExactTokensForTokens(uint256,uint256,address[],address)': FunctionFragment
    'swapTokensForExactTokens(uint256,uint256,address[],address)': FunctionFragment
    'uniswapV3SwapCallback(int256,int256,bytes)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'approveMax', values: [string]): string
  encodeFunctionData(functionFragment: 'approveMaxMinusOne', values: [string]): string
  encodeFunctionData(functionFragment: 'approveZeroThenMax', values: [string]): string
  encodeFunctionData(functionFragment: 'approveZeroThenMaxMinusOne', values: [string]): string
  encodeFunctionData(functionFragment: 'callPositionManager', values: [BytesLike]): string
  encodeFunctionData(
    functionFragment: 'exactInput',
    values: [
      {
        path: BytesLike
        recipient: string
        amountIn: BigNumberish
        amountOutMinimum: BigNumberish
      },
    ],
  ): string
  encodeFunctionData(
    functionFragment: 'exactInputSingle',
    values: [
      {
        tokenIn: string
        tokenOut: string
        fee: BigNumberish
        recipient: string
        amountIn: BigNumberish
        amountOutMinimum: BigNumberish
        sqrtPriceLimitX96: BigNumberish
      },
    ],
  ): string
  encodeFunctionData(
    functionFragment: 'exactOutput',
    values: [
      {
        path: BytesLike
        recipient: string
        amountOut: BigNumberish
        amountInMaximum: BigNumberish
      },
    ],
  ): string
  encodeFunctionData(
    functionFragment: 'exactOutputSingle',
    values: [
      {
        tokenIn: string
        tokenOut: string
        fee: BigNumberish
        recipient: string
        amountOut: BigNumberish
        amountInMaximum: BigNumberish
        sqrtPriceLimitX96: BigNumberish
      },
    ],
  ): string
  encodeFunctionData(functionFragment: 'getApprovalType', values: [string, BigNumberish]): string
  encodeFunctionData(
    functionFragment: 'increaseLiquidity',
    values: [
      {
        token0: string
        token1: string
        tokenId: BigNumberish
        amount0Min: BigNumberish
        amount1Min: BigNumberish
      },
    ],
  ): string
  encodeFunctionData(
    functionFragment: 'mint',
    values: [
      {
        token0: string
        token1: string
        fee: BigNumberish
        tickLower: BigNumberish
        tickUpper: BigNumberish
        amount0Min: BigNumberish
        amount1Min: BigNumberish
        recipient: string
      },
    ],
  ): string
  encodeFunctionData(functionFragment: 'multicall', values: [BytesLike, BytesLike[]]): string
  encodeFunctionData(
    functionFragment: 'selfPermit',
    values: [string, BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike],
  ): string
  encodeFunctionData(
    functionFragment: 'selfPermitAllowed',
    values: [string, BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike],
  ): string
  encodeFunctionData(
    functionFragment: 'selfPermitAllowedIfNecessary',
    values: [string, BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike],
  ): string
  encodeFunctionData(
    functionFragment: 'selfPermitIfNecessary',
    values: [string, BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike],
  ): string
  encodeFunctionData(
    functionFragment: 'swapExactTokensForTokens',
    values: [BigNumberish, BigNumberish, string[], string],
  ): string
  encodeFunctionData(
    functionFragment: 'swapTokensForExactTokens',
    values: [BigNumberish, BigNumberish, string[], string],
  ): string
  encodeFunctionData(functionFragment: 'uniswapV3SwapCallback', values: [BigNumberish, BigNumberish, BytesLike]): string

  decodeFunctionResult(functionFragment: 'approveMax', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'approveMaxMinusOne', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'approveZeroThenMax', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'approveZeroThenMaxMinusOne', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'callPositionManager', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'exactInput', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'exactInputSingle', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'exactOutput', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'exactOutputSingle', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getApprovalType', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'increaseLiquidity', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'multicall', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'selfPermit', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'selfPermitAllowed', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'selfPermitAllowedIfNecessary', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'selfPermitIfNecessary', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'swapExactTokensForTokens', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'swapTokensForExactTokens', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'uniswapV3SwapCallback', data: BytesLike): Result

  events: {}
}

export class ISwapRouter02 extends BaseContract {
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

  interface: ISwapRouter02Interface

  functions: {
    approveMax(
      token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    approveMaxMinusOne(
      token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    approveZeroThenMax(
      token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    approveZeroThenMaxMinusOne(
      token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    callPositionManager(
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    exactInput(
      params: {
        path: BytesLike
        recipient: string
        amountIn: BigNumberish
        amountOutMinimum: BigNumberish
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    exactInputSingle(
      params: {
        tokenIn: string
        tokenOut: string
        fee: BigNumberish
        recipient: string
        amountIn: BigNumberish
        amountOutMinimum: BigNumberish
        sqrtPriceLimitX96: BigNumberish
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    exactOutput(
      params: {
        path: BytesLike
        recipient: string
        amountOut: BigNumberish
        amountInMaximum: BigNumberish
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    exactOutputSingle(
      params: {
        tokenIn: string
        tokenOut: string
        fee: BigNumberish
        recipient: string
        amountOut: BigNumberish
        amountInMaximum: BigNumberish
        sqrtPriceLimitX96: BigNumberish
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    getApprovalType(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    increaseLiquidity(
      params: {
        token0: string
        token1: string
        tokenId: BigNumberish
        amount0Min: BigNumberish
        amount1Min: BigNumberish
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    mint(
      params: {
        token0: string
        token1: string
        fee: BigNumberish
        tickLower: BigNumberish
        tickUpper: BigNumberish
        amount0Min: BigNumberish
        amount1Min: BigNumberish
        recipient: string
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    'multicall(bytes32,bytes[])'(
      previousBlockhash: BytesLike,
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    'multicall(uint256,bytes[])'(
      deadline: BigNumberish,
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    'multicall(bytes[])'(
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    selfPermit(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    selfPermitAllowed(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    selfPermitAllowedIfNecessary(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    selfPermitIfNecessary(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    swapTokensForExactTokens(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>
  }

  approveMax(
    token: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  approveMaxMinusOne(
    token: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  approveZeroThenMax(
    token: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  approveZeroThenMaxMinusOne(
    token: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  callPositionManager(
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  exactInput(
    params: {
      path: BytesLike
      recipient: string
      amountIn: BigNumberish
      amountOutMinimum: BigNumberish
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  exactInputSingle(
    params: {
      tokenIn: string
      tokenOut: string
      fee: BigNumberish
      recipient: string
      amountIn: BigNumberish
      amountOutMinimum: BigNumberish
      sqrtPriceLimitX96: BigNumberish
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  exactOutput(
    params: {
      path: BytesLike
      recipient: string
      amountOut: BigNumberish
      amountInMaximum: BigNumberish
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  exactOutputSingle(
    params: {
      tokenIn: string
      tokenOut: string
      fee: BigNumberish
      recipient: string
      amountOut: BigNumberish
      amountInMaximum: BigNumberish
      sqrtPriceLimitX96: BigNumberish
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  getApprovalType(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  increaseLiquidity(
    params: {
      token0: string
      token1: string
      tokenId: BigNumberish
      amount0Min: BigNumberish
      amount1Min: BigNumberish
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  mint(
    params: {
      token0: string
      token1: string
      fee: BigNumberish
      tickLower: BigNumberish
      tickUpper: BigNumberish
      amount0Min: BigNumberish
      amount1Min: BigNumberish
      recipient: string
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  'multicall(bytes32,bytes[])'(
    previousBlockhash: BytesLike,
    data: BytesLike[],
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  'multicall(uint256,bytes[])'(
    deadline: BigNumberish,
    data: BytesLike[],
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  'multicall(bytes[])'(
    data: BytesLike[],
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  selfPermit(
    token: string,
    value: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  selfPermitAllowed(
    token: string,
    nonce: BigNumberish,
    expiry: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  selfPermitAllowedIfNecessary(
    token: string,
    nonce: BigNumberish,
    expiry: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  selfPermitIfNecessary(
    token: string,
    value: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  swapExactTokensForTokens(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  swapTokensForExactTokens(
    amountOut: BigNumberish,
    amountInMax: BigNumberish,
    path: string[],
    to: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  uniswapV3SwapCallback(
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>

  callStatic: {
    approveMax(token: string, overrides?: CallOverrides): Promise<void>

    approveMaxMinusOne(token: string, overrides?: CallOverrides): Promise<void>

    approveZeroThenMax(token: string, overrides?: CallOverrides): Promise<void>

    approveZeroThenMaxMinusOne(token: string, overrides?: CallOverrides): Promise<void>

    callPositionManager(data: BytesLike, overrides?: CallOverrides): Promise<string>

    exactInput(
      params: {
        path: BytesLike
        recipient: string
        amountIn: BigNumberish
        amountOutMinimum: BigNumberish
      },
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    exactInputSingle(
      params: {
        tokenIn: string
        tokenOut: string
        fee: BigNumberish
        recipient: string
        amountIn: BigNumberish
        amountOutMinimum: BigNumberish
        sqrtPriceLimitX96: BigNumberish
      },
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    exactOutput(
      params: {
        path: BytesLike
        recipient: string
        amountOut: BigNumberish
        amountInMaximum: BigNumberish
      },
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    exactOutputSingle(
      params: {
        tokenIn: string
        tokenOut: string
        fee: BigNumberish
        recipient: string
        amountOut: BigNumberish
        amountInMaximum: BigNumberish
        sqrtPriceLimitX96: BigNumberish
      },
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    getApprovalType(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<number>

    increaseLiquidity(
      params: {
        token0: string
        token1: string
        tokenId: BigNumberish
        amount0Min: BigNumberish
        amount1Min: BigNumberish
      },
      overrides?: CallOverrides,
    ): Promise<string>

    mint(
      params: {
        token0: string
        token1: string
        fee: BigNumberish
        tickLower: BigNumberish
        tickUpper: BigNumberish
        amount0Min: BigNumberish
        amount1Min: BigNumberish
        recipient: string
      },
      overrides?: CallOverrides,
    ): Promise<string>

    'multicall(bytes32,bytes[])'(
      previousBlockhash: BytesLike,
      data: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<string[]>

    'multicall(uint256,bytes[])'(
      deadline: BigNumberish,
      data: BytesLike[],
      overrides?: CallOverrides,
    ): Promise<string[]>

    'multicall(bytes[])'(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>

    selfPermit(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>

    selfPermitAllowed(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>

    selfPermitAllowedIfNecessary(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>

    selfPermitIfNecessary(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    swapTokensForExactTokens(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>
  }

  filters: {}

  estimateGas: {
    approveMax(token: string, overrides?: PayableOverrides & { from?: string | Promise<string> }): Promise<BigNumber>

    approveMaxMinusOne(
      token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    approveZeroThenMax(
      token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    approveZeroThenMaxMinusOne(
      token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    callPositionManager(
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    exactInput(
      params: {
        path: BytesLike
        recipient: string
        amountIn: BigNumberish
        amountOutMinimum: BigNumberish
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    exactInputSingle(
      params: {
        tokenIn: string
        tokenOut: string
        fee: BigNumberish
        recipient: string
        amountIn: BigNumberish
        amountOutMinimum: BigNumberish
        sqrtPriceLimitX96: BigNumberish
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    exactOutput(
      params: {
        path: BytesLike
        recipient: string
        amountOut: BigNumberish
        amountInMaximum: BigNumberish
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    exactOutputSingle(
      params: {
        tokenIn: string
        tokenOut: string
        fee: BigNumberish
        recipient: string
        amountOut: BigNumberish
        amountInMaximum: BigNumberish
        sqrtPriceLimitX96: BigNumberish
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    getApprovalType(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    increaseLiquidity(
      params: {
        token0: string
        token1: string
        tokenId: BigNumberish
        amount0Min: BigNumberish
        amount1Min: BigNumberish
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    mint(
      params: {
        token0: string
        token1: string
        fee: BigNumberish
        tickLower: BigNumberish
        tickUpper: BigNumberish
        amount0Min: BigNumberish
        amount1Min: BigNumberish
        recipient: string
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    'multicall(bytes32,bytes[])'(
      previousBlockhash: BytesLike,
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    'multicall(uint256,bytes[])'(
      deadline: BigNumberish,
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    'multicall(bytes[])'(
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    selfPermit(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    selfPermitAllowed(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    selfPermitAllowedIfNecessary(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    selfPermitIfNecessary(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    swapTokensForExactTokens(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>
  }

  populateTransaction: {
    approveMax(
      token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    approveMaxMinusOne(
      token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    approveZeroThenMax(
      token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    approveZeroThenMaxMinusOne(
      token: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    callPositionManager(
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    exactInput(
      params: {
        path: BytesLike
        recipient: string
        amountIn: BigNumberish
        amountOutMinimum: BigNumberish
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    exactInputSingle(
      params: {
        tokenIn: string
        tokenOut: string
        fee: BigNumberish
        recipient: string
        amountIn: BigNumberish
        amountOutMinimum: BigNumberish
        sqrtPriceLimitX96: BigNumberish
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    exactOutput(
      params: {
        path: BytesLike
        recipient: string
        amountOut: BigNumberish
        amountInMaximum: BigNumberish
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    exactOutputSingle(
      params: {
        tokenIn: string
        tokenOut: string
        fee: BigNumberish
        recipient: string
        amountOut: BigNumberish
        amountInMaximum: BigNumberish
        sqrtPriceLimitX96: BigNumberish
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    getApprovalType(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    increaseLiquidity(
      params: {
        token0: string
        token1: string
        tokenId: BigNumberish
        amount0Min: BigNumberish
        amount1Min: BigNumberish
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    mint(
      params: {
        token0: string
        token1: string
        fee: BigNumberish
        tickLower: BigNumberish
        tickUpper: BigNumberish
        amount0Min: BigNumberish
        amount1Min: BigNumberish
        recipient: string
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    'multicall(bytes32,bytes[])'(
      previousBlockhash: BytesLike,
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    'multicall(uint256,bytes[])'(
      deadline: BigNumberish,
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    'multicall(bytes[])'(
      data: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    selfPermit(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    selfPermitAllowed(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    selfPermitAllowedIfNecessary(
      token: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    selfPermitIfNecessary(
      token: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    swapTokensForExactTokens(
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: string[],
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>
  }
}
