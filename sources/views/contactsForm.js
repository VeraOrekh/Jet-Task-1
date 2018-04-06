import {JetView} from "webix-jet";
import {statuses} from "models/statusesCollection";
import {countries} from "models/countriesCollection";

export default class ContactsForm extends JetView{
	config(){
		const _ = this.app.getService("locale")._;

		let form = {
			view:"form",
			id:"contactsForm:form",
			elements:[
				{view:"text", label:_("User name"), name:"Name"},
				{view:"text", label:_("Email"), name:"Email"},
				{
					view:"combo",
					id:"comboCountries",
					label:_("Country"),
					name:"Country",
					options:{data:countries, body:{template:"#Name#"}},
				},
				{
					view:"combo",
					id:"comboStatuses",
					label:_("Status"),
					name:"Status",
					options:{data:statuses, body:{template:"#Name#"}}
				},
				{}
			]
		};

		let saveButton = {
			view:"button",
			id:"contactsForm:saveButton",
			value:_("Save"),
			align:"right",
			click:() =>{
				let item = this.$$("contactsForm:form").getValues();
				this.app.callEvent("saveItem", [item]);
			}
		};

		return {
			rows:[form, saveButton]
		};

	}
	init(){
		this.on(this.app, "onContactSelected", (data) => {
			if(data){
				this.$$("contactsForm:form").setValues(data);
			}
		});
	}

}