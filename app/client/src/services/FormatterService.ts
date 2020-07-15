class FormatterService {
  private static _numberFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  public static FormatValue(value: number) {
    return this._numberFormatter.format(value);
  }
}

export default FormatterService;
