import {JetView} from "webix-jet";
import {countries} from "models/countries";
import {statuses} from "models/statuses";

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
				{id:"data:countries", title:"Countries"},
				{id:"data:statuses", title:"Statuses"}
			],
            on:{
                onAfterSelect:function(id){
                    $$(id).show();
                }
            }
		};

		var countries = {
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


		var multiview = {
			view:"multiview",
			cells:[
				countries,
                statuses
			]
		}

		var ui = {
			cols:[
				list, multiview
			]
		};

		return ui;
	}
	init(){
        this.$$("data:countries").parse(countries);
        this.$$("data:statuses").parse(statuses);
	}
}