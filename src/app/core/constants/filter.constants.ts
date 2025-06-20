import {Filters} from "@core/models/udea.model";

export const emptyFilterState: Filters = {
  mostrarSolo: "",
  buscarEn: "",
  ordenarPor: "",
  tipoOrden: "",
};

export const initialFilterState: Filters = {
  mostrarSolo: "Productos",
  buscarEn: "Todas las tiendas",
  ordenarPor: "Nombre",
  tipoOrden: "Ascendente",
};

export const filterOptions = {
  mostrarSolo: ["Productos", "Tiendas"],
  buscarEn: ["Todas las tiendas", "Formales", "Informales"],
  ordenarPor: ["Nombre", "Precio"],
  tipoOrden: ["Ascendente", "Descendente"],
};
