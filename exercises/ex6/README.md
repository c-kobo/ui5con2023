# Exercise 6 - Page Map: Add Micro Chart Table Column

In this exercise we will add a table column of type **micro chart** by using the Page Map.\
The micro chart shall show the Customer VIP Status per booking, based on all cumulated bookings for the corresponding airline.

(1)(2) The data to be shown in the micro chart is based on the shown properties in entity **Booking** defined in file **db/schema.cds**.

![](./images/image1.png)

The properties are annotated with **@Core.Computed**. The values are calculated in a read handler implementation for entity **Booking**
in (3) file [/srv/travel-service.js](/srv/travel-service.js#215) , (4) section **Exercise 6: Data for Bookings table micro chart**.

![](./images/image4.png)

In order to add a micro chart to a table, you have to define an annotation of type **@UI.DataPoint**. Its mandatory properties are **value** and a **target value**.\
The data point needs to be referenced in the **measure attributes** of annotation **@UI.Chart**.\
Chart type **#Donut** displays a **radial chart**. Properties **Measures** and **MeasureAttributes** are mandatory.

(5) In the Page Map table section click on **Add Columns** ![](./images/image8.png).

(6) Select **Add Chart Column**.

![](./images/image7.png)

(7) For the **Chart Type**, select **Radial**.

![](./images/image10.png)

(8)(9) For **Value** select property **BookedFlights**.

![](./images/image12.png)

(10)(11) For **Target Value** select **VIPCustomerBookings**.

![](./images/image15.png)

(12) Click ![](./images/image18.png).

![](./images/image17.png)

(13) Drag column **BookedFlights** and (14) drop below column **AirlinePicUrl**.

![](./images/image19.png)

We now define how the color of the chart should be calculated by defining the criticality property.\
(15) In the property pane for chart column **BookedFlights**, open drop-down **Criticality Source** and choose **Property**.

![](./images/image21.png)

(16) (17) In dialog **Define Property**, select property **EligibleForPrime**.

![](./images/image23.png)

(18) Click ![](./images/image26.png).

![](./images/image25.png)

(19) For the second column BookedFlights, enter **VIP Status** as label and generate a text key for it by clicking![](./images/image28.png).

![](./images/image27.png)

(20) Click![](./images/image30.png).

![](./images/image29.png)

(21) On renamed column **VIP Status** click **Navigate to source code** ![](./images/image32.png).

(22) This opens up the corresponding **UI.DataFieldForAnnotation** definition.

![](./images/image31.png)

(23) It refers to a **UI.Chart** annotation that was also generated:

![](./images/image34.png)

Switch to the preview browser tab.\
(24) On the Object Page, the table now shows the micro chart column.

![](./images/image36.png)

## Summary

You've now successfully added a micro chart column to the table by using the Page Map.

Continue to - [Exercise 7 - Guided Development: Adding a Chart Building Block](../ex7/README.md)