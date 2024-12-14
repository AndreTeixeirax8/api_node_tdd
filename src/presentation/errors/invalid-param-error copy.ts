export class InvalidParamError extends Error {
  constructor(paramName: string) {
    super(`Falta o parametro: ${paramName}`);
    this.name = "InvalidParamError";
  }
}
