import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public data: any = [
    {
      deviceName: 'NW01',
      documentId: '62ea50e5-7a8b-4b48-95bf-af1b8b72ff67',
      documentName:
        'wallpaper_rise_17_62ea50e5-7a8b-4b48-95bf-af1b8b72ff67.jpg',
      documentType: 'Patron Identification',
    },
    {
      deviceName: 'NW01',
      documentId: '62ea50e5-7a8b-4b48-95bf-af1b8b72ff67',
      documentName:
        'markvillegas_test_18_62ea50e5-7a8b-4b48-95bf-af1b8b72ff67.jpg',
      documentType: 'Patron Identification',
    },
  ];

  public ngOnInit() {}

  public documentNameFormat(data: any): any {
    return data.documentName.replace(`_${data.documentId}`, '');
  }
}
