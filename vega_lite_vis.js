var vg_eg = "econ_growth.vega.json";
var vg_trade = "trade.vega.json";
var vg_investment = "investment.vega.json";
var vg_sector_gdp = "sector_gdp.vega.json";
var vg_pvty_map = "pvty_map.vega.json";
var vg_HDI = "HDI_map.vega.json";
var vg_pop_fert_life = "pop_fert_life.vega.json";


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

vegaEmbed("#HDI_map", vg_HDI).catch(console.error);

vegaEmbed("#pop_fert_life", vg_pop_fert_life, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
