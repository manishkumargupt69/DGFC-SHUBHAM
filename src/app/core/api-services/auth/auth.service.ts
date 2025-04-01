import { Injectable } from '@angular/core';
import { BroadcasterService } from '../../services/broadcaster/broadcaster.service';
import { AppStateService } from '../../services/app-state/app.state.service';
import { WebApiService } from '../../services/web-api-service';
import { AppBaseService } from '../base/base-service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AppBaseService {

  constructor(broadcaster: BroadcasterService, appStateService: AppStateService, private webApiService: WebApiService) {
    super(broadcaster, appStateService);
    }

    public downloadPdf(divId: string, fileName: string, reportName: string,) {
      const element = document.getElementById(divId);
      
      html2canvas(element!, { scrollX: 0, scrollY: -window.scrollY }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 170; // Adjusted width considering the padding
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
  
        const fontSize = 15; // Base font size for text
  
        let positionX = 20; // X-axis padding
        let positionY = 0;
  

  
        positionY += 10;
        const reportNameWidth = pdf.getStringUnitWidth(reportName) * fontSize / pdf.internal.scaleFactor;
        const reportNameX = (pdf.internal.pageSize.getWidth() - reportNameWidth) / 2;
        pdf.setFontSize(fontSize);
        pdf.text(reportName, reportNameX, positionY);
  
  
        // Add HTML section below the date string
        positionY += 10; // Move down from date string
        pdf.addImage(imgData, 'PNG', positionX, positionY, imgWidth, imgHeight);
        heightLeft -= pageHeight;
  
        // Add remaining pages
        while (heightLeft >= 0) {
          positionY = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', positionX, positionY, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
  
      
        pdf.save(fileName + '.pdf');
      });
    }
}
