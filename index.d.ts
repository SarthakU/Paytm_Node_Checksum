declare namespace PaytmChecksum {
  function encrypt(input: string, key: string): string;
  function decrypt(encrypted: string, key: string): string;
  function generateSignature(
    params: Record<string, string | null> | string,
    key: string
  ): Promise<string>;
  function verifySignature(
    params: Record<string, string | null> | string,
    key: string,
    checksum: string
  ): boolean;
  function generateSignatureByString(params: string, key: string): string;
  function verifySignatureByString(
    params: string,
    key: string,
    checksum: string
  ): Promise<boolean>;
  function genrateRandomString(length: number): Promise<string>;
  function getStringByParams(params: Record<string, string | null>): string;
  function calculateHash(params: string, salt: string): string;
  function calculateChecksum(
    pramas: any,
    key: string,
    salt: string
  ): Promise<string>;

  type PaytmParams = {
    body: {
      requestType: string;
      mid: string;
      websiteName: string;
      orderId: string;
      callbackUrl: string;
      txnAmount: {
        value: string;
        currency: string;
      };
      userInfo: {
        custId: string;
      };
    };
    head?: {
      signature: string;
    };
  };
}

// @ts-ignore
export = PaytmChecksum;
export as namespace PaytmChecksum;
