import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoordinatesMapperService {

  constructor() {
  }

  static svgXtoAreaX(svgX: number, radius: number): number {
    return (svgX - 225) * 0.005 * radius;
  }

  static svgYtoAreaY(svgY: number, radius: number): number {
    return (225 - svgY)*0.005*radius;
  }

  static areaXtoSvgX(areaX: number, radius: number): number {
    return areaX / (0.005 * radius) + 225;
  }

  static areaYtoSvgY(areaY: number, radius: number): number {
    return  225 - ( areaY / (0.005 * radius))
  }


}
