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

class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
  }
}

class ToolTip {
  constructor(closeNotifireFunction) {
    this.closeNotifire = closeNotifireFunction;
  }
  closeTooltip() {
    this.detach();
    this.closeNotifire();
  }

  detach() {
    this.element.remove();
  }

  attach() {
    //will display text at the end of the page
    const tooltipElement = document.createElement("div");
    tooltipElement.className = "card";
    tooltipElement.textContent = "Hello";
    tooltipElement.addEventListener("click", this.closeTooltip.bind(this));
    this.element = tooltipElement;
    document.body.append(tooltipElement);
  }
}

class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, updateProjectsListsFunction, type) {
    this.id = id;
    this.updateProjectsListsHandler = updateProjectsListsFunction;
    this.connectSwitchButton(type);
    this.connectMoreInfoButton();
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const toolTip = new ToolTip(() => {
      this.hasActiveTooltip = false;
    });
    toolTip.attach();
    this.hasActiveTooltip = true;
  }

  connectMoreInfoButton() {
    const projItemEl = document.getElementById(this.id);
    const moreInfoBtn = projItemEl.querySelector("button:first-of-type");
    moreInfoBtn.addEventListener("click", this.showMoreInfoHandler);
  }

  connectSwitchButton(type) {
    const projItemEl = document.getElementById(this.id);
    let switchBtn = projItemEl.querySelector("button:last-of-type");
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === "active" ? "finished" : "Activate";

    //when we click the btn we want to remove this projItem from its list and add it to the other project list
    switchBtn.addEventListener(
      "click",
      this.updateProjectsListsHandler.bind(null, this.id)
    );
  }

  update(updateProjectsListsFunction, type) {
    this.updateProjectsListsHandler = updateProjectsListsFunction;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
      );
    }
    console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }
  //what we need to do: make sure whrn we switch a project ,we also update that project to change the button caption and add a new event listener

  addProject(project) {
    this.projects.push(project); //now we moved the proj from a list to another in js

    console.log(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    //we should pass a switch project function , because when we add a project,that means we switch the lists,it switch from instance A to instance B ,
    //and therefor this function(switch Handler) to wich this project is bound in the end has to be changed because that still points at the old instance A , the project is now an instance B ,so we have to pass the switchproject as it is defined in instance B
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    console.log(projectId);
    this.switchHandler(this.projects.find((p) => p.id === projectId)); //we 're passing the project tjo thw switch handler function
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");

    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );
  }
}
App.init();
