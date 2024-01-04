import { HttpInterceptorFn } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { selectId } from '../store/selector';
import { inject } from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  //get jwt token
  let token=localStorage.getItem('token');

  //get user id, check if user log in
  let store = inject(Store);
  let id_val = -1;
  store.select(selectId).subscribe(data=>id_val=data);

  let reqWithHeader =req;
    if(!!token && id_val!=-1){
      reqWithHeader = req.clone({
        headers: req.headers.set('Authorization', 'Bearer '+token),
      });
      
    }
  return next(reqWithHeader);

  
};
