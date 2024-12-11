import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuestionDetailsComponent } from "./question-details.component";
import { TableComponent } from "../../../core/components/table/table.component";
import { QUESTION_SERVICE } from '../../../constants/injection.constant';
import { QuestionService } from '../../services/question/question.service';
import { Column } from '../../../models/type/column.model';
import { MasterListDtoComponent } from '../master-list-dto/master-list-dto.component';
import { QuestionMasterDto } from '../../../models/question/question-master-dto.model';
import { ResponseDto } from '../../../models/response-dto.model';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, QuestionDetailsComponent, TableComponent],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.css'
})
export class QuestionListComponent extends MasterListDtoComponent<QuestionMasterDto> implements OnInit {

  public columns: Column[] = [
    { name: 'content', title: 'Content' },
    { name: 'type', title: 'Type' },
    { name: 'active', title: 'Active' },
  ]

  constructor(@Inject(QUESTION_SERVICE) private questionService: QuestionService) { super() }
  ngOnInit(): void {
    this.search();
  }

  private search(): void {
    const param = {
      keyword: '',
    }
    this.questionService.search(param).subscribe((data: ResponseDto<QuestionMasterDto>) => {
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
