import {JetView, plugins} from "webix-jet";



export default class TopView extends JetView{
	config(){
		//const lang = this.app.getService("locale").getLang();

		var header = {
			type:"header", template:this.app.config.name
		};

		var menu = {
			view:"menu", id:"top:menu", 
			width:180, layout:"y", select:true,
			template:"#value# ",
			data:[
				{ value:/*_(*/"Contacts"/*)*/, id:"contacts" },
				{ value:/*_(*/"Data"/*)*/,		 id:"data" },
				{ value:/*_(*/"Settings"/*)*/,		 id:"settings" }
			]
		};

		var ui = {
			type:"line", cols:[
				{ type:"clean", css:"app-left-panel",
					padding:10, margin:20, borderless:true, rows: [ header, menu ]},
				{ rows:[ { height:10}, 
					{ type:"clean", css:"app-right-panel", padding:4, rows:[
						{ $subview:true } 
					]}
				]}
			]
		};


		return ui;
	}
	init(){
		this.use(plugins.Menu, "top:menu");
	}
}