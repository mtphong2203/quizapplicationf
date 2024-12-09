import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash, faPlus, IconDefinition, faE } from '@fortawesome/free-solid-svg-icons';
import { QuestionDetailsComponent } from "./question-details.component";
import { TableComponent } from "../../../core/components/table/table.component";
import { QUESTION_SERVICE } from '../../../constants/injection.constant';
import { QuestionService } from '../../services/question/question.service';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, QuestionDetailsComponent, TableComponent],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.css'
})
export class QuestionListComponent implements OnInit {

  // api control
  public dataApi: any[] = [];
  public columns: any[] = [
    { name: 'content', title: 'Content' },
    { name: 'type', title: 'Type' },
    { name: 'active', title: 'Active' },
  ]

  public isShow: boolean = false;
  public isEdit: boolean = false;

  public selectedItem: any;

  constructor(@Inject(QUESTION_SERVICE) private questionService: QuestionService) { }
  ngOnInit(): void {
    this.search();
  }

  private search(): void {
    const param = {
      keyword: '',
    }
    this.questionService.search(param).subscribe((data: any) => {
      this.dataApi = data.data;
    });
  }

  public onCreate(): void {
    this.isShow = true;
    this.isEdit = false;
  }

  public onEdit(id: string): void {
    this.isEdit = true;
    this.isShow = true;
    this.selectedItem = this.dataApi.find((item) => item.id === id);
  }

  public onDelete(id: string): void {
    this.questionService.delete(id).subscribe((result) => {
      if (result) {
        console.log('Delete success!');
      }
      this.search();
    });
  }

  public onCancelDetail(): void {
    this.isShow = false;
    this.search();
  }



}
