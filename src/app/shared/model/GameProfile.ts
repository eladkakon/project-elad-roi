import { gameDifficult } from "../gameDifficult";


export class GameProfile {
   id: number;
   name: string;
   description: string;
   url: string;
   gameDifficult: gameDifficult;

   constructor(
    id: number,
    name: string,
    description: string,
    url: string,
    gameDifficult: gameDifficult
 
   )
{
    this.id = id,
    this.name = name,
    this.description = description, 
    this.url = url,
    this.gameDifficult = gameDifficult;
}

}