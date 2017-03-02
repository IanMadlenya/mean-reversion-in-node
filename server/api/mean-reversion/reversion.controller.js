'use strict';

const _ = require('lodash');
const Boom = require('boom');

const BaseController = require('../../api/templates/base.controller');
const ReversionService = require('./reversion.service');

const errors = require('../../components/errors/baseErrors');

class QuoteController extends BaseController {

    constructor() {
        super();
    }

    runTest(request, response) {
        if (_.isEmpty(request.body)) {
            return response.status(Boom.badRequest().output.statusCode).send(Boom.badRequest().output);
        }
        else {
            ReversionService.getData(request.body.ticker, request.body.end)
                .then((data) => BaseController.requestGetSuccessHandler(response, data))
                .catch((err) => BaseController.requestErrorHandler(response, err));
        }
    }
}

module.exports = new QuoteController();