export class Position {

  index: number;
  xpos: number;
  ypos: number;
  angle: number;
  deltaAngle: number;
  deltaDeplacement: number;
  attenteAction: boolean;
  timeout: number;
  action: string;
  commentaire: string;


  constructor(index: number, xpos: number, ypos: number, angle: number, deltaAngle: number, deltaDeplacement: number, attenteAction: boolean, timeout: number, action: string, commentaire: string) {
    this.index = index;
    this.xpos = xpos;
    this.ypos = ypos;
    this.angle = angle;
    this.deltaAngle = deltaAngle;
    this.deltaDeplacement = deltaDeplacement;
    this.attenteAction = attenteAction;
    this.timeout = timeout;
    this.action = action;
    this.commentaire = commentaire;
  }


}
