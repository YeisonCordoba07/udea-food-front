export interface Categoria {
  idCategoria: number;
  nombre: string;
  descripcion: string | null;
}

export interface ProductoOld {
  idProducto: number;
  nombre: string;
  descripcion: string;
  precio: number;
  disponibilidad: boolean;
  categorias: Categoria[];
}

export interface Producto {
  idProducto: number;
  nombre: string;
  descripcion: string;
  precio: number;
  disponibilidad: boolean;
  categorias: Categoria[];
  imagenes?: string[];
  idTienda: number;
}


export interface SeccionTienda {
  idSeccionTienda: number;
  nombre: string;
  productos: Producto[];
}

export interface TiendaPerfil {
  idTienda: number;
  nombre: string;
  descripcion: string;
  ubicacion: string;
  foto: string | null;
  portada: string | null;
  haceDomicilio: boolean;
  celular: string;
  tipoTienda: string;
  calificacion: number;
  cantidadCalificaciones: number;
  fechaCreacion: string;
  categorias: string[];
  secciones: SeccionTienda[];
}

export interface Tienda {
  idTienda: number;
  nombre: string;
  descripcion: string;
  ubicacion: string;
  foto: string | null;
  portada: string | null;
  haceDomicilio: boolean;
  celular: string | null;
  tipoTienda: string;
  calificacion: number;
  cantidadCalificaciones: number;
  fechaCreacion: string;
  categorias: string[];
}

export interface Filters {
  mostrarSolo: string;
  buscarEn: string;
  ordenarPor: string;
  tipoOrden: string;
}

export interface AccountInfo {
  idActivo: number;
  usuario: UsuarioInfo;
  tiendas: TiendaInfo[];
}

export interface UsuarioInfo {
  id: number;
  nombre: string;
  foto: string | null;
  tipoCuenta: string;
}

export interface TiendaInfo {
  id: number;
  nombre: string;
  foto: string | null;
  tipoCuenta: string;
  tipoTienda: string;
}

//--------------------------------

export interface IngredienteProducto{
  id: string;
  idProducto: number;
  idTienda: number;
  ingredientes: Ingrediente[]
}
export interface IngredienteProductoRequest{
  idTienda: number;
  ingredientes: Ingrediente[];
}

export interface Ingrediente{
  nombre: string;
  minSeleccion: number;
  maxSeleccion: number;
  multiple: boolean;
  opciones: Opciones[]
}

export interface Opciones{
  nombre: string;
  costo: number;
}
