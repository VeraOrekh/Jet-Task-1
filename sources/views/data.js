import {JetView} from "webix-jet";
import countriesTable from "views/countriesTable";
import statusesTable from "views/statusesTable";


export default class DataView extends JetView{
	config(){
		const _ = this.app.getService("locale")._;

		var list = {
			view:"list",
			id:"data:list",
			template:"#title#",
			select:true,
			width:350,
			scroll:false,
			data:[
				{id:"countries", title:_("Countries")},
				{id:"statuses", title:_("Statuses")}
			],
			on:{
				onAfterSelect:function(id){
					this.$scope.$$(id).show();
				}
			}
		};


		var multiview = {
			view:"multiview",
			cells:[
				//countries,
				//statuses
				{id:"countries", $subview:countriesTable},
				{id:"statuses", $subview:statusesTable}
			]
		};

		var ui = {
			cols:[
				list, multiview
			]
		};

		return ui;
	}

	ready(){
		this.$$("data:list").select(this.$$("data:list").getFirstId());
	}
}