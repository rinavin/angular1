import {PropType} from "./ui/propType";
import {forEach} from "@angular/router/src/utils/collection";

export class ControlMetadata{
   value : string;
   properties : Map<PropType,string>  = new Map();
   update(){}
   fromJson(){}
}

export class ControlsMetadata {

  //values of control
  values: Map<string, string> = new Map();
  // dictionary of controls with there properties
  private ControlsProperties: Map<string, ControlMetadata> = new Map();

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
     let props: { [id: string]: { [id: string]: string; } } = obj.ControlsProperties;
     for (let controlName in props) {
       if (this.ControlsProperties[controlName] == null)
         this.ControlsProperties[controlName] = new ControlMetadata();
       let controlMetaData: ControlMetadata = this.ControlsProperties[controlName];
       for (let property in props[controlName])
         controlMetaData[property] = props[controlName][property];
     }
     for (let controlName in obj.ControlsValues) {
       this.values[controlName] = obj.ControlsValues[controlName];
     }
   }

  getProperty(controlId: string, prop: PropType) {
    return this.ControlsProperties[controlId][prop];
  }


}

export class Records {
   data: Map<string, ControlsMetadata> = new Map();
   list:ControlsMetadata[]=[] ;

   update(obj) {
     console.dir(obj);
     if (obj.fullRefresh) {
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
     //this.list = new ControlsMetadata[this.data.keys.length];
     for (var key in this.data) {
       this.list[key] = this.data[key];
       // Use `key` and `value`
     }
     console.dir(this.list);
   }
   fromJson(data: string) {
     var obj = JSON.parse(data);
     this.update(obj);
   }

}
