import {JetView} from "webix-jet";

export default class SettingsView extends JetView{
	config(){
		//const lang = this.app.getService("locale").getLang();

		let segmentedButton = {
			view:"segmented",
			width:250,
			options:[
				{id:"en", value:/*_(*/"English"/*)*/},
				{id:"ru", value:/*_(*/"Russian"/*)*/}
			],
			click:() => this.toggleLanguage()
		};

		return {
			rows:[
				{
					cols:[segmentedButton, {}]
				},
				{}
			]
		};
	}

	toggleLanguage(){
		const langs = this.app.getService("locale");
		const value = this.getRoot().queryView({ name:"lang" }).getValue();
		langs.setLang(value);
	}
}