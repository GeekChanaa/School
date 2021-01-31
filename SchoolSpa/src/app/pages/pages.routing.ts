import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards/auth.guard';
import { AboutComponent } from './About/About.component';
import { G3EIComponent } from './Formations/CycleIngenieur/G3EI/G3EI.component';
import { GINDComponent } from './Formations/CycleIngenieur/GIND/GIND.component';
import { GINFComponent } from './Formations/CycleIngenieur/GINF/GINF.component';
import { GSEAComponent } from './Formations/CycleIngenieur/GSEA/GSEA.component';
import { GSTRComponent } from './Formations/CycleIngenieur/GSTR/GSTR.component';
import { MBISDComponent } from './Formations/CycleMaster/MBISD/MBISD.component';
import { MCSCComponent } from './Formations/CycleMaster/MCSC/MCSC.component';
import { MPSIComponent } from './Formations/CycleMaster/MPSI/MPSI.component';
import { MSCEEComponent } from './Formations/CycleMaster/MSCEE/MSCEE.component';
import { GenieInfoComponent } from './Formations/DCA/GenieInfo/GenieInfo.component';
import { GenieSysIndusComponent } from './Formations/DCA/GenieSysIndus/GenieSysIndus.component';
import { LogistiqueComponent } from './Formations/DCA/Logistique/Logistique.component';
import { MaintenanceSysMecatroniquesComponent } from './Formations/DCA/MaintenanceSysMecatroniques/MaintenanceSysMecatroniques.component';
import { ManagementIndusComponent } from './Formations/DCA/ManagementIndus/ManagementIndus.component';
import { ManagementQHSEComponent } from './Formations/DCA/ManagementQHSE/ManagementQHSE.component';
import { TechConceptionWebMobileComponent } from './Formations/DCA/TechConceptionWebMobile/TechConceptionWebMobile.component';
import { TechIndusSimuComponent } from './Formations/DCA/TechIndusSimu/TechIndusSimu.component';
import { IISDComponent } from './Formations/DCEES/IISD/IISD.component';
import { ISMPComponent } from './Formations/DCEES/ISMP/ISMP.component';
import { ITIComponent } from './Formations/DCEES/ITI/ITI.component';
import { MSILComponent } from './Formations/DCEES/MSIL/MSIL.component';
import { SIMDComponent } from './Formations/DCEES/SIMD/SIMD.component';
import { GEIComponent } from './Formations/Departements/GEI/GEI.component';
import { MIComponent } from './Formations/Departements/MI/MI.component';
import { SICComponent } from './Formations/Departements/SIC/SIC.component';
import { HomeComponent } from './Home/Home.component';
import { ProfileComponent } from './Profile/Profile.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'About', component: AboutComponent},
  {path : 'CycleIngénieur/GINF', component: GINFComponent},
  {path : 'CycleIngénieur/GSTR', component: GSTRComponent},
  {path : 'CycleIngénieur/GSEA', component: GSEAComponent},
  {path : 'CycleIngénieur/GIND', component: GINDComponent},
  {path : 'CycleIngénieur/G3EI', component: G3EIComponent},
  {path : 'CycleMaster/MBISD', component: MBISDComponent},
  {path : 'CycleMaster/MSCEE', component: MSCEEComponent},
  {path : 'CycleMaster/MPSI', component: MPSIComponent},
  {path : 'CycleMaster/MCSC', component: MCSCComponent},
  {path : 'DCA/GenieInfo', component: GenieInfoComponent},
  {path : 'DCA/TechIndusSimu', component: TechIndusSimuComponent},
  {path : 'DCA/MaintenanceSysMecatroniques', component: MaintenanceSysMecatroniquesComponent},
  {path : 'DCA/Logistique', component: LogistiqueComponent},
  {path : 'DCA/GenieSysIndus', component: GenieSysIndusComponent},
  {path : 'DCA/ManagementIndus', component: ManagementIndusComponent},
  {path : 'DCA/ManagementQHSE', component: ManagementQHSEComponent},
  {path : 'DCA/TechConceptionWebMobile', component: TechConceptionWebMobileComponent},
  {path : 'DCEES/ITI', component: ITIComponent},
  {path : 'DCEES/ISMP', component: ISMPComponent},
  {path : 'DCEES/IISD', component: IISDComponent},
  {path : 'DCEES/MSIL', component: MSILComponent},
  {path : 'DCEES/SIMD', component: SIMDComponent},
  {path : 'Departements/SIC', component: SICComponent},
  {path : 'Departements/GEI', component: GEIComponent},
  {path : 'Departements/MI', component: MIComponent},
  {path : 'Profile', component: ProfileComponent, canActivate : [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule{
  
}
