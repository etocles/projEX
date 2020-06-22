Menu {
  commandsMap: {
    //File
    '2': MenuItem {
      role: 'filemenu',
      submenu: [Menu],
      type: 'submenu',
      accelerator: null,
      icon: null,
      label: 'File',
      sublabel: '',
      toolTip: '',
      enabled: true,
      visible: true,
      checked: false,
      acceleratorWorksWhenHidden: true,

      registerAccelerator: true,
      commandId: 2,
      click: [Function],
      menu: [Circular]
    },
    //Edit
    '12': MenuItem {
      role: 'editmenu',
      submenu: [Menu],
      type: 'submenu',
      accelerator: null,
      icon: null,
      label: 'Edit',
      sublabel: '',
      toolTip: '',
      enabled: true,
      visible: true,
      checked: false,
      acceleratorWorksWhenHidden: true,
      registerAccelerator: true,
      commandId: 12,
      click: [Function],
      menu: [Circular]
    },
    //View
    '22': MenuItem {
      role: 'viewmenu',
      submenu: [Menu],
      type: 'submenu',
      accelerator: null,
      icon: null,
      label: 'View',
      sublabel: '',
      toolTip: '',
      enabled: true,
      visible: true,

      checked: false,
      acceleratorWorksWhenHidden: true,
      registerAccelerator: true,
      commandId: 22,
      click: [Function],
      menu: [Circular]
    },
    //Window
    '26': MenuItem {
      role: 'windowmenu',
      submenu: [Menu],
      type: 'submenu',
      accelerator: null,
      icon: null,
      label: 'Window',
      sublabel: '',
      toolTip: '',
      enabled: true,
      visible: true,
      checked: false,
      acceleratorWorksWhenHidden: true,
      registerAccelerator: true,
      commandId: 26,
      click: [Function],
      menu: [Circular]
    },
    //Help
    '31': MenuItem {
      role: 'help',
      submenu: [Menu],
      type: 'submenu',
      accelerator: null,
      icon: null,
      label: 'Help',
      sublabel: '',
      toolTip: '',
      enabled: true,
      visible: true,
      checked: false,
      acceleratorWorksWhenHidden: true,
      registerAccelerator: true,
      commandId: 31,
      click: [Function],
      menu: [Circular]
    },
  },
  groupsMap: {},
  items: [
    //File
    MenuItem {
      role: 'filemenu',
      submenu: [Menu],
      type: 'submenu',
      accelerator: null,
      icon: null,
      label: 'File',
      sublabel: '',
      toolTip: '',
      enabled: true,
      visible: true,
      checked: false,

      acceleratorWorksWhenHidden: true,
      registerAccelerator: true,
      commandId: 2,
      click: [Function],
      menu: [Circular]
    },
    //Edit
    MenuItem {
      role: 'editmenu',
      submenu: [Menu],
      type: 'submenu',
      accelerator: null,
      icon: null,
      label: 'Edit',
      sublabel: '',
      toolTip: '',
      enabled: true,
      visible: true,
      checked: false,
      acceleratorWorksWhenHidden: true,
      registerAccelerator: true,
      commandId: 12,
      click: [Function],
      menu: [Circular]
    },
    //View
    MenuItem {
      role: 'viewmenu',
      submenu: [Menu],
      type: 'submenu',
      accelerator: null,
      icon: null,
      label: 'View',
      sublabel: '',
      toolTip: '',
      enabled: true,
      visible: true,
      checked: false,

      acceleratorWorksWhenHidden: true,
      registerAccelerator: true,
      commandId: 22,
      click: [Function],
      menu: [Circular]
    },
    //Window
    MenuItem {
      role: 'windowmenu',
      submenu: [Menu],
      type: 'submenu',
      accelerator: null,
      icon: null,
      label: 'Window',
      sublabel: '',
      toolTip: '',
      acceleratorWorksWhenHidden: true,
      registerAccelerator: true,
      commandId: 31,
      click: [Function],
      menu: [Circular]
    }
  ],
  delegate: {
    isCommandIdChecked: [Function: isCommandIdChecked],
    isCommandIdEnabled: [Function: isCommandIdEnabled],
    shouldCommandIdWorkWhenHidden: [Function: shouldCommandIdWorkWhenHidden],
    isCommandIdVisible: [Function: isCommandIdVisible],
    getAcceleratorForCommandId: [Function: getAcceleratorForCommandId],
    shouldRegisterAcceleratorForCommandId: [Function: shouldRegisterAcceleratorForCommandId],
    executeCommand: [Function: executeCommand],
    menuWillShow: [Function: menuWillShow]
  }
}
