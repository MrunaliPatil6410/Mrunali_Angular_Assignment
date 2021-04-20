import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-editlocation',
  templateUrl: './editlocation.component.html',
  styleUrls: ['./editlocation.component.css']
})

export class EditlocationComponent implements OnInit {
  alert: boolean = false;

  editForm = new FormGroup({
    sourceLoc: new FormControl('', Validators.required),
    destLoc: new FormControl('', Validators.required)
 });

 constructor(private route: ActivatedRoute, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
      console.log(this.route.snapshot.params.id);
      this.adminService.getCurrentLocation(this.route.snapshot.params.id)
          .subscribe((result) => {
            this.editForm = new FormGroup({
              sourceLoc: new FormControl(result['sourceLoc'], Validators.required),
              destLoc: new FormControl(result['destLoc'], Validators.required)
           });
                console.warn('result', result);
      });
  }

  //validation methods
  get sourceLoc(){return this.editForm.get('sourceLoc')};
  get destLoc(){return this.editForm.get('destLoc')};

  onSubmit(){
    console.warn(this.editForm.value);
    this.adminService
       .updateSelectedLocation(this.route.snapshot.params.id,this.editForm.value)
         .subscribe((result) => {
              console.warn(result);
              this.alert = true;
              this.editForm.reset({});

       });
  }

  closeAlert()
    {
      this.alert = false;
      this.router.navigate(['admin/locations']);
    }

  onCancle(){

    this.router.navigate(['admin/locations']);
  }

}
