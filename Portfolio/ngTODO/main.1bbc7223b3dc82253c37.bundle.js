webpackJsonp([1],{"/fcW":function(t,n){function e(t){throw new Error("Cannot find module '"+t+"'.")}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="/fcW"},0:function(t,n,e){t.exports=e("x35b")},1008:function(t,n,e){"use strict";function l(t){return o._23(0,[(t()(),o._24(0,null,null,1,"button",[["class","btn clear-completed"]],null,[[null,"click"]],function(t,n,e){var l=!0,i=t.component;if("click"===n){l=!1!==i.clearCompleted()&&l}return l},null,null)),(t()(),o._25(null,["Clear completed"]))],null,null)}function i(t){return o._23(0,[(t()(),o._24(0,null,null,30,"footer",[["class","footer"]],null,null,null,null,null)),(t()(),o._25(null,["\n\t"])),(t()(),o._24(0,null,null,3,"span",[["class","todo-count"]],null,null,null,null,null)),(t()(),o._24(0,null,null,1,"strong",[],null,null,null,null,null)),(t()(),o._25(null,["",""])),(t()(),o._25(null,["\n\t"," left"])),(t()(),o._25(null,["\n\n\t"])),(t()(),o._24(0,null,null,19,"ul",[["class","filters"]],null,null,null,null,null)),(t()(),o._25(null,["\n\t\t"])),(t()(),o._24(0,null,null,4,"li",[],null,null,null,null,null)),(t()(),o._24(0,null,null,3,"a",[],[[2,"selected",null],[1,"target",0],[8,"href",4]],[[null,"click"]],function(t,n,e){var l=!0;if("click"===n){l=!1!==o._27(t,11).onClick(e.button,e.ctrlKey,e.metaKey)&&l}return l},null,null)),o._26(671744,null,0,_.z,[_.j,_.v,s.f],{routerLink:[0,"routerLink"]},null),o._31(1),(t()(),o._25(null,["All"])),(t()(),o._25(null,["\n\t\t"])),(t()(),o._24(0,null,null,4,"li",[],null,null,null,null,null)),(t()(),o._24(0,null,null,3,"a",[],[[2,"selected",null],[1,"target",0],[8,"href",4]],[[null,"click"]],function(t,n,e){var l=!0;if("click"===n){l=!1!==o._27(t,17).onClick(e.button,e.ctrlKey,e.metaKey)&&l}return l},null,null)),o._26(671744,null,0,_.z,[_.j,_.v,s.f],{routerLink:[0,"routerLink"]},null),o._31(2),(t()(),o._25(null,["Active"])),(t()(),o._25(null,["\n\t\t"])),(t()(),o._24(0,null,null,4,"li",[],null,null,null,null,null)),(t()(),o._24(0,null,null,3,"a",[],[[2,"selected",null],[1,"target",0],[8,"href",4]],[[null,"click"]],function(t,n,e){var l=!0;if("click"===n){l=!1!==o._27(t,23).onClick(e.button,e.ctrlKey,e.metaKey)&&l}return l},null,null)),o._26(671744,null,0,_.z,[_.j,_.v,s.f],{routerLink:[0,"routerLink"]},null),o._31(2),(t()(),o._25(null,["Completed"])),(t()(),o._25(null,["\n\t"])),(t()(),o._25(null,["\n\t"])),(t()(),o._29(16777216,null,null,1,null,l)),o._26(16384,null,0,s.l,[o.S,o._5],{ngIf:[0,"ngIf"]},null),(t()(),o._25(null,["\n"]))],function(t,n){var e=n.component;t(n,11,0,t(n,12,0,"")),t(n,17,0,t(n,18,0,"","active")),t(n,23,0,t(n,24,0,"","completed")),t(n,29,0,e.getCompletedCount())},function(t,n){var e=n.component;t(n,4,0,e.getRemainingCount()),t(n,5,0,1===e.getRemainingCount()?"item":"items"),t(n,10,0,""===e.currentStatus,o._27(n,11).target,o._27(n,11).href),t(n,16,0,"active"===e.currentStatus,o._27(n,17).target,o._27(n,17).href),t(n,22,0,"completed"===e.currentStatus,o._27(n,23).target,o._27(n,23).href)})}function u(t){return o._23(0,[(t()(),o._29(16777216,null,null,1,null,i)),o._26(16384,null,0,s.l,[o.S,o._5],{ngIf:[0,"ngIf"]},null)],function(t,n){t(n,1,0,n.component.hasItems())},null)}function r(t){return o._23(0,[(t()(),o._24(0,null,null,1,"my-footer",[],null,null,null,u,p)),o._26(114688,null,0,a.a,[c.TaskService,_.v],null,null)],function(t,n){t(n,1,0)},null)}var o=e("3j3K"),_=e("5oXY"),s=e("2Je8"),a=e("VQne"),c=e("VYmS");e.n(c);e.d(n,"b",function(){return p}),n.a=u;var h=[],p=o._22({encapsulation:2,styles:h,data:{}});o._30("my-footer",a.a,r,{},{},[])},"1A80":function(t,n,e){"use strict";function l(t){return r._23(0,[(t()(),r._24(0,null,null,1,"textarea",[["placeholder","Shared link!"]],null,null,null,null,null)),(t()(),r._25(null,["",""]))],null,function(t,n){t(n,1,0,n.component.sharedLink)})}function i(t){return r._23(0,[(t()(),r._25(null,["\n  "])),(t()(),r._24(0,null,null,4,"section",[["class","todoapp"]],null,null,null,null,null)),(t()(),r._25(null,["\n  "])),(t()(),r._24(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r._26(147456,null,0,o.y,[o.l,r.S,r.T,[8,null]],null,null),(t()(),r._25(null,["\n"])),(t()(),r._25(null,["\n"])),(t()(),r._24(0,null,null,11,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(t,n,e){var l=!0;if("submit"===n){l=!1!==r._27(t,9).onSubmit(e)&&l}if("reset"===n){l=!1!==r._27(t,9).onReset()&&l}return l},null,null)),r._26(16384,null,0,_.d,[],null,null),r._26(16384,null,0,_.e,[[8,null],[8,null]],null,null),r._28(2048,null,_.f,null,[_.e]),r._26(16384,null,0,_.g,[_.f],null,null),(t()(),r._25(null,["\n  "])),(t()(),r._24(0,null,null,1,"button",[["class","btn-1"],["type","button"]],null,[[null,"click"]],function(t,n,e){var l=!0,i=t.component;if("click"===n){l=!1!==i.shareMyList()&&l}return l},null,null)),(t()(),r._25(null,["",""])),(t()(),r._25(null,["\n  "])),(t()(),r._29(16777216,null,null,1,null,l)),r._26(16384,null,0,a.l,[r.S,r._5],{ngIf:[0,"ngIf"]},null),(t()(),r._25(null,["\n"])),(t()(),r._25(null,["\n"]))],function(t,n){t(n,17,0,n.component.isEnable)},function(t,n){var e=n.component;t(n,7,0,r._27(n,11).ngClassUntouched,r._27(n,11).ngClassTouched,r._27(n,11).ngClassPristine,r._27(n,11).ngClassDirty,r._27(n,11).ngClassValid,r._27(n,11).ngClassInvalid,r._27(n,11).ngClassPending),t(n,14,0,e.btnLabel)})}function u(t){return r._23(0,[(t()(),r._24(0,null,null,1,"todo-app",[],null,null,null,i,p)),r._26(49152,null,0,s.a,[c.TaskService],null,null)],null,null)}var r=e("3j3K"),o=e("5oXY"),_=e("NVOs"),s=e("YWx4"),a=e("2Je8"),c=e("VYmS");e.n(c);e.d(n,"a",function(){return f});var h=[],p=r._22({encapsulation:2,styles:h,data:{}}),f=r._30("todo-app",s.a,u,{},{},[])},EHoB:function(t,n,e){"use strict";var l=e("3j3K"),i=e("VYmS"),u=(e.n(i),e("5oXY"));e.d(n,"a",function(){return o});var r=this&&this.__assign||Object.assign||function(t){for(var n,e=1,l=arguments.length;e<l;e++){n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=function(){function t(t,n,e){this.taskService=t,this.route=n,this.router=e,this.newTask="",this.myFocusTrigger=new l.Q}return t.prototype.ngOnInit=function(){var t=this;this.route.params.map(function(t){return t.status}).subscribe(function(n){t.selectedFilter=n||""});var n;this.route.snapshot.data.hasOwnProperty("tasks")&&(n=this.route.snapshot.url[0].path,console.log(n),this.route.snapshot.data.hasOwnProperty("tasks")&&this.taskService.decodeIntoList(n)&&(this.tasksContainer=this.route.snapshot.data.tasks,this.taskService.setExternalTodo(this.tasksContainer),this.tasksContainer=null),this.router.navigate(["../../"],{relativeTo:this.route}))},t.prototype.focusOnDblClick=function(t){var n=this;setTimeout(function(){return n.myFocusTrigger.emit(!0)},0),this.editTask(t)},t.prototype.stopEditing=function(t,n){if(this.reverted)return void(this.reverted=null);n=n.trim(),t.editing=!1,0===n.length&&this.taskService.removeTask(t),t.title=n},t.prototype.editTask=function(t){this.tempTask=r({},t),t.editing=!0},t.prototype.cancelEditing=function(t){t.title=this.tempTask._title,t.editing=!1,this.tempTask=null,this.reverted=!0},t.prototype.addTask=function(){this.newTask.trim()&&(this.taskService.appendTask(this.newTask),this.newTask="")},t.prototype.removeTask=function(t){this.taskService.removeTask(t)},t.prototype.markAllItems=function(){this.taskService.allCompleted()},t.prototype.hasItems=function(){return Boolean(this.taskService.taskList.length)},t.prototype.setAllTo=function(t){this.taskService.setAllTo(t)},t.prototype.toggleCheckbox=function(t){this.taskService.toggleCompletion(t)},t.prototype.getSelectedTasks=function(){return this.taskService.getSelectedTasks(this.selectedFilter)},t.ctorParameters=function(){return[{type:i.TaskService},{type:u.v},{type:u.j}]},t}()},Iksp:function(t,n,e){"use strict";var l=e("EHoB"),i=e("aop5");e.d(n,"a",function(){return u});var u=(l.a,l.a,i.a,l.a,function(){function t(){}return t}())},LRCL:function(t,n){},VQne:function(t,n,e){"use strict";var l=e("5oXY"),i=e("VYmS"),u=(e.n(i),e("+pb+"));e.n(u);e.d(n,"a",function(){return r});var r=function(){function t(t,n){this.taskService=t,this.route=n}return t.prototype.ngOnInit=function(){var t=this;this.route.params.map(function(t){return t.status}).subscribe(function(n){t.currentStatus=n||""})},t.prototype.getRemainingCount=function(){return this.taskService.getRemaining().length},t.prototype.getCompletedCount=function(){return this.taskService.getCompleted().length},t.prototype.clearCompleted=function(){this.taskService.removeCompleted()},t.prototype.hasItems=function(){return Boolean(this.taskService.taskList.length)},t.ctorParameters=function(){return[{type:i.TaskService},{type:l.v}]},t}()},VYmS:function(t,n){},YWx4:function(t,n,e){"use strict";var l=e("VYmS");e.n(l);e.d(n,"a",function(){return i});var i=function(){function t(t){this.taskService=t,this.isEnable=!1,this.btnLabel="Share"}return t.prototype.shareMyList=function(){this.sharedLink=this.taskService.encodeTaskList(),this.isEnable=!this.isEnable,this.btnLabel="Share"===this.btnLabel?"Hide":"Share"},t.ctorParameters=function(){return[{type:l.TaskService}]},t}()},aop5:function(t,n,e){"use strict";var l=e("VYmS");e.n(l);e.d(n,"a",function(){return i});var i=function(){function t(t){this.taskService=t}return t.prototype.resolve=function(t,n){return this.taskService.decodeIntoList(t.params.tasks)},t.ctorParameters=function(){return[{type:l.TaskService}]},t}()},kke6:function(t,n,e){"use strict";var l=e("3j3K"),i=e("Iksp"),u=e("2Je8"),r=e("5oXY"),o=e("Qbdm"),_=e("NVOs"),s=e("VYmS"),a=(e.n(s),e("aop5")),c=e("rjdi"),h=e("1A80"),p=e("EHoB");e.d(n,"a",function(){return g});var f=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function l(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(l.prototype=e.prototype,new l)}}(),d=function(t){function n(n){return t.call(this,n,[c.a,h.a],[h.a])||this}return f(n,t),Object.defineProperty(n.prototype,"_LOCALE_ID_24",{get:function(){return null==this.__LOCALE_ID_24&&(this.__LOCALE_ID_24=l.a(this.parent.get(l.b,null))),this.__LOCALE_ID_24},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_NgLocalization_25",{get:function(){return null==this.__NgLocalization_25&&(this.__NgLocalization_25=new u.a(this._LOCALE_ID_24)),this.__NgLocalization_25},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_APP_ID_26",{get:function(){return null==this.__APP_ID_26&&(this.__APP_ID_26=l.c()),this.__APP_ID_26},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_IterableDiffers_27",{get:function(){return null==this.__IterableDiffers_27&&(this.__IterableDiffers_27=l.d()),this.__IterableDiffers_27},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_KeyValueDiffers_28",{get:function(){return null==this.__KeyValueDiffers_28&&(this.__KeyValueDiffers_28=l.e()),this.__KeyValueDiffers_28},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_DomSanitizer_29",{get:function(){return null==this.__DomSanitizer_29&&(this.__DomSanitizer_29=new o.b(this.parent.get(o.c))),this.__DomSanitizer_29},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Sanitizer_30",{get:function(){return null==this.__Sanitizer_30&&(this.__Sanitizer_30=this._DomSanitizer_29),this.__Sanitizer_30},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_HAMMER_GESTURE_CONFIG_31",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_31&&(this.__HAMMER_GESTURE_CONFIG_31=new o.d),this.__HAMMER_GESTURE_CONFIG_31},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_EVENT_MANAGER_PLUGINS_32",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_32&&(this.__EVENT_MANAGER_PLUGINS_32=[new o.e(this.parent.get(o.c)),new o.f(this.parent.get(o.c)),new o.g(this.parent.get(o.c),this._HAMMER_GESTURE_CONFIG_31)]),this.__EVENT_MANAGER_PLUGINS_32},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_EventManager_33",{get:function(){return null==this.__EventManager_33&&(this.__EventManager_33=new o.h(this._EVENT_MANAGER_PLUGINS_32,this.parent.get(l.f))),this.__EventManager_33},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵDomSharedStylesHost_34",{get:function(){return null==this.__ɵDomSharedStylesHost_34&&(this.__ɵDomSharedStylesHost_34=new o.i(this.parent.get(o.c))),this.__ɵDomSharedStylesHost_34},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵDomRendererFactory2_35",{get:function(){return null==this.__ɵDomRendererFactory2_35&&(this.__ɵDomRendererFactory2_35=new o.j(this._EventManager_33,this._ɵDomSharedStylesHost_34)),this.__ɵDomRendererFactory2_35},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_RendererFactory2_36",{get:function(){return null==this.__RendererFactory2_36&&(this.__RendererFactory2_36=this._ɵDomRendererFactory2_35),this.__RendererFactory2_36},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵSharedStylesHost_37",{get:function(){return null==this.__ɵSharedStylesHost_37&&(this.__ɵSharedStylesHost_37=this._ɵDomSharedStylesHost_34),this.__ɵSharedStylesHost_37},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Testability_38",{get:function(){return null==this.__Testability_38&&(this.__Testability_38=new l.g(this.parent.get(l.f))),this.__Testability_38},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Meta_39",{get:function(){return null==this.__Meta_39&&(this.__Meta_39=new o.k(this.parent.get(o.c))),this.__Meta_39},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Title_40",{get:function(){return null==this.__Title_40&&(this.__Title_40=new o.l(this.parent.get(o.c))),this.__Title_40},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵi_41",{get:function(){return null==this.__ɵi_41&&(this.__ɵi_41=new _.a),this.__ɵi_41},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ActivatedRoute_42",{get:function(){return null==this.__ActivatedRoute_42&&(this.__ActivatedRoute_42=r.a(this._Router_21)),this.__ActivatedRoute_42},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_NoPreloading_43",{get:function(){return null==this.__NoPreloading_43&&(this.__NoPreloading_43=new r.b),this.__NoPreloading_43},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_PreloadingStrategy_44",{get:function(){return null==this.__PreloadingStrategy_44&&(this.__PreloadingStrategy_44=this._NoPreloading_43),this.__PreloadingStrategy_44},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_RouterPreloader_45",{get:function(){return null==this.__RouterPreloader_45&&(this.__RouterPreloader_45=new r.c(this._Router_21,this._NgModuleFactoryLoader_19,this._Compiler_18,this,this._PreloadingStrategy_44)),this.__RouterPreloader_45},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_PreloadAllModules_46",{get:function(){return null==this.__PreloadAllModules_46&&(this.__PreloadAllModules_46=new r.d),this.__PreloadAllModules_46},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ROUTER_INITIALIZER_47",{get:function(){return null==this.__ROUTER_INITIALIZER_47&&(this.__ROUTER_INITIALIZER_47=r.e(this._ɵg_3)),this.__ROUTER_INITIALIZER_47},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_APP_BOOTSTRAP_LISTENER_48",{get:function(){return null==this.__APP_BOOTSTRAP_LISTENER_48&&(this.__APP_BOOTSTRAP_LISTENER_48=[this._ROUTER_INITIALIZER_47]),this.__APP_BOOTSTRAP_LISTENER_48},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_TaskService_49",{get:function(){return null==this.__TaskService_49&&(this.__TaskService_49=new s.TaskService),this.__TaskService_49},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_UrlResolver_50",{get:function(){return null==this.__UrlResolver_50&&(this.__UrlResolver_50=new a.a(this._TaskService_49)),this.__UrlResolver_50},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new u.b,this._ErrorHandler_1=o.m(),this._NgProbeToken_2=[r.f()],this._ɵg_3=new r.g(this),this._APP_INITIALIZER_4=[l.h,o.n(this.parent.get(o.o,null),this._NgProbeToken_2),r.h(this._ɵg_3)],this._ApplicationInitStatus_5=new l.i(this._APP_INITIALIZER_4),this._ɵf_6=new l.j(this.parent.get(l.f),this.parent.get(l.k),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_5),this._ApplicationRef_7=this._ɵf_6,this._ApplicationModule_8=new l.l(this._ApplicationRef_7),this._BrowserModule_9=new o.p(this.parent.get(o.p,null)),this._ɵba_10=new _.b,this._FormsModule_11=new _.c,this._ɵa_12=r.i(this.parent.get(r.j,null)),this._UrlSerializer_13=new r.k,this._RouterOutletMap_14=new r.l,this._ROUTER_CONFIGURATION_15={useHash:!0},this._LocationStrategy_16=r.m(this.parent.get(u.c),this.parent.get(u.d,null),this._ROUTER_CONFIGURATION_15),this._Location_17=new u.e(this._LocationStrategy_16),this._Compiler_18=new l.m,this._NgModuleFactoryLoader_19=new l.n(this._Compiler_18,this.parent.get(l.o,null)),this._ROUTES_20=[[{path:"",component:p.a,pathMatch:"full"},{path:"share",children:[{path:"",redirectTo:"/",pathMatch:"full"},{path:":tasks",component:p.a,resolve:{tasks:a.a}}]},{path:":status",component:p.a}]],this._Router_21=r.n(this._ApplicationRef_7,this._UrlSerializer_13,this._RouterOutletMap_14,this._Location_17,this,this._NgModuleFactoryLoader_19,this._Compiler_18,this._ROUTES_20,this._ROUTER_CONFIGURATION_15,this.parent.get(r.o,null),this.parent.get(r.p,null)),this._RouterModule_22=new r.q(this._ɵa_12,this._Router_21),this._AppModule_23=new i.a,this._AppModule_23},n.prototype.getInternal=function(t,n){return t===u.b?this._CommonModule_0:t===l.p?this._ErrorHandler_1:t===l.q?this._NgProbeToken_2:t===r.g?this._ɵg_3:t===l.r?this._APP_INITIALIZER_4:t===l.i?this._ApplicationInitStatus_5:t===l.j?this._ɵf_6:t===l.s?this._ApplicationRef_7:t===l.l?this._ApplicationModule_8:t===o.p?this._BrowserModule_9:t===_.b?this._ɵba_10:t===_.c?this._FormsModule_11:t===r.r?this._ɵa_12:t===r.s?this._UrlSerializer_13:t===r.l?this._RouterOutletMap_14:t===r.t?this._ROUTER_CONFIGURATION_15:t===u.f?this._LocationStrategy_16:t===u.e?this._Location_17:t===l.m?this._Compiler_18:t===l.t?this._NgModuleFactoryLoader_19:t===r.u?this._ROUTES_20:t===r.j?this._Router_21:t===r.q?this._RouterModule_22:t===i.a?this._AppModule_23:t===l.b?this._LOCALE_ID_24:t===u.g?this._NgLocalization_25:t===l.u?this._APP_ID_26:t===l.v?this._IterableDiffers_27:t===l.w?this._KeyValueDiffers_28:t===o.q?this._DomSanitizer_29:t===l.x?this._Sanitizer_30:t===o.r?this._HAMMER_GESTURE_CONFIG_31:t===o.s?this._EVENT_MANAGER_PLUGINS_32:t===o.h?this._EventManager_33:t===o.i?this._ɵDomSharedStylesHost_34:t===o.j?this._ɵDomRendererFactory2_35:t===l.y?this._RendererFactory2_36:t===o.t?this._ɵSharedStylesHost_37:t===l.g?this._Testability_38:t===o.k?this._Meta_39:t===o.l?this._Title_40:t===_.a?this._ɵi_41:t===r.v?this._ActivatedRoute_42:t===r.b?this._NoPreloading_43:t===r.w?this._PreloadingStrategy_44:t===r.c?this._RouterPreloader_45:t===r.d?this._PreloadAllModules_46:t===r.x?this._ROUTER_INITIALIZER_47:t===l.z?this._APP_BOOTSTRAP_LISTENER_48:t===s.TaskService?this._TaskService_49:t===a.a?this._UrlResolver_50:n},n.prototype.destroyInternal=function(){this._ɵf_6.ngOnDestroy(),this.__ɵDomSharedStylesHost_34&&this._ɵDomSharedStylesHost_34.ngOnDestroy(),this.__RouterPreloader_45&&this._RouterPreloader_45.ngOnDestroy()},n}(l.A),g=new l.B(d,i.a)},rjdi:function(t,n,e){"use strict";function l(t){return _._23(0,[(t()(),_._24(0,[["editedtodo",1]],null,1,"input",[["class","edit"]],[[8,"value",0]],[[null,"keyup.escape"],[null,"blur"],[null,"keyup.enter"]],function(t,n,e){var l=!0,i=t.component;if("keyup.escape"===n){l=!1!==i.cancelEditing(t.parent.context.$implicit)&&l}if("blur"===n){l=!1!==i.stopEditing(t.parent.context.$implicit,_._27(t,0).value)&&l}if("keyup.enter"===n){l=!1!==i.stopEditing(t.parent.context.$implicit,_._27(t,0).value)&&l}return l},null,null)),_._26(81920,null,0,s.FocusDirective,[_.K,_.J],{focusEvent:[0,"focusEvent"]},null)],function(t,n){t(n,1,0,n.component.myFocusTrigger)},function(t,n){t(n,0,0,n.parent.context.$implicit.title)})}function i(t){return _._23(0,[(t()(),_._24(0,null,null,14,"li",[],[[2,"completed",null],[2,"editing",null]],null,null,null,null)),(t()(),_._25(null,["\n\t\t"])),(t()(),_._24(0,null,null,8,"div",[["class","view"]],null,null,null,null,null)),(t()(),_._25(null,["\n\t\t\t"])),(t()(),_._24(0,null,null,0,"input",[["class","toggle"],["type","checkbox"]],[[8,"checked",0]],[[null,"click"]],function(t,n,e){var l=!0,i=t.component;if("click"===n){l=!1!==i.toggleCheckbox(t.context.$implicit)&&l}return l},null,null)),(t()(),_._25(null,["\n\t\t\t\n\t\t\t"])),(t()(),_._24(0,null,null,1,"label",[],null,[[null,"dblclick"]],function(t,n,e){var l=!0,i=t.component;if("dblclick"===n){l=!1!==i.focusOnDblClick(t.context.$implicit)&&l}return l},null,null)),(t()(),_._25(null,["",""])),(t()(),_._25(null,["\n\n\n\t\t\t\n\t\t\t"])),(t()(),_._24(0,null,null,0,"button",[["class","destroy btn"]],null,[[null,"click"]],function(t,n,e){var l=!0,i=t.component;if("click"===n){l=!1!==i.removeTask(t.context.$implicit)&&l}return l},null,null)),(t()(),_._25(null,["\n\t\t"])),(t()(),_._25(null,["\n\t\t"])),(t()(),_._29(16777216,null,null,1,null,l)),_._26(16384,null,0,a.l,[_.S,_._5],{ngIf:[0,"ngIf"]},null),(t()(),_._25(null,["\t\n\t"]))],function(t,n){t(n,13,0,n.context.$implicit.editing)},function(t,n){t(n,0,0,n.context.$implicit.completed,n.context.$implicit.editing),t(n,4,0,n.context.$implicit.completed),t(n,7,0,n.context.$implicit.title)})}function u(t){return _._23(0,[(t()(),_._24(0,null,null,9,"section",[["class","main"]],null,null,null,null,null)),(t()(),_._25(null,["\n"])),(t()(),_._24(0,null,null,6,"ul",[["class","todo-list"]],null,null,null,null,null)),(t()(),_._25(null,["\n\t"])),(t()(),_._24(0,[["toggleall",1]],null,0,"input",[["autofocus",""],["class","toggle-all"],["type","checkbox"]],[[8,"checked",0]],[[null,"click"]],function(t,n,e){var l=!0,i=t.component;if("click"===n){l=!1!==i.setAllTo(_._27(t,4).checked)&&l}return l},null,null)),(t()(),_._25(null,["\n\n\t"])),(t()(),_._29(16777216,null,null,1,null,i)),_._26(802816,null,0,a.m,[_.S,_._5,_.v],{ngForOf:[0,"ngForOf"]},null),(t()(),_._25(null,["\n"])),(t()(),_._25(null,["\n"]))],function(t,n){t(n,7,0,n.component.getSelectedTasks())},function(t,n){t(n,4,0,n.component.markAllItems())})}function r(t){return _._23(0,[(t()(),_._25(null,["\n"])),(t()(),_._24(0,null,null,11,"header",[["class","header"]],null,null,null,null,null)),(t()(),_._25(null,["\n"])),(t()(),_._24(0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),_._25(null,["todos"])),(t()(),_._25(null,["\n"])),(t()(),_._24(0,null,null,5,"input",[["autofocus",""],["class","new-todo"],["placeholder","What needs to be done?"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup.enter"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(t,n,e){var l=!0,i=t.component;if("input"===n){l=!1!==_._27(t,7)._handleInput(e.target.value)&&l}if("blur"===n){l=!1!==_._27(t,7).onTouched()&&l}if("compositionstart"===n){l=!1!==_._27(t,7)._compositionStart()&&l}if("compositionend"===n){l=!1!==_._27(t,7)._compositionEnd(e.target.value)&&l}if("ngModelChange"===n){l=!1!==(i.newTask=e)&&l}if("keyup.enter"===n){l=!1!==i.addTask()&&l}return l},null,null)),_._26(16384,null,0,h.h,[_.J,_.K,[2,h.i]],null,null),_._28(1024,null,h.j,function(t){return[t]},[h.h]),_._26(671744,null,0,h.k,[[8,null],[8,null],[8,null],[2,h.j]],{model:[0,"model"]},{update:"ngModelChange"}),_._28(2048,null,h.l,null,[h.k]),_._26(16384,null,0,h.m,[h.l],null,null),(t()(),_._25(null,["\n"])),(t()(),_._25(null,["\n"])),(t()(),_._29(16777216,null,null,1,null,u)),_._26(16384,null,0,a.l,[_.S,_._5],{ngIf:[0,"ngIf"]},null),(t()(),_._25(null,["\n"])),(t()(),_._24(0,null,null,1,"my-footer",[],null,null,null,p.a,p.b)),_._26(114688,null,0,f.a,[d.TaskService,g.v],null,null),(t()(),_._25(null,["\n"]))],function(t,n){var e=n.component;t(n,9,0,e.newTask),t(n,15,0,e.hasItems()),t(n,18,0)},function(t,n){t(n,6,0,_._27(n,11).ngClassUntouched,_._27(n,11).ngClassTouched,_._27(n,11).ngClassPristine,_._27(n,11).ngClassDirty,_._27(n,11).ngClassValid,_._27(n,11).ngClassInvalid,_._27(n,11).ngClassPending)})}function o(t){return _._23(0,[(t()(),_._24(0,null,null,1,"my-tasks",[],null,null,null,r,y)),_._26(114688,null,0,c.a,[d.TaskService,g.v,g.j],null,null)],function(t,n){t(n,1,0)},null)}var _=e("3j3K"),s=e("LRCL"),a=(e.n(s),e("2Je8")),c=e("EHoB"),h=e("NVOs"),p=e("1008"),f=e("VQne"),d=e("VYmS"),g=(e.n(d),e("5oXY"));e.d(n,"a",function(){return b});var m=[],y=_._22({encapsulation:2,styles:m,data:{}}),b=_._30("my-tasks",c.a,o,{},{},[])},x35b:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=e("Qbdm"),i=e("kke6");e.i(l.a)().bootstrapModuleFactory(i.a)}},[0]);