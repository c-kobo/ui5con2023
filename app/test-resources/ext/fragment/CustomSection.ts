import UI5Event from 'sap/ui/base/Event';
import JSONModel from 'sap/ui/model/json/JSONModel';
import Popover from 'sap/m/Popover';
import ExtensionAPI from 'sap/fe/templates/ObjectPage/ExtensionAPI';

//add chart event parameter typings to our Macro Chart API?
interface paramType {
    data: object;
    target: object;
}

/**
 * Generated event handler.
 *
 * @param this reference to the 'this' that the event handler is bound to.
 * @param event the event object provided by the event provider
 */
export function onChartSelectionChanged(this: ExtensionAPI, event: UI5Event<Record<string, any>>) {
    if (event.getParameter("selected")) {
        //get element in the context of the custom section fragment
        //byId will be made public on the ExtensionAPI with one of the next releases
        const element = this.byId("myPopover");
        if (element instanceof Popover) {  
            let popupModel = element.getModel("popup") as JSONModel;
    
            if (!popupModel) {
                popupModel = new JSONModel();
                element.setModel(popupModel, "popup");
            }
            //Direct parameter access possible as chart is set to single selection mode
            const param = (event.getParameter("data") as [paramType])[0];
            popupModel.setData(param.data, true);
            // open popover at selected chart segment
            element.openBy(
                param.target as HTMLElement, true
            );
        }
    }
}