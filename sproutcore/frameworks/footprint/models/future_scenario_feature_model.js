/*

 * UrbanFootprint-California (v1.0), Land Use Scenario Development and Modeling System.
 * 
 * Copyright (C) 2012 Calthorpe Associates
 * 
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, version 3 of the License.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 * Contact: Joe DiStefano (joed@calthorpe.com), Calthorpe Associates. Firm contact: 2095 Rose Street Suite 201, Berkeley CA 94709. Phone: (510) 548-6800. Web: www.calthorpe.com
 */
sc_require('models/feature_model');

Footprint.FutureScenarioFeature = Footprint.Feature.extend({

    built_form: SC.Record.toOne("Footprint.BuiltForm", {
        isMaster: YES
    }),
    density_pct: SC.Record.attr(Number),
    dev_pct: SC.Record.attr(Number),
    acres_parcel: SC.Record.attr(Number),
    acres_parcel_res: SC.Record.attr(Number),
    acres_parcel_res_detsf: SC.Record.attr(Number),
    acres_parcel_res_detsf_sl: SC.Record.attr(Number),
    acres_parcel_res_detsf_ll: SC.Record.attr(Number),
    acres_parcel_res_attsf: SC.Record.attr(Number),
    acres_parcel_res_mf: SC.Record.attr(Number),
    acres_parcel_emp: SC.Record.attr(Number),
    acres_parcel_emp_off: SC.Record.attr(Number),
    acres_parcel_emp_ret: SC.Record.attr(Number),
    acres_parcel_emp_ind: SC.Record.attr(Number),
    acres_parcel_emp_ag: SC.Record.attr(Number),
    acres_parcel_emp_mixed: SC.Record.attr(Number),
    acres_parcel_mixed: SC.Record.attr(Number),
    acres_parcel_mixed_w_off: SC.Record.attr(Number),
    acres_parcel_mixed_no_off: SC.Record.attr(Number),
    acres_parcel_no_use: SC.Record.attr(Number),

    hh: SC.Record.attr(Number),
    du: SC.Record.attr(Number),
    du_detsf: SC.Record.attr(Number),
    du_detsf_sl: SC.Record.attr(Number),
    du_detsf_ll: SC.Record.attr(Number),
    du_attsf: SC.Record.attr(Number),
    du_mf: SC.Record.attr(Number),


    emp: SC.Record.attr(Number),
    emp_ret: SC.Record.attr(Number),
    emp_retail_services: SC.Record.attr(Number),
    emp_restaurant: SC.Record.attr(Number),
    emp_accommodation: SC.Record.attr(Number),
    emp_arts_entertainment: SC.Record.attr(Number),
    emp_other_services: SC.Record.attr(Number),
    emp_off: SC.Record.attr(Number),
    emp_office_services: SC.Record.attr(Number),
    emp_public_admin: SC.Record.attr(Number),
    emp_education: SC.Record.attr(Number),
    emp_medical_services: SC.Record.attr(Number),
    emp_ind: SC.Record.attr(Number),
    emp_manufacturing: SC.Record.attr(Number),
    emp_wholesale: SC.Record.attr(Number),
    emp_transport_warehousing: SC.Record.attr(Number),
    emp_construction_utilities: SC.Record.attr(Number),
    emp_ag: SC.Record.attr(Number),
    emp_agriculture: SC.Record.attr(Number),
    emp_extraction: SC.Record.attr(Number),
    emp_military: SC.Record.attr(Number),

    bldg_sqft_detsf_sl: SC.Record.attr(Number),
    bldg_sqft_detsf_ll: SC.Record.attr(Number),
    bldg_sqft_attsf: SC.Record.attr(Number),
    bldg_sqft_mf: SC.Record.attr(Number),

    bldg_sqft_retail_services: SC.Record.attr(Number),
    bldg_sqft_restaurant: SC.Record.attr(Number),
    bldg_sqft_accommodation: SC.Record.attr(Number),
    bldg_sqft_arts_entertainment: SC.Record.attr(Number),
    bldg_sqft_other_services: SC.Record.attr(Number),
    bldg_sqft_office_services: SC.Record.attr(Number),
    bldg_sqft_public_admin: SC.Record.attr(Number),
    bldg_sqft_education: SC.Record.attr(Number),
    bldg_sqft_medical_services: SC.Record.attr(Number),
    bldg_sqft_wholesale: SC.Record.attr(Number),
    bldg_sqft_transport_warehousing: SC.Record.attr(Number),
    residential_irrigated_sqft: SC.Record.attr(Number),
    commercial_irrigated_sqft: SC.Record.attr(Number)
});


Footprint.FutureScenarioFeature.mixin({
    priorityProperties: function () {
        return ['built_form', 'density_pct', 'dev_pct', 'pop', 'du', 'emp'];
    },
    excludeProperties: function () {
        return ['config_entity', 'wkb_geometry', 'geometry']
    }
});



Footprint.AnalyticResult = Footprint.Record.extend({
    scenario: SC.Record.toOne('Footprint.Scenario', {isMaster: NO}),
    population: SC.Record.attr(Number),
    dwelling_units: SC.Record.attr(Number),
    employment: SC.Record.attr(Number),
    control_total: SC.Record.toMany('Footprint.ControlTotal', {isMaster: NO, nested: YES}),
    dwelling_unit_data: SC.Record.toMany('Footprint.DwellingUnitDatum', {isMaster: YES, nested: YES})
});

Footprint.AnalysisModule = Footprint.Record.extend({
    config_entity: SC.Record.toOne('Footprint.ConfigEntity', {isMaster: YES}),
    celery_task: SC.Record.attr(Object),
    previous_celery_task: SC.Record.attr(Object),
    start: SC.Record.attr(Boolean)
});

Footprint.Core = Footprint.AnalysisModule.extend({

});