import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

const imageUrl = 'https://lh5.googleusercontent.com/p/AF1QipO7obThlZ63X5STkOOZA8Uw62U5LBY-lZndRG8i=s1016-k-no';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} | Observable<{}> | Promise<{}> {
    return {
      events: [
        {
          id: 1,
          img: imageUrl,
          name: 'Event 1',
          date: '13 june',
          address: {
            place: 'NY',
            xCoordinate: 12.3434,
            yCoordinate: 12.3434
          }
        },
        {
          id: 2,
          img: imageUrl,
          name: 'Event 2',
          date: '14 june',
          address: {
            place: 'NY',
            xCoordinate: 24.3434,
            yCoordinate: 36.3434
          }
        },
        {
          id: 3,
          img: imageUrl,
          name: 'Event 3',
          date: '17 June',
          address: {
            place: 'NY',
            xCoordinate: 24.3434,
            yCoordinate: 11.3434
          }
        }
      ]
    };
  }

}
