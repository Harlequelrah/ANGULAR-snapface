import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./auth.interceptors";


export const httpInterceptorsProvider =[
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
]
