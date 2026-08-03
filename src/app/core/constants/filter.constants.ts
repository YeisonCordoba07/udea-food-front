import {Filters} from "@core/models/udea.model";

export const emptyFilterState: Filters = {
  mostrarSolo: "",
  buscarEn: "",
  ordenarPor: "",
  tipoOrden: "",
  categoria: "",
  page: 0,
  size: 6,
};

export const initialFilterState: Filters = {
  mostrarSolo: "productos",
  buscarEn: "todas",
  ordenarPor: "nombre",
  tipoOrden: "ascendente",
  categoria: "todas",
  page: 0,
  size: 2,
};

export const filterOptions = {
  mostrarSolo: ["productos", "tiendas"],
  buscarEn: ["todas", "formal", "informal"],
  ordenarPor: ["nombre", "precio"],
  tipoOrden: ["ascendente", "descendente"],
  categoria: [
    "comida rápida",
    "comida saludable",
    "comida casera",
    "comida internacional",
    "desayunos",
    "almuerzos",
    "cenas",
    "postres",
    "bebidas",
    "parrilla y asados",
    "mariscos y pescados",
    "pastas",
    "pizza",
    "hamburguesas",
    "sushi",
    "tacos y comida mexicana",
    "comida asiática",
    "ensaladas",
    "panaderia y reposteria",
    "helados"
  ]
};
