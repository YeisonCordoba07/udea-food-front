import {Filters} from "@core/models/udea.model";

export const emptyFilterState: Filters = {
  mostrarSolo: "",
  buscarEn: "",
  ordenarPor: "",
  tipoOrden: "",
};

export const initialFilterState: Filters = {
  mostrarSolo: "productos",
  buscarEn: "todas las tiendas",
  ordenarPor: "nombre",
  tipoOrden: "ascendente",
};

export const filterOptions = {
  mostrarSolo: ["productos", "tiendas"],
  buscarEn: ["todas las tiendas", "formales", "informales"],
  ordenarPor: ["nombre", "precio"],
  tipoOrden: ["ascendente", "descendente"],
};
