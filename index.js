'use strict';

var safeRedirect = function(options){

    var buildUrl = function(parts) {
        var _buildParams = function(query) {
            if (!query || !Object.keys(query).length) {
                return '';
            }

            return '?' + Object.keys(query).map(function(key) {
                return [key, query[key]].map(encodeURIComponent).join("=");
            }).join("&");
        };

        parts.scheme = parts.scheme || 'http';
        return ((parts.host && parts.scheme) ? parts.scheme + '://' + parts.host : '') + parts.path + _buildParams(parts.query) + ((parts.hash) ? '#' + parts.hash : '');
    };

    return function(req, res, next){

        res.safeRedirect = function(status, url){
            url = !url ? status : url;

            res.redirect(buildUrl({
                path: url,
                query: req.query
            }));

            return;
        };

        next();
    };
};

module.exports = safeRedirect;