# Developing SAP Fiori Apps with Modern Tools and Technologies

## Overview

SAP Fiori tools make it faster and easier to create SAPUI5 apps. Get hands-on experience on great efficiency features, such as the page editor to add and configure page content, guided answers to fast-track issue resolution, TypeScript support and more. SAP Fiori tools support not only SAP Fiori elements, but also offer features to scale the creation of SAPUI5 custom apps and to leverage the flexible programming model available for the floorplans provided by SAP Fiori elements for OData V4. 

Go the extra mile and deploy to Cloud Foundry using S4/Hana.

## Overview

1. [Part 1 -UI5 Conference 2023 - Demo of generating Fiori UI application using a CAP project](https://www.youtube.com/watch?v=aCyMC27ED80&t=3703s)
2. [Part 2 -UI5 Conference 2023 - Demo of generating Fiori UI application using a CAP project](https://www.youtube.com/watch?v=8LLBKQZXkDw)
3. [Sample CAP Projects](https://github.com/SAP-samples/fiori-tools-samples/tree/main/cap)
4. [Fiori tools Open Source Repository](https://github.com/SAP/open-ux-tools)

## Target Application

Making a wire frame is a great way to visualize the app.

![Trial Setup](exercises/ex0/images/TargetDesign.png)

## Requirements

There are no special requirements except to have fun and provide us with feedback both positive and negative! 

## Exercises

- [Getting Started - Setting up your Development Environment](exercises/ex0#getting-started---setting-up-your-development-environment)
  - [Setting Up SAP Business Application Studio](exercises/ex0#setting-up-sap-business-application-studio)
  - [Accessing SAP Business Application Studio](exercises/ex0#accessing-sap-business-application-studio)
  - [Creating the Development Space](exercises/ex0#creating-the-development-space)
  - [Getting the Sample Scenario](exercises/ex0#getting-the-sample-scenario)
- [Exercise 1 - Generating an SAP Fiori Elements App](exercises/ex1/)
    - [Exercise 1.1 - Using the SAP Fiori Tools Application Generator](/exercises/ex1#exercise-11-using-the-sap-fiori-tools-application-generator)
    - [TypeScript Enablement](/exercises/ex1#typescript-enablement)
    - [Exercise 1.2 - Starting the App](/exercises/ex1#exercise-12-starting-the-app)
    - [Usage of Guided Answers extension by SAP for Trouble Shooting](/exercises/ex1#usage-of-guided-answers-extension-by-sap-for-trouble-shooting)
- [Exercise 2 - Flexible Programming Model: Using Fiori Elements Building Blocks on a Custom Page](exercises/ex2#exercise-2---flexible-programming-model-using-fiori-elements-building-blocks-on-a-custom-page)
  - [Exercise 2.1 Guided Development: Adding Filter Bar Building Block](exercises/ex2#exercise-21-guided-development-adding-building-block-filter-bar)
  - [Exercise 2.2 Adding Table Building Block](exercises/ex2#exercise-22-adding-building-block-table)
  - [Exercise 2.3 Page Map: Add Object Page and Switch to Flexible Column Layout](exercises/ex2#exercise-23-page-map-add-object-page-and-switch-to-flexible-column-layout)
- [Exercise 3 - Improve Page Layout and add UI5 Freestyle Controls](/exercises/ex3#exercise-3---improve-page-layout-and-add-ui5-freestyle-controls)
  - [Exercise 3.1 - Adopt Dynamic Page Layout to the Main Page](/exercises/ex3#exercise-31---adopt-dynamic-page-layout-to-the-main-page)
  - [Exercise 3.2 - Add Controller Functions for Setting Filter Status](/exercises/ex3#exercise-32-add-controller-functions-for-setting-filter-status)
  - [Exercise 3.3 - Add Generic Tile Slider](/exercises/ex3#exercise-33---add-generic-tile-slider)
- [Exercise 4 - Page Map: Configuring the Object Page Layout](/exercises/ex4#exercise-4---page-map-configuring-the-object-page-layout)
  - [Exercise 4.1 - Add Actions to Object Page Header](/exercises/ex4#exercise-41---add-actions-to-object-page-header)
  - [Exercise 4.2 - Adding Group and Form Sections](/exercises/ex4#exercise-42---adding-group-and-form-sections)
- [Exercise 5 - Flexible Programming Model: Extending the Object Page with a Custom Section and a Building Block](/exercises/ex5#exercise-5---flexible-programming-model-extending-the-object-page-with-a-custom-section-and-a-building-block)
  - [Exercise 5.1 Add LineItem annotation via LSP Support](/exercises/ex5#exercise-51-add-lineitem-annotation-via-lsp-support)
  - [Exercise 5.2 Add Custom Section](/exercises/ex5#exercise-52-add-custom-section)
  - [Exercise 5.3 Use UI5 Language Assistant](/exercises/ex5#exercise-53-use-ui5-language-assistant)
  - [Exercise 5.4 Testing the Table Building Block](/exercises/ex5#exercise-54-testing-the-table-building-block)
- [Exercise 6 - Page Map: Add Micro Chart Table Column](/exercises/ex6#exercise-6---page-map-add-micro-chart-table-column)
- [Exercise 7 - Guided Development: Adding Building Block Chart](/exercises/ex7#exercise-7---guided-development-adding-building-block-chart)
  - [Exercise 7.1 - Use Guided Development to Add Building Block Chart](/exercises/ex7#exercise-71---use-guided-development-to-add-building-block-chart)
  - [Exercise 7.3: Implementing the Chart's Selection Change Handler](/exercises/ex7#exercise-73-implementing-the-charts-selection-change-handler)
  - [Exercise 7.4 Testing the Chart's Event Handler](/exercises/ex7#exercise-74-testing-the-charts-event-handler)
- [Exercise 8 - Page Map: Adding a Controller Extension](/exercises/ex8#exercise-8---page-map-adding-a-controller-extension)
  - [Exercise 8.1 - Using the Page Map to Add a Controller Extension](/exercises/ex8#exercise-81---using-the-page-map-to-add-a-controller-extension)
  - [Exercise 8.2 Move XML Fragment to App Folder](/exercises/ex8#exercise-82-move-xml-fragment-to-app-folder)
  - [Exercise 8.3 Testing the Controller Extension](/exercises/ex8#exercise-83---testing-the-controller-extension)
- [Exercise 9 - Generate Multi Target Application configuration for Cloud Foundry Deployment using a Managed Approuter](/exercises/ex9#exercise-9---generate-multi-target-application-configuration-for-cloud-foundry-deployment-using-a-managed-approuter)
  - [Exercise 9.1 - Add Sample Data](/exercises/ex9#exercise-91---add-sample-data)
  - [Exercise 9.2 - Add a Multi Target Application configuration](/exercises/ex9#exercise-92---add-a-multi-target-application-configuration)
  - [Exercise 9.3 - Build CDS sources for HANA deployment](/exercises/ex9#exercise-93---build-cds-sources-for-hana-deployment)
  - [Exercise 9.4 - Add Managed Approuter Configuration](/exercises/ex9#exercise-94---add-managed-approuter-configuration)
  - [Exercise 9.5 - Validate your configuration](/exercises/ex9#exercise-95---validate-your-configuration)
- [Exercise 10 - Add Fiori UI application to MTA Configuration](/exercises/ex10#exercise-10---add-fiori-ui-application-to-mta-configuration)
  - [Exercise 10.1 - Add Fiori UI Deployment Configuration](/exercises/ex10#exercise-101---add-fiori-ui-deployment-configuration)
  - [Exercise 10.2 - Review Changes](/exercises/ex10#exercise-102---review-changes)
- [Exercise 11 - Deploy to Cloud Foundry](/exercises/ex11#exercise-11---deploy-to-cloud-foundry)
  - [Exercise 11.1 - Login to Cloud Foundry](/exercises/ex10#exercise-111---login-to-cloud-foundry)
  - [Exercise 11.2 - Option 1 - Build and Deploy Using CLI](/exercises/ex10#exercise-112---option-1---build-and-deploy-using-cli)
  - [Exercise 11.2 - Option 2 - Build and Deploy using Project Explorer](/exercises/ex10#exercise-112---option-2---build-and-deploy-using-project-explorer)
  - [Exercise 11.3 - Retrieve Deployed Application](/exercises/ex10#exercise-113---retrieve-deployed-application)

## How to obtain support

Support for the content in this repository is available during the actual time of the online session for which this content has been designed. Otherwise, you may request support via the [Issues](../../issues) tab.

## License
Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
