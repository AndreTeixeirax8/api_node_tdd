export class MissingParamError extends Error {
  constructor(paramName: string) {
    super(`Falta o parametro: ${paramName}`);
  }
}
