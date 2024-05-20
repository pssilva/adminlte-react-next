/*! AdminLTE app.js
 * ================
 * Main JS application file for AdminLTE v2. This file
 * should be included in all pages. It controls some layout
 * options and implements exclusive AdminLTE plugins.
 *
 * @Author  Almsaeed Studio
 * @Support <http://www.almsaeedstudio.com>
 * @Email   <abdullah@almsaeedstudio.com>
 * @version 2.3.6
 * @license MIT <http://opensource.org/licenses/MIT>
*/ 

import {useRef, useEffect} from 'react';
import jQuery from "jquery";

//window.$ = window.jQuery = jQuery;

//Make sure jQuery has been loaded before app.js
if (typeof jQuery === "undefined") {
  throw new Error("AdminLTE requires jQuery");
};

export interface IControlSidebarOptions {
  //Which button should trigger the open/close event
  toggleBtnSelector: string,
  //The sidebar selector
  selector: string,
  //Enable slide over content
  slide: boolean
}

export interface IBoxWidgetIcons {
  //Collapse icon
  collapse: string,
  //Open icon
  open: string,
  //Remove icon
  remove: string
}

export interface IBoxWidgetOptions {
  boxWidgetIcons: IBoxWidgetIcons,
}

export interface IBoxWidgetSelectors {
  boxWidgetIcons: {
    //Remove button selector
    remove: string,
    //Collapse button selector
    collapse: string
  }
}

export interface IScreenSizes {
  xs: number,
  sm: number,
  md: number,
  lg: number
}

export interface IDirectChat {
  //Enable direct chat by default
  enable: boolean,
  //The button to open and close the chat contacts pane
  contactToggleSelector: string
};

export interface IAdminLTEOptions {
    //Add slimscroll to navbar menus
    //This requires you to load the slimscroll plugin
    //in every page before app.js
    navbarMenuSlimscroll: boolean,
    navbarMenuSlimscrollWidth: string, //The width of the scroll bar
    navbarMenuHeight: string, //The height of the inner menu
    //General animation speed for JS animated elements such as box collapse/expand and
    //sidebar treeview slide up/down. This options accepts an integer as milliseconds,
    //'fast', 'normal', or 'slow'
    animationSpeed: number,
    //Sidebar push menu toggle button selector
    sidebarToggleSelector: string,
    //Activate sidebar push menu
    sidebarPushMenu: boolean,
    //Activate sidebar slimscroll if the fixed layout is set (requires SlimScroll Plugin)
    sidebarSlimScroll: boolean,
    //Enable sidebar expand on hover effect for sidebar mini
    //This option is forced to true if both the fixed layout and sidebar mini
    //are used together
    sidebarExpandOnHover: boolean,
    //BoxRefresh Plugin
    enableBoxRefresh: boolean,
    //Bootstrap.js tooltip
    enableBSToppltip: boolean,
    BSTooltipSelector: string,
    //Enable Fast Click. Fastclick.js creates a more
    //native touch experience with touch devices. If you
    //choose to enable the plugin, make sure you load the script
    //before AdminLTE's app.js
    enableFastclick: boolean,
    //Control Sidebar Options
    enableControlSidebar: boolean,
    controlSidebarOptions: IControlSidebarOptions,
    //Box Widget Plugin. Enable this plugin
    //to allow boxes to be collapsed and/or removed
    enableBoxWidget: boolean,
    //Box Widget plugin options
    boxWidgetOptions: IBoxWidgetOptions,
    //Direct Chat plugin options
    directChat: IDirectChat,
    //Define the set of colors to use globally around the website
    colors: IColores,
    //The standard screen sizes that bootstrap uses.
    //If you change these in the variables.less file, change
    //them here too.
    screenSizes: IScreenSizes
};

export interface IColores {
  lightBlue: string,
  red: string,
  green: string,
  aqua: string,
  yellow: string,
  blue: string,
  navy: string,
  teal: string,
  olive: string,
  lime: string,
  orange: string,
  fuchsia: string,
  purple: string,
  maroon: string,
  black: string,
  gray: string
}

export interface IAdminLTELayout {
  activate:  () => {},
  fix:  () => {},
  fixSidebar:  () => {}
};

export type ControlSidebarOptions = IControlSidebarOptions;
export type BoxWidgetIcons = IBoxWidgetIcons;
export type BoxWidgetOptions = IBoxWidgetOptions;
export type BoxWidgetSelectors = IBoxWidgetSelectors;
export type ScreenSizes = IScreenSizes;
export type DirectChat = IDirectChat;
export type AdminLTEOptions = IAdminLTEOptions;
export type Colores = IColores;
export type AdminLTELayout = IAdminLTELayout;

let defaultBoxWidgetIcons = {
  collapse: 'fa-minus',
  open: 'fa-plus',
  remove: 'fa-times'
};

let defaultBoxWidgetSelectors = {
  //Remove button selector
  remove: '[data-widget="remove"]',
  //Collapse button selector
  collapse: '[data-widget="collapse"]'
};

let defaultBoxWidgetOptions = {
  boxWidgetIcons: defaultBoxWidgetIcons,
  boxWidgetSelectors: defaultBoxWidgetSelectors
};

let defaultControlSidebarOptions = {
  toggleBtnSelector: "[data-toggle='control-sidebar']",
  selector: ".control-sidebar",
  slide: true
};

let defaultDirectChat = {
  enable: true,
  contactToggleSelector: '[data-widget="chat-pane-toggle"]'
};

let defaultColores = {
  lightBlue: "#3c8dbc",
  red: "#f56954",
  green: "#00a65a",
  aqua: "#00c0ef",
  yellow: "#f39c12",
  blue: "#0073b7",
  navy: "#001F3F",
  teal: "#39CCCC",
  olive: "#3D9970",
  lime: "#01FF70",
  orange: "#FF851B",
  fuchsia: "#F012BE",
  purple: "#8E24AA",
  maroon: "#D81B60",
  black: "#222222",
  gray: "#d2d6de"
}

let defaultScreenSizes = {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1200
}

/* AdminLTE
 *
 * @type Object
 * @description AdminLTE is the main object for the template's app.
 *              It's used for implementing functions and options related
 *              to the template. Keeping everything wrapped in an object
 *              prevents conflict with other plugins and is a better
 *              way to organize our code.
 */
let defaultAdminLTEOptions = {
  navbarMenuSlimscroll: true,
  navbarMenuSlimscrollWidth: "3px",
  navbarMenuHeight: "200px",
  animationSpeed: 500,
  sidebarToggleSelector: "[data-toggle='offcanvas']",
  sidebarPushMenu: true,
  sidebarSlimScroll: true,
  sidebarExpandOnHover: false,
  enableBoxRefresh: true,
  enableBSToppltip: true,
  BSTooltipSelector: "[data-toggle='tooltip']",
  enableFastclick: false,
  enableControlSidebar: true,
  controlSidebarOptions: defaultControlSidebarOptions,
  enableBoxWidget: true,
  boxWidgetOptions: defaultBoxWidgetOptions,
  directChat: defaultDirectChat,
  colors: defaultColores,
  screenSizes: defaultScreenSizes
};

let defaultAdminLTELayout = {
  activate:  () => {
    defaultAdminLTELayout.fix();
    defaultAdminLTELayout.fixSidebar();
   
  },
  fix:  () => {},
  fixSidebar:  () => {}
}

/* ControlSidebar
* ==============
* Adds functionality to the right sidebar
*
* @type Object
* @usage $.AdminLTE.controlSidebar.activate(options)
*/
let defaultControlSidebar = {
  activate: () => {},
  open: () => {},
  close: () => {},
  _fix: () => {},
  _fixForFixed: () => {},
  _fixForContent: () => {}
};


  /* BoxWidget
   * =========
   * BoxWidget is a plugin to handle collapsing and
   * removing boxes from the screen.
   *
   * @type Object
   * @usage $.AdminLTE.boxWidget.activate()
   *        Set all your options in the main $.AdminLTE.options object
   */
  let defaultBoxWidget = {
    selectors: {},
    icons: {},
    animationSpeed: {},
    activate: (_box: any) => {},
    remove: (element: any) => {}
  };
  
  /* PushMenu()
   * ==========
   * Adds the push menu functionality to the sidebar.
   *
   * @type Function
   * @usage: $.AdminLTE.pushMenu("[data-toggle='offcanvas']")
   */
  let defaultPushMenu = {
    activate: (toggleBtn: any) => {},
    expandOnHover: () => {},
    expand: () => {},
    collapse:  () => {}
  };

  /* Tree()
   * ======
   * Converts the sidebar into a multilevel
   * tree view menu.
   *
   * @type Function
   * @Usage: $.AdminLTE.tree('.sidebar')
   */
  let defaultTree = (menu: any) => {

  };

let AdminLTE = {
  /* --------------------
  * - AdminLTE Options -
  * --------------------
  * Modify these options to suit your implementation
  */
  options: defaultAdminLTEOptions,
  layout: defaultAdminLTELayout,
  pushMenu: defaultPushMenu,
  tree: defaultTree,
  controlSidebar: defaultControlSidebar,
  boxWidget: defaultBoxWidget
};

defaultBoxWidget.selectors = AdminLTE.options.boxWidgetOptions.boxWidgetSelectors;
defaultBoxWidget.icons = AdminLTE.options.boxWidgetOptions.boxWidgetIcons;
defaultBoxWidget.animationSpeed = AdminLTE.options.animationSpeed;

/* ------------------
 * - Implementation -
 * ------------------
 * The next block of code implements AdminLTE's
 * functions and plugins as specified by the
 * options above.
 */
(function ($) {
  "use strict";

  //Fix for IE page transitions
  //$("body").removeClass("hold-transition");

    //Easy access to options
    var o = AdminLTE.options;

    //Enable control sidebar
    if (o.enableControlSidebar) {
      AdminLTE.controlSidebar.activate();
    }

    //Activate sidebar push menu
    if (o.sidebarPushMenu) {
      AdminLTE.pushMenu.activate(o.sidebarToggleSelector);
    }
  console.log("AdminLTE : Implementation");

})(jQuery);

/* ------------------
 * - Custom Plugins -
 * ------------------
 * All custom plugins are defined below.
 */

/*
 * BOX REFRESH BUTTON
 * ------------------
 * This is a custom plugin to use with the component BOX. It allows you to add
 * a refresh button to the box. It converts the box's state to a loading state.
 *
 * @type plugin
 * @usage $("#box-widget").boxRefresh( options );
*/ 
(function ($) {
  "use strict";

  //$.fn.boxRefresh = function (options) {}

})(jQuery);

/*
 * EXPLICIT BOX CONTROLS
 * -----------------------
 * This is a custom plugin to use with the component BOX. It allows you to activate
 * a box inserted in the DOM after the app.js was loaded, toggle and remove box.
 *
 * @type plugin
 * @usage $("#box-widget").activateBox();
 * @usage $("#box-widget").toggleBox();
 * @usage $("#box-widget").removeBox();
 */
(function ($) {
  'use strict';

})(jQuery);

/*
 * TODO LIST CUSTOM PLUGIN
 * -----------------------
 * This plugin depends on iCheck plugin for checkbox and radio inputs
 *
 * @type plugin
 * @usage $("#todo-widget").todolist( options );
 */
(function ($) {
  'use strict';

})(jQuery);


function _init() {

}

/* ----------------------------------
 * - Initialize the AdminLTE Object -
 * ----------------------------------
 * All AdminLTE functions are implemented below.
 */
export default function adminLTEReact (){
  
  console.log("AdminLTE : Implementation");
  //console.log("AdminLTE = ", AdminLTE);
  //console.log("AdminLTE.layout.activate() = ", AdminLTE.layout.activate());
  console.log("jQuery = ", jQuery);
  
};
