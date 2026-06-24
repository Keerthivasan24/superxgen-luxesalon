import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Salon, MOCK_SALONS } from '../../features/explore/models/salon.model';


@Injectable({ providedIn: 'root' })
export class SalonDataService {

  private _salons$ = new BehaviorSubject<Salon[]>([...MOCK_SALONS]);

  salons$ = this._salons$.asObservable();

  get salons(): Salon[] { return this._salons$.value; }

  getSalonById(id: number): Salon | undefined {
    return this._salons$.value.find(s => s.id === id);
  }

  addSalon(salon: Salon): void {
    this._salons$.next([...this._salons$.value, salon]);
  }

  updateSalon(id: number, patch: Partial<Salon>): void {
    this._salons$.next(
      this._salons$.value.map(s => s.id === id ? { ...s, ...patch } : s)
    );
  }

  removeSalon(id: number): void {
    this._salons$.next(this._salons$.value.filter(s => s.id !== id));
  }

  getNextId(): number {
    return Math.max(...this._salons$.value.map(s => s.id), 0) + 1;
  }
}