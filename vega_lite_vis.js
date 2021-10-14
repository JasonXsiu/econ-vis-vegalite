var vg_eg = "visualisation/econ_growth.vega.json";
var vg_trade = "visualisation/trade.vega.json";
var vg_investment = "visualisation/investment_group_bar.vega.json";
var vg_sector_gdp = "visualisation/sector_gdp.vega.json";
var vg_pvty_map = "visualisation/pvty_map.vega.json";
var vg_HDI = "visualisation/HDI_map.vega.json";
var vg_pop_fert_life = "visualisation/pop_fert_life.vega.json";


vegaEmbed("#econ_growth", vg_eg, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#trade", vg_trade, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#investment", vg_investment, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#sector_gdp", vg_sector_gdp, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#pvty_map", vg_pvty_map, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#HDI_map", vg_HDI, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#pop_fert_life", vg_pop_fert_life, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

