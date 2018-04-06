import data from "views/datatable";
//import {countries} from "models/countries";
import {countries} from "models/countriesCollection";

export default class countryData extends data{
	ready(view){
		view.queryView({ view:"datatable"}).parse(countries);
	}

	add(){
		countries.add({Name:"Country"});
	}

	remove(id){
		countries.remove(id);
	}
}