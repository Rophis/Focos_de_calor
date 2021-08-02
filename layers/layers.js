var wms_layers = [];


        var lyr_Satelital_0 = new ol.layer.Tile({
            'title': 'Satelital',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_BOL_DEP_1 = new ol.format.GeoJSON();
var features_BOL_DEP_1 = format_BOL_DEP_1.readFeatures(json_BOL_DEP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOL_DEP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOL_DEP_1.addFeatures(features_BOL_DEP_1);
var lyr_BOL_DEP_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BOL_DEP_1, 
                style: style_BOL_DEP_1,
                interactive: true,
                title: '<img src="styles/legend/BOL_DEP_1.png" /> BOL_DEP'
            });
var format_Tarija_2 = new ol.format.GeoJSON();
var features_Tarija_2 = format_Tarija_2.readFeatures(json_Tarija_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tarija_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tarija_2.addFeatures(features_Tarija_2);
var lyr_Tarija_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tarija_2, 
                style: style_Tarija_2,
                interactive: true,
                title: '<img src="styles/legend/Tarija_2.png" /> Tarija'
            });
var format_Focos_Tarija_28_07_2021_3 = new ol.format.GeoJSON();
var features_Focos_Tarija_28_07_2021_3 = format_Focos_Tarija_28_07_2021_3.readFeatures(json_Focos_Tarija_28_07_2021_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Focos_Tarija_28_07_2021_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_Tarija_28_07_2021_3.addFeatures(features_Focos_Tarija_28_07_2021_3);
var lyr_Focos_Tarija_28_07_2021_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Focos_Tarija_28_07_2021_3, 
                style: style_Focos_Tarija_28_07_2021_3,
                interactive: true,
                title: '<img src="styles/legend/Focos_Tarija_28_07_2021_3.png" /> Focos_Tarija_28_07_2021'
            });
var format_Focos_Tarija_29_07_2021_4 = new ol.format.GeoJSON();
var features_Focos_Tarija_29_07_2021_4 = format_Focos_Tarija_29_07_2021_4.readFeatures(json_Focos_Tarija_29_07_2021_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Focos_Tarija_29_07_2021_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_Tarija_29_07_2021_4.addFeatures(features_Focos_Tarija_29_07_2021_4);
var lyr_Focos_Tarija_29_07_2021_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Focos_Tarija_29_07_2021_4, 
                style: style_Focos_Tarija_29_07_2021_4,
                interactive: true,
                title: '<img src="styles/legend/Focos_Tarija_29_07_2021_4.png" /> Focos_Tarija_29_07_2021'
            });
var format_Focos_Tarija_30_07_2021_5 = new ol.format.GeoJSON();
var features_Focos_Tarija_30_07_2021_5 = format_Focos_Tarija_30_07_2021_5.readFeatures(json_Focos_Tarija_30_07_2021_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Focos_Tarija_30_07_2021_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_Tarija_30_07_2021_5.addFeatures(features_Focos_Tarija_30_07_2021_5);
var lyr_Focos_Tarija_30_07_2021_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Focos_Tarija_30_07_2021_5, 
                style: style_Focos_Tarija_30_07_2021_5,
                interactive: true,
                title: '<img src="styles/legend/Focos_Tarija_30_07_2021_5.png" /> Focos_Tarija_30_07_2021'
            });
var format_Focos_Tarija_31_07_2021_6 = new ol.format.GeoJSON();
var features_Focos_Tarija_31_07_2021_6 = format_Focos_Tarija_31_07_2021_6.readFeatures(json_Focos_Tarija_31_07_2021_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Focos_Tarija_31_07_2021_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_Tarija_31_07_2021_6.addFeatures(features_Focos_Tarija_31_07_2021_6);
var lyr_Focos_Tarija_31_07_2021_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Focos_Tarija_31_07_2021_6, 
                style: style_Focos_Tarija_31_07_2021_6,
                interactive: true,
                title: '<img src="styles/legend/Focos_Tarija_31_07_2021_6.png" /> Focos_Tarija_31_07_2021'
            });
var format_Focos_Tarija_01_08_2021_7 = new ol.format.GeoJSON();
var features_Focos_Tarija_01_08_2021_7 = format_Focos_Tarija_01_08_2021_7.readFeatures(json_Focos_Tarija_01_08_2021_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Focos_Tarija_01_08_2021_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_Tarija_01_08_2021_7.addFeatures(features_Focos_Tarija_01_08_2021_7);
var lyr_Focos_Tarija_01_08_2021_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Focos_Tarija_01_08_2021_7, 
                style: style_Focos_Tarija_01_08_2021_7,
                interactive: true,
                title: '<img src="styles/legend/Focos_Tarija_01_08_2021_7.png" /> Focos_Tarija_01_08_2021'
            });
var format_Focos_Tarija_02_08_2021_8 = new ol.format.GeoJSON();
var features_Focos_Tarija_02_08_2021_8 = format_Focos_Tarija_02_08_2021_8.readFeatures(json_Focos_Tarija_02_08_2021_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Focos_Tarija_02_08_2021_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_Tarija_02_08_2021_8.addFeatures(features_Focos_Tarija_02_08_2021_8);
var lyr_Focos_Tarija_02_08_2021_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Focos_Tarija_02_08_2021_8, 
                style: style_Focos_Tarija_02_08_2021_8,
                interactive: true,
                title: '<img src="styles/legend/Focos_Tarija_02_08_2021_8.png" /> Focos_Tarija_02_08_2021'
            });
var format_Santa_Cruz_9 = new ol.format.GeoJSON();
var features_Santa_Cruz_9 = format_Santa_Cruz_9.readFeatures(json_Santa_Cruz_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Santa_Cruz_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Santa_Cruz_9.addFeatures(features_Santa_Cruz_9);
var lyr_Santa_Cruz_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Santa_Cruz_9, 
                style: style_Santa_Cruz_9,
                interactive: true,
                title: '<img src="styles/legend/Santa_Cruz_9.png" /> Santa_Cruz'
            });
var format_Focos_SantaCruz_28_07_2021_10 = new ol.format.GeoJSON();
var features_Focos_SantaCruz_28_07_2021_10 = format_Focos_SantaCruz_28_07_2021_10.readFeatures(json_Focos_SantaCruz_28_07_2021_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Focos_SantaCruz_28_07_2021_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_SantaCruz_28_07_2021_10.addFeatures(features_Focos_SantaCruz_28_07_2021_10);
var lyr_Focos_SantaCruz_28_07_2021_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Focos_SantaCruz_28_07_2021_10, 
                style: style_Focos_SantaCruz_28_07_2021_10,
                interactive: true,
                title: '<img src="styles/legend/Focos_SantaCruz_28_07_2021_10.png" /> Focos_SantaCruz_28_07_2021'
            });
var format_Focos_SantaCruz_29_07_2021_11 = new ol.format.GeoJSON();
var features_Focos_SantaCruz_29_07_2021_11 = format_Focos_SantaCruz_29_07_2021_11.readFeatures(json_Focos_SantaCruz_29_07_2021_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Focos_SantaCruz_29_07_2021_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_SantaCruz_29_07_2021_11.addFeatures(features_Focos_SantaCruz_29_07_2021_11);
var lyr_Focos_SantaCruz_29_07_2021_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Focos_SantaCruz_29_07_2021_11, 
                style: style_Focos_SantaCruz_29_07_2021_11,
                interactive: true,
                title: '<img src="styles/legend/Focos_SantaCruz_29_07_2021_11.png" /> Focos_SantaCruz_29_07_2021'
            });
var format_Focos_SantaCruz_30_07_2021_12 = new ol.format.GeoJSON();
var features_Focos_SantaCruz_30_07_2021_12 = format_Focos_SantaCruz_30_07_2021_12.readFeatures(json_Focos_SantaCruz_30_07_2021_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Focos_SantaCruz_30_07_2021_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_SantaCruz_30_07_2021_12.addFeatures(features_Focos_SantaCruz_30_07_2021_12);
var lyr_Focos_SantaCruz_30_07_2021_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Focos_SantaCruz_30_07_2021_12, 
                style: style_Focos_SantaCruz_30_07_2021_12,
                interactive: true,
                title: '<img src="styles/legend/Focos_SantaCruz_30_07_2021_12.png" /> Focos_SantaCruz_30_07_2021'
            });
var format_Focos_SantaCruz_31_07_2021_13 = new ol.format.GeoJSON();
var features_Focos_SantaCruz_31_07_2021_13 = format_Focos_SantaCruz_31_07_2021_13.readFeatures(json_Focos_SantaCruz_31_07_2021_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Focos_SantaCruz_31_07_2021_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_SantaCruz_31_07_2021_13.addFeatures(features_Focos_SantaCruz_31_07_2021_13);
var lyr_Focos_SantaCruz_31_07_2021_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Focos_SantaCruz_31_07_2021_13, 
                style: style_Focos_SantaCruz_31_07_2021_13,
                interactive: true,
                title: '<img src="styles/legend/Focos_SantaCruz_31_07_2021_13.png" /> Focos_SantaCruz_31_07_2021'
            });
var format_Focos_SantaCruz_01_08_2021_14 = new ol.format.GeoJSON();
var features_Focos_SantaCruz_01_08_2021_14 = format_Focos_SantaCruz_01_08_2021_14.readFeatures(json_Focos_SantaCruz_01_08_2021_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Focos_SantaCruz_01_08_2021_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_SantaCruz_01_08_2021_14.addFeatures(features_Focos_SantaCruz_01_08_2021_14);
var lyr_Focos_SantaCruz_01_08_2021_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Focos_SantaCruz_01_08_2021_14, 
                style: style_Focos_SantaCruz_01_08_2021_14,
                interactive: true,
                title: '<img src="styles/legend/Focos_SantaCruz_01_08_2021_14.png" /> Focos_SantaCruz_01_08_2021'
            });
var format_Focos_SantaCruz_02_08_2021_15 = new ol.format.GeoJSON();
var features_Focos_SantaCruz_02_08_2021_15 = format_Focos_SantaCruz_02_08_2021_15.readFeatures(json_Focos_SantaCruz_02_08_2021_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Focos_SantaCruz_02_08_2021_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_SantaCruz_02_08_2021_15.addFeatures(features_Focos_SantaCruz_02_08_2021_15);
var lyr_Focos_SantaCruz_02_08_2021_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Focos_SantaCruz_02_08_2021_15, 
                style: style_Focos_SantaCruz_02_08_2021_15,
                interactive: true,
                title: '<img src="styles/legend/Focos_SantaCruz_02_08_2021_15.png" /> Focos_SantaCruz_02_08_2021'
            });
var format_Beni_16 = new ol.format.GeoJSON();
var features_Beni_16 = format_Beni_16.readFeatures(json_Beni_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beni_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beni_16.addFeatures(features_Beni_16);
var lyr_Beni_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Beni_16, 
                style: style_Beni_16,
                interactive: true,
                title: '<img src="styles/legend/Beni_16.png" /> Beni'
            });
var format_Focos_Beni_28_07_2021_17 = new ol.format.GeoJSON();
var features_Focos_Beni_28_07_2021_17 = format_Focos_Beni_28_07_2021_17.readFeatures(json_Focos_Beni_28_07_2021_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Focos_Beni_28_07_2021_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_Beni_28_07_2021_17.addFeatures(features_Focos_Beni_28_07_2021_17);
var lyr_Focos_Beni_28_07_2021_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Focos_Beni_28_07_2021_17, 
                style: style_Focos_Beni_28_07_2021_17,
                interactive: true,
                title: '<img src="styles/legend/Focos_Beni_28_07_2021_17.png" /> Focos_Beni_28_07_2021'
            });
var format_Focos_Beni_29_07_2021_18 = new ol.format.GeoJSON();
var features_Focos_Beni_29_07_2021_18 = format_Focos_Beni_29_07_2021_18.readFeatures(json_Focos_Beni_29_07_2021_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Focos_Beni_29_07_2021_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_Beni_29_07_2021_18.addFeatures(features_Focos_Beni_29_07_2021_18);
var lyr_Focos_Beni_29_07_2021_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Focos_Beni_29_07_2021_18, 
                style: style_Focos_Beni_29_07_2021_18,
                interactive: true,
                title: '<img src="styles/legend/Focos_Beni_29_07_2021_18.png" /> Focos_Beni_29_07_2021'
            });
var format_Focos_Beni_30_07_2021_19 = new ol.format.GeoJSON();
var features_Focos_Beni_30_07_2021_19 = format_Focos_Beni_30_07_2021_19.readFeatures(json_Focos_Beni_30_07_2021_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Focos_Beni_30_07_2021_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_Beni_30_07_2021_19.addFeatures(features_Focos_Beni_30_07_2021_19);
var lyr_Focos_Beni_30_07_2021_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Focos_Beni_30_07_2021_19, 
                style: style_Focos_Beni_30_07_2021_19,
                interactive: true,
                title: '<img src="styles/legend/Focos_Beni_30_07_2021_19.png" /> Focos_Beni_30_07_2021'
            });
var format_Focos_Beni_31_07_2021_20 = new ol.format.GeoJSON();
var features_Focos_Beni_31_07_2021_20 = format_Focos_Beni_31_07_2021_20.readFeatures(json_Focos_Beni_31_07_2021_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Focos_Beni_31_07_2021_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_Beni_31_07_2021_20.addFeatures(features_Focos_Beni_31_07_2021_20);
var lyr_Focos_Beni_31_07_2021_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Focos_Beni_31_07_2021_20, 
                style: style_Focos_Beni_31_07_2021_20,
                interactive: true,
                title: '<img src="styles/legend/Focos_Beni_31_07_2021_20.png" /> Focos_Beni_31_07_2021'
            });
var format_Focos_Beni_01_08_2021_21 = new ol.format.GeoJSON();
var features_Focos_Beni_01_08_2021_21 = format_Focos_Beni_01_08_2021_21.readFeatures(json_Focos_Beni_01_08_2021_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Focos_Beni_01_08_2021_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_Beni_01_08_2021_21.addFeatures(features_Focos_Beni_01_08_2021_21);
var lyr_Focos_Beni_01_08_2021_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Focos_Beni_01_08_2021_21, 
                style: style_Focos_Beni_01_08_2021_21,
                interactive: true,
                title: '<img src="styles/legend/Focos_Beni_01_08_2021_21.png" /> Focos_Beni_01_08_2021'
            });
var format_Focos_Beni_02_08_2021_22 = new ol.format.GeoJSON();
var features_Focos_Beni_02_08_2021_22 = format_Focos_Beni_02_08_2021_22.readFeatures(json_Focos_Beni_02_08_2021_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Focos_Beni_02_08_2021_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_Beni_02_08_2021_22.addFeatures(features_Focos_Beni_02_08_2021_22);
var lyr_Focos_Beni_02_08_2021_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Focos_Beni_02_08_2021_22, 
                style: style_Focos_Beni_02_08_2021_22,
                interactive: true,
                title: '<img src="styles/legend/Focos_Beni_02_08_2021_22.png" /> Focos_Beni_02_08_2021'
            });

lyr_Satelital_0.setVisible(true);lyr_BOL_DEP_1.setVisible(false);lyr_Tarija_2.setVisible(true);lyr_Focos_Tarija_28_07_2021_3.setVisible(false);lyr_Focos_Tarija_29_07_2021_4.setVisible(false);lyr_Focos_Tarija_30_07_2021_5.setVisible(false);lyr_Focos_Tarija_31_07_2021_6.setVisible(false);lyr_Focos_Tarija_01_08_2021_7.setVisible(false);lyr_Focos_Tarija_02_08_2021_8.setVisible(false);lyr_Santa_Cruz_9.setVisible(true);lyr_Focos_SantaCruz_28_07_2021_10.setVisible(false);lyr_Focos_SantaCruz_29_07_2021_11.setVisible(false);lyr_Focos_SantaCruz_30_07_2021_12.setVisible(false);lyr_Focos_SantaCruz_31_07_2021_13.setVisible(false);lyr_Focos_SantaCruz_01_08_2021_14.setVisible(false);lyr_Focos_SantaCruz_02_08_2021_15.setVisible(false);lyr_Beni_16.setVisible(true);lyr_Focos_Beni_28_07_2021_17.setVisible(false);lyr_Focos_Beni_29_07_2021_18.setVisible(false);lyr_Focos_Beni_30_07_2021_19.setVisible(false);lyr_Focos_Beni_31_07_2021_20.setVisible(false);lyr_Focos_Beni_01_08_2021_21.setVisible(false);lyr_Focos_Beni_02_08_2021_22.setVisible(false);
var layersList = [lyr_Satelital_0,lyr_BOL_DEP_1,lyr_Tarija_2,lyr_Focos_Tarija_28_07_2021_3,lyr_Focos_Tarija_29_07_2021_4,lyr_Focos_Tarija_30_07_2021_5,lyr_Focos_Tarija_31_07_2021_6,lyr_Focos_Tarija_01_08_2021_7,lyr_Focos_Tarija_02_08_2021_8,lyr_Santa_Cruz_9,lyr_Focos_SantaCruz_28_07_2021_10,lyr_Focos_SantaCruz_29_07_2021_11,lyr_Focos_SantaCruz_30_07_2021_12,lyr_Focos_SantaCruz_31_07_2021_13,lyr_Focos_SantaCruz_01_08_2021_14,lyr_Focos_SantaCruz_02_08_2021_15,lyr_Beni_16,lyr_Focos_Beni_28_07_2021_17,lyr_Focos_Beni_29_07_2021_18,lyr_Focos_Beni_30_07_2021_19,lyr_Focos_Beni_31_07_2021_20,lyr_Focos_Beni_01_08_2021_21,lyr_Focos_Beni_02_08_2021_22];
lyr_BOL_DEP_1.set('fieldAliases', {'NOM_DEP': 'NOM_DEP', 'superficie': 'superficie', 'area': 'area', });
lyr_Tarija_2.set('fieldAliases', {'id': 'id', });
lyr_Focos_Tarija_28_07_2021_3.set('fieldAliases', {'fid': 'fid', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', });
lyr_Focos_Tarija_29_07_2021_4.set('fieldAliases', {'fid': 'fid', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', });
lyr_Focos_Tarija_30_07_2021_5.set('fieldAliases', {'fid': 'fid', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', });
lyr_Focos_Tarija_31_07_2021_6.set('fieldAliases', {'fid': 'fid', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', });
lyr_Focos_Tarija_01_08_2021_7.set('fieldAliases', {'fid': 'fid', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', });
lyr_Focos_Tarija_02_08_2021_8.set('fieldAliases', {'fid': 'fid', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', });
lyr_Santa_Cruz_9.set('fieldAliases', {'id': 'id', });
lyr_Focos_SantaCruz_28_07_2021_10.set('fieldAliases', {'fid': 'fid', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', });
lyr_Focos_SantaCruz_29_07_2021_11.set('fieldAliases', {'fid': 'fid', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', });
lyr_Focos_SantaCruz_30_07_2021_12.set('fieldAliases', {'fid': 'fid', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', });
lyr_Focos_SantaCruz_31_07_2021_13.set('fieldAliases', {'fid': 'fid', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', });
lyr_Focos_SantaCruz_01_08_2021_14.set('fieldAliases', {'fid': 'fid', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', });
lyr_Focos_SantaCruz_02_08_2021_15.set('fieldAliases', {'fid': 'fid', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', });
lyr_Beni_16.set('fieldAliases', {'id': 'id', });
lyr_Focos_Beni_28_07_2021_17.set('fieldAliases', {'fid': 'fid', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', });
lyr_Focos_Beni_29_07_2021_18.set('fieldAliases', {'fid': 'fid', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', });
lyr_Focos_Beni_30_07_2021_19.set('fieldAliases', {'fid': 'fid', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', });
lyr_Focos_Beni_31_07_2021_20.set('fieldAliases', {'fid': 'fid', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', });
lyr_Focos_Beni_01_08_2021_21.set('fieldAliases', {'fid': 'fid', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', });
lyr_Focos_Beni_02_08_2021_22.set('fieldAliases', {'fid': 'fid', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACQ_DATE': 'ACQ_DATE', 'ACQ_TIME': 'ACQ_TIME', });
lyr_BOL_DEP_1.set('fieldImages', {'NOM_DEP': 'TextEdit', 'superficie': 'TextEdit', 'area': 'TextEdit', });
lyr_Tarija_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Focos_Tarija_28_07_2021_3.set('fieldImages', {'fid': '', 'LATITUDE': '', 'LONGITUDE': '', 'ACQ_DATE': '', 'ACQ_TIME': '', });
lyr_Focos_Tarija_29_07_2021_4.set('fieldImages', {'fid': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ACQ_DATE': 'DateTime', 'ACQ_TIME': 'TextEdit', });
lyr_Focos_Tarija_30_07_2021_5.set('fieldImages', {'fid': '', 'LATITUDE': '', 'LONGITUDE': '', 'ACQ_DATE': '', 'ACQ_TIME': '', });
lyr_Focos_Tarija_31_07_2021_6.set('fieldImages', {'fid': '', 'LATITUDE': '', 'LONGITUDE': '', 'ACQ_DATE': '', 'ACQ_TIME': '', });
lyr_Focos_Tarija_01_08_2021_7.set('fieldImages', {'fid': '', 'LATITUDE': '', 'LONGITUDE': '', 'ACQ_DATE': '', 'ACQ_TIME': '', });
lyr_Focos_Tarija_02_08_2021_8.set('fieldImages', {'fid': '', 'LATITUDE': '', 'LONGITUDE': '', 'ACQ_DATE': '', 'ACQ_TIME': '', });
lyr_Santa_Cruz_9.set('fieldImages', {'id': 'TextEdit', });
lyr_Focos_SantaCruz_28_07_2021_10.set('fieldImages', {'fid': '', 'LATITUDE': '', 'LONGITUDE': '', 'ACQ_DATE': '', 'ACQ_TIME': '', });
lyr_Focos_SantaCruz_29_07_2021_11.set('fieldImages', {'fid': '', 'LATITUDE': '', 'LONGITUDE': '', 'ACQ_DATE': '', 'ACQ_TIME': '', });
lyr_Focos_SantaCruz_30_07_2021_12.set('fieldImages', {'fid': '', 'LATITUDE': '', 'LONGITUDE': '', 'ACQ_DATE': '', 'ACQ_TIME': '', });
lyr_Focos_SantaCruz_31_07_2021_13.set('fieldImages', {'fid': '', 'LATITUDE': '', 'LONGITUDE': '', 'ACQ_DATE': '', 'ACQ_TIME': '', });
lyr_Focos_SantaCruz_01_08_2021_14.set('fieldImages', {'fid': '', 'LATITUDE': '', 'LONGITUDE': '', 'ACQ_DATE': '', 'ACQ_TIME': '', });
lyr_Focos_SantaCruz_02_08_2021_15.set('fieldImages', {'fid': '', 'LATITUDE': '', 'LONGITUDE': '', 'ACQ_DATE': '', 'ACQ_TIME': '', });
lyr_Beni_16.set('fieldImages', {'id': 'TextEdit', });
lyr_Focos_Beni_28_07_2021_17.set('fieldImages', {'fid': '', 'LATITUDE': '', 'LONGITUDE': '', 'ACQ_DATE': '', 'ACQ_TIME': '', });
lyr_Focos_Beni_29_07_2021_18.set('fieldImages', {'fid': '', 'LATITUDE': '', 'LONGITUDE': '', 'ACQ_DATE': '', 'ACQ_TIME': '', });
lyr_Focos_Beni_30_07_2021_19.set('fieldImages', {'fid': '', 'LATITUDE': '', 'LONGITUDE': '', 'ACQ_DATE': '', 'ACQ_TIME': '', });
lyr_Focos_Beni_31_07_2021_20.set('fieldImages', {'fid': '', 'LATITUDE': '', 'LONGITUDE': '', 'ACQ_DATE': '', 'ACQ_TIME': '', });
lyr_Focos_Beni_01_08_2021_21.set('fieldImages', {'fid': '', 'LATITUDE': '', 'LONGITUDE': '', 'ACQ_DATE': '', 'ACQ_TIME': '', });
lyr_Focos_Beni_02_08_2021_22.set('fieldImages', {'fid': '', 'LATITUDE': '', 'LONGITUDE': '', 'ACQ_DATE': '', 'ACQ_TIME': '', });
lyr_BOL_DEP_1.set('fieldLabels', {'NOM_DEP': 'inline label', 'superficie': 'no label', 'area': 'no label', });
lyr_Tarija_2.set('fieldLabels', {'id': 'no label', });
lyr_Focos_Tarija_28_07_2021_3.set('fieldLabels', {'fid': 'no label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'ACQ_DATE': 'inline label', 'ACQ_TIME': 'inline label', });
lyr_Focos_Tarija_29_07_2021_4.set('fieldLabels', {'fid': 'no label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'ACQ_DATE': 'inline label', 'ACQ_TIME': 'inline label', });
lyr_Focos_Tarija_30_07_2021_5.set('fieldLabels', {'fid': 'no label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'ACQ_DATE': 'inline label', 'ACQ_TIME': 'inline label', });
lyr_Focos_Tarija_31_07_2021_6.set('fieldLabels', {'fid': 'no label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'ACQ_DATE': 'inline label', 'ACQ_TIME': 'inline label', });
lyr_Focos_Tarija_01_08_2021_7.set('fieldLabels', {'fid': 'no label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'ACQ_DATE': 'inline label', 'ACQ_TIME': 'inline label', });
lyr_Focos_Tarija_02_08_2021_8.set('fieldLabels', {'fid': 'no label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'ACQ_DATE': 'inline label', 'ACQ_TIME': 'inline label', });
lyr_Santa_Cruz_9.set('fieldLabels', {'id': 'no label', });
lyr_Focos_SantaCruz_28_07_2021_10.set('fieldLabels', {'fid': 'no label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'ACQ_DATE': 'inline label', 'ACQ_TIME': 'inline label', });
lyr_Focos_SantaCruz_29_07_2021_11.set('fieldLabels', {'fid': 'no label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'ACQ_DATE': 'inline label', 'ACQ_TIME': 'inline label', });
lyr_Focos_SantaCruz_30_07_2021_12.set('fieldLabels', {'fid': 'no label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'ACQ_DATE': 'inline label', 'ACQ_TIME': 'inline label', });
lyr_Focos_SantaCruz_31_07_2021_13.set('fieldLabels', {'fid': 'no label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'ACQ_DATE': 'inline label', 'ACQ_TIME': 'inline label', });
lyr_Focos_SantaCruz_01_08_2021_14.set('fieldLabels', {'fid': 'no label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'ACQ_DATE': 'inline label', 'ACQ_TIME': 'inline label', });
lyr_Focos_SantaCruz_02_08_2021_15.set('fieldLabels', {'fid': 'no label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'ACQ_DATE': 'inline label', 'ACQ_TIME': 'inline label', });
lyr_Beni_16.set('fieldLabels', {'id': 'no label', });
lyr_Focos_Beni_28_07_2021_17.set('fieldLabels', {'fid': 'no label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'ACQ_DATE': 'inline label', 'ACQ_TIME': 'inline label', });
lyr_Focos_Beni_29_07_2021_18.set('fieldLabels', {'fid': 'no label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'ACQ_DATE': 'inline label', 'ACQ_TIME': 'inline label', });
lyr_Focos_Beni_30_07_2021_19.set('fieldLabels', {'fid': 'no label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'ACQ_DATE': 'inline label', 'ACQ_TIME': 'inline label', });
lyr_Focos_Beni_31_07_2021_20.set('fieldLabels', {'fid': 'no label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'ACQ_DATE': 'inline label', 'ACQ_TIME': 'inline label', });
lyr_Focos_Beni_01_08_2021_21.set('fieldLabels', {'fid': 'no label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'ACQ_DATE': 'inline label', 'ACQ_TIME': 'inline label', });
lyr_Focos_Beni_02_08_2021_22.set('fieldLabels', {'fid': 'no label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'ACQ_DATE': 'inline label', 'ACQ_TIME': 'inline label', });
lyr_Focos_Beni_02_08_2021_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});