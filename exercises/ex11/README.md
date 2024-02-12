
# Exercise 11 - Deploy to Cloud Foundry

In this exercise you will deploy the generated mtar archive to Cloud Foundry with a SAP HANA database.

# Prerequisites

* You are subscribed to SAP HANA Cloud service, SAP HANA Cloud database is setup and running in your cloud space, refer to this [tutorial](https://developers.sap.com/tutorials/hana-cloud-create-db-project.html) for more information

## Exercise 11.1 - Login to Cloud Foundry

From the left navigation bar, select `View`, `Command Palette`, `CF: Login to Cloud Foundry` and select authentication method;

![](./images/image1.png)

Select your Cloud Foundry organization and space, the default options should be set unless you are running multiple dev spaces;

![](./images/image2.png)

## Exercise 11.2 - Option 1 - Build and Deploy using CLI

Open a terminal window, from the root of your CAP project, right-click your project and select `Open in Integrated Terminal`;

![](./images/image3.png)

The `package.json` was updated with build and deploy scripts during a previous exercise. In the new terminal window, run the command;

```bash
npm run build
```

A new mtar archive is generated in `mta_archives` folder.

To deploy to Cloud Foundry, run;

```bash
npm run deploy
```

## Exercise 11.2 - Option 2 - Build and Deploy using Project Explorer

Right click `mta.yaml` and select `Build MTA Project`;

![](./images/image4.png)

A new mtar archive is generated in `mta_archives` folder.

Right-click the newly generated mtar archive and select `Deploy MTA Archive`;  

![](./images/image5.png)

## Exercise 11.3 - Access Deployed Application

To get a list of deployed HTML5 applications, run the following command;

```bash
cf html5-list -di ui5con2023-destination-service -u -rt launchpad
```

This will return a list of deployed apps and the URL they are being hosted against. Press [CTRL] and click the app’s link in the terminal to open the URL in a new browser tab.

To find out more about this `html5-list` option, run the command;

```bash
cf help html5-list
```

Another option is via SAP BTP Cockpit and selecting `HTML5 Applications` then selecting your newly deployed application;

![](./images/image6.png)

## Summary

You've now successfully deploy your CAP project with a Fiori UI application to Cloud Foundry.

For a working example, check out this [git sample repo](https://github.com/SAP-samples/fiori-tools-samples/tree/main/cap/cap-fiori-mta).

