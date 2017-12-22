import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ProjectModule {
  id?: number;
  title: string;
  slug: string;
  description?: string;
  user_id: number;
  created_at?: string;
  updated_at?: string;
 }
