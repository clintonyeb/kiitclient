import {Component, OnInit, AfterViewInit, OnDestroy, Input, Output, EventEmitter} from "@angular/core";

declare const tinymce: any;

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements AfterViewInit, OnDestroy, OnInit {

  @Input() elementId: string;
  @Input() text: string;
  @Output() onEditorKeyUp = new EventEmitter<any>();

  editor;

  constructor() {
  }

  ngOnInit() {
    debugger;
    if (!this.text) {
      this.text = '';
    }
  }

  ngAfterViewInit(): void {
    console.log('Initializing instance of tinymce!!');
    // debugger;
    tinymce.init({
      selector: '#' + this.elementId,
      height: 500,
      schema: 'html5',
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      toolbar: 'bold italic underline strikethrough alignleft aligncenter alignright alignjustify ' +
      'styleselect bullist numlist outdent blockquote undo redo removeformat subscript superscript | code',
      setup: editor => {
        this.editor = editor;
        editor.on('init', ed => {
          ed.target.setContent(this.text);
          console.log('editor initialized');
        });
        editor.on('blur', () => {
          const content = editor.getContent();
          this.onEditorKeyUp.emit(content);
        });
      },
    });
  }


  ngOnDestroy(): void {
    tinymce.remove(this.editor);
  }

}
