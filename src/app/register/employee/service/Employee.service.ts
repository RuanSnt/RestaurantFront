import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EmployeeModel } from "../models/EmployeeModel";

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
    urlApi = "http://localhost:8080/employee";

    constructor(private httpClient : HttpClient) {}

    findAll() : Observable<EmployeeModel[]> {
        return this.httpClient.get<EmployeeModel[]>(this.urlApi);
    }

    findById(employeeId: number) : Observable<EmployeeModel> {
        return this.httpClient.get<EmployeeModel>(`${this.urlApi}/${employeeId}`);
    }
    
    create(employee: EmployeeModel) : Observable<EmployeeModel> {
        return this.httpClient.post<EmployeeModel>(this.urlApi, employee);
    }
    
    edit(employeeId: number, employee: EmployeeModel) : Observable<EmployeeModel> {
        return this.httpClient.put<EmployeeModel>(`${this.urlApi}/${employeeId}`,employee);
    } 

    changeStatus(employeeId: number, employee: EmployeeModel) : Observable<EmployeeModel> {
        return this.httpClient.put<EmployeeModel>(`${this.urlApi}/${employeeId}/status`,employee);
    }
}

