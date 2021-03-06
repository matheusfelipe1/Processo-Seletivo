import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/views/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ContentComponent } from './components/views/content/content.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { HousesTableComponent } from './components/houses/houses-table/houses-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { HouseByIdComponent } from './components/houses/house-by-id/house-by-id.component';
import { HousesRegisterComponent } from './components/houses/houses-register/houses-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HousesUpdateComponent } from './components/houses/houses-update/houses-update.component';
import { HousesDeleteComponent } from './components/houses/houses-delete/houses-delete.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    HousesTableComponent,
    HouseByIdComponent,
    HousesRegisterComponent,
    HousesUpdateComponent,
    HousesDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
