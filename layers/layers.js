var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Com01012024_WGS84_1 = new ol.format.GeoJSON();
var features_Com01012024_WGS84_1 = format_Com01012024_WGS84_1.readFeatures(json_Com01012024_WGS84_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Com01012024_WGS84_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Com01012024_WGS84_1.addFeatures(features_Com01012024_WGS84_1);
var lyr_Com01012024_WGS84_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Com01012024_WGS84_1, 
                style: style_Com01012024_WGS84_1,
                popuplayertitle: 'Com01012024_WGS84',
                interactive: true,
    title: 'Com01012024_WGS84<br />\
    <img src="styles/legend/Com01012024_WGS84_1_0.png" /> <br />' });
var format_StrutturesuSCeSV_2 = new ol.format.GeoJSON();
var features_StrutturesuSCeSV_2 = format_StrutturesuSCeSV_2.readFeatures(json_StrutturesuSCeSV_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrutturesuSCeSV_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrutturesuSCeSV_2.addFeatures(features_StrutturesuSCeSV_2);
var lyr_StrutturesuSCeSV_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StrutturesuSCeSV_2, 
                style: style_StrutturesuSCeSV_2,
                popuplayertitle: 'Strutture su SC e SV',
                interactive: true,
                title: '<img src="styles/legend/StrutturesuSCeSV_2.png" /> Strutture su SC e SV'
            });
var format_StrutturesuSS_3 = new ol.format.GeoJSON();
var features_StrutturesuSS_3 = format_StrutturesuSS_3.readFeatures(json_StrutturesuSS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrutturesuSS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrutturesuSS_3.addFeatures(features_StrutturesuSS_3);
var lyr_StrutturesuSS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StrutturesuSS_3, 
                style: style_StrutturesuSS_3,
                popuplayertitle: 'Strutture su SS',
                interactive: true,
                title: '<img src="styles/legend/StrutturesuSS_3.png" /> Strutture su SS'
            });
var format_StrutturesuSP_4 = new ol.format.GeoJSON();
var features_StrutturesuSP_4 = format_StrutturesuSP_4.readFeatures(json_StrutturesuSP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrutturesuSP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrutturesuSP_4.addFeatures(features_StrutturesuSP_4);
var lyr_StrutturesuSP_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StrutturesuSP_4, 
                style: style_StrutturesuSP_4,
                popuplayertitle: 'Strutture su SP',
                interactive: true,
                title: '<img src="styles/legend/StrutturesuSP_4.png" /> Strutture su SP'
            });
var format_StruttureAggiunteManualmente_5 = new ol.format.GeoJSON();
var features_StruttureAggiunteManualmente_5 = format_StruttureAggiunteManualmente_5.readFeatures(json_StruttureAggiunteManualmente_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StruttureAggiunteManualmente_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StruttureAggiunteManualmente_5.addFeatures(features_StruttureAggiunteManualmente_5);
var lyr_StruttureAggiunteManualmente_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StruttureAggiunteManualmente_5, 
                style: style_StruttureAggiunteManualmente_5,
                popuplayertitle: 'Strutture Aggiunte Manualmente',
                interactive: true,
                title: '<img src="styles/legend/StruttureAggiunteManualmente_5.png" /> Strutture Aggiunte Manualmente'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Com01012024_WGS84_1.setVisible(true);lyr_StrutturesuSCeSV_2.setVisible(true);lyr_StrutturesuSS_3.setVisible(true);lyr_StrutturesuSP_4.setVisible(true);lyr_StruttureAggiunteManualmente_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Com01012024_WGS84_1,lyr_StrutturesuSCeSV_2,lyr_StrutturesuSS_3,lyr_StrutturesuSP_4,lyr_StruttureAggiunteManualmente_5];
lyr_Com01012024_WGS84_1.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'BMS ProPon': 'BMS ProPon', });
lyr_StrutturesuSCeSV_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'horse': 'horse', 'service': 'service', 'hgv': 'hgv', 'surface': 'surface', 'sidewalk': 'sidewalk', 'oneway': 'oneway', 'motor_vehicle': 'motor_vehicle', 'foot': 'foot', 'cycleway': 'cycleway', 'bicycle': 'bicycle', 'access': 'access', 'tracktype': 'tracktype', 'maxspeed': 'maxspeed', 'name': 'name', 'layer': 'layer', 'highway': 'highway', 'bridge': 'bridge', 'Latitudine': 'Latitudine', 'Longitudine': 'Longitudine', });
lyr_StrutturesuSS_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'surface': 'surface', 'ref': 'ref', 'name': 'name', 'layer': 'layer', 'lanes': 'lanes', 'is_in:city': 'is_in:city', 'highway': 'highway', 'bridge': 'bridge', 'Latitudne': 'Latitudne', 'Longitudine': 'Longitudine', });
lyr_StrutturesuSP_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'sidewalk': 'sidewalk', 'motor_vehicle': 'motor_vehicle', 'foot': 'foot', 'cycleway': 'cycleway', 'bicycle': 'bicycle', 'access': 'access', 'goods': 'goods', 'name:etymology:wikidata': 'name:etymology:wikidata', 'surface': 'surface', 'oneway': 'oneway', 'alt_name': 'alt_name', 'hgv': 'hgv', 'overtaking': 'overtaking', 'maxspeed': 'maxspeed', 'ref': 'ref', 'name': 'name', 'layer': 'layer', 'highway': 'highway', 'bridge': 'bridge', 'Latitudine': 'Latitudine', 'Longitudine': 'Longitudine', });
lyr_StruttureAggiunteManualmente_5.set('fieldAliases', {'id': 'id', 'Latitudne': 'Latitudne', 'Longitudin': 'Longitudin', });
lyr_Com01012024_WGS84_1.set('fieldImages', {'COD_RIP': '', 'COD_REG': '', 'COD_PROV': '', 'COD_CM': '', 'COD_UTS': '', 'PRO_COM': '', 'PRO_COM_T': '', 'COMUNE': '', 'COMUNE_A': '', 'CC_UTS': '', 'Shape_Leng': '', 'Shape_Area': '', 'BMS ProPon': '', });
lyr_StrutturesuSCeSV_2.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'horse': 'TextEdit', 'service': 'TextEdit', 'hgv': 'TextEdit', 'surface': 'TextEdit', 'sidewalk': 'TextEdit', 'oneway': 'TextEdit', 'motor_vehicle': 'TextEdit', 'foot': 'TextEdit', 'cycleway': 'TextEdit', 'bicycle': 'TextEdit', 'access': 'TextEdit', 'tracktype': 'TextEdit', 'maxspeed': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'highway': 'TextEdit', 'bridge': 'TextEdit', 'Latitudine': '', 'Longitudine': '', });
lyr_StrutturesuSS_3.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'surface': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'lanes': 'TextEdit', 'is_in:city': '', 'highway': 'TextEdit', 'bridge': 'TextEdit', 'Latitudne': '', 'Longitudine': '', });
lyr_StrutturesuSP_4.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'sidewalk': '', 'motor_vehicle': '', 'foot': 'TextEdit', 'cycleway': '', 'bicycle': 'TextEdit', 'access': '', 'goods': '', 'name:etymology:wikidata': '', 'surface': 'TextEdit', 'oneway': 'TextEdit', 'alt_name': 'TextEdit', 'hgv': '', 'overtaking': '', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'highway': 'TextEdit', 'bridge': 'TextEdit', 'Latitudine': '', 'Longitudine': '', });
lyr_StruttureAggiunteManualmente_5.set('fieldImages', {'id': 'TextEdit', 'Latitudne': '', 'Longitudin': '', });
lyr_Com01012024_WGS84_1.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_CM': 'no label', 'COD_UTS': 'no label', 'PRO_COM': 'no label', 'PRO_COM_T': 'no label', 'COMUNE': 'no label', 'COMUNE_A': 'no label', 'CC_UTS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'BMS ProPon': 'no label', });
lyr_StrutturesuSCeSV_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'horse': 'no label', 'service': 'no label', 'hgv': 'no label', 'surface': 'no label', 'sidewalk': 'no label', 'oneway': 'no label', 'motor_vehicle': 'no label', 'foot': 'no label', 'cycleway': 'no label', 'bicycle': 'no label', 'access': 'no label', 'tracktype': 'no label', 'maxspeed': 'no label', 'name': 'no label', 'layer': 'no label', 'highway': 'no label', 'bridge': 'no label', 'Latitudine': 'no label', 'Longitudine': 'no label', });
lyr_StrutturesuSS_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'surface': 'no label', 'ref': 'no label', 'name': 'no label', 'layer': 'no label', 'lanes': 'no label', 'is_in:city': 'no label', 'highway': 'no label', 'bridge': 'no label', 'Latitudne': 'no label', 'Longitudine': 'no label', });
lyr_StrutturesuSP_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'sidewalk': 'no label', 'motor_vehicle': 'no label', 'foot': 'no label', 'cycleway': 'no label', 'bicycle': 'no label', 'access': 'no label', 'goods': 'no label', 'name:etymology:wikidata': 'no label', 'surface': 'no label', 'oneway': 'no label', 'alt_name': 'no label', 'hgv': 'no label', 'overtaking': 'no label', 'maxspeed': 'no label', 'ref': 'no label', 'name': 'no label', 'layer': 'no label', 'highway': 'no label', 'bridge': 'no label', 'Latitudine': 'no label', 'Longitudine': 'no label', });
lyr_StruttureAggiunteManualmente_5.set('fieldLabels', {'id': 'no label', 'Latitudne': 'no label', 'Longitudin': 'no label', });
lyr_StruttureAggiunteManualmente_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});