import {generatePoint} from '../fish/route-point.js';

export default class PointsModel {
  #points = Array.from({length: 3}, generatePoint);

  getPoints () {
    return this.#points;
  }
}