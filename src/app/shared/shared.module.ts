import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Imports ::: 3rd Party ::: NG-Zorro Module
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDividerModule } from 'ng-zorro-antd/divider';

// Imports ::: 3rd Party ::: Other Modules
import { DragDropModule } from '@angular/cdk/drag-drop';

// Imports ::: Shared Components

// Imports ::: Pips

const NGZORROMODULS = [
  NzIconModule,
  NzLayoutModule,
  NzFormModule,
  NzInputModule,
  NzButtonModule,
  NzDropDownModule,
  NzDividerModule
];

const THIRDMODULES = [
  ...NGZORROMODULS,
  DragDropModule
];

// Components & directives
const COMPONENTS: any[] = [];

const DIRECTIVES: any[] = [];
// End Components & directives

// Pipes
const PIPES: any[] = [];
// End Pipes

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    // third libs
    ...THIRDMODULES
  ],
  declarations: [
    // components and directives
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    // third libs
    ...THIRDMODULES,
    // components and directives
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule {}
