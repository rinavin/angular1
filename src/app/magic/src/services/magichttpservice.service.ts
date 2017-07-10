//
// import { Injectable } from '@angular/core';
// import { Http, Response,RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
//
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
//
// @Injectable()
// export class MagichttpserviceService {
//    constructor (
//       private http: Http
//    ) {}
//    randomQuote = "";
//    reply: string ;
//
//    getUser() {
//       // return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
//       // .map((res:Response) => res.json())
//       // .subscribe(
//       //   data => this.randomQuote = data,
//       //   err => this.logError(err),
//       //   () => console.log('Random Quote Complete')
//       // );
//       //http://rinav-7/MagicScripts33/MGrqispi.dll?APPNAME=prg&appname=aa
//       //'https://conduit.productionready.io/api/profiles/eric1'
//       //
//       return this.http.get('http://rinav-7/MagicScripts33/MGrqispi.dll?APPNAME=prg&PRGNAME=q|rinav-7/1682&DEBUG_CLIENT=1')
//          .map(res => res.text())
//          .catch(this.handleError);
//
//
//
//    }
//
//    callUrl(url:string)
//    {
//       return this.http.get(url)
//          .map(res => res.text())
//          .catch(this.handleError);
//    }
//
//    callJson(url:string)
//    {
//       return this.http.get(url)
//          .map(res => res.json())
//          .catch(this.handleError);
//    }
//
//    logError(err) {
//       console.error('There was an error: ' + err);
//    }
//
//    private handleError (error: Response | any) {
//       // In a real world app, you might use a remote logging infrastructure
//       let errMsg: string;
//       if (error instanceof Response) {
//          const body = error.json() || '';
//          const err = body.error || JSON.stringify(body);
//          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
//       } else {
//          errMsg = error.message ? error.message : error.toString();
//       }
//       console.error(errMsg);
//       return Observable.throw(errMsg);
//    }
// }
//
//
