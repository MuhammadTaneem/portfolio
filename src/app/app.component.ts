import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taneem';
  sidenavButton='menu'


  skills_list =  [
    "Python",
    "Django",
    "Django REST Framework",
    "FastAPI",
    "SQLAlchemy",
    "PostgreSQL",
    "Angular",
    "Angular Material",
    "Flutter",
    "Dart",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Version Control Tools",
    "C",
    "C++"
  ];

  activeTab: number = 1;

  setActiveTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

  scroll_to(name:HTMLElement,active_tab:number=0){
    name.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    if(active_tab){
      this.activeTab = active_tab;    }
    this.toggle_menu()
  }
  toggle_menu(){
    this.sidenavButton = this.sidenavButton == 'menu' ? 'close' : 'menu';
    if(this.sidenavButton=='close'){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }


}
