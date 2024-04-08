export class gamePlayed{
    gameID: number;
    categoryID: number;
    date =  new Date();
    points: number;

    constructor(
        gameID: number,
    categoryID: number,
    date =  new Date(),
    points: number,
    )
    {
        this.gameID = gameID;
        this.categoryID = categoryID;
        this.points = points
    }
}