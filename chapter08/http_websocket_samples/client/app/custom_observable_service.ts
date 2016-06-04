import {Observable} from "rxjs/Rx";

export class CustomObservableService {

    createObservableService(): Observable<any> {

        return new Observable<any>(
            observer => {
                setInterval(() =>
                    observer.next(new Date()), 1000);
            }
        );
    }
}
