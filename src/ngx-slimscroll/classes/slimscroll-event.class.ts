export interface ISlimScrollEvent {
  type: 'scrollToBottom' | 'scrollToTop' | 'scrollTo';
  y?: number;
  duration?: number;
  easing?: 'linear' | 'inQuad' | 'outQuad' | 'inOutQuad' | 'inCubic' |
    'outCubic' | 'inOutCubic' | 'inQuart' | 'outQuart' | 'inOutQuart' |
    'inQuint' | 'outQuint' | 'inOutQuint';
}

export class SlimScrollEvent implements ISlimScrollEvent {
  type: 'scrollToBottom' | 'scrollToTop' | 'scrollTo';
  y?: number;
  duration?: number;
  easing: 'linear' | 'inQuad' | 'outQuad' | 'inOutQuad' | 'inCubic' |
    'outCubic' | 'inOutCubic' | 'inQuart' | 'outQuart' | 'inOutQuart' |
    'inQuint' | 'outQuint' | 'inOutQuint';

  constructor(obj?: ISlimScrollEvent) {
    this.type = obj.type;
    this.y = obj && obj.y ? obj.y : 0;
    this.duration = obj && obj.duration ? obj.duration : 0;
    this.easing = obj && obj.easing ? obj.easing : 'linear';
  }
}
