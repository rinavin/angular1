import {PropType} from "./ui/propType";
import {forEach} from "@angular/router/src/utils/collection";

export class ControlMetadata {
  controlType: string;
  properties: Map<HtmlProperties, any> = new Map();
  classesMap: Map<HtmlClasses, any> = new Map();
  classes: string  ;

  setClass(key, value) {
    this.classesMap[key] = value;
    let result = '';

    for (let key in this.classesMap) {
      result+= this.classesMap[key] + ' ';
    }
    this.classes = result;



  }

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

  getControlMetadata(controlId: string) {
    if (!(controlId in this.ControlsProperties))
      this.ControlsProperties[controlId] = new ControlMetadata();
    return this.ControlsProperties[controlId];
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

  getProperty(controlId: string, prop: HtmlProperties) {
    if ( controlId in this.ControlsProperties) {
      if (prop in this.ControlsProperties[controlId].properties) {
        return this.ControlsProperties[controlId].properties[prop];
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
  list:ControlsMetadata[]=[] ; //used for sequential access in table

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
  updateSize(len:number) {
    if (this.list.length != len) {
      if (len < this.list.length) {
        //remove rows
        for (let i = len; i < this.list.length; i++) {
          this.data.delete(i.toString());
        }
        this.list.length = len;
      }
      else {
        //addRows
        for (let i = this.list.length; i < len; i++) {
          this.addRow(i.toString());
        }
      }
    }
  }

  addRow(rowId: string ) {
    this.data[rowId] = new ControlsMetadata();
    this.data[rowId].rowId = rowId;
    this.list[rowId] = this.data[rowId];
  }
  createFirst()
  {
    this.addRow("0");
  }

  fromJson(data: string) {
    var obj = JSON.parse(data);
    this.update(obj);
  }

}

export enum HtmlProperties {
  Visible = "visible",
  Enabled = "enabled",
  Text = "text",
  ITEMS_LIST ="itemslist",
  Image = "image"


}

export enum HtmlClasses {
  Color = "color",
  font = "font"

}
