@Component({
  
  selector: 
  'dialog-overview-example-dialog',
    
  templateUrl: 
  'dialog-overview-example-dialog.html',
    
  standalone: 
  true,
    
  imports: [
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      MatButtonModule,
      MatDialogTitle,
      MatDialogContent,
      MatDialogActions,
      MatDialogClose,
    ],
  })
  export 
  class 
  DialogOverviewExampleDialog {
    
  constructor(
  
      
  public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      
  @Inject(MAT_DIALOG_DATA) 
  public data: DialogData,
    ) {}
  
    onNoClick(): 
  void {
      
  this.dialogRef.close();
    }
  }