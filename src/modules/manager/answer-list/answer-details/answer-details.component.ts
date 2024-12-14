import { Component, OnChanges, Inject, SimpleChanges } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ANSWER_SERVICE } from "../../../../constants/injection.constant";
import { AnswerMasterDto } from "../../../../models/answer/answer-master-dto.model";
import { IAnswerService } from "../../../services/answers/answer.interface";
import { MasterDetailComponent } from "../../master-detail/master-detail.component";

@Component({
  selector: 'app-answer-details',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './answer-details.component.html',
  styleUrl: './answer-details.component.css'
})
export class AnswerDetailsComponent extends MasterDetailComponent<AnswerMasterDto> implements OnChanges {

  constructor(@Inject(ANSWER_SERVICE) private answerService: IAnswerService) { super() }

  ngOnChanges(changes: SimpleChanges): void {
    this.createForm();
    this.patchValue();
  }

  private createForm(): void {
    this.form = new FormGroup({
      content: new FormControl('', Validators.required),
      correct: new FormControl(true),
      active: new FormControl(true),
    });
  }

  private patchValue(): void {
    if (this.isEdit && this.selectedItem) {
      this.form.patchValue(this.selectedItem);
    }
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;

    if (this.isEdit && this.selectedItem) {
      this.answerService.update(this.selectedItem.id, data).subscribe((res: AnswerMasterDto) => {
        if (res) {
          console.log(res);
        }
        this.cancel.emit();
      });
    } else {
      this.answerService.create(data).subscribe((res: AnswerMasterDto) => {
        if (res) {
          console.log(res);
        }
        this.cancel.emit();
      })
    }
  }

  public onCancel(): void {
    this.cancel.emit();
  }

}
