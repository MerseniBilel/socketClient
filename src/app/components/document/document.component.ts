import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';

import { Document } from 'src/app/models/document.model';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
})
export class DocumentComponent implements OnInit, OnDestroy {
  document!: Document;
  private _docSub: Subscription | undefined;
  insideDoc : string = "";
  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this._docSub = this.documentService.currentDocument
      .pipe(
        startWith({
          id: '',
          doc: 'Select an existing document or create a new one to get started',
        })
      )
      .subscribe((document) => (this.document = document));
  }

  register(){
    this.document.doc = this.insideDoc;
  }

  ngOnDestroy() {
    if (this._docSub) this._docSub.unsubscribe();
  }

  editDoc() {
    if (this.document) this.documentService.editDocument(this.document);
  }
}
