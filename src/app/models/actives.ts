export class Active{
  public _id!: string;
  public id_bien!: number;
  public descripcion?: string;
  public no_serie?: string;
  public marca?: string;
  public modelo?: string;
  public valor!: number;
  public resguardante?: string;
  public usuario?: string;
  public ubicacion?: string;
  public unidad_administrativa?: string;
  public estatus?: string;
  public fotos?: string;
  public baja?: {
    causa_baja: string,
    no_oficio: string,
    fecha_movimiento: Date,
    estatus_baja: string,
    observaciones: string
  };
  public create_user?: {
    id: String,
    username: String,
    email: String,
    accessToken: String,
  };
  public editor_user?: {
    id: String,
    username: String,
    email: String,
    accessToken: String,
  }
  public editCount!: number;
  public updatedAt!: Date;
}
