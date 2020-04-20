const DataHub = require("/data-hub/5/datahub.sjs");
var gHelper  = require("/custom-modules/pipes/graphHelper")
const datahub = new DataHub();


function getGraphDefinition() {
  return {"models":[{"label":"masterdatareports-source","collection":"masterdatareports-source","source":"Sources","fields":[{"label":"Bloomberg Symbol [id11]","field":"Bloomberg Symbol","value":"Bloomberg Symbol","path":"/envelope/instance/node('Bloomberg Symbol')","originalPath":"/envelope/instance/text('Bloomberg Symbol')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"Exchange [id13]","field":"Exchange","value":"Exchange","path":"/envelope/instance/Exchange","originalPath":"/envelope/instance/text('Exchange')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"ISIN [id38]","field":"ISIN","value":"ISIN","path":"/envelope/instance/ISIN","originalPath":"/envelope/instance/text('ISIN')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"Inception Date [id21]","field":"Inception Date","value":"Inception Date","path":"/envelope/instance/node('Inception Date')","originalPath":"/envelope/instance/text('Inception Date')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"Composite Name [id9]","field":"Composite Name","value":"Composite Name","path":"/envelope/instance/node('Composite Name')","originalPath":"/envelope/instance/text('Composite Name')","type":3,"children":[],"parent":"/envelope/instance"}],"options":["nodeInput","fieldsOutputs"],"metadata":{"description":"","dateCreated":"2020-04-16T12:12:51.524Z","blockCreatedFrom":"custom_step","sourceDHFStep":{"label":"harmonize-masterdatareports","value":"harmonize-masterdatareports"},"sourceDatabase":"funds-data-hub-STAGING","sourceCollection":"masterdatareports-source","customURIs":""}},{"label":"openfunds-source","collection":"openfunds-source","source":"Sources","fields":[{"label":"iNAV Bloomberg Code Of Listing [id306]","field":"iNAV Bloomberg Code Of Listing","value":"iNAV Bloomberg Code Of Listing","path":"/envelope/instance/node('iNAV Bloomberg Code Of Listing')","originalPath":"/envelope/instance/text('iNAV Bloomberg Code Of Listing')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"Fund Currency [id71]","field":"Fund Currency","value":"Fund Currency","path":"/envelope/instance/node('Fund Currency')","originalPath":"/envelope/instance/text('Fund Currency')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"Exchange Place [id312]","field":"Exchange Place","value":"Exchange Place","path":"/envelope/instance/node('Exchange Place')","originalPath":"/envelope/instance/text('Exchange Place')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"Legal Fund Name Including Umbrella [id31]","field":"Legal Fund Name Including Umbrella","value":"Legal Fund Name Including Umbrella","path":"/envelope/instance/node('Legal Fund Name Including Umbrella')","originalPath":"/envelope/instance/text('Legal Fund Name Including Umbrella')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"ISIN [id89]","field":"ISIN","value":"ISIN","path":"/envelope/instance/ISIN","originalPath":"/envelope/instance/text('ISIN')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"Fund Launch Date [id47]","field":"Fund Launch Date","value":"Fund Launch Date","path":"/envelope/instance/node('Fund Launch Date')","originalPath":"/envelope/instance/text('Fund Launch Date')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"Ongoing Charges [id506]","field":"Ongoing Charges","value":"Ongoing Charges","path":"/envelope/instance/node('Ongoing Charges')","originalPath":"/envelope/instance/text('Ongoing Charges')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"Share Class Distribution Policy [id99]","field":"Share Class Distribution Policy","value":"Share Class Distribution Policy","path":"/envelope/instance/node('Share Class Distribution Policy')","originalPath":"/envelope/instance/text('Share Class Distribution Policy')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"Investment Objective in English [id56]","field":"Investment Objective in English","value":"Investment Objective in English","path":"/envelope/instance/node('Investment Objective in English')","originalPath":"/envelope/instance/text('Investment Objective in English')","type":3,"children":[],"parent":"/envelope/instance"}],"options":["nodeInput","fieldsOutputs"],"metadata":{"description":"","dateCreated":"2020-04-16T15:07:58.959Z","blockCreatedFrom":"db_collection","sourceDHFStep":null,"sourceDatabase":"funds-data-hub-STAGING","sourceCollection":"openfunds-source","customURIs":""}},{"label":"harmonizationInfo","collection":"harmonizationInfo","source":"Sources","fields":[{"label":"numHarmonized","children":[],"field":"numHarmonized","path":"//numHarmonized","type":"custom"},{"label":"source","children":[],"field":"source","path":"//source","type":"custom"},{"label":"sourceUri","children":[],"field":"sourceUri","path":"//sourceUri","type":"custom"},{"label":"missingSource","children":[],"field":"missingSource","path":"//missingSource","type":"custom"}],"options":["nodeOutput","fieldsInputs"],"metadata":{"description":"","dateCreated":"2020-04-17T09:01:44.172Z","blockCreatedFrom":"none","sourceDHFStep":null,"sourceDatabase":"","sourceCollection":"","customURIs":""}},{"label":"test","collection":"test","source":"Sources","fields":[{"label":"BENCHMARK [id26]","field":"BENCHMARK","value":"BENCHMARK","path":"/envelope/instance/BENCHMARK","originalPath":"/envelope/instance/text('BENCHMARK')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"BLOOMBERG TICKER [id15]","field":"BLOOMBERG TICKER","value":"BLOOMBERG TICKER","path":"/envelope/instance/node('BLOOMBERG TICKER')","originalPath":"/envelope/instance/text('BLOOMBERG TICKER')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"ETF TYPE [id9]","field":"ETF TYPE","value":"ETF TYPE","path":"/envelope/instance/node('ETF TYPE')","originalPath":"/envelope/instance/text('ETF TYPE')","type":3,"children":[],"parent":"/envelope/instance"}],"options":["nodeInput","fieldsOutputs"],"metadata":{"description":"","dateCreated":"2020-04-17T11:08:13.747Z","blockCreatedFrom":"custom_step","sourceDHFStep":{"label":"xetra-harmonize","value":"xetra-harmonize"},"sourceDatabase":"funds-data-hub-STAGING","sourceCollection":"xetra-source","customURIs":""}},{"label":"xetra-source","collection":"xetra-source","source":"Sources","fields":[{"label":"BLOOMBERG TICKER [id15]","field":"BLOOMBERG TICKER","value":"BLOOMBERG TICKER","path":"/envelope/instance/node('BLOOMBERG TICKER')","originalPath":"/envelope/instance/text('BLOOMBERG TICKER')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"FUND CURRENCY [id20]","field":"FUND CURRENCY","value":"FUND CURRENCY","path":"/envelope/instance/node('FUND CURRENCY')","originalPath":"/envelope/instance/text('FUND CURRENCY')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"REPLICATION METHOD [id19]","field":"REPLICATION METHOD","value":"REPLICATION METHOD","path":"/envelope/instance/node('REPLICATION METHOD')","originalPath":"/envelope/instance/text('REPLICATION METHOD')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"ONGOING CHARGES [id17]","field":"ONGOING CHARGES","value":"ONGOING CHARGES","path":"/envelope/instance/node('ONGOING CHARGES')","originalPath":"/envelope/instance/text('ONGOING CHARGES')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"ISIN [id11]","field":"ISIN","value":"ISIN","path":"/envelope/instance/ISIN","originalPath":"/envelope/instance/text('ISIN')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"EXCHANGE TRADED FUNDS NAME [id10]","field":"EXCHANGE TRADED FUNDS NAME","value":"EXCHANGE TRADED FUNDS NAME","path":"/envelope/instance/node('EXCHANGE TRADED FUNDS NAME')","originalPath":"/envelope/instance/text('EXCHANGE TRADED FUNDS NAME')","type":3,"children":[],"parent":"/envelope/instance"}],"options":["nodeInput","fieldsOutputs"],"metadata":{"description":"","dateCreated":"2020-04-17T11:40:18.151Z","blockCreatedFrom":"custom_step","sourceDHFStep":{"label":"xetra-harmonize","value":"xetra-harmonize"},"sourceDatabase":"funds-data-hub-STAGING","sourceCollection":"xetra-source","customURIs":""}},{"label":"lineage","collection":"lineage","source":"Sources","fields":[{"label":"numHarmonized","children":[],"field":"numHarmonized","path":"//numHarmonized","type":"custom"},{"label":"source","children":[],"field":"source","path":"//source","type":"custom"},{"label":"sourceUri","children":[],"field":"sourceUri","path":"//sourceUri","type":"custom"},{"label":"missingSourceFor","children":[],"field":"missingSourceFor","path":"//missingSourceFor","type":"custom"}],"options":["nodeOutput","fieldsInputs"],"metadata":{"description":"","dateCreated":"2020-04-17T12:07:49.977Z","blockCreatedFrom":"none","sourceDHFStep":null,"sourceDatabase":"","sourceCollection":"","customURIs":""}},{"label":"Lineage","collection":"Lineage","source":"Entities","fields":[{"label":"missingSourceFor","field":"missingSourceFor","path":"//missingSourceFor"},{"label":"numHarmonized","field":"numHarmonized","path":"//numHarmonized"},{"label":"source","field":"source","path":"//source"},{"label":"sourceURI","field":"sourceURI","path":"//sourceURI"}],"options":["fieldsInputs","nodeOutput"]},{"label":"FundamentalInformation","collection":"FundamentalInformation","source":"Entities","fields":[{"label":"BloombergSymbol","field":"BloombergSymbol","path":"//BloombergSymbol"},{"label":"Currency","field":"Currency","path":"//Currency"},{"label":"Description","field":"Description","path":"//Description"},{"label":"ExchangePlace","field":"ExchangePlace","path":"//ExchangePlace"},{"label":"FundName","field":"FundName","path":"//FundName"},{"label":"ISIN","field":"ISIN","path":"//ISIN"},{"label":"InceptionDate","field":"InceptionDate","path":"//InceptionDate"},{"label":"OngoingCharges","field":"OngoingCharges","path":"//OngoingCharges"},{"label":"ShareClassDistributionPolicy","field":"ShareClassDistributionPolicy","path":"//ShareClassDistributionPolicy"}],"options":["fieldsInputs","nodeOutput"]}],"executionGraph":{"last_node_id":21,"last_link_id":56,"nodes":[{"id":2,"type":"dhf/output","pos":[1772,533],"size":[180,160],"flags":{},"order":13,"mode":0,"inputs":[{"name":"output","type":0,"link":2}],"properties":{}},{"id":4,"type":"dhf/envelope","pos":[1536,468],"size":[180,160],"flags":{},"order":12,"mode":0,"inputs":[{"name":"headers","type":0,"link":41},{"name":"triples","type":0,"link":null},{"name":"instance","type":0,"link":49},{"name":"attachments","type":0,"link":56},{"name":"uri","type":0,"link":52},{"name":"collections","type":0,"link":null}],"outputs":[{"name":"output","type":null,"links":[2]}],"properties":{},"widgets_values":["json"]},{"id":13,"type":"basic/const","pos":[543,784],"size":{"0":170,"1":26},"flags":{},"order":0,"mode":0,"outputs":[{"name":"value","links":[39]}],"properties":{"value":"7"}},{"id":9,"type":"basic/Array","pos":[552,963],"size":{"0":170,"1":106},"flags":{},"order":9,"mode":0,"inputs":[{"name":"item1","type":0,"link":14},{"name":"item2","type":0,"link":16},{"name":"item3","type":0,"link":34},{"name":"item4","type":0,"link":null},{"name":"item5","type":0,"link":null}],"outputs":[{"name":"array","links":[40]}],"properties":{}},{"id":19,"type":"Entities/FundamentalInformation","pos":[850,410],"size":[328.799987792969,248],"flags":{},"order":10,"mode":0,"inputs":[{"name":"BloombergSymbol","type":0,"link":42},{"name":"Currency","type":0,"link":43},{"name":"Description","type":0,"link":null},{"name":"ExchangePlace","type":0,"link":48},{"name":"FundName","type":0,"link":45},{"name":"ISIN","type":0,"link":50},{"name":"InceptionDate","type":0,"link":null},{"name":"OngoingCharges","type":0,"link":54},{"name":"ShareClassDistributionPolicy","type":0,"link":47}],"outputs":[{"name":"Node","type":"Node","links":[49]},{"name":"Prov","type":null,"links":null}],"properties":{},"widgets_values":[true]},{"id":16,"type":"string/constant","pos":[37,690],"size":{"0":255,"1":58},"flags":{},"order":1,"mode":0,"outputs":[{"name":"value","links":[34]}],"properties":{},"widgets_values":["Description"]},{"id":10,"type":"string/constant","pos":[142,827],"size":{"0":255,"1":58},"flags":{},"order":2,"mode":0,"outputs":[{"name":"value","links":[14]}],"properties":{},"widgets_values":["InceptionDate"]},{"id":8,"type":"string/Map values","pos":[205,970],"size":{"0":255,"1":102},"flags":{},"order":6,"mode":0,"inputs":[{"name":"value","type":0,"link":15},{"name":"default","type":0,"link":null}],"outputs":[{"name":"mappedValue","links":[16]}],"title":"check ShareClassDistributionPolicy","properties":{"mapping":[{"source":"#NULL#","target":"ShareClassDistributionPolicy"},{"source":"#EMPTY#","target":"ShareClassDistributionPolicy"}],"hoverText":"Double click block to edit the mapping rules"},"widgets_values":["string",false]},{"id":6,"type":"Sources/xetra-source","pos":[59,406],"size":[312,188],"flags":{},"order":5,"mode":0,"inputs":[{"name":"Node","type":0,"link":4}],"outputs":[{"name":"BLOOMBERG TICKER","links":[42]},{"name":"FUND CURRENCY","links":[43]},{"name":"REPLICATION METHOD","links":[15,47]},{"name":"ONGOING CHARGES","links":[53]},{"name":"ISIN","links":[50,51]},{"name":"EXCHANGE TRADED FUNDS NAME","links":[45]}],"properties":{},"widgets_values":[true]},{"id":21,"type":"string/Map values","pos":[245,1165],"size":{"0":255,"1":102},"flags":{},"order":7,"mode":0,"inputs":[{"name":"value","type":0,"link":53},{"name":"default","type":0,"link":null}],"outputs":[{"name":"mappedValue","links":[54]}],"title":"OngoingCharges","properties":{"mapping":[{"source":"#NULL#","target":"OngoingCharges"},{"source":"#EMPTY#","target":"OngoingCharges"}],"hoverText":"Double click block to edit the mapping rules"},"widgets_values":["string",false]},{"id":18,"type":"Sources/lineage","pos":[1078,868],"size":[305,148],"flags":{},"order":11,"mode":0,"inputs":[{"name":"numHarmonized","type":0,"link":39},{"name":"source","type":0,"link":38},{"name":"sourceUri","type":0,"link":37},{"name":"missingSourceFor","type":0,"link":40}],"outputs":[{"name":"Node","type":"Node","links":[41]},{"name":"Prov","type":null,"links":null}],"properties":{},"widgets_values":[false]},{"id":7,"type":"string/constant","pos":[439,670],"size":{"0":255,"1":58},"flags":{},"order":3,"mode":0,"outputs":[{"name":"value","links":[38,48,55]}],"properties":{},"widgets_values":["XETRA"]},{"id":20,"type":"string/Templating","pos":[1200,213],"size":{"0":255,"1":146},"flags":{},"order":8,"mode":0,"inputs":[{"name":"v1","type":0,"link":51},{"name":"v2","type":0,"link":55},{"name":"v3","type":0,"link":null}],"outputs":[{"name":"newString","links":[52]}],"properties":{},"widgets_values":["","","/fund/${v2}/${v1}.json"]},{"id":1,"type":"dhf/input","pos":[-236,475],"size":[180,60],"flags":{},"order":4,"mode":0,"outputs":[{"name":"input","type":"","links":[4,56]},{"name":"uri","type":"","links":[37]},{"name":"collections","type":"","links":null}],"properties":{}}],"links":[[2,4,0,2,0,0],[4,1,0,6,0,0],[14,10,0,9,0,0],[15,6,2,8,0,0],[16,8,0,9,1,0],[34,16,0,9,2,0],[37,1,1,18,2,0],[38,7,0,18,1,0],[39,13,0,18,0,0],[40,9,0,18,3,0],[41,18,0,4,0,0],[42,6,0,19,0,0],[43,6,1,19,1,0],[45,6,5,19,4,0],[47,6,2,19,8,0],[48,7,0,19,3,0],[49,19,0,4,2,0],[50,6,4,19,5,0],[51,6,4,20,0,0],[52,20,0,4,4,0],[53,6,3,21,0,0],[54,21,0,19,7,0],[55,7,0,20,1,0],[56,1,0,4,3,0]],"groups":[],"config":{},"version":0.4}}}

function main(content, options) {
  //grab the doc id/uri
  let id = content.uri;

  //here we can grab and manipulate the context metadata attached to the document
  let context = content.context;

  //let's set our output format, so we know what we're exporting
  let outputFormat = options.outputFormat ? options.outputFormat.toLowerCase() : datahub.flow.consts.DEFAULT_FORMAT;

  //here we check to make sure we're not trying to push out a binary or text document, just xml or json
  if (outputFormat !== datahub.flow.consts.JSON && outputFormat !== datahub.flow.consts.XML) {
    datahub.debug.log({
      message: 'The output format of type ' + outputFormat + ' is invalid. Valid options are ' + datahub.flow.consts.XML + ' or ' + datahub.flow.consts.JSON + '.',
      type: 'error'
    });
    throw Error('The output format of type ' + outputFormat + ' is invalid. Valid options are ' + datahub.flow.consts.XML + ' or ' + datahub.flow.consts.JSON + '.');
  }

  /*
  This scaffolding assumes we obtained the document from the database. If you are inserting information, you will
  have to map data from the content.value appropriately and create an instance (object), headers (object), and triples
  (array) instead of using the flowUtils functions to grab them from a document that was pulled from MarkLogic.
  Also you do not have to check if the document exists as in the code below.

  Example code for using data that was sent to MarkLogic server for the document
  let instance = content.value;
  let triples = [];
  let headers = {};
   */

  //Here we check to make sure it's still there before operating on it
  if (!fn.docAvailable(id)) {
    datahub.debug.log({message: 'The document with the uri: ' + id + ' could not be found.', type: 'error'});
    throw Error('The document with the uri: ' + id + ' could not be found.')
  }

  //grab the 'doc' from the content value space
  let doc = content.value;

  // let's just grab the root of the document if its a Document and not a type of Node (ObjectNode or XMLNode)
  //if (doc && (doc instanceof Document || doc instanceof XMLDocument)) {
  //  doc = fn.head(doc.root);
  //}

  /*
  //get our instance, default shape of envelope is envelope/instance, else it'll return an empty object/array
  let instance = datahub.flow.flowUtils.getInstance(doc) || {};

  // get triples, return null if empty or cannot be found
  let triples = datahub.flow.flowUtils.getTriples(doc) || [];

  //gets headers, return null if cannot be found
  let headers = datahub.flow.flowUtils.getHeaders(doc) || {};

  //If you want to set attachments, uncomment here
  // instance['$attachments'] = doc;
  */

  //insert code to manipulate the instance, triples, headers, uri, context metadata, etc.
  let results = gHelper.executeGraphStep(doc,id,getGraphDefinition(),{collections: xdmp.documentGetCollections(id)})
return results;
}

module.exports = {
  main: main
};