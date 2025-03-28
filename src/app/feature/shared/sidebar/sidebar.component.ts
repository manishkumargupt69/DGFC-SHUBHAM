import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 drawerItems:Array<any>=[];
 base = 'dashboard';
 baseModuleMap: Map<string, string> = new Map();
 @Input() isSidebarOpen = false;
 @Input() isHidden = false;
 activeRoute: string = '';
 
 constructor(private router:Router) { }

  ngOnInit() {
    this.initSidebar();
    this.drawerItems.forEach(x => {
      this.baseModuleMap.set(x.base, x.base.toUpperCase());
    });
  }

  initSidebar(){
    this.drawerItems=[
      {
          "routeLink": "master-data",
          "icon": "fa-solid fa-grip",
          "title": "Master Data",
          "base": "master-data",
          "isActive": false,
          "subMenu": [
              {
                  "routeLink": "admin",
                  "title": "Admin",
                  "base": "admin",
                  "isActive": false,
                  "subItems": [
                      {
                          "routeLink": "master/admin/branch-dashboard",
                          "title": "Branch Master",
                          "base": "branch-master",
                          "isActive": false
                      },
                      {
                          "routeLink": "company-master",
                          "title": "Company Master",
                          "base": "company-master",
                          "isActive": false
                      },
                      {
                          "routeLink": "department-master",
                          "title": "Department Master",
                          "base": "department-master",
                          "isActive": false
                      },
                      {
                          "routeLink": "designation-master",
                          "title": "Designation Master",
                          "base": "designation-master",
                          "isActive": false
                      },
                      {
                          "routeLink": "employee-master",
                          "title": "Employee Master",
                          "base": "employee-master",
                          "isActive": false
                      },
                      {
                          "routeLink": "city-master",
                          "title": "City Master",
                          "base": "city-master",
                          "isActive": false
                      },
                      {
                          "routeLink": "quick-codes",
                          "title": "Quick Codes",
                          "base": "quick-codes",
                          "isActive": false
                      },
                      {
                          "routeLink": "user-master",
                          "title": "User Master",
                          "base": "user-master",
                          "isActive": false
                      },
                      {
                          "routeLink": "user-role-master",
                          "title": "User Role Master",
                          "base": "user-role-master",
                          "isActive": false
                      },
                      {
                          "routeLink": "zone-master",
                          "title": "Zone Master",
                          "base": "zone-master",
                          "isActive": false
                      }
                  ]
              },
              {
                  "routeLink": "fleet",
                  "title": "Fleet",
                  "base": "fleet",
                  "isActive": false,
                  "subItems": [
                      {
                          "routeLink": "driver-master",
                          "title": "Driver Master",
                          "base": "driver-master",
                          "isActive": false
                      },
                      {
                          "routeLink": "fleet-traffic",
                          "title": "Fleet Traffic",
                          "base": "fleet-traffic",
                          "isActive": false
                      },
                      {
                          "routeLink": "fuel-daily-rate",
                          "title": "Fuel Daily Rate",
                          "base": "fuel-daily-rate",
                          "isActive": false
                      },
                      {
                          "routeLink": "route-master",
                          "title": "Route Master",
                          "base": "route-master",
                          "isActive": false
                      },
                      {
                          "routeLink": "trip-advance-budget-matrix",
                          "title": "Trip Advance Budget Matrix",
                          "base": "trip-advance-budget-matrix",
                          "isActive": false
                      },
                      {
                          "routeLink": "vehile-master",
                          "title": "Vehile Master",
                          "base": "vehile-master",
                          "isActive": false
                      },
                      {
                          "routeLink": "vehicle-models",
                          "title": "Vehicle Models",
                          "base": "vehicle-models",
                          "isActive": false
                      },
                      {
                          "routeLink": "vehicle-type-master",
                          "title": "Vehicle Type Master",
                          "base": "vehicle-type-master",
                          "isActive": false
                      }
                  ]
              },
              {
                  "routeLink": "operations",
                  "title": "Operations",
                  "base": "operations",
                  "isActive": false,
                  "subItems": [
                      {
                          "routeLink": "material-master",
                          "title": "Material Master",
                          "base": "material-master",
                          "isActive": false
                      },
                      {
                          "routeLink": "consignee-mangement",
                          "title": "Consignee Mangement",
                          "base": "consignee-mangement",
                          "isActive": false
                      }
                  ]
              },
              {
                  "routeLink": "credit-control",
                  "title": "Credit Control",
                  "base": "credit-control",
                  "isActive": false,
                  "subItems": [
                      {
                          "routeLink": "customer-master",
                          "title": "Customer Master",
                          "base": "customer-master",
                          "isActive": false
                      },
                      {
                          "routeLink": "billing-party",
                          "title": "Billing Party",
                          "base": "billing-party",
                          "isActive": false
                      },
                      {
                          "routeLink": "customer-contract-management",
                          "title": "Customer Contract Management",
                          "base": "customer-contract-management",
                          "isActive": false
                      },
                      {
                          "routeLink": "payment-terms",
                          "title": "Payment Terms",
                          "base": "payment-terms",
                          "isActive": false
                      }
                  ]
              },
              {
                  "routeLink": "maintenance",
                  "title": "Maintenance",
                  "base": "maintenance",
                  "isActive": false,
                  "subItems": [
                      {
                          "routeLink": "item-master",
                          "title": "Item Master",
                          "base": "item-master",
                          "isActive": false
                      },
                      {
                          "routeLink": "mechanic-master",
                          "title": "Mechanic Master",
                          "base": "mechanic-master",
                          "isActive": false
                      }
                  ]
              },
              {
                  "routeLink": "accounts",
                  "title": "Accounts",
                  "base": "accounts",
                  "isActive": false,
                  "subItems": [
                      {
                          "routeLink": "account-ledger",
                          "title": "Account Ledger",
                          "icon": "fa-solid fa-truck",                        
                          "isActive": false
                      },
                      {
                          "routeLink": "vendor-master",
                          "title": "Vendor Master",
                          "base": "vendor-master",
                          "isActive": false
                      }
                  ]
              }
          ]
      },
      {
          "routeLink": "operations",
          "icon": "fa-solid fa-sailboat",
          "title": "Operations",
          "base": "operations",
          "isActive": false,
          "subMenu": [
              {
                  "routeLink": "booking-request-mangement",
                  "title": "Booking Request Mangement",
                  "base": "booking-request-mangement",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "trip-management",
                  "title": "Trip Management",
                  "base": "trip-management",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "deps-management",
                  "title": "DEPS Management",
                  "base": "deps-management",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "market-vehicle-protal",
                  "title": "Market Vehicle Protal",
                  "base": "market-vehicle-protal",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "stationary--book-management",
                  "title": "Stationary  Book Management",
                  "base": "stationary--book-management",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "vehicle-locator",
                  "title": "Vehicle locator",
                  "base": "vehicle-locator",
                  "isActive": false,
                  "subItems": []
              }
          ]
      },
      {
          "routeLink": "market-vehicle",
          "icon": "fa-solid fa-truck",
          "title": "Market Vehicle",
          "base": "market-vehicle",
          "isActive": false,
          "subMenu": [
              {
                  "routeLink": "market-vehicle",
                  "title": "Market Vehicle",
                  "base": "market-vehicle",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "market-vehicle--ath",
                  "title": "Market Vehicle -ATH",
                  "base": "market-vehicle--ath",
                  "isActive": false,
                  "subItems": []
              }
          ]
      },
      {
          "routeLink": "market-intelligence",
          "icon": "fa-solid fa-brain",
          "title": "Market Intelligence",
          "base": "market-intelligence",
          "isActive": false,
          "subMenu": [
              {
                  "routeLink": "share-of-business",
                  "title": "Share of Business",
                  "base": "share-of-business",
                  "isActive": false,
                  "subItems": []
              }
          ]
      },
      {
          "routeLink": "fleet-operations",
          "icon": "fa-brands fa-ubuntu",
          "title": "Fleet Operations",
          "base": "fleet-operations",
          "isActive": false,
          "subMenu": [
              {
                  "routeLink": "empty-trip-creation",
                  "title": "Empty Trip Creation",
                  "base": "empty-trip-creation",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "driver-refusel",
                  "title": "Driver Refusel",
                  "base": "driver-refusel",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "driver-counselling",
                  "title": "Driver Counselling",
                  "base": "driver-counselling",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "driver-incentive-mangement",
                  "title": "Driver Incentive Mangement",
                  "base": "driver-incentive-mangement",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "driver-vehicle-associations",
                  "title": "Driver Vehicle Associations",
                  "base": "driver-vehicle-associations",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "driver-performance-rating",
                  "title": "Driver Performance Rating",
                  "base": "driver-performance-rating",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "fleet-control-tower",
                  "title": "Fleet Control Tower",
                  "base": "fleet-control-tower",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "rt-creation",
                  "title": "RT Creation",
                  "base": "rt-creation",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "rt-settlement",
                  "title": "RT Settlement",
                  "base": "rt-settlement",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "traffic-challan-management",
                  "title": "Traffic Challan Management",
                  "base": "traffic-challan-management",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "vehicle-accident-management",
                  "title": "Vehicle Accident Management",
                  "base": "vehicle-accident-management",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "assign-vehicle",
                  "title": "Assign Vehicle",
                  "base": "assign-vehicle",
                  "isActive": false,
                  "subItems": [
                      {
                          "routeLink": "assign-vehicle",
                          "title": "Assign Vehicle",
                          "base": "assign-vehicle",
                          "isActive": false
                      }
                  ]
              }
          ]
      },
      {
          "routeLink": "trip-advance",
          "icon": "fa-solid fa-money-bill",
          "title": "Trip Advance",
          "base": "trip-advance",
          "isActive": false,
          "subMenu": [
              {
                  "routeLink": "trip-advance-budgeted",
                  "title": "Trip Advance Budgeted",
                  "base": "trip-advance-budgeted",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "trip-advance-requests",
                  "title": "Trip Advance Requests",
                  "base": "trip-advance-requests",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "trip-advance-disbursement",
                  "title": "Trip Advance Disbursement",
                  "base": "trip-advance-disbursement",
                  "isActive": false,
                  "subItems": []
              }
          ]
      },
      {
          "routeLink": "vehicle-status",
          "icon": "fa-solid fa-signal",
          "title": "Vehicle Status",
          "base": "vehicle-status",
          "isActive": false,
          "subMenu": [
              {
                  "routeLink": "enroute-management",
                  "title": "Enroute Management",
                  "base": "enroute-management",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "vehicle-loading-events",
                  "title": "Vehicle Loading Events",
                  "base": "vehicle-loading-events",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "vehicle-ops-events",
                  "title": "Vehicle Ops Events",
                  "base": "vehicle-ops-events",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "vehicle-unloading-events",
                  "title": "Vehicle Unloading Events",
                  "base": "vehicle-unloading-events",
                  "isActive": false,
                  "subItems": []
              }
          ]
      },
      {
          "routeLink": "operations-and-billing",
          "icon": "fa-solid fa-file-invoice",
          "title": "Operations and Billing",
          "base": "operations-and-billing",
          "isActive": false,
          "subMenu": [
              {
                  "routeLink": "gr/lr-entry",
                  "title": "GR/LR Entry",
                  "base": "gr/lr-entry",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "pod-upload",
                  "title": "POD Upload",
                  "base": "pod-upload",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "pod-tracking",
                  "title": "POD Tracking",
                  "base": "pod-tracking",
                  "isActive": false,
                  "subItems": []
              }
          ]
      },
      {
          "routeLink": "shipment-tracking",
          "icon": "fa-solid fa-magnifying-glass",
          "title": "Shipment Tracking",
          "base": "shipment-tracking",
          "isActive": false,
          "subMenu": [
              {
                  "routeLink": "delivered-gr-tracking",
                  "title": "Delivered GR Tracking",
                  "base": "delivered-gr-tracking",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "intransit-gr#-tracking",
                  "title": "Intransit GR# Tracking",
                  "base": "intransit-gr#-tracking",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "vehicle-tracking",
                  "title": "Vehicle Tracking",
                  "base": "vehicle-tracking",
                  "isActive": false,
                  "subItems": []
              }
          ]
      },
      {
          "routeLink": "customer-portal",
          "icon": "fa-regular fa-user",
          "title": "Customer Portal",
          "base": "customer-portal",
          "isActive": false,
          "subMenu": [
              {
                  "routeLink": "customer-mis",
                  "title": "Customer MIS",
                  "base": "customer-mis",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "customer-portal",
                  "title": "Customer Portal",
                  "base": "customer-portal",
                  "isActive": false,
                  "subItems": []
              }
          ]
      },
      {
          "routeLink": "billing",
          "icon": "fa-solid fa-paste",
          "title": "Billing",
          "base": "billing",
          "isActive": false,
          "subMenu": [
              {
                  "routeLink": "bill-approval-and-submission",
                  "title": "Bill Approval and Submission",
                  "base": "bill-approval-and-submission",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "credit-note-/-debit-note",
                  "title": "Credit Note / Debit Note",
                  "base": "credit-note-/-debit-note",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "customer-bill-print",
                  "title": "Customer Bill Print",
                  "base": "customer-bill-print",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "customer-cover-note-generation-and-print",
                  "title": "Customer Cover Note Generation and Print",
                  "base": "customer-cover-note-generation-and-print",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "draft-bill-generation",
                  "title": "Draft Bill Generation",
                  "base": "draft-bill-generation",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "gr-finalization",
                  "title": "GR Finalization",
                  "base": "gr-finalization",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "unbilled-grs",
                  "title": "Unbilled GRs",
                  "base": "unbilled-grs",
                  "isActive": false,
                  "subItems": []
              }
          ]
      },
      {
          "routeLink": "credit-contol",
          "icon": "fa-regular fa-credit-card",
          "title": "Credit Contol",
          "base": "credit-contol",
          "isActive": false,
          "subMenu": [
              {
                  "routeLink": "customer-deduction-and-recovery",
                  "title": "Customer Deduction and Recovery",
                  "base": "customer-deduction-and-recovery",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "customer-outstanding",
                  "title": "Customer Outstanding",
                  "base": "customer-outstanding",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "money-receipt",
                  "title": "Money Receipt",
                  "base": "money-receipt",
                  "isActive": false,
                  "subItems": []
              }
          ]
      },
      {
          "routeLink": "procurement",
          "icon": "fa-solid fa-bell",
          "title": "Procurement",
          "base": "procurement",
          "isActive": false,
          "subMenu": [
              {
                  "routeLink": "goods-receipt",
                  "title": "Goods Receipt",
                  "base": "goods-receipt",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "purchase-requisiting",
                  "title": "Purchase Requisiting",
                  "base": "purchase-requisiting",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "purchase-order",
                  "title": "Purchase Order",
                  "base": "purchase-order",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "vendor-bill-entry",
                  "title": "Vendor Bill Entry",
                  "base": "vendor-bill-entry",
                  "isActive": false,
                  "subItems": []
              }
          ]
      },
      {
          "routeLink": "accounts",
          "icon": "fa-solid fa-receipt",
          "title": "Accounts",
          "base": "accounts",
          "isActive": false,
          "subMenu": [
              {
                  "routeLink": "vendor-payment",
                  "title": "Vendor Payment",
                  "base": "vendor-payment",
                  "isActive": false,
                  "subItems": []
              }
          ]
      },
      {
          "routeLink": "store-management",
          "icon": "fa-solid fa-store",
          "title": "Store Management",
          "base": "store-management",
          "isActive": false,
          "subMenu": [
              {
                  "routeLink": "inventory-management",
                  "title": "Inventory Management",
                  "base": "inventory-management",
                  "isActive": false,
                  "subItems": []
              },
              {
                  "routeLink": "spare-part-cycle-count",
                  "title": "Spare Part Cycle Count",
                  "base": "spare-part-cycle-count",
                  "isActive": false,
                  "subItems": []
              }
          ]
      },
      {
          "routeLink": "support",
          "icon": "fa-solid fa-headset",
          "title": "Support",
          "base": "support",
          "isActive": false,
          "subMenu": [
              {
                  "routeLink": "group-ticket-management",
                  "title": "Group Ticket Management",
                  "base": "group-ticket-management",
                  "isActive": false,
                  "subItems": []
              }
          ]
      }
  ]
  }

  userIsPermitted(drawerItemBase: string) {
    const module = this.baseModuleMap.get(drawerItemBase);
    return true;
  }

  handleMenuClick(drawerItemIndex: number) {
    this.base = this.drawerItems[drawerItemIndex].base;
    this.drawerItems.forEach(x=>{
      x.isActive = false;
      if(x.subMenu){
        x.subMenu.forEach((y:any)=>{
          y.isActive = false;
        })
      }
    });
    this.drawerItems[drawerItemIndex].isActive = true;

    if(this.drawerItems[drawerItemIndex].subMenu.length==0){
     this.isSidebarOpen=false
     this.navigateTo(this.drawerItems[drawerItemIndex].routeLink);
    }
  }

  handleSubMenuClick(drawerItemIndex: number, subMenuIndex: number,event:any) {
    event.stopPropagation(); 
    this.base = this.drawerItems[drawerItemIndex].subMenu[subMenuIndex].base;
    this.drawerItems[drawerItemIndex].subMenu.forEach((x:any)=>{
      x.isActive = false;
    });
    this.drawerItems[drawerItemIndex].subMenu[subMenuIndex].isActive = true;
    if(this.drawerItems[drawerItemIndex].subMenu[subMenuIndex].subItems.length==0){
      this.isSidebarOpen=false
      this.navigateTo(this.drawerItems[drawerItemIndex].subMenu[subMenuIndex].routeLink);
    }
  }

  handleNestedMenuClick(drawerItemIndex: number, subMenuIndex: number, subItemIndex: number,event:any) {
    event.stopPropagation(); 
    this.base = this.drawerItems[drawerItemIndex].subMenu[subMenuIndex].subItems[subItemIndex].base;
    this.drawerItems[drawerItemIndex].subMenu[subMenuIndex].subItems.forEach((x:any)=>{
      x.isActive = false;
    });
    this.drawerItems[drawerItemIndex].subMenu[subMenuIndex].subItems[subItemIndex].isActive = true;
    this.drawerItems[drawerItemIndex].expanded = false;
    this.isSidebarOpen = false;
    this.navigateTo(this.drawerItems[drawerItemIndex].subMenu[subMenuIndex].subItems[subItemIndex].routeLink);
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleItem(selectedItem: any) {
    this.drawerItems.forEach((item: any) => {
      if (item !== selectedItem) {
        item.expanded = false; 
        if (item.subMenu) {
          item.subMenu.forEach((subItem: any) => {
            subItem.expanded = false;
          });
        }
      }
    });
    selectedItem.expanded = !selectedItem.expanded;
  }
  
  toggleSubItem(selectedItem: any, parentItem: any, event: Event) {
    event.stopPropagation(); 
    parentItem.subMenu.forEach((subItem: any) => {
      if (subItem !== selectedItem) {
        subItem.expanded = false;
      }
    });
    selectedItem.expanded = !selectedItem.expanded;
  }
  
  navigateTo(route: string) {
    this.router.navigateByUrl(`/app/${route}`);
  }


}
