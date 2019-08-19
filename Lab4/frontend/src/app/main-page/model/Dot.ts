import {CoordinatesMapperService} from '../../share/coordinates-mapper.service';

export class Dot {
  x: number;
  y: number;
  r: number;
  isHit: boolean;
  svgX: number;
  svgY: number;

  constructor(x: number, y: number, r: number, isHit: boolean) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.isHit = isHit;
    this.svgX = CoordinatesMapperService.areaXtoSvgX(x, r);
    this.svgY = CoordinatesMapperService.areaYtoSvgY(y, r);
  }

  changeRadius(newR: number){
    this.r = newR;
    this.svgX = CoordinatesMapperService.areaXtoSvgX(this.x, this.r);
    this.svgY = CoordinatesMapperService.areaYtoSvgY(this.y, this.r)
  }

}

