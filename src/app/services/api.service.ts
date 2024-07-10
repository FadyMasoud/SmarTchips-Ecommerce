import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  userrole:any;
  baseurl="http://localhost/apis/day%201";
  
  constructor(private http:HttpClient) { }
  //get first ,get seconde to show cayegory at home page //
  get_first_cat(cond:any){
     console.log("here users");
    return this.http.get<[]>(this.baseurl+'/get_first_category.php?cond='+cond);
  }
  get_second_cat(cond:any){
    console.log("here users 2");
    return this.http.get<[]>(this.baseurl+'/get_end_category.php?cond='+cond);
  }
  ////////////////////////////////////////////////////////////////
  //insert cardusers
  insert_usercard(data:any){
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post(this.baseurl+'/insert_usercard.php',body);
    
  }

  //get cardusers
  get_usercard(cond:any){
    console.log("get_cardusers api");
    return this.http.get<[]>(this.baseurl+'/get_usercard.php?cond='+cond);
  }

  /////////////////////////////////////////////////////////////
  //get category
  get_category(cond:any){
    console.log("get_categories api");
    return this.http.get<[]>(this.baseurl+'/get_category.php?cond='+cond);
  }

  //insert category
  insert_category(data:any): Observable<any>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.baseurl+'/insert_new_category.php',data, {headers: headers})
    .pipe(map((res: any) => {
    return res;
    }));
  }
  //update category 
  update_category(data:any): Observable<any>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.baseurl+'/update_new_category.php',data, {headers: headers})
    .pipe(map((res: any) => {
    return res;
    }));
  }
  //delete category
  delete_category(id:any){
    return this.http.get<[]>(this.baseurl+'/delete_category.php?id='+id);
  }


///////////////////////////////////////////////////////////////////////

  //get product

  get_products(cond:any){
    console.log(" get_product api");
    return this.http.get<[]>(this.baseurl+'/get_product.php?cond='+cond);
  }
  //insert product
  insert_product(data:any): Observable<any>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.baseurl+'/insert_new_product.php',data, {headers: headers})
    .pipe(map((res: any) => {
    return res;
    }));
  }
  //update product 
  update_product(data:any): Observable<any>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.baseurl+'/update_new_product.php',data, {headers: headers})
    .pipe(map((res: any) => {
    return res;
    }));
  }
  //delete product
  delete_product(id:any){
   
    return this.http.get<[]>(this.baseurl+'/delete_product.php?id='+id);
    
  }
////////////////////////////////////////////////////////////////////////
  //get users
  get_users(cond:any){
    console.log("get_users api");
    return this.http.get<[]>(this.baseurl+'/get_users.php?cond='+cond);
  }
  //insert users
  insert_users(data:any){
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post(this.baseurl+'/insert_users.php',body);
    
  }
  //update users 
  update_users(data:any){
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post(this.baseurl+'/update_users.php',body);
    
  }
  //delete user
  delete_users(id:any){
   
    return this.http.get<[]>(this.baseurl+'/delet_users.php?id='+id);
    
  }
  
  //////////////////////////////////////////////////////////////////////////////////
  //get category
  get_categories(cond:any){
    console.log("get_category api");
    return this.http.get<[]>(this.baseurl+'/get_category.php?cond='+cond);

  }

  

  //login

  login_users(data:any){
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post(this.baseurl+'/login_users.php',body);
  }


  //function to store data for user when login
  IsLoggedIn(){
    return !!localStorage.getItem('user_data_login')
  }


  //function to get role data for user if he have data in localstroge
  getRole() {
    var user_data: any =localStorage.getItem('user_data_login');
    user_data= JSON.parse(user_data)
    this.userrole=user_data['type'];
    return this.userrole;
  }
}

