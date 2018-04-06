import {JetView} from "webix-jet";

export default class DatatableView extends JetView{
	config(){
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
			label:"Add",
			click: () => {
				this.datatable.add({});
			}
		};

		let deleteButton = {
			view:"button",
			label:"Delete",
			click: () => {
				let id = this.datatable.getSelectedId();
				if(id)
					this.datatable.remove(id);
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
