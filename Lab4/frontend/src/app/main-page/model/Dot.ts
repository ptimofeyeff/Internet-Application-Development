export class Dot {

  areaCoordinates: AreaCoordinates = {x: null, y: null};
  svgCoordinates: SvgCoordinates = {x: null, y: null};
  r: number;

  constructor(r: number) {
    this.r = r;
  }

  svgInit(svgX: number, svgY: number){
    this.svgCoordinates.x = svgX;
    this.svgCoordinates.y = svgY;
    this.areaCoordinates.x = (svgX - 225)*0.005*this.r;
    this.areaCoordinates.y = (225 - svgY)*0.005*this.r;
  }

  areaInit(areaX: number, areaY: number){
    this.areaCoordinates.x = areaX;
    this.areaCoordinates.y = areaY;
    this.svgCoordinates.x = areaX / (0.005 * this.r) + 225;
    this.svgCoordinates.y = 225 - ( areaY / (0.005 * this.r));
  }

}


class AreaCoordinates {
  x: number;
  y: number;
}

class SvgCoordinates {
  x: number;
  y: number;
}
