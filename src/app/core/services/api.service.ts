import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http = inject(HttpClient);
  // Example using Angular Signals
  private readonly loadingSignal = signal<boolean>(false);
  public readonly isLoading = this.loadingSignal.asReadonly();

  constructor() {}

  // Generic request method with error handling
  public get<T>(url: string): Observable<T | null> {
    this.loadingSignal.set(true);
    return this.http.get<T>(url).pipe(
      tap(() => this.loadingSignal.set(false)),
      catchError(() => {
        this.loadingSignal.set(false);
        return of(null);
      })
    );
  }
}
