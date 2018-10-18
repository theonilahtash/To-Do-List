import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
// import { GoalFormComponent } from './goal-form/goal-form.component';
import { GameFormComponent } from './game-form/game-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    GameFormComponent,
    GameFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
