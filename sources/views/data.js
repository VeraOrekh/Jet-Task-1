import {JetView} from "webix-jet";
import countriesTable from "views/countriesTable";
import statusesTable from "views/statusesTable";


export default class DataView extends JetView{
	config(){
		var list = {
			view:"list",
			id:"data:list",
			template:"#title#",
			select:true,
			width:300,
			scroll:false,
			data:[
				{id:"countries", title:"Countries"},
				{id:"statuses", title:"Statuses"}
			],
			on:{
				onAfterSelect:function(id){
					this.$scope.$$(id).show();
				}
			}
		};

		/*var countries = {

			rows:[
				{
					view:"datatable",
					id:"data:countries",
					editable:true,
					editaction:"dblclick",
					select:true,
					scrollX:false,
					columns:[
						{id:"Name", header:"Country", fillspace:true, editor:"text"}
					]
				},
				{
					cols:[
						{
							view:"button",
							id:"data:addButtonCountries",
							label:"Add",
							click:function () {
								var id = $$("data:countries").getLastId();
								while($$("data:countries").exists(id))
									id++;
								$$("data:countries").add({id:id, Name:"Country"});
							}
						},
						{
							view:"button",
							id:"data:deleteButtonCountries",
							label:"Delete",
							click:function () {
								$$("data:countries").remove($$("data:countries").getSelectedId());
							}
						}
					]
				}

			]

		};

		var statuses = {
			rows:[
				{
					view:"datatable",
					id:"data:statuses",
					editable:true,
					editaction:"dblclick",
					select:true,
					scrollX:false,
					columns:[
						{id:"Name", header:"Name", fillspace:true, editor:"text"},
						{id:"Icon", header:"Icon", editor:"text"}
					]
				},
				{
					cols:[
						{
							view:"button",
							id:"data:addButtonStatuses",
							label:"Add",
							click:function () {
								var id = $$("data:statuses").getLastId();
								while($$("data:statuses").exists(id))
									id++;
								$$("data:statuses").add({id:id, Name:"Status", Icon:"Default"});
							}
						},
						{
							view:"button",
							id:"data:deleteButtonStatuses",
							label:"Delete",
							click:function () {
								$$("data:statuses").remove($$("data:statuses").getSelectedId());
							}
						}
					]
				}
			]
		};

		/*let table = {
			rows:[
				datatable,
				{cols:[
					addButton, deleteButton
				]}
			]
		};*/


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
}