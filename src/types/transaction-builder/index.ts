import { UtxoSelectionStrategy } from "../../utxo-selection";
import { UTxO } from "../utxo";
import { Certificate } from "./certificate";
import { MintItem } from "./mint";
import { Output } from "./output";
import { PubKeyTxIn, RefTxIn, TxIn } from "./txin";
import { Withdrawal } from "./withdrawal";

export * from "./data";
export * from "./mint";
export * from "./output";
export * from "./script";
export * from "./txin";
export * from "./withdrawal";
export * from "./certificate";

export type MeshTxBuilderBody = {
  inputs: TxIn[];
  outputs: Output[];
  collaterals: PubKeyTxIn[];
  requiredSignatures: string[];
  referenceInputs: RefTxIn[];
  mints: MintItem[];
  changeAddress: string;
  metadata: Metadata[];
  validityRange: ValidityRange;
  certificates: Certificate[];
  withdrawals: Withdrawal[];
  signingKey: string[];
  extraInputs: UTxO[];
  selectionConfig: {
    threshold: string;
    strategy: UtxoSelectionStrategy;
    includeTxFees: boolean;
  };
  network: string;
};

export const emptyTxBuilderBody = (): MeshTxBuilderBody => ({
  inputs: [],
  outputs: [],
  extraInputs: [],
  collaterals: [],
  requiredSignatures: [],
  referenceInputs: [],
  mints: [],
  changeAddress: "",
  metadata: [],
  validityRange: {},
  certificates: [],
  withdrawals: [],
  signingKey: [],
  selectionConfig: {
    threshold: "0",
    strategy: "experimental",
    includeTxFees: true,
  },
  network: "mainnet",
});

// Here

export type ValidityRange = {
  invalidBefore?: number;
  invalidHereafter?: number;
};

// Mint Types

export type Metadata = {
  tag: string;
  metadata: string;
};

// Utilities

export type RequiredWith<T, K extends keyof T> = Required<T> & {
  [P in K]: Required<T[P]>;
};

export const validityRangeToObj = (validityRange: ValidityRange): object => {
  return {
    invalidBefore: validityRange.invalidBefore ?? null,
    invalidHereafter: validityRange.invalidHereafter ?? null,
  };
};
