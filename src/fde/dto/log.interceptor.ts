import { Injectable, NestInterceptor, ExecutionContext, CallHandler, BadGatewayException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';




@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  static globalVarTask_id: any;
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        catchError(err => throwError(() => new BadGatewayException(LoggingInterceptor.globalVarTask_id)))
      );
  }
}
