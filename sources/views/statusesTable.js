import data from "views/datatable";
import {statuses} from "models/statuses";

export default class statusesData extends data{
	ready(view){
		view.queryView({ view:"datatable"}).parse(statuses);
	}
}