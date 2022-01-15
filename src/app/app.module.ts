import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormulaOneTypesModule } from '@formulaone/types';
import { EntityListComponent } from './shared/entity-list/entity-list.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { NgxJakaModule } from 'ngx-jaka';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EntityListComponent,
    DriversComponent,
    ToolbarComponent
  ],
  imports: [
    FormulaOneTypesModule.forRoot(environment),
    NgxJakaModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
