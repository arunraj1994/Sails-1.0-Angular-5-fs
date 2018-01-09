/**
 * CategoriesController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	    create: function (req, res) {
        let categoryId = req.param('category_id'),
        Name = req.param('name'),
        appIcon = req.param('app_icon');
        if(!categoryId){
        return res.badRequest({err:'Invalid category_id'});
        }
        if(!Name){
        return res.badRequest({err:'Invlaid name'});
        }
        Categories.create({
        category_id : categoryId,
        name : Name,
        app_icon:appIcon
        })
        .then(_categories => {
        if(!_categories) return res.serverError({err:'Unable to create categories'});
        return res.ok(_categories);
        })
        .catch(err => res.serverError(err.message));
        }
};

