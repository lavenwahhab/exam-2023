import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AspectScoreComponent } from './components/aspect-score/aspect-score.component';
import { BenchmarkComponent } from './components/benchmark/benchmark.component';

const routes: Routes = [
  {path:'', component:AspectScoreComponent},
  {path:'aspect-ratio', component:AspectScoreComponent},
  {path:'benchmark', component:BenchmarkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
