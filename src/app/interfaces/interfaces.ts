export interface componenteMenu{

    icon:string;
    nombre:string;
    pagina:string;
    perfil:number
}

export interface Persona{
    cedula:string;
    nombre:string;
}

export interface Empleado{
    cedula:string;
    nombre:string;
    apellido:string;
    edad:number;
}

export interface Producto{
    count:number
    id:number;
    marca:string;
    nombre:string;
    precio:number;
    foto:string;
}

export interface Catalogo{
    expanded:boolean;
    categoria:string;
    producto:Producto[];
}