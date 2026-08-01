import {Filters} from "@core/models/udea.model";

export const emptyFilterState: Filters = {
  mostrarSolo: "",
  buscarEn: "",
  ordenarPor: "",
  tipoOrden: "",
  categoria: ""
};

export const initialFilterState: Filters = {
  mostrarSolo: "productos",
  buscarEn: "todas",
  ordenarPor: "nombre",
  tipoOrden: "ascendente",
  categoria: "todas"
};

export const filterOptions = {
  mostrarSolo: ["productos", "tiendas"],
  buscarEn: ["todas", "formales", "informales"],
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
