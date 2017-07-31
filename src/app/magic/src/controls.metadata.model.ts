import {PropType} from "./ui/propType";
import {forEach} from "@angular/router/src/utils/collection";

export class ControlMetadata{
  controlType : string;
  properties : Map<PropType,string>  = new Map();

}

export class ControlsMetadata {

  //values of control
  values: Map<string, string> = new Map();
  // dictionary of controls with there properties
  ControlsProperties: Map<string, ControlMetadata> = new Map();

  rowId: string;
  get Values(){
    return this.values;
  }


  fromJson(data: string) {
    var obj = JSON.parse(data);
    this.update(obj);
  }

  update(obj:any) {
    //should we keep the values here ?
    //this.values = obj.ControlsValues;
    let props: { [id: string]: { [id: string]: string; } } = obj.ControlsMetaData;
    for (let controlName in props) {
      if (this.ControlsProperties[controlName] == null)
        this.ControlsProperties[controlName] = new ControlMetadata();
      let controlMetaData: ControlMetadata = this.ControlsProperties[controlName];
      for (let property in obj.ControlsMetaData[controlName].Properties)
        controlMetaData[property] = obj.ControlsMetaData[controlName].Properties[property];
      controlMetaData.controlType = obj.ControlsMetaData[controlName].Type;
    }
    for (let controlName in obj.ControlsValues) {
      this.values[controlName] = obj.ControlsValues[controlName];
    }
  }

  getProperty(controlId: string, prop: PropType) {
    if ( controlId in this.ControlsProperties) {
      if (prop in this.ControlsProperties[controlId]) {
        return this.ControlsProperties[controlId][prop];
      }
    }
    return "";
  }


  getValue(controlName: string){
    return this.values[controlName];
  }


}

export class Records {
  data: Map<string, ControlsMetadata> = new Map();
  list:ControlsMetadata[]=[] ;

  update(obj) {

    if (obj.fullRefresh && obj.rows.length != this.list.length ) {
      this.data = new Map();
      this.list = new Array<ControlsMetadata>();
    }
    for (let rowId in obj.rows) {
      if (this.data[rowId] == null)
        this.data[rowId] = new ControlsMetadata();
      let controlsData: ControlsMetadata = this.data[rowId];
      controlsData.update(obj.rows[rowId]);
      controlsData.rowId = rowId;
    }
    for (var key in this.data) {
      this.list[key] = this.data[key];
      // Use `key` and `value`
    }

  }
  fromJson(data: string) {
    var obj = JSON.parse(data);
    this.update(obj);
  }

}
