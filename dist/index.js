// src/constants/protocol-parameters.ts
var DEFAULT_PROTOCOL_PARAMETERS = {
  epoch: 0,
  coinsPerUtxoSize: 4310,
  priceMem: 0.0577,
  priceStep: 721e-7,
  minFeeA: 44,
  minFeeB: 155381,
  keyDeposit: 2e6,
  maxTxSize: 16384,
  maxValSize: 5e3,
  poolDeposit: 5e8,
  maxCollateralInputs: 3,
  decentralisation: 0,
  maxBlockSize: 98304,
  collateralPercent: 150,
  maxBlockHeaderSize: 1100,
  minPoolCost: "340000000",
  maxTxExMem: "16000000",
  maxTxExSteps: "10000000000",
  maxBlockExMem: "80000000",
  maxBlockExSteps: "40000000000",
  minFeeRefScriptCostPerByte: 15
};
var resolveTxFees = (txSize, minFeeA = DEFAULT_PROTOCOL_PARAMETERS.minFeeA, minFeeB = DEFAULT_PROTOCOL_PARAMETERS.minFeeB) => {
  const fees = BigInt(minFeeA) * BigInt(txSize) + BigInt(minFeeB);
  return fees.toString();
};

// src/constants/supported-wallets.ts
var SUPPORTED_WALLETS = [
  "begin",
  "eternl",
  "flint",
  "lace",
  "nami",
  "nufi",
  "gerowallet",
  "typhoncip30",
  "vespr",
  "yoroi"
];

// src/constants/cost-models.ts
var DEFAULT_V1_COST_MODEL_LIST = [
  205665,
  812,
  1,
  1,
  1e3,
  571,
  0,
  1,
  1e3,
  24177,
  4,
  1,
  1e3,
  32,
  117366,
  10475,
  4,
  23e3,
  100,
  23e3,
  100,
  23e3,
  100,
  23e3,
  100,
  23e3,
  100,
  23e3,
  100,
  100,
  100,
  23e3,
  100,
  19537,
  32,
  175354,
  32,
  46417,
  4,
  221973,
  511,
  0,
  1,
  89141,
  32,
  497525,
  14068,
  4,
  2,
  196500,
  453240,
  220,
  0,
  1,
  1,
  1e3,
  28662,
  4,
  2,
  245e3,
  216773,
  62,
  1,
  1060367,
  12586,
  1,
  208512,
  421,
  1,
  187e3,
  1e3,
  52998,
  1,
  80436,
  32,
  43249,
  32,
  1e3,
  32,
  80556,
  1,
  57667,
  4,
  1e3,
  10,
  197145,
  156,
  1,
  197145,
  156,
  1,
  204924,
  473,
  1,
  208896,
  511,
  1,
  52467,
  32,
  64832,
  32,
  65493,
  32,
  22558,
  32,
  16563,
  32,
  76511,
  32,
  196500,
  453240,
  220,
  0,
  1,
  1,
  69522,
  11687,
  0,
  1,
  60091,
  32,
  196500,
  453240,
  220,
  0,
  1,
  1,
  196500,
  453240,
  220,
  0,
  1,
  1,
  806990,
  30482,
  4,
  1927926,
  82523,
  4,
  265318,
  0,
  4,
  0,
  85931,
  32,
  205665,
  812,
  1,
  1,
  41182,
  32,
  212342,
  32,
  31220,
  32,
  32696,
  32,
  43357,
  32,
  32247,
  32,
  38314,
  32,
  57996947,
  18975,
  10
];
var DEFAULT_V2_COST_MODEL_LIST = [
  205665,
  812,
  1,
  1,
  1e3,
  571,
  0,
  1,
  1e3,
  24177,
  4,
  1,
  1e3,
  32,
  117366,
  10475,
  4,
  23e3,
  100,
  23e3,
  100,
  23e3,
  100,
  23e3,
  100,
  23e3,
  100,
  23e3,
  100,
  100,
  100,
  23e3,
  100,
  19537,
  32,
  175354,
  32,
  46417,
  4,
  221973,
  511,
  0,
  1,
  89141,
  32,
  497525,
  14068,
  4,
  2,
  196500,
  453240,
  220,
  0,
  1,
  1,
  1e3,
  28662,
  4,
  2,
  245e3,
  216773,
  62,
  1,
  1060367,
  12586,
  1,
  208512,
  421,
  1,
  187e3,
  1e3,
  52998,
  1,
  80436,
  32,
  43249,
  32,
  1e3,
  32,
  80556,
  1,
  57667,
  4,
  1e3,
  10,
  197145,
  156,
  1,
  197145,
  156,
  1,
  204924,
  473,
  1,
  208896,
  511,
  1,
  52467,
  32,
  64832,
  32,
  65493,
  32,
  22558,
  32,
  16563,
  32,
  76511,
  32,
  196500,
  453240,
  220,
  0,
  1,
  1,
  69522,
  11687,
  0,
  1,
  60091,
  32,
  196500,
  453240,
  220,
  0,
  1,
  1,
  196500,
  453240,
  220,
  0,
  1,
  1,
  1159724,
  392670,
  0,
  2,
  806990,
  30482,
  4,
  1927926,
  82523,
  4,
  265318,
  0,
  4,
  0,
  85931,
  32,
  205665,
  812,
  1,
  1,
  41182,
  32,
  212342,
  32,
  31220,
  32,
  32696,
  32,
  43357,
  32,
  32247,
  32,
  38314,
  32,
  35892428,
  10,
  57996947,
  18975,
  10,
  38887044,
  32947,
  10
];

// src/constants/language-views.ts
var SUPPORTED_LANGUAGE_VIEWS = {
  ALONZO: {
    V1: "a141005901d59f1a000302590001011a00060bc719026d00011a000249f01903e800011a000249f018201a0025cea81971f70419744d186419744d186419744d186419744d186419744d186419744d18641864186419744d18641a000249f018201a000249f018201a000249f018201a000249f01903e800011a000249f018201a000249f01903e800081a000242201a00067e2318760001011a000249f01903e800081a000249f01a0001b79818f7011a000249f0192710011a0002155e19052e011903e81a000249f01903e8011a000249f018201a000249f018201a000249f0182001011a000249f0011a000249f0041a000194af18f8011a000194af18f8011a0002377c190556011a0002bdea1901f1011a000249f018201a000249f018201a000249f018201a000249f018201a000249f018201a000249f018201a000242201a00067e23187600010119f04c192bd200011a000249f018201a000242201a00067e2318760001011a000242201a00067e2318760001011a0025cea81971f704001a000141bb041a000249f019138800011a000249f018201a000302590001011a000249f018201a000249f018201a000249f018201a000249f018201a000249f018201a000249f018201a000249f018201a00330da70101ff"
  },
  BABBAGE: {
    V1: "a141005901b69f1a0003236119032c01011903e819023b00011903e8195e7104011903e818201a0001ca761928eb041959d818641959d818641959d818641959d818641959d818641959d81864186418641959d81864194c5118201a0002acfa182019b551041a000363151901ff00011a00015c3518201a000797751936f404021a0002ff941a0006ea7818dc0001011903e8196ff604021a0003bd081a00034ec5183e011a00102e0f19312a011a00032e801901a5011a0002da781903e819cf06011a00013a34182019a8f118201903e818201a00013aac0119e143041903e80a1a00030219189c011a00030219189c011a0003207c1901d9011a000330001901ff0119ccf3182019fd40182019ffd5182019581e18201940b318201a00012adf18201a0002ff941a0006ea7818dc0001011a00010f92192da7000119eabb18201a0002ff941a0006ea7818dc0001011a0002ff941a0006ea7818dc0001011a000c504e197712041a001d6af61a0001425b041a00040c660004001a00014fab18201a0003236119032c010119a0de18201a00033d7618201979f41820197fb8182019a95d1820197df718201995aa18201a009063b91903fd0aff",
    V2: "a20198af1a0003236119032c01011903e819023b00011903e8195e7104011903e818201a0001ca761928eb041959d818641959d818641959d818641959d818641959d818641959d81864186418641959d81864194c5118201a0002acfa182019b551041a000363151901ff00011a00015c3518201a000797751936f404021a0002ff941a0006ea7818dc0001011903e8196ff604021a0003bd081a00034ec5183e011a00102e0f19312a011a00032e801901a5011a0002da781903e819cf06011a00013a34182019a8f118201903e818201a00013aac0119e143041903e80a1a00030219189c011a00030219189c011a0003207c1901d9011a000330001901ff0119ccf3182019fd40182019ffd5182019581e18201940b318201a00012adf18201a0002ff941a0006ea7818dc0001011a00010f92192da7000119eabb18201a0002ff941a0006ea7818dc0001011a0002ff941a0006ea7818dc0001011a0011b22c1a0005fdde00021a000c504e197712041a001d6af61a0001425b041a00040c660004001a00014fab18201a0003236119032c010119a0de18201a00033d7618201979f41820197fb8182019a95d1820197df718201995aa18201b00000004a817c8001b00000004a817c8001a009063b91903fd0a1b00000004a817c800001b00000004a817c80041005901b69f1a0003236119032c01011903e819023b00011903e8195e7104011903e818201a0001ca761928eb041959d818641959d818641959d818641959d818641959d818641959d81864186418641959d81864194c5118201a0002acfa182019b551041a000363151901ff00011a00015c3518201a000797751936f404021a0002ff941a0006ea7818dc0001011903e8196ff604021a0003bd081a00034ec5183e011a00102e0f19312a011a00032e801901a5011a0002da781903e819cf06011a00013a34182019a8f118201903e818201a00013aac0119e143041903e80a1a00030219189c011a00030219189c011a0003207c1901d9011a000330001901ff0119ccf3182019fd40182019ffd5182019581e18201940b318201a00012adf18201a0002ff941a0006ea7818dc0001011a00010f92192da7000119eabb18201a0002ff941a0006ea7818dc0001011a0002ff941a0006ea7818dc0001011a000c504e197712041a001d6af61a0001425b041a00040c660004001a00014fab18201a0003236119032c010119a0de18201a00033d7618201979f41820197fb8182019a95d1820197df718201995aa18201a009063b91903fd0aff"
  }
};
var resolveLanguageView = (era, version) => {
  return SUPPORTED_LANGUAGE_VIEWS[era][version];
};

// src/constants/index.ts
var DEFAULT_REDEEMER_BUDGET = {
  mem: 7e6,
  steps: 3e9
};
var POLICY_ID_LENGTH = 56;
var LANGUAGE_VERSIONS = {
  V1: "V1",
  V2: "V2",
  V3: "V3"
};
var HARDENED_KEY_START = 2147483648;
var SUPPORTED_CLOCKS = {
  testnet: ["74", "1598400", "1595967616", "432000"],
  preview: ["183", "15811222", "1682467200", "86400"],
  preprod: ["65", "26438400", "1682121600", "432000"],
  mainnet: ["208", "4492800", "1596059091", "432000"]
};
var SUPPORTED_HANDLES = {
  0: "8d18d786e92776c824607fd8e193ec535c79dc61ea2405ddf3b09fe3",
  1: "f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a"
};
var SUPPORTED_OGMIOS_LINKS = {
  mainnet: "wss://ogmios-api.mainnet.dandelion.link",
  preprod: "wss://ogmios-api.iohk-preprod.dandelion.link",
  preview: "__TBD_SOON_TM__",
  testnet: "wss://ogmios-api.testnet.dandelion.link"
};
var SUPPORTED_TOKENS = {
  LQ: "da8c30857834c6ae7203935b89278c532b3995245295456f993e1d244c51",
  MIN: "29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c64d494e",
  NTX: "edfd7a1d77bcb8b884c474bdc92a16002d1fb720e454fa6e993444794e5458",
  iBTC: "f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b6988069425443",
  iETH: "f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b6988069455448",
  iUSD: "f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b6988069555344",
  MILK: "8a1cfae21368b8bebbbed9800fec304e95cce39a2a57dc35e2e3ebaa4d494c4b",
  AGIX: "f43a62fdc3965df486de8a0d32fe800963589c41b38946602a0dc53541474958",
  MELD: "6ac8ef33b510ec004fe11585f7c5a9f0c07f0c23428ab4f29c1d7d104d454c44",
  INDY: "533bb94a8850ee3ccbe483106489399112b74c905342cb1792a797a0494e4459",
  CLAY: "38ad9dc3aec6a2f38e220142b9aa6ade63ebe71f65e7cc2b7d8a8535434c4159",
  MCOS: "6f46e1304b16d884c85c62fb0eef35028facdc41aaa0fd319a152ed64d434f53",
  DING: "ce5b9e0f8a88255b65f2e4d065c6e716e9fa9a8a86dfb86423dd1ac044494e47",
  GERO: "10a49b996e2402269af553a8a96fb8eb90d79e9eca79e2b4223057b64745524f",
  NMKR: "5dac8536653edc12f6f5e1045d8164b9f59998d3bdc300fc928434894e4d4b52",
  PAVIA: "884892bcdc360bcef87d6b3f806e7f9cd5ac30d999d49970e7a903ae5041564941",
  HOSKY: "a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235484f534b59",
  YUMMI: "078eafce5cd7edafdf63900edef2c1ea759e77f30ca81d6bbdeec92479756d6d69",
  C3: "8e51398904a5d3fc129fbf4f1589701de23c7824d5c90fdb9490e15a434841524c4933",
  GIMBAL: "2b0a04a7b60132b1805b296c7fcb3b217ff14413991bf76f72663c3067696d62616c",
  SUNDAE: "9a9693a9a37912a5097918f97918d15240c92ab729a0b7c4aa144d7753554e444145",
  GREENS: "4623ab311b7d982d8d26fcbe1a9439ca56661aafcdcd8d8a0ef31fd6475245454e53",
  GENS: "dda5fdb1002f7389b33e036b6afee82a8189becb6cba852e8b79b4fb0014df1047454e53",
  SOCIETY: "25f0fc240e91bd95dcdaebd2ba7713fc5168ac77234a3d79449fc20c534f4349455459",
  DJED: "8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61446a65644d6963726f555344",
  SHEN: "8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd615368656e4d6963726f555344",
  WMT: "1d7f33bd23d85e1a25d87d86fac4f199c3197a2f7afeb662a0f34e1e776f726c646d6f62696c65746f6b656e",
  COPI: "b6a7467ea1deb012808ef4e87b5ff371e85f7142d7b356a40d9b42a0436f726e75636f70696173205b76696120436861696e506f72742e696f5d"
};
var CIP68_100 = (tokenNameHex) => {
  return `000643b0${tokenNameHex}`;
};
var CIP68_222 = (tokenNameHex) => {
  return `000de140${tokenNameHex}`;
};

// src/types/asset.ts
var mergeAssets = (assets) => {
  const merged = [];
  assets.forEach((asset) => {
    const existing = merged.find((a) => a.unit === asset.unit);
    if (existing) {
      existing.quantity = (BigInt(existing.quantity) + BigInt(asset.quantity)).toString();
    } else {
      merged.push(asset);
    }
  });
  return merged;
};

// src/types/asset-metadata.ts
var royaltiesStandardKeys = ["rate", "address"];
var metadataStandardKeys = [
  "name",
  "image",
  "mediaType",
  "description",
  "instagram",
  "twitter",
  "discord",
  "website"
];
var fungibleAssetKeys = ["ticker", "decimals"];
var metadataToCip68 = (metadata) => {
  switch (typeof metadata) {
    case "object":
      if (metadata instanceof Array) {
        return metadata.map((item) => metadataToCip68(item));
      }
      const metadataMap = /* @__PURE__ */ new Map();
      const keys = Object.keys(metadata);
      keys.forEach((key) => {
        metadataMap.set(key, metadataToCip68(metadata[key]));
      });
      return {
        alternative: 0,
        fields: [metadataMap, 1]
      };
    default:
      return metadata;
  }
};

// src/types/network.ts
var ALL_NETWORKS = ["testnet", "preview", "preprod", "mainnet"];
var isNetwork = (value2) => {
  return ALL_NETWORKS.includes(value2);
};

// src/types/protocol.ts
var castProtocol = (data) => {
  const result = {};
  for (const rawKey in DEFAULT_PROTOCOL_PARAMETERS) {
    const key = rawKey;
    const defaultValue = DEFAULT_PROTOCOL_PARAMETERS[key];
    const value2 = data[key];
    if (typeof defaultValue === "number") {
      result[key] = !value2 && value2 !== 0 ? defaultValue : Number(value2);
    } else if (typeof defaultValue === "string") {
      result[key] = !value2 && value2 !== "" ? defaultValue : value2.toString();
    }
  }
  return result;
};

// src/types/transaction-builder/index.ts
var emptyTxBuilderBody = () => ({
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
    includeTxFees: true
  },
  network: "mainnet"
});
var validityRangeToObj = (validityRange) => {
  return {
    invalidBefore: validityRange.invalidBefore ?? null,
    invalidHereafter: validityRange.invalidHereafter ?? null
  };
};

// src/data/mesh/constructors.ts
var mConStr = (alternative, fields) => ({
  alternative,
  fields
});
var mConStr0 = (fields) => ({
  alternative: 0,
  fields
});
var mConStr1 = (fields) => ({
  alternative: 1,
  fields
});
var mConStr2 = (fields) => ({
  alternative: 2,
  fields
});

// src/data/mesh/aliases.ts
var mAssetClass = (currencySymbolHex, tokenNameHex) => {
  if (currencySymbolHex.length !== 56 && currencySymbolHex !== "") {
    throw new Error(
      `Invalid policy id for [${currencySymbolHex}] - should be ${POLICY_ID_LENGTH} bytes long or empty string for lovelace`
    );
  }
  if (tokenNameHex.length > 64) {
    throw new Error(
      `Invalid asset name for [${tokenNameHex}] - should be less than 32 bytes (64 hex length) long`
    );
  }
  return mConStr0([currencySymbolHex, tokenNameHex]);
};
var mOutputReference = (txHash, index) => {
  if (txHash.length !== 64) {
    throw new Error("Invalid transaction hash - should be 32 bytes long");
  }
  return mConStr0([mConStr0([txHash]), index]);
};
var mTxOutRef = (txHash, index) => mOutputReference(txHash, index);
var mTuple = (key, value2) => [key, value2];

// src/data/mesh/credentials.ts
var mMaybeStakingHash = (stakeCredential, isScriptCredential = false) => {
  if (stakeCredential === "") {
    return mConStr1([]);
  }
  if (isScriptCredential) {
    return mConStr0([mConStr0([mConStr1([stakeCredential])])]);
  }
  return mConStr0([mConStr0([mConStr0([stakeCredential])])]);
};
var mPubKeyAddress = (bytes, stakeCredential, isScriptCredential = false) => mConStr0([
  { alternative: 0, fields: [bytes] },
  mMaybeStakingHash(stakeCredential || "", isScriptCredential)
]);
var mScriptAddress = (bytes, stakeCredential, isScriptCredential = false) => mConStr0([
  { alternative: 1, fields: [bytes] },
  mMaybeStakingHash(stakeCredential || "", isScriptCredential)
]);

// src/data/mesh/primitives.ts
var mBool = (b) => b ? mConStr1([]) : mConStr0([]);
var mStringToPlutusBSArray = (hexString) => {
  const chunks = [];
  for (let i = 0; i < hexString.length; i += 64) {
    const chunk = hexString.substring(i, i + 64);
    chunks.push(chunk);
  }
  return chunks;
};
var mPlutusBSArrayToString = (bsArray) => {
  return bsArray.join("");
};

// src/data/json/constructors.ts
var conStr = (constructor, fields) => {
  if (!Array.isArray(fields)) {
    throw new Error("fields of a constructor must be an array");
  }
  return {
    constructor,
    fields
  };
};
var conStr0 = (fields) => conStr(0, fields);
var conStr1 = (fields) => conStr(1, fields);
var conStr2 = (fields) => conStr(2, fields);

// src/data/json/primitives.ts
var bool = (b) => b ? conStr1([]) : conStr0([]);
var builtinByteString = (bytes) => {
  return byteString(bytes);
};
var byteString = (bytes) => {
  if (bytes.length % 2 !== 0) {
    throw new Error("Invalid hex string - odd length: " + bytes);
  }
  if (!/^[0-9a-fA-F]*$/.test(bytes)) {
    throw new Error("Invalid hex string - non-hex string character: " + bytes);
  }
  return {
    bytes
  };
};
var integer = (int) => ({ int });
var list = (pList, validation = true) => {
  if (validation) {
    pList.forEach((item) => {
      if (typeof item !== "object") {
        throw new Error(
          "List item of JSON Cardano data type must be an object - " + item
        );
      }
    });
  }
  return { list: pList };
};
var stringToBSArray = (hexString) => {
  const processRawStringIntoPlutusByteArray = (hexString2) => {
    const chunks = [];
    for (let i = 0; i < hexString2.length; i += 64) {
      const chunk = hexString2.substring(i, i + 64);
      chunks.push(chunk);
    }
    return chunks;
  };
  return list(
    processRawStringIntoPlutusByteArray(hexString).map(builtinByteString)
  );
};
var plutusBSArrayToString = (bsArray) => {
  return bsArray.list.map((bs) => bs.bytes).join("");
};
var assocMap = (mapItems, validation = true) => ({
  map: mapItems.map(([k, v]) => {
    if (validation) {
      if (typeof k !== "object" || typeof v !== "object") {
        throw new Error(
          `Map item of JSON Cardano data type must be an object - ${k}, ${v}`
        );
      }
    }
    return { k, v };
  })
});

// src/data/json/aliases.ts
var hashByteString = (bytes) => {
  if (bytes.length !== 56) {
    throw new Error(`Invalid hash for [${bytes}] - should be 56 bytes long`);
  }
  return byteString(bytes);
};
var scriptHash = (bytes) => hashByteString(bytes);
var pubKeyHash = (bytes) => hashByteString(bytes);
var policyId = (bytes) => {
  if (bytes.length !== POLICY_ID_LENGTH && bytes !== "") {
    throw new Error(
      `Invalid policy id for [${bytes}] - should be ${POLICY_ID_LENGTH} bytes long or empty string for lovelace`
    );
  }
  return byteString(bytes);
};
var currencySymbol = (bytes) => policyId(bytes);
var assetName = (bytes) => {
  if (bytes.length > 64) {
    throw new Error(
      `Invalid asset name for [${bytes}] - should be less than 32 bytes (64 hex length) long`
    );
  }
  return byteString(bytes);
};
var tokenName = (bytes) => assetName(bytes);
var assetClass = (currencySymbolHex, tokenNameHex) => conStr0([currencySymbol(currencySymbolHex), tokenName(tokenNameHex)]);
var outputReference = (txHash, index) => {
  if (txHash.length !== 64) {
    throw new Error("Invalid transaction hash - should be 32 bytes long");
  }
  return conStr0([conStr0([byteString(txHash)]), integer(index)]);
};
var txOutRef = (txHash, index) => outputReference(txHash, index);
var posixTime = (int) => ({ int });
var dict = (itemsMap) => ({
  map: itemsMap.map(([k, v]) => ({ k, v }))
});
var tuple = (key, value2) => ({ list: [key, value2] });

// src/data/json/credentials.ts
var maybeStakingHash = (stakeCredential, isScriptCredential = false) => {
  if (stakeCredential === "") {
    return conStr1([]);
  }
  if (isScriptCredential) {
    return conStr0([
      conStr0([conStr1([scriptHash(stakeCredential)])])
    ]);
  }
  return conStr0([
    conStr0([conStr0([pubKeyHash(stakeCredential)])])
  ]);
};
var pubKeyAddress = (bytes, stakeCredential, isScriptCredential = false) => conStr0([
  conStr0([pubKeyHash(bytes)]),
  maybeStakingHash(stakeCredential || "", isScriptCredential)
]);
var scriptAddress = (bytes, stakeCredential, isScriptCredential = false) => conStr0([
  conStr1([scriptHash(bytes)]),
  maybeStakingHash(stakeCredential || "", isScriptCredential)
]);

// src/data/parser.ts
var bytesToHex = (bytes) => Buffer.from(bytes).toString("hex");
var hexToBytes = (hex) => Buffer.from(hex, "hex");
var stringToHex = (str) => Buffer.from(str, "utf8").toString("hex");
var hexToString = (hex) => Buffer.from(hex, "hex").toString("utf8");
var toBytes = (hex) => {
  if (hex.length % 2 === 0 && /^[0-9A-F]*$/i.test(hex))
    return Buffer.from(hex, "hex");
  return Buffer.from(hex, "utf-8");
};
var fromUTF8 = (utf8) => {
  if (utf8.length % 2 === 0 && /^[0-9A-F]*$/i.test(utf8)) return utf8;
  return bytesToHex(Buffer.from(utf8, "utf-8"));
};
var toUTF8 = (hex) => Buffer.from(hex, "hex").toString("utf-8");
var parseAssetUnit = (unit) => {
  const policyId2 = unit.slice(0, POLICY_ID_LENGTH);
  const assetName2 = unit.includes(".") ? fromUTF8(unit.split(".")[1]) : unit.slice(POLICY_ID_LENGTH);
  return { policyId: policyId2, assetName: assetName2 };
};

// src/data/time.ts
var SLOT_CONFIG_NETWORK = {
  mainnet: {
    zeroTime: 1596059091e3,
    zeroSlot: 4492800,
    slotLength: 1e3,
    startEpoch: 208,
    epochLength: 432e3
  },
  // Starting at Shelley era
  preview: {
    zeroTime: 1666656e6,
    zeroSlot: 0,
    slotLength: 1e3,
    startEpoch: 0,
    epochLength: 86400
  },
  // Starting at Shelley era
  preprod: {
    zeroTime: 16540416e5 + 1728e6,
    zeroSlot: 86400,
    slotLength: 1e3,
    startEpoch: 4,
    epochLength: 432e3
  },
  // Starting at Shelley era
  /** Customizable slot config (Initialized with 0 values). */
  testnet: {
    zeroTime: 0,
    zeroSlot: 0,
    slotLength: 0,
    startEpoch: 0,
    epochLength: 0
  }
};
var slotToBeginUnixTime = (slot, slotConfig) => {
  const msAfterBegin = (slot - slotConfig.zeroSlot) * slotConfig.slotLength;
  return slotConfig.zeroTime + msAfterBegin;
};
var unixTimeToEnclosingSlot = (unixTime, slotConfig) => {
  const timePassed = unixTime - slotConfig.zeroTime;
  const slotsPassed = Math.floor(timePassed / slotConfig.slotLength);
  return slotsPassed + slotConfig.zeroSlot;
};
var resolveSlotNo = (network, milliseconds = Date.now()) => {
  return unixTimeToEnclosingSlot(
    milliseconds,
    SLOT_CONFIG_NETWORK[network]
  ).toString();
};
var resolveEpochNo = (network, milliseconds = Date.now()) => {
  const config = SLOT_CONFIG_NETWORK[network];
  const msBigInt = BigInt(milliseconds);
  const epoch = (msBigInt - BigInt(config.zeroTime)) / 1000n / BigInt(config.epochLength) + BigInt(config.startEpoch);
  return Number(epoch);
};

// src/utils/asset-fingerprint.ts
import { bech32 } from "bech32";
import blake2b from "blake2b";
var resolveFingerprint = (policyId2, assetName2) => {
  return AssetFingerprint.fromParts(
    toBytes(policyId2),
    toBytes(assetName2)
  ).fingerprint();
};
var DATA = "asset";
var AssetFingerprint = class _AssetFingerprint {
  hashBuf;
  constructor(hashBuf) {
    this.hashBuf = hashBuf;
  }
  static fromHash(hash) {
    return new _AssetFingerprint(hash);
  }
  static fromParts(policyId2, assetName2) {
    const hashBuf = blake2b(20).update(new Uint8Array([...policyId2, ...assetName2])).digest("binary");
    return _AssetFingerprint.fromHash(hashBuf);
  }
  static fromBech32(fingerprint) {
    const { prefix, words } = bech32.decode(fingerprint);
    if (prefix !== DATA) {
      throw new Error("Invalid asset fingerprint");
    }
    const hashBuf = Buffer.from(bech32.fromWords(words));
    return _AssetFingerprint.fromHash(hashBuf);
  }
  fingerprint() {
    const words = bech32.toWords(this.hashBuf);
    return bech32.encode(DATA, words);
  }
  hash() {
    return Buffer.from(this.hashBuf).toString("hex");
  }
  prefix() {
    return DATA;
  }
  // The last six characters of the data part form a checksum and contain no information
  checksum() {
    return this.fingerprint().slice(-6);
  }
};

// src/utils/bigNum.ts
var BigNum = class _BigNum {
  value;
  constructor(value2) {
    if (!value2) {
      this.value = BigInt(0);
      return;
    }
    this.value = BigInt(value2);
  }
  static new(value2) {
    if (!value2) {
      return new _BigNum(0);
    }
    return new _BigNum(value2);
  }
  // Operators
  divFloor(other) {
    this.value = this.value / other.value;
    return this;
  }
  checkedMul(other) {
    this.value *= other.value;
    return this;
  }
  checkedAdd(other) {
    this.value += other.value;
    return this;
  }
  checkedSub(other) {
    this.value -= other.value;
    return this;
  }
  clampedSub(other) {
    const result = this.value - other.value;
    this.value = result < 0n ? 0n : result;
    return this;
  }
  // Comparators
  lessThan(other) {
    return this.value < other.value;
  }
  compare(other) {
    if (this.value === other.value) {
      return 0;
    } else if (this.value < other.value) {
      return -1;
    } else {
      return 1;
    }
  }
  // Override
  toString() {
    return this.value.toString();
  }
};

// src/data/value.ts
var value = (assets) => {
  return MeshValue.fromAssets(assets).toJSON();
};
var mValue = (assets) => {
  return MeshValue.fromAssets(assets).toData();
};
var MeshValue = class _MeshValue {
  value;
  constructor(value2 = {}) {
    this.value = value2;
  }
  /**
   * Converting assets into MeshValue
   * @param assets The assets to convert
   * @returns MeshValue
   */
  static fromAssets = (assets) => {
    const value2 = new _MeshValue();
    value2.addAssets(assets);
    return value2;
  };
  /**
   * Converting Value (the JSON representation of Cardano data Value) into MeshValue
   * @param plutusValue The Value to convert
   * @returns MeshValue
   */
  static fromValue = (plutusValue) => {
    const assets = [];
    plutusValue.map.forEach((policyMap) => {
      const policy = policyMap.k.bytes;
      policyMap.v.map.forEach((tokenMap) => {
        const token = tokenMap.k.bytes;
        const quantity = tokenMap.v.int.toString();
        const unsanitizedUnit = policy + token;
        const unit = unsanitizedUnit === "" ? "lovelace" : unsanitizedUnit;
        assets.push({ unit, quantity });
      });
    });
    return _MeshValue.fromAssets(assets);
  };
  /**
   * Add an asset to the Value class's value record.
   * @param asset The asset to add
   * @returns The updated MeshValue object
   */
  addAsset = (asset) => {
    const quantity = BigInt(asset.quantity);
    const { unit } = asset;
    if (this.value[unit]) {
      this.value[unit] += quantity;
    } else {
      this.value[unit] = quantity;
    }
    return this;
  };
  /**
   * Add an array of assets to the Value class's value record.
   * @param assets The assets to add
   * @returns The updated MeshValue object
   */
  addAssets = (assets) => {
    assets.forEach((asset) => {
      this.addAsset(asset);
    });
    return this;
  };
  /**
   * Substract an asset from the Value class's value record.
   * @param asset The asset to subtract
   * @returns The updated MeshValue object
   */
  negateAsset = (asset) => {
    const { unit, quantity: assetQty } = asset;
    const quantity = BigNum.new(this.value[unit]);
    quantity.clampedSub(BigNum.new(assetQty));
    if (quantity.value === BigInt(0)) {
      delete this.value[unit];
    } else {
      this.value[unit] = quantity.value;
    }
    return this;
  };
  /**
   * Subtract an array of assets from the Value class's value record.
   * @param assets The assets to subtract
   * @returns The updated MeshValue object
   */
  negateAssets = (assets) => {
    assets.forEach((asset) => {
      this.negateAsset(asset);
    });
    return this;
  };
  /**
   * Get the quantity of asset object per unit
   * @param unit The unit to get the quantity of
   * @returns The quantity of the asset
   */
  get = (unit) => {
    return this.value[unit] ? BigInt(this.value[unit]) : BigInt(0);
  };
  /**
   * Get all asset units
   * @returns The asset units
   */
  units = () => {
    return Object.keys(this.value);
  };
  /**
   * Check if the value is greater than or equal to another value
   * @param other - The value to compare against
   * @returns boolean
   */
  geq = (other) => {
    return Object.keys(other.value).every((key) => this.geqUnit(key, other));
  };
  /**
   * Check if the specific unit of value is greater than or equal to that unit of another value
   * @param unit - The unit to compare
   * @param other - The value to compare against
   * @returns boolean
   */
  geqUnit = (unit, other) => {
    if (this.value[unit] === void 0 || other.value[unit] === void 0) {
      return false;
    }
    return BigInt(this.value[unit]) >= BigInt(other.value[unit]);
  };
  /**
   * Check if the value is less than or equal to another value
   * @param other - The value to compare against
   * @returns boolean
   */
  leq = (other) => {
    return Object.keys(this.value).every((key) => this.leqUnit(key, other));
  };
  /**
   * Check if the specific unit of value is less than or equal to that unit of another value
   * @param unit - The unit to compare
   * @param other - The value to compare against
   * @returns boolean
   */
  leqUnit = (unit, other) => {
    if (this.value[unit] === void 0 || other.value[unit] === void 0) {
      return false;
    }
    return BigInt(this.value[unit]) <= BigInt(other.value[unit]);
  };
  /**
   * Check if the value is empty
   * @returns boolean
   */
  isEmpty = () => {
    return Object.keys(this.value).length === 0;
  };
  /**
   * Merge the given values
   * @param values The other values to merge
   * @returns this
   */
  merge = (values) => {
    const valuesArray = Array.isArray(values) ? values : [values];
    valuesArray.forEach((other) => {
      Object.entries(other.value).forEach(([key, value2]) => {
        this.value[key] = (this.value[key] !== void 0 ? BigInt(this.value[key]) : BigInt(0)) + BigInt(value2);
      });
    });
    return this;
  };
  /**
   * Convert the MeshValue object into an array of Asset
   * @returns The array of Asset
   */
  toAssets = () => {
    const assets = [];
    Object.entries(this.value).forEach(([unit, quantity]) => {
      assets.push({ unit, quantity: quantity.toString() });
    });
    return assets;
  };
  /**
   * Convert the MeshValue object into Cardano data Value in Mesh Data type
   */
  toData = () => {
    const valueMap = /* @__PURE__ */ new Map();
    this.toAssets().forEach((asset) => {
      const policy = asset.unit.slice(0, 56) || "";
      const token = asset.unit.slice(56) || "";
      if (!valueMap.has(policy)) {
        valueMap.set(policy, /* @__PURE__ */ new Map());
      }
      const tokenMap = valueMap.get(policy);
      const quantity = tokenMap?.get(token);
      if (!quantity) {
        tokenMap.set(token, BigInt(asset.quantity));
      } else {
        tokenMap.set(token, quantity + BigInt(asset.quantity));
      }
    });
    return valueMap;
  };
  /**
   * Convert the MeshValue object into a JSON representation of Cardano data Value
   * @returns Cardano data Value in JSON
   */
  toJSON = () => {
    const valueMapToParse = [];
    const valueMap = {};
    this.toAssets().forEach((asset) => {
      const sanitizedName = asset.unit.replace("lovelace", "");
      const policy = sanitizedName.slice(0, 56) || "";
      const token = sanitizedName.slice(56) || "";
      if (!valueMap[policy]) {
        valueMap[policy] = {};
      }
      if (!valueMap[policy][token]) {
        valueMap[policy][token] = Number(asset.quantity);
      } else {
        valueMap[policy][token] += Number(asset.quantity);
      }
    });
    Object.keys(valueMap).forEach((policy) => {
      const policyByte = currencySymbol(policy);
      const tokens = Object.keys(valueMap[policy]).map(
        (name) => [tokenName(name), integer(valueMap[policy][name])]
      );
      const policyMap = assocMap(tokens);
      valueMapToParse.push([policyByte, policyMap]);
    });
    return assocMap(valueMapToParse);
  };
};

// src/utxo-selection/experimental.ts
var experimentalSelectUtxos = (requiredAssets, inputs, threshold) => {
  const totalRequiredAssets = new Map(requiredAssets);
  totalRequiredAssets.set(
    "lovelace",
    String(
      Number(totalRequiredAssets.get("lovelace") || 0) + Number(threshold)
    )
  );
  const utxoMap = /* @__PURE__ */ new Map();
  for (let i = 0; i < inputs.length; i++) {
    utxoMap.set(i, inputs[i]);
  }
  const selectedInputs = /* @__PURE__ */ new Set();
  const onlyLovelace = /* @__PURE__ */ new Set();
  const singletons = /* @__PURE__ */ new Set();
  const pairs = /* @__PURE__ */ new Set();
  const rest = /* @__PURE__ */ new Set();
  const collaterals = /* @__PURE__ */ new Set();
  for (let i = 0; i < inputs.length; i++) {
    switch (inputs[i].output.amount.length) {
      case 1: {
        const quantity = inputs[i].output.amount[0]?.quantity;
        if (quantity == "5000000" || quantity == "10000000") {
          collaterals.add(i);
          break;
        }
        onlyLovelace.add(i);
        break;
      }
      case 2: {
        singletons.add(i);
        break;
      }
      case 3: {
        pairs.add(i);
        break;
      }
      default: {
        rest.add(i);
        break;
      }
    }
  }
  const addUtxoWithAssetAmount = (inputIndex, assetUnit, set) => {
    const utxo = utxoMap.get(inputIndex);
    if (!utxo) return;
    const amount = getAssetAmount(utxo, assetUnit);
    if (Number(amount) > 0) {
      selectedInputs.add(inputIndex);
      set.delete(inputIndex);
      for (const asset of utxo.output.amount) {
        totalRequiredAssets.set(
          asset.unit,
          String(
            Number(totalRequiredAssets.get(asset.unit)) - Number(asset.quantity)
          )
        );
      }
    }
  };
  for (const assetUnit of totalRequiredAssets.keys()) {
    if (assetUnit == "lovelace") continue;
    for (const inputIndex of singletons) {
      const assetRequired = totalRequiredAssets.get(assetUnit);
      if (!assetRequired || Number(assetRequired) <= 0) break;
      addUtxoWithAssetAmount(inputIndex, assetUnit, singletons);
    }
    for (const inputIndex of pairs) {
      const assetRequired = totalRequiredAssets.get(assetUnit);
      if (!assetRequired || Number(assetRequired) <= 0) break;
      addUtxoWithAssetAmount(inputIndex, assetUnit, pairs);
    }
    for (const inputIndex of rest) {
      const assetRequired = totalRequiredAssets.get(assetUnit);
      if (!assetRequired || Number(assetRequired) <= 0) break;
      addUtxoWithAssetAmount(inputIndex, assetUnit, rest);
    }
  }
  for (const inputIndex of onlyLovelace) {
    const assetRequired = totalRequiredAssets.get("lovelace");
    if (!assetRequired || Number(assetRequired) <= 0) break;
    addUtxoWithAssetAmount(inputIndex, "lovelace", onlyLovelace);
  }
  for (const inputIndex of singletons) {
    const assetRequired = totalRequiredAssets.get("lovelace");
    if (!assetRequired || Number(assetRequired) <= 0) break;
    addUtxoWithAssetAmount(inputIndex, "lovelace", singletons);
  }
  for (const inputIndex of pairs) {
    const assetRequired = totalRequiredAssets.get("lovelace");
    if (!assetRequired || Number(assetRequired) <= 0) break;
    addUtxoWithAssetAmount(inputIndex, "lovelace", pairs);
  }
  for (const inputIndex of rest) {
    const assetRequired = totalRequiredAssets.get("lovelace");
    if (!assetRequired || Number(assetRequired) <= 0) break;
    addUtxoWithAssetAmount(inputIndex, "lovelace", rest);
  }
  for (const inputIndex of collaterals) {
    const assetRequired = totalRequiredAssets.get("lovelace");
    if (!assetRequired || Number(assetRequired) <= 0) break;
    addUtxoWithAssetAmount(inputIndex, "lovelace", collaterals);
  }
  for (const assetUnit of totalRequiredAssets.keys()) {
    if (Number(totalRequiredAssets.get(assetUnit)) > 0) {
      console.warn("Insufficient funds for", assetUnit);
      console.warn(
        "Remaining quantity",
        Number(totalRequiredAssets.get(assetUnit))
      );
      return [];
    }
  }
  const selectedUtxos = [];
  for (const inputIndex of selectedInputs) {
    const utxo = utxoMap.get(inputIndex);
    if (utxo) {
      selectedUtxos.push(utxo);
    }
  }
  return selectedUtxos;
};
var getAssetAmount = (utxo, assetUnit) => {
  for (const utxoAsset of utxo.output.amount) {
    if (utxoAsset.unit == assetUnit) return utxoAsset.quantity;
  }
  return "0";
};

// src/utxo-selection/common.ts
var enoughValueHasBeenSelected = (selection, assets) => {
  return Array.from(assets, (asset) => ({
    unit: asset[0],
    quantity: BigNum.new(asset[1])
  })).every((asset) => {
    return selection.filter((utxo) => {
      return utxo.output.amount.find((a) => a.unit === asset.unit) !== void 0;
    }).reduce((selectedQuantity, utxo) => {
      const utxoQuantity = utxo.output.amount.reduce(
        (quantity, a) => quantity.checkedAdd(
          BigNum.new(asset.unit === a.unit ? a.quantity : "0")
        ),
        BigNum.new("0")
      );
      return selectedQuantity.checkedAdd(utxoQuantity);
    }, BigNum.new("0")).lessThan(asset.quantity) === false;
  });
};
var largestLovelaceQuantity = (utxoA, utxoB) => {
  const aLovelaceQuantity = BigNum.new(
    utxoA.output.amount.find((asset) => asset.unit === "lovelace")?.quantity ?? "0"
  );
  const bLovelaceQuantity = BigNum.new(
    utxoB.output.amount.find((asset) => asset.unit === "lovelace")?.quantity ?? "0"
  );
  return bLovelaceQuantity.compare(aLovelaceQuantity);
};
var maxTxFees = (parameters) => {
  const { maxTxSize, minFeeA, minFeeB } = parameters;
  return BigNum.new(resolveTxFees(maxTxSize, minFeeA, minFeeB));
};
var multiAssetUTxO = (utxo) => utxo.output.amount.length > 1;
var selectedLovelaceQuantity = (multiAsset) => {
  return multiAsset.reduce((sum, utxo) => {
    const lovelace = utxo.output.amount.find((asset) => asset.unit === "lovelace")?.quantity ?? "0";
    return sum.checkedAdd(BigNum.new(lovelace));
  }, BigNum.new("0"));
};
var remainingLovelace = (quantity, initialUTxOSet) => {
  const sortedUTxOs = initialUTxOSet.sort(largestLovelaceQuantity);
  const requestedOutputSet = /* @__PURE__ */ new Map([["lovelace", quantity]]);
  const selection = selectValue(sortedUTxOs, requestedOutputSet);
  return selection;
};
var selectValue = (inputUTxO, outputSet, selection = []) => {
  if (inputUTxO.length === 0 || enoughValueHasBeenSelected(selection, outputSet)) {
    return selection;
  }
  if (valueCanBeSelected(inputUTxO[0], outputSet)) {
    return selectValue(inputUTxO.slice(1), outputSet, [
      ...selection,
      inputUTxO[0]
    ]);
  }
  return selectValue(inputUTxO.slice(1), outputSet, selection);
};
var valueCanBeSelected = (utxo, assets) => {
  return Array.from(assets.keys()).some((unit) => {
    return utxo.output.amount.find((asset) => asset.unit === unit) !== void 0;
  });
};

// src/utxo-selection/keepRelevant.ts
var keepRelevant = (requiredAssets, inputs, threshold = "5000000") => {
  const requestedLovelace = BigNum.new(
    requiredAssets.get("lovelace") ?? "0"
  ).checkedAdd(BigNum.new(threshold));
  const multiAsset = inputs.filter(
    (utxo) => utxo.output.amount.filter((asset) => asset.unit !== "lovelace").some((asset) => requiredAssets.has(asset.unit))
  );
  const selectedLovelace = selectedLovelaceQuantity(multiAsset);
  const lovelace = selectedLovelace.lessThan(requestedLovelace) ? remainingLovelace(
    requestedLovelace.clampedSub(selectedLovelace).toString(),
    inputs.filter((input) => {
      return !multiAsset.some(
        (selectedUtxo) => selectedUtxo.input.txHash === input.input.txHash && selectedUtxo.input.outputIndex === input.input.outputIndex
      );
    })
  ) : [];
  return [...lovelace, ...multiAsset];
};

// src/utxo-selection/largestFirst.ts
var largestFirst = (lovelace, initialUTxOSet, includeTxFees = false, { maxTxSize, minFeeA, minFeeB } = DEFAULT_PROTOCOL_PARAMETERS) => {
  const sortedUTxOs = initialUTxOSet.filter((utxo) => multiAssetUTxO(utxo) === false).sort(largestLovelaceQuantity);
  const maxTxFees2 = BigNum.new(resolveTxFees(maxTxSize, minFeeA, minFeeB));
  const quantity = includeTxFees ? BigNum.new(lovelace).checkedAdd(maxTxFees2).toString() : lovelace;
  const requestedOutputSet = /* @__PURE__ */ new Map([["lovelace", quantity]]);
  const selection = selectValue(sortedUTxOs, requestedOutputSet);
  return selection;
};

// src/utxo-selection/largestFirstMultiAsset.ts
var largestFirstMultiAsset = (requestedOutputSet, initialUTxOSet, includeTxFees = false, parameters = DEFAULT_PROTOCOL_PARAMETERS) => {
  const sortedMultiAssetUTxOs = initialUTxOSet.filter(multiAssetUTxO).sort(largestLovelaceQuantity);
  const txFees = maxTxFees(parameters);
  const lovelace = requestedOutputSet.get("lovelace") ?? "0";
  const quantity = includeTxFees ? BigNum.new(lovelace).checkedAdd(txFees).toString() : lovelace;
  requestedOutputSet.set("lovelace", quantity);
  const selection = selectValue(sortedMultiAssetUTxOs, requestedOutputSet);
  return selection;
};

// src/utxo-selection/index.ts
var UtxoSelection = class {
  threshold;
  includeTxFees;
  constructor(threshold = "5000000", includeTxFees = true) {
    this.threshold = threshold;
    this.includeTxFees = includeTxFees;
  }
  largestFirst(requiredAssets, inputs) {
    const lovelaceAmount = requiredAssets.get("lovelace") ?? "0";
    const requiredAssetWithThreshold = BigInt(lovelaceAmount) + BigInt(this.threshold);
    return largestFirst(
      requiredAssetWithThreshold.toString(),
      inputs,
      this.includeTxFees
    );
  }
  keepRelevant(requiredAssets, inputs) {
    return keepRelevant(requiredAssets, inputs, this.threshold);
  }
  largestFirstMultiAsset(requiredAssets, inputs) {
    const lovelaceAmount = requiredAssets.get("lovelace") ?? "0";
    requiredAssets.set(
      "lovelace",
      (BigInt(lovelaceAmount) + BigInt(this.threshold)).toString()
    );
    return largestFirstMultiAsset(requiredAssets, inputs, this.includeTxFees);
  }
  experimental(requiredAssets, inputs) {
    return experimentalSelectUtxos(requiredAssets, inputs, this.threshold);
  }
};

// src/index.ts
import { generateMnemonic, mnemonicToEntropy } from "bip39";
export {
  AssetFingerprint,
  BigNum,
  CIP68_100,
  CIP68_222,
  DEFAULT_PROTOCOL_PARAMETERS,
  DEFAULT_REDEEMER_BUDGET,
  DEFAULT_V1_COST_MODEL_LIST,
  DEFAULT_V2_COST_MODEL_LIST,
  HARDENED_KEY_START,
  LANGUAGE_VERSIONS,
  MeshValue,
  POLICY_ID_LENGTH,
  SLOT_CONFIG_NETWORK,
  SUPPORTED_CLOCKS,
  SUPPORTED_HANDLES,
  SUPPORTED_LANGUAGE_VIEWS,
  SUPPORTED_OGMIOS_LINKS,
  SUPPORTED_TOKENS,
  SUPPORTED_WALLETS,
  UtxoSelection,
  assetClass,
  assetName,
  assocMap,
  bool,
  builtinByteString,
  byteString,
  bytesToHex,
  castProtocol,
  conStr,
  conStr0,
  conStr1,
  conStr2,
  currencySymbol,
  dict,
  emptyTxBuilderBody,
  experimentalSelectUtxos,
  fromUTF8,
  fungibleAssetKeys,
  generateMnemonic,
  hashByteString,
  hexToBytes,
  hexToString,
  integer,
  isNetwork,
  keepRelevant,
  largestFirst,
  largestFirstMultiAsset,
  list,
  mAssetClass,
  mBool,
  mConStr,
  mConStr0,
  mConStr1,
  mConStr2,
  mMaybeStakingHash,
  mOutputReference,
  mPlutusBSArrayToString,
  mPubKeyAddress,
  mScriptAddress,
  mStringToPlutusBSArray,
  mTuple,
  mTxOutRef,
  mValue,
  maybeStakingHash,
  mergeAssets,
  metadataStandardKeys,
  metadataToCip68,
  mnemonicToEntropy,
  outputReference,
  parseAssetUnit,
  plutusBSArrayToString,
  policyId,
  posixTime,
  pubKeyAddress,
  pubKeyHash,
  resolveEpochNo,
  resolveFingerprint,
  resolveLanguageView,
  resolveSlotNo,
  resolveTxFees,
  royaltiesStandardKeys,
  scriptAddress,
  scriptHash,
  slotToBeginUnixTime,
  stringToBSArray,
  stringToHex,
  toBytes,
  toUTF8,
  tokenName,
  tuple,
  txOutRef,
  unixTimeToEnclosingSlot,
  validityRangeToObj,
  value
};
