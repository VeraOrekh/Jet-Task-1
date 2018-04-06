import {JetView} from "webix-jet";
import {contacts} from "models/contactsCollection";
import form from "views/contactsForm";
import list from "views/contactsList";

export default class ContactsView extends JetView{
	config(){

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
	init(){
		this.on(this.app, "saveItem", (data) => {
			var id = this.$$("contactsList:list").getSelectedId();
			contacts.updateItem(id, data);
		});
	}
	ready(){
		form.bind(list);
	}
	urlChange(){
		contacts.waitData.then(()=> {
			var id = this.getParam("id");
			if (id)
				this.$$("contactsList:list").select(id);
			else
				this.$$("contactsList:list").select(this.$$("contactsList:list").getFirstId());
		});
	}
}
