import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AspectScoreComponent } from './components/aspect-score/aspect-score.component';
import { BenchmarkComponent } from './components/benchmark/benchmark.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AspectScoreComponent,
    BenchmarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
