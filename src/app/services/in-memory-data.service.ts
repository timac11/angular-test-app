import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} | Observable<{}> | Promise<{}> {
    return {
      events: [
        {
          img: 'https://sun9-52.userapi.com/c830408/v830408617/9a623/Z_zAKNcxUPY.jpg?ava=1',
          name: 'name',
          date: '13 june',
          address: {
            place: 'NY',
            xCoordinate: 12.3434,
            yCoordinate: 12.3434
          }
        },
        {
          img: 'https://sun9-52.userapi.com/c830408/v830408617/9a623/Z_zAKNcxUPY.jpg?ava=1',
          name: 'name',
          date: '14 june',
          address: {
            place: 'NY',
            xCoordinate: 24.3434,
            yCoordinate: 36.3434
          }
        },
        {
          img: 'https://sun9-52.userapi.com/c830408/v830408617/9a623/Z_zAKNcxUPY.jpg?ava=1',
          name: 'name',
          date: '13 june',
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
