sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("projfrag.controller.Main", {
            onInit: function () {

            },

            _getDialog: function() {
                if (!this._oDialog) {
                    this._oDialog = sap.ui.xmlfragment("projfrag.view.FragDialo", this);
                    this.getView().addDependent(this._oDialog);
                }

                return this._oDialog
            },


            onShowDialog: function () {
                this._getDialog().open()
            },

            onCloseDialog: function () {
                this._getDialog().close()
            }





        });
    });
