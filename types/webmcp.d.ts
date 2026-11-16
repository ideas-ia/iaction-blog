// WebMCP declarativo (Origin Trial de Chrome): atributos que React no tipa todavía.
import "react";

declare module "react" {
  interface FormHTMLAttributes<T> {
    toolname?: string;
    tooldescription?: string;
    toolautosubmit?: boolean;
  }
  interface HTMLAttributes<T> {
    toolparamdescription?: string;
  }
}
