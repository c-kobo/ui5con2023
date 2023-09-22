import Controller from 'sap/fe/core/PageController';
import FilterBar from 'sap/fe/macros/filterBar/FilterBarAPI';
import JSONModel from 'sap/ui/model/json/JSONModel';
import Event from 'sap/ui/base/Event';
import GenericTile from 'sap/m/GenericTile';
import Context from 'sap/ui/model/odata/v4/Context';

/**
 * @namespace sap.fe.cap.managetravels.ext.main.Main.controller
 */
export default class Main extends Controller {

    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     * @memberOf sap.fe.cap.managetravels.ext.main.Main
     */
    // public onInit(): void {
    //
    //}

    /**
     * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
     * (NOT before the first rendering! onInit() is used for that one!).
     * @memberOf sap.fe.cap.managetravels.ext.main.Main
     */
    // public  onBeforeRendering(): void {
    //
    //  },

    /**
     * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
     * This hook is the same one that SAPUI5 controls get after being rendered.
     * @memberOf sap.fe.cap.managetravels.ext.main.Main
     */
    public onAfterRendering(): void {
        const filterBar = this.byId("FilterBar") as FilterBar,
        view = this.getView(),
        mFBConditions = new JSONModel({
            filtersTextInfo: filterBar.getActiveFiltersText()
        });
        if (view) {
            view.setModel(mFBConditions, "fbConditions");  
        };
        filterBar.triggerSearch();
    }

    /**
     * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
     * @memberOf sap.fe.cap.managetravels.ext.main.Main
     */
    // public onExit(): void {
    //
    //  }

    public onFiltersChanged(event: Event) : void {
        const filterBar = event.getSource() as FilterBar;
            const mFBConditions = filterBar.getModel("fbConditions");
            if (mFBConditions instanceof JSONModel) {
                mFBConditions.setProperty("/filtersTextInfo", filterBar.getActiveFiltersText());
            }
    }  
    
    public onPressed(event: Event) : void {
        const oContext = (event.getSource() as GenericTile).getBindingContext();
        if (oContext) {
            const routing = this.getExtensionAPI().getRouting();
            routing.navigate(oContext as Context);
        }
    } 
}
