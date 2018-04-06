import {JetView} from "webix-jet";

export default class DatatableView extends JetView{
	config(){
		const _ = this.app.getService("locale")._;

		let datatable = {
			view:"datatable",
			editable:true,
			editaction:"dblclick",
			select:true,
			scrollX:false,
			autoConfig:true
		};

		let addButton = {
			view:"button",
			label:_("Add"),
			click: () => {
				this.add();
			}
		};

		let deleteButton = {
			view:"button",
			label:_("Delete"),
			click: () => {
				let id = this.datatable.getSelectedId();
				if(id)
					this.remove(id);
			}
		};

		return {
			rows:[datatable, {cols:[addButton, deleteButton]}]
		};
	}

	init(){
		this.datatable = this.getRoot().queryView({ view:"datatable"});
	}
}
