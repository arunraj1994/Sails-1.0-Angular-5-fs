/**
 * Prototypes.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    prototype_id : { 
      type: 'string', required:true 
    },
    name : { 
      type: 'string',required:true 
    },
    category :{
      type:'string',required:true
    },
    tags :{
      type:'string',required:true
    },
    // uploadDate :{
    //   type:'string',required:true
    // },
    // rating :{
    //   type:'string',required:true
    // },
    // ratingUrl :{
    //   type:'string',required:true
    // },
    // accronym :{
    //   type:'string',required:true
    // },
    // category_name :{
    //   type:'string',required:true
    // },
    // categoryUrl :{
    //   type:'string',required:true
    // },
    // app_icon :{
    //   type:'string',required:true
    // },
    // popularity :{
    //   type:'string',required:true
    // },
    // title :{
    //   type:'string',required:true
    // },
    // domain :{
    //   type:'string',required:true
    // },
    // technology :{
    //   type:'string',required:true
    // },
    // shortDescription :{
    //   type:'string',required:true
    // },
    // description :{
    //   type:'longtext',required:true
    // },
    // thumbnail_url :{
    //   type:'string',required:true
    // },
    // prototype_type :{
    //   type:'string',required:true
    // },
    //Associations
   
    categories : { 
    model :'categories',
    columnName:'category_id',
    required:true
    },

  }
};

