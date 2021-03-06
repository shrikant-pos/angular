import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAsterisk,
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faPlayCircle,
  faRocket,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook,
  faList,
  faChartBar,
  faUser,
  faAddressBook,
  faFile,
  faSignOutAlt,
  faFileInvoice,
  faCalendarAlt,
  faMobileAlt,
  faMailBulk,
  faInbox,
  faBox,
  faToolbox,
  faSearch,
  faAngleLeft,
  faAngleRight,
  faUserFriends,
  faUserInjured,
  faUserCheck,
  faBookOpen,
  faClipboardList,
  faWindowClose,
  faCircle,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

library.add(
  faAsterisk,
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faRocket,
  faPlayCircle,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook,
  faList,
  faChartBar,
  faUser,
  faAddressBook,
  faFile,
  faSignOutAlt,
  faFileInvoice,
  faCalendarAlt,
  faMobileAlt,
  faToolbox,
  faSearch,
  faAngleLeft,
  faAngleRight,
  faUserFriends,
  faUserCheck,
  faBookOpen,
  faClipboardList,
  faWindowClose,
  faSpinner
);

import { HighchartsChartModule } from 'highcharts-angular';
import { LoadingContainerComponent } from '../loading-container/loading-container.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    HighchartsChartModule,

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    FontAwesomeModule,
    HighchartsChartModule,
    LoadingContainerComponent
  ],
  declarations: [LoadingContainerComponent]
})
export class SharedModule { }
