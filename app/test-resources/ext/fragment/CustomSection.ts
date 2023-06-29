import ExtensionAPI from 'sap/fe/core/ExtensionAPI';
import UI5Event from 'sap/ui/base/Event';
import MessageToast from 'sap/m/MessageToast';
import Popover from 'sap/m/Popover';
import JSONModel from 'sap/ui/model/json/JSONModel';

interface paramType {
    data: object;
    target: object;
}

/**
 * @param this reference to the Fiori elements ExtensionAPI.
 * @param event the event object provided by the event provider
 */
export function onChartSelectionChanged(this: ExtensionAPI, event: UI5Event<Record<string, any>>) {
    if (event.getParameter("selected")) {
        //get element in the context of the custom section fragment
        //byId will be made public on the ExtensionAPI with SAPUI5 release 1.116.0
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