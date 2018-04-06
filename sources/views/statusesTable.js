import data from "views/datatable";
import {statuses} from "models/statusesCollection";

export default class statusesData extends data{
	ready(view){
		view.queryView({ view:"datatable"}).parse(statuses);
	}

	add(){
		statuses.add({Name:"Status", Icon:"Default"});
	}

	remove(id){
		statuses.remove(id);
	}
}