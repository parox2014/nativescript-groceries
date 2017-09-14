import {NgModule} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from 'nativescript-angular/forms'
import {NativeScriptHttpModule} from 'nativescript-angular/http'
import {NativeScriptRouterModule} from 'nativescript-angular/router'
import {HttpModule} from '@angular/http'
import {AppComponent} from "./app.component";
import {routes,navigatableComponents} from "./app.routing";

@NgModule({
  imports: [
    HttpModule,
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [AppComponent,...navigatableComponents],
  bootstrap: [AppComponent]
})
export class AppModule {
}
