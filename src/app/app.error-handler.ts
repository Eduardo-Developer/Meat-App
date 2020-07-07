import { Observable } from 'rxjs/Observable';
import { Response } from "@angular/http";
import 'rxjs/add/observable/throw';

export class ErrorHandler {
    static handleError(error: Response | any) {
        let errorMessages: string
        if (error instanceof Response) {
            errorMessages = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        } else {
            errorMessages = error.toString()
        }

        console.log(errorMessages)
        return Observable.throw(errorMessages)
    }
}