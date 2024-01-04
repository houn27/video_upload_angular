# Vupload frontend

This is a simple video platform consisting of functions of video uploading, video listing, video playing, user log in/out. 

#### Highlight:
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7.
* State management: [ngrx](./src/app/store/), Additionally, we provide an alternative state management option through [observable + service](./src/app/utils/user-info.service.ts).
* Embedding JWT token in [video player src link](./src/app/home/home.component.html), as it is impossible to set http headers for a src link. 
* Check login status and add JWT token by [http interceptor](./src/app/utils/jwt.interceptor.ts).

![](https://raw.githubusercontent.com/houn27/public-img/main/vupload-screenshot-1.png)

![](https://raw.githubusercontent.com/houn27/public-img/main/vupload-screenshot-2.png)



Here is the backend part responsible for data management and database interaction: https://github.com/houn27/video_upload_express .


## Run project in developing mode

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Add more features

Run `ng generate component component-name` to generate a new component, then you can implement new features as you want. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build to deploy

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
