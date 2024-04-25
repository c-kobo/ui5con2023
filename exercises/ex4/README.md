# Exercise 4 - Page Map: Configuring the Object Page Layout 

In this exercise we will configure the object page layout by using the Fiori tools Page Map.

## Exercise 4.1 - Add Actions to Object Page Header

(1) In the Application Studio toolbar, click the SAP Fiori icon ![](./images/image2.png).

(2) Click icon **Open Application Information** ![](./images/image3.png).

(3) Click on tile **Open Page Map**.

![](./images/image1.png)

(4) Open the object page configuration by clicking button **Configure Page** ![](./images/image6.png).

![](./images/image5.png)

We start by defining some actions in the object page header.

(5) Click **Add Actions** ![](./images/image8.png).

![](./images/image7.png)

(6) In the **Add Actions** dialog, open the drop-down and (7) select actions **AcceptTravel** and **RejectTravel**.

(7) confirm by clicking ![](./images/image10.png).

![](./images/image9.png)

Define a text to be displayed as an action button label by entering (8) **Accept Travel** and (9) **Reject Travel**. 


(10) Click icon **Create missing i18n references** ![](./images/image12.png)to create the corresponding text keys.

![](./images/image11.png)

(11) Confirm by clicking button ![](./images/image14.png). The whole project is scanned for missing text key references.

![](./images/image13.png)

The popover informs about the number of missing text keys that were created.

![](./images/image15.png)
## Exercise 4.2 - Adding Group and Form Sections

In this exercise we will add a group section and several form sub sections. 

(12) Click on **Add Sections** ![](./images/image17.png)\
(13) Select ![](./images/image18.png)

![](./images/image16.png)

(14) In the **Add Group Section** dialog, enter label **Travel** and create the corresponding text key reference by clicking on ![](./images/image20.png).

![](./images/image19.png)

(15) Confirm by clicking ![](./images/image22.png).

![](./images/image21.png)

(16) Click ![](./images/image10.png).

![](./images/image23.png)

(17) Expand section **Travel** by clicking ![](./images/image25.png).

(18) Click **Add Sections** ![](./images/image26.png) to add a sub section.

(19) Select ![](./images/image27.png).

![](./images/image24.png)

(20) Enter label **Travel** and click ![](./images/image29.png).

![](./images/image28.png)

(21) Click ![](./images/image31.png).

![](./images/image30.png)

(22) Click ![](./images/image10.png).

![](./images/image32.png)

(23) (24) Expand the sub section hierarchy.\
(25) Click ![](./images/image17.png)\
(26) Select ![](./images/image36.png)

![](./images/image33.png)

(27) In the **Add Basic Fields** dialog, open the drop-down and select **TravelID**.\
You can use the input field for filtering the available properties.\

(28) Select ![](./images/image39.png).

![](./images/image37.png)

(29) Select ![](./images/image41.png). Make sure to choose that referential constraint property and not the navigaton property **to_Agency/AgencyID**.

![](./images/image40.png)

(30) Select ![](./images/image43.png).

![](./images/image42.png)

(31) Select ![](./images/image45.png).

(32) To collapse the drop-down, click somewhere in the dialog .

![](./images/image44.png)

(33) Click ![](./images/image10.png).

![](./images/image46.png)

(34) (35) Repeat the steps to add  additonal **Form** sub sections **Prices**, **Dates** and **Sustainability**:

![](./images/image47.png)

![](./images/image49.png)

Add the following properties to the sub sections:

|     Sub Section             |     Property                
|-----------------------------|-----------------------------
|     Prices                  |     
|                             |     BookingFee                            
|                             |     TotalPrice
|     Dates                   |
|                             |     BeginDate
|                             |     EndDate
|     Sustainability          |
|                             |     GoGreen
|                             |     GreenFee
|                             |     TreesPlanted





Swich to the preview browser tab.\
(36) Select one travel to open the object page .

![](./images/image50.png)

The Travel tiles show travels with status **open**.\

(37) Click button ![](./images/image52.png) to change the travel status.\
A side effect defined on the action in file **app/field-control.cds** [line 18 ff.](/app/field-control.cds#18) makes sure that the Travel entity is refreshed when the action is executed. With the status changed, the tiles are refreshed, and the current selected Travel tile dissappears.\

For more information about side effects, please check the guide [Usage of Side Effects](https://sapui5.hana.ondemand.com/test-resources/sap/fe/core/fpmExplorer/index.html#/advancedFeatures/guidance/guidanceSideEffects).

![](./images/image51.png)

(38) Select another travel.

(39) Click ![](./images/image54.png).

![](./images/image53.png)

(40) Select the **Trees-4-Tickets** checkbox on the right-hand side.\

For a sustainability initiative, the travel service provides some fields for a new green flight offering.\
When the checkbox is selected, an info popover is shown (41), and the service backend calculates the values for properties **Green Flight Fee**,**Trees Planted**, and **Total Price**.\
The values shown on the UI are automatically updated by another side effect on property **GoGreen** of entity **Travel**
defined in file **app/field-control.cds** [line 37 ff.](/app/field-control.cds#37)

![](./images/image55.png)

## Summary

You've now successfully configured the object page layout by adding group section and sub sections by making usage of the Page Map.

Continue to - [Exercise 5 - Adding a Custom Section](../ex5/README.md)