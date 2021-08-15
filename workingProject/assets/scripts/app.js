/*
classes:

-ProjectList => manages all projects in one box , we are managing multiple projects in multiple lists
we use this class so we can create multiple instances of this class for the different lists
it's responsibabilty is to parse its content and find which projects belong to that list

-projectItem => for such rendered item  (we will not have to render these items,they're already there but we will have to add some logic to read them from DOM and populate some js logic with data thhat can be found in DOM)
 a single project should be managed with a project item class which is responsible for listening to clicks on the buttons

-AppManager => to manage the app overall
-ToolTip => displays a tool tip when we click on more info button
-----------------
given the data which might be coming from a server , we just wnt to be able to move data between the boxes


*/

class ToolTip {}

class ProjectItem {
  constructor(id) {
    this.id = id;
    this.connectSwitchButton();
    this.connectMoreInfoButton();
  }
  connectMoreInfoButton() {}

  connectSwitchButton() {
    const projItemEl = document.getElementById(this.id);
    const switchBtn = projItemEl.querySelector("button:last-of-type");
    //when we click the btn we want to remove this projItem from its list and add it to the other project list
    switchBtn.addEventListener("click");
  }
}

class ProjectList {
  projects = [];
  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id));
    }
    console.log(this.projects);
  }

  addProject() {}

  switchProject(projectId) {
    //       const projectIndex = this.projects.findIndex(p=>p.id===projectId)
    //       this.projects.slice(projectIndex,1)
    //   }
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
  }
}
App.init();
