
# Exercise 9 - Generate Multi Target Application configuration for Cloud Foundry Deployment using a Managed Approuter

In this exercise you will generate the deployment configuration using a managed approuter, supporting a SAP HANA database.

## Exercise 9.1 - Add Sample Data

Open a terminal window, from the root of your CAP project, right-click your project and select `Open in Integrated Terminal`;

![](./images/image1.png)

In the new terminal window, run the command;

```bash
cds add tiny-sample
```

## Exercise 9.2 - Add a Multi Target Application configuration

```bash
cds add mta
```

The following files are now added to your project;

* mta.yaml
* xs-security.json

## Exercise 9.3 - Build CDS sources for HANA deployment

```bash
cds build --for hana
```

This is generates a `package.json` that is required for the database deployment, so lets copy that into the `db` folder;

```bash
cp gen/db/package.json db
```

## Exercise 9.4 - Add Managed Approuter Configuration

Right click `mta.yaml`, select `Create MTA Module from Template`;

![](./images/image2.png)

A new tab opens, select `Approuter Configuration`, then select `Start`;

![](./images/image3.png)

Ensure `Managed Approuter` is selected as the HTML5 application runtime. Enter a unique name, for example `ui5con2024` and select `Next`.

![](./images/image4.png)

Since the `xs-security.json` was already created in a previous step, the wizard will ask you for an `Action`. Assuming, you havent touched the `xs-security.json`, select `overwrite` to apply the default settings, then select `Finish` to complete the task.

![](./images/image5.png)

The `mta.yaml` is now updated with a managed approuter configuration.

## Exercise 9.5 - Validate your configuration

As it stands, `package.json` does not contain any build scripts! These will be added in another step! For the moment, you need to right click `mta.yaml` and select `Build MTA Project`;

![](./images/image6.png)

## Summary

You've now successfully created an MTA archive using a managed approuter configuration that is ready for deployment!

Continue to - [Exercise 10 - Add Fiori UI application to MTA Configuration](../ex10/README.md)

