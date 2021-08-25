const express = require('express');
const schoolRouter = express.Router();
const schoolController = require('../controller/school.controller');

schoolRouter.post('/createSchool',schoolController.createSchool);
schoolRouter.get('/getAll',schoolController.getAllPro);
schoolRouter.get('/getSpecific',schoolController.getSpecificSchool);
schoolRouter.get('/getIdName',schoolController.getSpecific);
schoolRouter.get('/getByClass',schoolController.getByClass9);
schoolRouter.get('/getFirstFive',schoolController.getFirstFiveCollection);
schoolRouter.get('/getFiveSkipFive',schoolController.getFiveAfterSkipFive);
schoolRouter.get('/getMoreThanNinty',schoolController.getMoreThanNinty);
schoolRouter.get('/getBetween',schoolController.getBetween);
schoolRouter.get('/getByLatitude',schoolController.getByLatitude);
schoolRouter.get('/multiCondition',schoolController.getByMultipleCondition);
schoolRouter.get('/multiCondition2',schoolController.getByMultipleCondition2);
schoolRouter.get('/multiCondition4',schoolController.getByMultipleCondition4);
schoolRouter.get('/FirstThreeLetter',schoolController.getByFirstThreeLetter);
schoolRouter.get('/lastThreeLetter',schoolController.getByLastThreeLetter);
schoolRouter.get('/LettersAnyWhere',schoolController.getByLettersAnyWhere);
schoolRouter.get('/getByAddress',schoolController.getByAddress);
schoolRouter.get('/getByClasses',schoolController.getByClass);
schoolRouter.get('/getByClassesNotBelongs',schoolController.getByClassNotBelong);
schoolRouter.get('/getByScore',schoolController.getByScore);
schoolRouter.get('/arrangeInAsc',schoolController.arrangeInAsc);
schoolRouter.get('/arrangeInDsc',schoolController.arrangeInDsc);
schoolRouter.get('/isExists',schoolController.exists);

module.exports = schoolRouter;

