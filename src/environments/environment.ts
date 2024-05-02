// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  contentful: {
    spaceId: "njmos0w3r5qf", // replace with your space ID
    accessToken: "VnSOdfC46RMfTVXTvVoDc_0jZtHXZRUCfmDemrcpUhw", // replace with your CDA token
    environment: "master", // replace with your environment ID if needed - master is the default production environment in Contentful
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
