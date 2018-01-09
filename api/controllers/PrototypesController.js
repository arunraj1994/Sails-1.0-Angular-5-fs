/**
 * PrototypesController
 *
 * @description :: Server-side logic for managing prototypes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req, res) {
let prototypeId = req.param('prototype_id');

name = req.param('name');
category = req.param('category');
tags = req.param('tags');
// uploadDate = req.param('uploadDate');
// rating = req.param('rating');
// ratingUrl = req.param('ratingUrl');
// accronym = req.param('accronym');
// categoryName  = req.param('category_name');
// categoryUrl = req.param('categoryUrl');
// appIcon = req.param('app_icon');
// popularity = req.param('popularity');
// title = req.param('title');
// Domain = req.param('domain');
// technology = req.param('technology');
// shortDescription = req.param('shortDescription');
// description = req.param('description');
// thumbnail_url = req.param('thumbnail_url');
// prototype_type = req.param('prototype_type'); 
categoryId = req.param('category_id');
if (!prototypeId) return res.badRequest({ err: 'Invalid prototype id field' });

if (!name) return res.badRequest({ err: 'Invalid name field' });
if (!category) return res.badRequest({ err: 'Invalid category field' });
if (!tags) return res.badRequest({ err: 'Invalid tags field' });
// if (!uploadDate) return res.badRequest({ err: 'Invalid uploadDate field' });
// if (!rating) return res.badRequest({ err: 'Invalid rating field' });
// if (!ratingUrl) return res.badRequest({ err: 'Invalid ratingUrl field' });
// if (!accronym) return res.badRequest({ err: 'Invalid accronym field' });
// if (!categoryName) return res.badRequest({ err: 'Invalid categoryName field' });
// if (!categoryUrl) return res.badRequest({ err: 'Invalid categoryUrl field' });
// if (!appIcon) return res.badRequest({ err: 'Invalid appIcon field' });
// if (!popularity) return res.badRequest({ err: 'Invalid popularity field' });
// if (!title) return res.badRequest({ err: 'Invalid title field' });
// if (!Domain) return res.badRequest({ err: 'Invalid Domain field' });
// if (!technology) return res.badRequest({ err: 'Invalid technology field' });
// if (!shortDescription) return res.badRequest({ err: 'Invalid shortDescription field' });
// if (!description) return res.badRequest({ err: 'Invalid description field' });
// if (!thumbnail_url) return res.badRequest({ err: 'Invalid thumbnail_url field' });
// if (!prototype_type) return res.badRequest({ err: 'Invalid prototype_type field' });
if (!categoryId) return res.badRequest({ err: 'Invalid categoryId field' });
Prototypes.create({
prototype_id : prototypeId,
name : name,
category : category,
tags : tags,
// uploadDate,rating,ratingUrl,accronym,categoryName,categoryUrl,appIcon,popularity,title,Domain,technology,
// shortDescription,description,thumbnail_url,prototype_type,
categories: categoryId
})
.then(_prototypes => {
if (!_prototypes) throw new Error('Unable to create new prototype');
return res.ok(_prototypes);
})
.catch(err => res.serverError(err.message));
},

};

