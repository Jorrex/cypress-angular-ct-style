const { v4: uuid } = require('uuid');
const webpackPreprocessor = require('@cypress/webpack-batteries-included-preprocessor');

const preprocessor = webpackPreprocessor({ typescript: 'typescript' });

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // required for sorry-cypress
  require('cypress-cloud/plugin').cloudPlugin(on, config);

  // Preprocess support and spec files to use a unique output path
  // to not interfere when running in paralel on the same machine
  const uniqueId = uuid();
  on('file:preprocessor', file => {

    // Transform output path to be unique, e.g.
    // original: "folder/subfolder/file.spec.ts"
    // unique: "folder/subfolder/file.<uniqueId>.spec.ts"
    const uniquePath = file.outputPath.replace(/^(.*\/)(.*?)(\..*)$/, `$1$2.${uniqueId}$3`);
    file.outputPath = uniquePath;

    return preprocessor(file);
  });
}
