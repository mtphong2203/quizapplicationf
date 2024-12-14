import { CommonModule } from "@angular/common";
import { Component, OnInit, Inject } from "@angular/core";
import { ANSWER_SERVICE } from "../../../constants/injection.constant";
import { TableComponent } from "../../../core/components/table/table.component";
import { AnswerMasterDto } from "../../../models/answer/answer-master-dto.model";
import { Column } from "../../../models/type/column.model";
import { IAnswerService } from "../../services/answers/answer.interface";
import { MasterListDtoComponent } from "../master-list-dto/master-list-dto.component";
import { AnswerDetailsComponent } from "./answer-details/answer-details.component";

@Component({
  selector: 'app-answer-list',
  standalone: true,
  imports: [TableComponent, AnswerDetailsComponent, CommonModule],
  templateUrl: './answer-list.component.html',
  styleUrl: './answer-list.component.css'
})
export class AnswerListComponent extends MasterListDtoComponent<AnswerMasterDto> implements OnInit {

  public columns: Column[] = [
    { name: 'content', title: 'Content' },
    { name: 'correct', title: 'Is Correct' },
    { name: 'active', title: 'Status' },
  ]

  public data: AnswerMasterDto[] = [];

  constructor(@Inject(ANSWER_SERVICE) private answerService: IAnswerService) { super() }
  ngOnInit(): void {
    this.search();
  }

  public search(): void {
    this.answerService.getAll().subscribe((res: AnswerMasterDto[]) => {
      this.data = res;
    });
  }

  public onCreate(): void {
    this.isShow = true;
    this.isEdit = false;
  }

  public onEdit(id: string): void {
    this.isShow = true;
    this.isEdit = true;
    this.selectedItem = this.data.find((item) => item.id === id);
  }

  public onDelete(id: string): void {
    this.answerService.delete(id).subscribe((res: boolean) => {
      if (res) {
        console.log('Delete Success');
      }
      this.search();
    });
  }

  public onCancelDetails(): void {
    this.isShow = false;
    this.search();
  }


}
