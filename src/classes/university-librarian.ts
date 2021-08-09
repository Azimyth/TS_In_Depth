import { Librarian } from "../interfaces";
import { logger, logMethod, logParameter, sealed, writable } from '../decorators';

// @sealed('UniversityLibrarian')
@logger
export class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    @logMethod
    assistCustomer(@logParameter custName: string) {
        console.log(`${this.name} is assisting ${custName}`)
    }

    // @writable(true)
    assistFaculty(): void {
        console.log('Assist faculty')
    }

    // @writable(false)
    teachCommunity(): void {
        console.log('Assist community')
    }
}
