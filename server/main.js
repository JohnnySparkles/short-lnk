import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import { Links } from './../imports/api/links';


Meteor.startup(() => {
  WebApp.connectHandlers.use((req, res, next) => {
    console.log('This is my other custom middleware');
    const _id = req.url.slice(1);
    const link = Links.findOne({ _id });

    if (link) {
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
    } else {
      next();
    }

  });
});
