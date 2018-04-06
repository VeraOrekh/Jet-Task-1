import {JetView} from "webix-jet";
import {contacts} from "models/contactsCollection";

export default class ContactsList extends JetView{
	config(){
		const _ = this.app.getService("locale")._;

		let list = {
			view: "list",
			id: "contactsList:list",
			select: true,
			width: 350,
			template:"<span>#Name#</span> <span class='webix_icon fa-times delete'></span>",
			onClick: {
				"fa-times":function(ev, id) {
					contacts.remove(id);
				}
			},
			on:{
				onAfterSelect:(id) =>{
					this.setParam("id", id, true);
					let item = this.$$("contactsList:list").getSelectedItem();
					this.app.callEvent("onContactSelected", [item]);
				}
			}
		};

		let addButton = {
			view:"button",
			value:_("Add"),
			click: () => {
				contacts.add({Name:"New contact", Email:"new@mail.com"});
			}
		};

		return {
			rows:[
				{ template:_("Contacts"), type:"header" },
				list, addButton
			]
		};

	}
	init(){
		this.$$("contactsList:list").sync(contacts);
	}

}
