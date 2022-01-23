export interface TableRow {
  /**
   * Moneda de la transacción
   */
  currency: string;
  /**
   * Precio de compra
   */
  purchasePrice: number;
  /**
   * Cantidad comprada
   */
  quantity: number;
  /**
   * Precio en all time high
   */
  athPrice: number;
  /**
   * Importe invertido
   */
  invested: number;
  /**
   * Ganancia en all time high
   */
  athProfits: number;
  /**
   * Precio deseado de venta
   */
  sellingPriceDesired: number;
  /**
   * Ganancia deseada
   */
  profitsDesired: number;
  /**
   * Xchange de compra
   */
  market: string;
}
