import {PropType} from "./ui/propType";

export class ControlMetadata{
   value : string;
   properties : Map<PropType,string>  = new Map();
   update(){}
   fromJson(){}
}

export class ControlsMetadata {

  //values of control
  private values: Map<string, string> = new Map();
  // dictionary of controls with there properties
  private ControlsProperties: Map<string, ControlMetadata> = new Map();

  Values(){
    return this.values;
  }


  fromJson(data: string) {
    var obj = JSON.parse(data);
    //should we keep the values here ?
    //this.values = obj.ControlsValues;
    let props: { [id: string]: { [id: string]: string; } } = obj.ControlsProperties;
    for (let controlName in props) {
      if (this.ControlsProperties[controlName] == null)
        this.ControlsProperties[controlName] = new ControlMetadata();
      let controlMetaData: ControlMetadata = this.ControlsProperties[controlName];
      for (let property in props[controlName])
        controlMetaData[property] = props[controlName][property];
    }
    for (let controlName in obj.ControlsValues)
      this.values[controlName] = obj.ControlsValues[controlName];
  }

  getProperty(controlId: string, prop: PropType) {
    return this.ControlsProperties[controlId][prop];
  }


}

export class Records {
   values: Map<string, ControlsMetadata> = new Map();
   update(){}
   fromJson(){}
}
