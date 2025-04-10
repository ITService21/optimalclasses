export const searchOptions = [
  // -------------------basic---------------------
  {
    id: "homeAction",
    name: "Home",
    shortcut: ["h"],
    keywords: "back home main dashboard",
    section: "Basic",
    perform: () => (window.location.href = "/"),
    //icon: // ClockIcon,
    subtitle: "Subtitles can help add more context.",
  },

  // -------------------add-------------------
  {
    id: "workTimeAction",
    name: "Work time",
    shortcut: ["a", "w"],
    keywords: "work time log add",
    section: "Add",
    subtitle: "Log and manage your work time.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "vacationAction",
    name: "Vacation",
    shortcut: ["a", "v"],
    keywords: "vacation add",
    section: "Add",
    subtitle: "Log and manage your days off.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "invoiceAction",
    name: "Invoice",
    shortcut: ["a", "i"],
    keywords: "invoice add",
    section: "Add",
    subtitle: "Log and manage your invoices.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "documentsAction",
    name: "Document",
    shortcut: ["a", "d"],
    keywords: "document add",
    section: "Add",
    subtitle: "Log and manage your documents.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  // -------------------project---------------------
  {
    id: "projectCreateAction",
    name: "Create project",
    shortcut: ["p", "c"],
    keywords: "project create",
    section: "Project",
    subtitle: "Create new project.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "projectManageAction",
    name: "Manage project",
    shortcut: ["p", "m"],
    keywords: "project manage",
    section: "Project",
    subtitle: "Manage project.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "projectArchiveAction",
    name: "Archive project",
    shortcut: ["p", "a"],
    keywords: "project archive",
    section: "Project",
    subtitle: "Archive project.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  // -----------------client-----------------------
  {
    id: "clientCreateAction",
    name: "Create client",
    shortcut: ["l", "c"],
    keywords: "project create",
    section: "Client",
    subtitle: "Create new project.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "clientManageAction",
    name: "Manage client",
    shortcut: ["l", "m"],
    keywords: "client manage",
    section: "Client",
    subtitle: "Manage client.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "clientArchiveAction",
    name: "Archive client",
    shortcut: ["l", "a"],
    keywords: "client archive",
    section: "Client",
    subtitle: "Archive client.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  // ---------------employee-------------------------
  {
    id: "employeeCreateAction",
    name: "Create employee",
    shortcut: ["e", "c"],
    keywords: "employee create",
    section: "Employee",
    subtitle: "Create new employee.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "employeeManageAction",
    name: "Manage employee",
    shortcut: ["e", "m"],
    keywords: "employee manage",
    section: "Employee",
    subtitle: "Manage employee.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "employeeArchiveAction",
    name: "Archive employee",
    shortcut: ["e", "a"],
    keywords: "employee archive",
    section: "Employee",
    subtitle: "Archive employee.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  // ---------------employee-------------------------
  {
    id: "employeeCreateAction",
    name: "Create employee",
    shortcut: ["e", "c"],
    keywords: "employee create",
    section: "Employee",
    subtitle: "Create new employee.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "employeeManageAction",
    name: "Manage employee",
    shortcut: ["e", "m"],
    keywords: "employee manage",
    section: "Employee",
    subtitle: "Manage employee.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "employeeArchiveAction",
    name: "Archive employee",
    shortcut: ["e", "a"],
    keywords: "employee archive",
    section: "Employee",
    subtitle: "Archive employee.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  // ---------------employee-------------------------
  {
    id: "employeeCreateAction",
    name: "Create employee",
    shortcut: ["e", "c"],
    keywords: "employee create",
    section: "Employee",
    subtitle: "Create new employee.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "employeeManageAction",
    name: "Manage employee",
    shortcut: ["e", "m"],
    keywords: "employee manage",
    section: "Employee",
    subtitle: "Manage employee.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "employeeArchiveAction",
    name: "Archive employee",
    shortcut: ["e", "a"],
    keywords: "employee archive",
    section: "Employee",
    subtitle: "Archive employee.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  // ---------------company-------------------------
  {
    id: "paperworkAction",
    name: "Paperwork",
    shortcut: ["c", "p"],
    keywords: "paperwork",
    section: "Company",
    subtitle: "Paperwork.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "licensesAction",
    name: "Licenses",
    shortcut: ["c", "l"],
    keywords: "licenses",
    section: "Company",
    subtitle: "Licenses.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "jiraAction",
    name: "Jira tickets",
    shortcut: ["c", "j"],
    keywords: "jira tickets",
    section: "Company",
    subtitle: "Jira tickets.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "perksBenefitsAction",
    name: "Perks and Benefits",
    shortcut: ["c", "b"],
    keywords: "perks benefits",
    section: "Company",
    subtitle: "Perks and Benefits.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },
  {
    id: "referralsRewardsAction",
    name: "Referrals and Rewards",
    shortcut: ["c", "r"],
    keywords: "referrals rewards",
    section: "Company",
    subtitle: "Referrals and Rewards.",
    perform: () => window.open("https://timc1.github.io/kbar/", "_blank"),
  },

];