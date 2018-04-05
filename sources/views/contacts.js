import {JetView} from "webix-jet";
import {contacts} from "models/contacts";

export default class ContctsView extends JetView{
    config(){
        var list = {
            view: "list",
            id: "contacts:list",
            template: "#Email#",
            select: true
        };

        var form = {
            view:"form",
            gravity:2,
            elements:[
                {view:"text", label:"User Name"},
                {view:"text", label:"Email"},
                {}
            ]
        };

        var ui = {
            autoheight:true,
            rows:[
                {
                    cols:[
                        list, form
                    ]
                }
            ]
        }

        return ui;
    }
    init(){
        this.$$("contacts:list").parse(contacts);
    }
}
