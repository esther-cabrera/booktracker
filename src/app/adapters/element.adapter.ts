import { ElementApiResponse } from '../models/element-api.model';
import { ElementCataleg } from '../models/element-cataleg.model';

export function adaptarElement(api: ElementApiResponse): ElementCataleg {
  return {
    id: api.id,
    nom: api.nom,
    descripcio: api.descripcio,
    preu: api.preu,
    imatge: api.imatge,
  };
}
