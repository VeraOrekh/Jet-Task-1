import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import form from "views/contactsForm";
import list from "views/contactsList";

export default class ContctsView extends JetView{
	config(){
		//const _ = this.app.getService("locale")._;

		var ui = {
			autoheight:true,
			rows:[
				{
					cols:[
						{$subview:list},
						{$subview:form}
					]
				}
			]
		};

		return ui;
	}
	init(view){
		//view.queryView({ view:"list"}).parse(contacts);
		this.on(this.app, "saveItem", (data) => {
			var id = $$("contactsList:list").getSelectedId();
			$$("contactsList:list").updateItem(id, data);
		});
	}
	ready(){
		form.bind(list);
	}
	urlChange(){
		var id = this.getParam("id");
		if (id)
			this.$$("contactsList:list").select(id);
		else
			this.$$("contactsList:list").select(this.$$("contactsList:list").getFirstId());
	}
}
