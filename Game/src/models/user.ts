export class user
{
  private pseudo: string;
  private pass: string;
  private language: string;
  private score: number;

  constructor(name: string, pass: string, language: string)
  {
    this.pseudo = name;
    this.pass = pass;
    this.language = language;
    this.score = 0;
  }

  setScore(score: number) {
    this.score = score;
  }

}
