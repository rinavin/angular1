import {PropType} from "./ui/propType";


export class ControlMetadata{
   value : string;
   properties : Map<PropType,string>  = new Map();
   update(){}
   fromJson(){}

}


export class ControlsMetadata{
   values:Map<string,ControlMetadata> = new Map();
   update(){}
   fromJson(){}
}

export class Records {
   values: Map<string, ControlsMetadata> = new Map();
   update(){}
   fromJson(){}
}
