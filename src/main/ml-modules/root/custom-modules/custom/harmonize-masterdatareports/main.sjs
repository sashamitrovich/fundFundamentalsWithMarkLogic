const DataHub = require("/data-hub/5/datahub.sjs");
var gHelper  = require("/custom-modules/pipes/graphHelper")
const datahub = new DataHub();


function getGraphDefinition() {
  return {"models":[{"label":"header","collection":"header","source":"Sources","fields":[{"label":"numHarmonized","children":[],"field":"numHarmonized","path":"//numHarmonized","type":"custom"},{"label":"source","children":[],"field":"source","path":"//source","type":"custom"}],"options":["fieldsInputs","nodeOutput"],"metadata":{"description":"","dateCreated":"2020-04-16T12:22:19.917Z","blockCreatedFrom":"none","sourceDHFStep":null,"sourceDatabase":"","sourceCollection":"","customURIs":""}},{"label":"FundamentalInformation","collection":"FundamentalInformation","source":"Entities","fields":[{"label":"BloombergSymbol","field":"BloombergSymbol","path":"//BloombergSymbol"},{"label":"Currency","field":"Currency","path":"//Currency"},{"label":"Description","field":"Description","path":"//Description"},{"label":"ExchangePlace","field":"ExchangePlace","path":"//ExchangePlace"},{"label":"FundName","field":"FundName","path":"//FundName"},{"label":"ISIN","field":"ISIN","path":"//ISIN"},{"label":"InceptionDate","field":"InceptionDate","path":"//InceptionDate"},{"label":"OngoingCharges","field":"OngoingCharges","path":"//OngoingCharges"},{"label":"ShareClassDistributionPolicy","field":"ShareClassDistributionPolicy","path":"//ShareClassDistributionPolicy"}],"options":["fieldsInputs","nodeOutput"]},{"label":"masterdatareports-source","collection":"masterdatareports-source","source":"Sources","fields":[{"label":"Bloomberg Symbol [id11]","field":"Bloomberg Symbol","value":"Bloomberg Symbol","path":"/envelope/instance/node('Bloomberg Symbol')","originalPath":"/envelope/instance/text('Bloomberg Symbol')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"Exchange [id13]","field":"Exchange","value":"Exchange","path":"/envelope/instance/Exchange","originalPath":"/envelope/instance/text('Exchange')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"ISIN [id38]","field":"ISIN","value":"ISIN","path":"/envelope/instance/ISIN","originalPath":"/envelope/instance/text('ISIN')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"Inception Date [id21]","field":"Inception Date","value":"Inception Date","path":"/envelope/instance/node('Inception Date')","originalPath":"/envelope/instance/text('Inception Date')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"Composite Name [id9]","field":"Composite Name","value":"Composite Name","path":"/envelope/instance/node('Composite Name')","originalPath":"/envelope/instance/text('Composite Name')","type":3,"children":[],"parent":"/envelope/instance"},{"label":"Description [id39]","field":"Description","value":"Description","path":"/envelope/instance/Description","originalPath":"/envelope/instance/text('Description')","type":3,"children":[],"parent":"/envelope/instance"}],"options":["nodeInput","fieldsOutputs"],"metadata":{"description":"","dateCreated":"2020-04-16T15:14:34.212Z","blockCreatedFrom":"db_collection","sourceDHFStep":null,"sourceDatabase":"funds-data-hub-STAGING","sourceCollection":"masterdatareports-source","customURIs":""}},{"label":"harmonizationInfo","collection":"harmonizationInfo","source":"Sources","fields":[{"label":"numHarmonized","children":[],"field":"numHarmonized","path":"//numHarmonized","type":"custom"},{"label":"source","children":[],"field":"source","path":"//source","type":"custom"},{"label":"sourceUri","children":[],"field":"sourceUri","path":"//sourceUri","type":"custom"},{"label":"missingSource","children":[],"field":"missingSource","path":"//missingSource","type":"custom"}],"options":["nodeOutput","fieldsInputs"],"metadata":{"description":"","dateCreated":"2020-04-17T09:51:01.361Z","blockCreatedFrom":"none","sourceDHFStep":null,"sourceDatabase":"","sourceCollection":"","customURIs":""}}],"executionGraph":{"last_node_id":23,"last_link_id":36,"nodes":[{"id":2,"type":"dhf/output","pos":[1553,330],"size":[180,160],"flags":{},"order":13,"mode":0,"inputs":[{"name":"output","type":0,"link":1}],"properties":{}},{"id":14,"type":"string/uuid","pos":[464,190],"size":{"0":255,"1":58},"flags":{},"order":0,"mode":0,"outputs":[{"name":"uuid","links":[16]}],"properties":{},"widgets_values":[""]},{"id":13,"type":"string/Templating","pos":[993,204],"size":{"0":255,"1":146},"flags":{},"order":6,"mode":0,"inputs":[{"name":"v1","type":0,"link":16},{"name":"v2","type":0,"link":null},{"name":"v3","type":0,"link":null}],"outputs":[{"name":"newString","links":[17]}],"properties":{},"widgets_values":["","","/fund/masterdatareports/${v1}.json"]},{"id":16,"type":"Entities/FundamentalInformation","pos":[728,386],"size":[328.799987792969,248],"flags":{},"order":8,"mode":0,"inputs":[{"name":"BloombergSymbol","type":0,"link":20},{"name":"Currency","type":0,"link":19},{"name":"Description","type":0,"link":21},{"name":"ExchangePlace","type":0,"link":23},{"name":"FundName","type":0,"link":22},{"name":"ISIN","type":0,"link":24},{"name":"InceptionDate","type":0,"link":25},{"name":"OngoingCharges","type":0,"link":null},{"name":"ShareClassDistributionPolicy","type":0,"link":null}],"outputs":[{"name":"Node","type":"Node","links":[18]},{"name":"Prov","type":null,"links":null}],"properties":{},"widgets_values":[true]},{"id":6,"type":"string/constant","pos":[318,556],"size":{"0":255,"1":58},"flags":{},"order":2,"mode":0,"outputs":[{"name":"value","links":[19]}],"title":"currency","properties":{},"widgets_values":["USD"]},{"id":3,"type":"dhf/envelope","pos":[1297,499],"size":[180,160],"flags":{},"order":12,"mode":0,"inputs":[{"name":"headers","type":0,"link":32},{"name":"triples","type":0,"link":null},{"name":"instance","type":0,"link":18},{"name":"attachments","type":0,"link":null},{"name":"uri","type":0,"link":17},{"name":"collections","type":0,"link":null}],"outputs":[{"name":"output","type":null,"links":[1]}],"properties":{},"widgets_values":["json"]},{"id":23,"type":"Sources/harmonizationInfo","pos":[972,678.5],"size":[305,148],"flags":{},"order":11,"mode":0,"inputs":[{"name":"numHarmonized","type":0,"link":35},{"name":"source","type":0,"link":34},{"name":"sourceUri","type":0,"link":36},{"name":"missingSource","type":0,"link":33}],"outputs":[{"name":"Node","type":"Node","links":[32]},{"name":"Prov","type":null,"links":null}],"properties":{},"widgets_values":[true]},{"id":10,"type":"string/constant","pos":[588,865],"size":{"0":255,"1":58},"flags":{},"order":3,"mode":0,"outputs":[{"name":"value","links":[34]}],"properties":{},"widgets_values":["Masterdatareports.com"]},{"id":9,"type":"basic/const","pos":[676,695],"size":{"0":170,"1":26},"flags":{},"order":4,"mode":0,"outputs":[{"name":"value","links":[35]}],"properties":{"value":"6"}},{"id":17,"type":"Sources/masterdatareports-source","pos":[-343,342],"size":[305,188],"flags":{},"order":7,"mode":0,"inputs":[{"name":"Node","type":0,"link":26}],"outputs":[{"name":"Bloomberg Symbol","links":[20]},{"name":"Exchange","links":[23]},{"name":"ISIN","links":[24]},{"name":"Inception Date","links":[25]},{"name":"Composite Name","links":[22]},{"name":"Description","links":[21,30]}],"properties":{},"widgets_values":[true]},{"id":1,"type":"dhf/input","pos":[-669,473],"size":[180,60],"flags":{},"order":5,"mode":0,"outputs":[{"name":"input","type":"","links":[26]},{"name":"uri","type":"","links":[36]},{"name":"collections","type":"","links":null}],"properties":{}},{"id":22,"type":"basic/Array","pos":[393,728],"size":{"0":170,"1":106},"flags":{},"order":10,"mode":0,"inputs":[{"name":"item1","type":0,"link":31},{"name":"item2","type":0,"link":null},{"name":"item3","type":0,"link":null},{"name":"item4","type":0,"link":null},{"name":"item5","type":0,"link":null}],"outputs":[{"name":"array","links":[33]}],"properties":{}},{"id":20,"type":"string/Map values","pos":[-24,658],"size":{"0":255,"1":102},"flags":{},"order":9,"mode":0,"inputs":[{"name":"value","type":0,"link":30},{"name":"default","type":0,"link":null}],"outputs":[{"name":"mappedValue","links":[31]}],"title":"testDescription","properties":{"mapping":[{"source":"#NULL#","target":"Description"},{"source":"#EMPTY#","target":"Description"}],"hoverText":"Double click block to edit the mapping rules"},"widgets_values":["string",false]},{"id":21,"type":"string/Map values","pos":[-29,840],"size":{"0":255,"1":102},"flags":{},"order":1,"mode":0,"inputs":[{"name":"value","type":0,"link":null},{"name":"default","type":0,"link":null}],"outputs":[{"name":"mappedValue","links":[]}],"title":"testFundLaunchDate","properties":{"mapping":[{"source":"#NULL#","target":"InceptionDate"},{"source":"#EMPTY#","target":"InceptionDate"}],"hoverText":"Double click block to edit the mapping rules"},"widgets_values":["string",false]}],"links":[[1,3,0,2,0,0],[16,14,0,13,0,0],[17,13,0,3,4,0],[18,16,0,3,2,0],[19,6,0,16,1,0],[20,17,0,16,0,0],[21,17,5,16,2,0],[22,17,4,16,4,0],[23,17,1,16,3,0],[24,17,2,16,5,0],[25,17,3,16,6,0],[26,1,0,17,0,0],[30,17,5,20,0,0],[31,20,0,22,0,0],[32,23,0,3,0,0],[33,22,0,23,3,0],[34,10,0,23,1,0],[35,9,0,23,0,0],[36,1,1,23,2,0]],"groups":[],"config":{},"version":0.4}}}

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