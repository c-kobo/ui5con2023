
# Exercise 10 - Add Fiori UI application to MTA Configuration

In this exercise the Fiori UI that was generated using the CAP travel service will be added to the Multi Target Application (MTA) configuration.

## Exercise 10.1 - Add Fiori UI Deployment Configuration

(1) Open a terminal window, expand `app` and right-click your Fiori UI project `managetravels`, select `Open in Integrated Terminal`;

![](./images/image1.png)

(2) Run the command and select `Cloud Foundry`;
```bash
npm run deploy-config
```

![](./images/image2.png)

(3) Select `Local CAP Project API (Instance Based Destination`;

Where did this destination come from? When you run the npm command `deploy-config` it detects the presence of the `mta.yaml` which is also missing a local destination instance to allow communication between the Fiori UI and the CAP project when deployed to Cloud Foundry.

![](./images/image3.png)

(4) Since you are changing the contents of the `mta.yaml`, you are prompted to confirm these changes, enter `Y`;

![](./images/image4.png)

## Exercise 10.2 - Review Changes

The following changes were made to your Fiori UI application;

* a new file `xs-app.json` was added to support the OData routing when deployed to Cloud Foundry
* `package.json` was updated with additional Cloud Foundry scripts, for example `build:cf`
* `manifest.json` is updated with the `sap.cloud` node to support binding to the managed approuter

(5) The following changes were made to your CAP application;

* `package.json` was updated additional build, deploy and undeploy scripts
* `mta.yaml` was updated to support the deployment of the Fiori UI Travel application

![](./images/image5.png)

You will notice that `html5` module contains a number of commands, one of these is `build:cf` which ensures the Fiori UI application is built for Cloud Foundry.

## Summary

You've now successfully added deployment configuration to the Fiori UI application and updated the `mta.yaml` to append the application when buidling and deploying to Cloud Foundry.

Continue to - [Exercise 11 - Deploy to Cloud Foundry](../ex11/README.md)

