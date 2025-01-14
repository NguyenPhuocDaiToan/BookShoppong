import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResponseMessage } from "../models/response-message";
import { environment } from "../../environments/environment";

const API_URL = `${environment.apiurl}/email`;
@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getOtpRegister(email: string): Observable<ResponseMessage> {
    return this.http.get<ResponseMessage>(
      API_URL + "/getOtpRegister?email=" + email
    );
  }

  getOtp(email: string): Observable<ResponseMessage> {
    return this.http.get<ResponseMessage>(API_URL + "/getOtp?email=" + email);
  }
}
