export class Hero {//!!!here add some properties
  constructor(
    public id?: number,
    public name?: string,
    public gender?: string,
    public age?: number,
    public description?: string,
    public onselected: boolean=false,
  )
  {
    this.description = "dsafasdfas";
  }
  
}
