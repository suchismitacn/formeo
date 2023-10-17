# Formeo

A pure JavaScript module for drag and drop form creation.

## Instructions updated 17/10/2023

#### Setup instructions
	rm -rf node_modules/
    rm package-lock.json
    npm i
    npm run build

#### Commit instructions:
- Commit message should be like `fix: commit message` or `build: commit message`. Check **package.json** rules> type-enum for more rules.
- After making any changes, run `npm run build` and commit the assets in **dist** folder.

#### Installation instructions
- Run `npm install https://github.com/suchismitacn/formeo` in the project you are installing the package. **Note:** This package is compatible up to node v14.21.2 (LTS), so it might cause trouble with latest node versions. If you want to keep using your latest node LTS versions, you can clone the formeo package in your local at the same level as your project and run the setup instruction commands first in your formeo folder. Then in your original project run `npm install \path\to\formeo-directory`, it should install the dependency.
