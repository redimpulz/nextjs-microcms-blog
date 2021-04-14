declare namespace NodeJS {
  interface ProcessEnv {
    // サーバーのみで扱う環境変数
    readonly MICRO_CMS_API_ENDPOINT: string;
    readonly MICRO_CMS_API_KEY: string;
  }
}
