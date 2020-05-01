import{ Component } from '@angular/core'

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html'
})
export class PostCreateComponent{
    newPost='Hi';
onAddPost(){
    //alert("Yor changes are saved");
    this.newPost='This is user\'s post';
}
}