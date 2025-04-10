import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent{
  isTravelHistoryCardOpen = false;
    gpsData = [
      {
        "gpsobdRawDataID": 1,
        "vehicleNo": "DL8CAB1234",
        "locationDateTime": "2025-02-17T12:40:16.475",
        "latitude": "28.6139",
        "longitude": "77.2090",
        "locationAddress": "Connaught Place, New Delhi, India",
        "addressPostalCode": "110001",
        "vehicleSpeed": 60,
        "vehicleOdometerReading": 45230,
        "fuelConsumption": 12.5,
        "gpS_OBD_SP": "Active",
        "createdBy": 3,
        "creationDateTime": "2025-02-21T09:57:44.5728745"
      },
      {
        "gpsobdRawDataID": 2,
        "vehicleNo": "DL8CAB1234",
        "locationDateTime": "2025-02-17T12:41:16.475",
        "latitude": "28.6139",
        "longitude": "77.2090",
        "locationAddress": "Connaught Place, New Delhi, India",
        "addressPostalCode": "110001",
        "vehicleSpeed": 60,
        "vehicleOdometerReading": 45230,
        "fuelConsumption": 12.5,
        "gpS_OBD_SP": "Active",
        "createdBy": 3,
        "creationDateTime": "2025-02-21T09:58:05.9864397"
      },
      {
        "gpsobdRawDataID": 20,
        "vehicleNo": "HR55W6942",
        "locationDateTime": "2025-04-09T15:35:20",
        "latitude": "25.029444",
        "longitude": "73.904175",
        "locationAddress": "98.18m from LPS Parking Area Rajsamand  RAJSAMAND RAJASTHAN INDIA 313342",
        "addressPostalCode": "100001",
        "vehicleSpeed": 19,
        "vehicleOdometerReading": 561226,
        "fuelConsumption": 0,
        "gpS_OBD_SP": "Active",
        "createdBy": 1,
        "creationDateTime": "2025-04-09T15:38:03.8101528"
      },
      {
        "gpsobdRawDataID": 21,
        "vehicleNo": "NL01AA7124",
        "locationDateTime": "2025-04-09T15:34:10",
        "latitude": "28.824593",
        "longitude": "76.90761",
        "locationAddress": "962.24m from Pai Post Office Kharkhoda  SONIPAT HARYANA INDIA 131402",
        "addressPostalCode": "100001",
        "vehicleSpeed": 51,
        "vehicleOdometerReading": 79698,
        "fuelConsumption": 0,
        "gpS_OBD_SP": "Active",
        "createdBy": 1,
        "creationDateTime": "2025-04-09T15:38:03.8101536"
      },
      {
        "gpsobdRawDataID": 15,
        "vehicleNo": "NL01AB5982",
        "locationDateTime": "2025-04-09T15:37:34",
        "latitude": "28.215279",
        "longitude": "76.785484",
        "locationAddress": "975.17m from Indian Oil Petrol Pump HUDA Industrial Area Dharuhera Dharuhera REWARI HARYANA INDIA 123110",
        "addressPostalCode": "100001",
        "vehicleSpeed": 0,
        "vehicleOdometerReading": 5906,
        "fuelConsumption": 0,
        "gpS_OBD_SP": "Active",
        "createdBy": 1,
        "creationDateTime": "2025-04-09T15:38:03.8101283"
      },
      {
        "gpsobdRawDataID": 17,
        "vehicleNo": "NL01AF3786",
        "locationDateTime": "2025-04-09T15:36:42",
        "latitude": "28.213278",
        "longitude": "76.79233",
        "locationAddress": "528.48m from Bikaner Sweet Bhandar Harijan Mohalla Dharuhera Dharuhera REWARI HARYANA INDIA 123106",
        "addressPostalCode": "100001",
        "vehicleSpeed": 0,
        "vehicleOdometerReading": 24758,
        "fuelConsumption": 0,
        "gpS_OBD_SP": "Active",
        "createdBy": 1,
        "creationDateTime": "2025-04-09T15:38:03.8101496"
      },
      {
        "gpsobdRawDataID": 4,
        "vehicleNo": "NL01AF5578",
        "locationDateTime": "2025-04-01T16:01:37",
        "latitude": "28.214754",
        "longitude": "76.785",
        "locationAddress": "942.62m from Indian Oil Petrol Pump HUDA Industrial Area Dharuhera Dharuhera REWARI HARYANA INDIA 123110",
        "addressPostalCode": "100001",
        "vehicleSpeed": 0,
        "vehicleOdometerReading": 5134036,
        "fuelConsumption": 0,
        "gpS_OBD_SP": "Active",
        "createdBy": 1,
        "creationDateTime": "2025-04-01T16:02:28.5778924"
      },
      {
        "gpsobdRawDataID": 9,
        "vehicleNo": "NL01AF5578",
        "locationDateTime": "2025-04-01T16:04:37",
        "latitude": "28.214787",
        "longitude": "76.78493",
        "locationAddress": "949.37m from Indian Oil Petrol Pump HUDA Industrial Area Dharuhera Dharuhera REWARI HARYANA INDIA 123110",
        "addressPostalCode": "100001",
        "vehicleSpeed": 0,
        "vehicleOdometerReading": 5134036,
        "fuelConsumption": 0,
        "gpS_OBD_SP": "Active",
        "createdBy": 1,
        "creationDateTime": "2025-04-01T16:06:56.9500272"
      },
      {
        "gpsobdRawDataID": 14,
        "vehicleNo": "NL01AF5578",
        "locationDateTime": "2025-04-01T16:07:36",
        "latitude": "28.214758",
        "longitude": "76.784935",
        "locationAddress": "946.15m from Indian Oil Petrol Pump HUDA Industrial Area Dharuhera Dharuhera REWARI HARYANA INDIA 123110",
        "addressPostalCode": "100001",
        "vehicleSpeed": 0,
        "vehicleOdometerReading": 5134036,
        "fuelConsumption": 0,
        "gpS_OBD_SP": "Active",
        "createdBy": 1,
        "creationDateTime": "2025-04-01T16:09:49.6361448"
      },
      {
        "gpsobdRawDataID": 18,
        "vehicleNo": "NL01AF5578",
        "locationDateTime": "2025-04-09T15:36:41",
        "latitude": "19.065039",
        "longitude": "75.751595",
        "locationAddress": "1.84kms from Mahindra Cornerstone Automobiles Beed  BEED MAHARASHTRA INDIA 431153",
        "addressPostalCode": "100001",
        "vehicleSpeed": 0,
        "vehicleOdometerReading": 6602839,
        "fuelConsumption": 0,
        "gpS_OBD_SP": "Active",
        "createdBy": 1,
        "creationDateTime": "2025-04-09T15:38:03.8101504"
      },
      {
        "gpsobdRawDataID": 6,
        "vehicleNo": "NL01AF6207",
        "locationDateTime": "2025-04-01T15:59:08",
        "latitude": "28.416492",
        "longitude": "77.88015",
        "locationAddress": "445.1m from Milk Factory Aulina Milka Mosamgarh Bulandshahr Bulandshahr HATHRAS UTTAR PRADESH INDIA 203001",
        "addressPostalCode": "100001",
        "vehicleSpeed": 0,
        "vehicleOdometerReading": 5145511,
        "fuelConsumption": 0,
        "gpS_OBD_SP": "Active",
        "createdBy": 1,
        "creationDateTime": "2025-04-01T16:02:28.5781689"
      },
      {
        "gpsobdRawDataID": 8,
        "vehicleNo": "NL01AF6207",
        "locationDateTime": "2025-04-01T16:05:07",
        "latitude": "28.416601",
        "longitude": "77.88009",
        "locationAddress": "444.84m from Milk Factory Aulina Milka Mosamgarh Bulandshahr Bulandshahr HATHRAS UTTAR PRADESH INDIA 203001",
        "addressPostalCode": "100001",
        "vehicleSpeed": 0,
        "vehicleOdometerReading": 5145511,
        "fuelConsumption": 0,
        "gpS_OBD_SP": "Active",
        "createdBy": 1,
        "creationDateTime": "2025-04-01T16:06:56.9500259"
      },
      {
        "gpsobdRawDataID": 13,
        "vehicleNo": "NL01AF6207",
        "locationDateTime": "2025-04-01T16:08:07",
        "latitude": "28.41654",
        "longitude": "77.880165",
        "locationAddress": "448.65m from Milk Factory Aulina Milka Mosamgarh Bulandshahr Bulandshahr HATHRAS UTTAR PRADESH INDIA 203001",
        "addressPostalCode": "100001",
        "vehicleSpeed": 0,
        "vehicleOdometerReading": 5145511,
        "fuelConsumption": 0,
        "gpS_OBD_SP": "Active",
        "createdBy": 1,
        "creationDateTime": "2025-04-01T16:09:49.6361357"
      },
      {
        "gpsobdRawDataID": 19,
        "vehicleNo": "NL01AF6207",
        "locationDateTime": "2025-04-09T15:35:39",
        "latitude": "28.214697",
        "longitude": "76.78542",
        "locationAddress": "918.69m from Indian Oil Petrol Pump HUDA Industrial Area Dharuhera Dharuhera REWARI HARYANA INDIA 123110",
        "addressPostalCode": "100001",
        "vehicleSpeed": 0,
        "vehicleOdometerReading": 5325677,
        "fuelConsumption": 0,
        "gpS_OBD_SP": "Active",
        "createdBy": 1,
        "creationDateTime": "2025-04-09T15:38:03.8101512"
      },
      {
        "gpsobdRawDataID": 3,
        "vehicleNo": "NL01AH5820",
        "locationDateTime": "2025-04-01T15:53:28",
        "latitude": "18.796455",
        "longitude": "75.71516",
        "locationAddress": "789.76m from Zilla Parishad Primary School Bankatswamiwasti Udandwadgaon Beed  BEED MAHARASHTRA INDIA 431126",
        "addressPostalCode": "100001",
        "vehicleSpeed": 9,
        "vehicleOdometerReading": 4073778,
        "fuelConsumption": 0,
        "gpS_OBD_SP": "Active",
        "createdBy": 1,
        "creationDateTime": "2025-04-01T15:55:06.1336173"
      },
      {
        "gpsobdRawDataID": 5,
        "vehicleNo": "NL01AH5820",
        "locationDateTime": "2025-04-01T15:59:27",
        "latitude": "18.784986",
        "longitude": "75.71285",
        "locationAddress": "595.95m from Yashwant H S Wangaon Beed  BEED MAHARASHTRA INDIA 431126",
        "addressPostalCode": "100001",
        "vehicleSpeed": 0,
        "vehicleOdometerReading": 4075619,
        "fuelConsumption": 0,
        "gpS_OBD_SP": "Active",
        "createdBy": 1,
        "creationDateTime": "2025-04-01T16:02:28.578163"
      },
      {
        "gpsobdRawDataID": 7,
        "vehicleNo": "NL01AH5820",
        "locationDateTime": "2025-04-01T16:05:26",
        "latitude": "18.785036",
        "longitude": "75.71304",
        "locationAddress": "611.27m from Yashwant H S Wangaon Beed  BEED MAHARASHTRA INDIA 431126",
        "addressPostalCode": "100001",
        "vehicleSpeed": 0,
        "vehicleOdometerReading": 4075619,
        "fuelConsumption": 0,
        "gpS_OBD_SP": "Active",
        "createdBy": 1,
        "creationDateTime": "2025-04-01T16:06:56.9499708"
      },
      {
        "gpsobdRawDataID": 12,
        "vehicleNo": "NL01AH5820",
        "locationDateTime": "2025-04-01T16:08:25",
        "latitude": "18.785093",
        "longitude": "75.71312",
        "locationAddress": "620.98m from Yashwant H S Wangaon Beed  BEED MAHARASHTRA INDIA 431126",
        "addressPostalCode": "100001",
        "vehicleSpeed": 0,
        "vehicleOdometerReading": 4075619,
        "fuelConsumption": 0,
        "gpS_OBD_SP": "Active",
        "createdBy": 1,
        "creationDateTime": "2025-04-01T16:09:49.6358172"
      },
      {
        "gpsobdRawDataID": 22,
        "vehicleNo": "NL01AH5820",
        "locationDateTime": "2025-04-02T14:09:59",
        "latitude": "17.343357",
        "longitude": "75.839355",
        "locationAddress": "1.02kms from Puncture Shop NH 52 Chadachan  VIJAYAPURA KARNATAKA INDIA 586204",
        "addressPostalCode": "100001",
        "vehicleSpeed": 0,
        "vehicleOdometerReading": 4287609,
        "fuelConsumption": 0,
        "gpS_OBD_SP": "Active",
        "createdBy": 1,
        "creationDateTime": "2025-04-09T15:38:03.8101543"
      },
      {
        "gpsobdRawDataID": 16,
        "vehicleNo": "NL01N6703",
        "locationDateTime": "2025-04-09T15:36:56",
        "latitude": "28.215145",
        "longitude": "76.78577",
        "locationAddress": "950.68m from Indian Oil Petrol Pump HUDA Industrial Area Dharuhera Dharuhera REWARI HARYANA INDIA 123110",
        "addressPostalCode": "100001",
        "vehicleSpeed": 0,
        "vehicleOdometerReading": 2813,
        "fuelConsumption": 0,
        "gpS_OBD_SP": "Active",
        "createdBy": 1,
        "creationDateTime": "2025-04-09T15:38:03.8101474"
      },
    ]

    toggleTravelHistoryCard(){
      this.isTravelHistoryCardOpen = !this.isTravelHistoryCardOpen;
    }

    mapCenter: google.maps.LatLngLiteral = { lat: 20.5937, lng: 78.9629 }; // India center
    zoom = 6;
  
    startMarker?: google.maps.LatLngLiteral;
    endMarker?: google.maps.LatLngLiteral;
    polylinePath: google.maps.LatLngLiteral[] = [];
  
    polylineOptions: google.maps.PolylineOptions = {
      strokeColor: '#1976D2',
      strokeOpacity: 1.0,
      strokeWeight: 4,
      icons: [
        {
          icon: {
            path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
            scale: 3,
            strokeColor: '#1976D2'
          },
          offset: '10%',
          repeat: '30px'
        }
      ]
    };
  
    startIcon = {
      url: 'assets/start.png',
      scaledSize: { width: 32, height: 32 }
    };
  
    endIcon = {
      url: 'assets/end.png',
      scaledSize: { width: 32, height: 32 }
    };
  
    ngOnInit(): void {
      this.prepareRoute();
    }
  
    prepareRoute() {
      const filtered = this.gpsData
        .filter(p => p.latitude && p.longitude)
        .sort((a, b) => new Date(a.locationDateTime).getTime() - new Date(b.locationDateTime).getTime());
  
      this.polylinePath = filtered.map(point => ({
        lat: +point.latitude,
        lng: +point.longitude
      }));
  
      if (this.polylinePath.length) {
        this.startMarker = this.polylinePath[0];
        this.endMarker = this.polylinePath[this.polylinePath.length - 1];
        this.mapCenter = this.startMarker;
      }
    }

}
