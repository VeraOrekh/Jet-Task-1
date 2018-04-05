import {JetView} from "webix-jet";

export default class SettingsView extends JetView{
    config(){
        return {
            rows:[
                {
                    cols:[
                        {view:"segmented",
                            width:250,
                            options:[
                                {id:"en", value:"English"},
                                {id:"ru", value:"Russian"}
                            ]},
                        {}
                    ]
                },
                {}
            ]
        }
    }
}