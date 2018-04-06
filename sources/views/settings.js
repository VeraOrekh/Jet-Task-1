import {JetView} from "webix-jet";

export default class SettingsView extends JetView{
	config(){
		const _ = this.app.getService("locale")._;
		const lang = this.app.getService("locale").getLang();

		let segmentedButton = {
			view:"segmented",
			label:_("Language"),
			width:250,
			name:"lang",
			options:[
				{id:"en", value:_("English")},
				{id:"ru", value:_("Russian")}
			],
			click:() => this.toggleLanguage(), value:lang
		};

		return {
			rows:[
				{ template:_("Settings"), type:"header" },
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