const express = require('express');
const model = require('../model/index');
const { search } = require('../routes/schools');

exports.createSchool = (req,res)=>{
    let newSchool = {
        address,
        subjects,
        grade,
        name,
        student_id,
        Class,
    } = req.body;

    model.schools.createSchool(newSchool,(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.getAllPro = (req,res) =>{
    model.schools.getAllPro( (err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.getSpecificSchool = (req,res) =>{
    model.schools.getSpecificSchool( {},(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.getSpecific = (req,res) =>{
    model.schools.getSpecific( {},(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.getByClass9 = (req,res) =>{
    let search = {Class:{$eq: 9}};
    model.schools.getByClass9( search,(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.getFirstFiveCollection = (req,res) =>{
    let search = { "address.street": { $eq: "Malabar street" } };
    model.schools.getFirstFiveCollection( search,(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.getFiveAfterSkipFive = (req,res) =>{
    let search = { "address.street": { $eq: "Malabar street" } };
    model.schools.getFiveAfterSkipFive( search,(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.getMoreThanNinty = (req,res) =>{
    let search = { "grades.score": { $gt: 90 } };
    model.schools.getMoreThanNinty( search,(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.getBetween = (req,res) =>{
    // let search = {grades : { $elemMatch:{"score":{$gt : 80 , $lt :100}}}};
    model.schools.getBetween( {},(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.getByLatitude = (req,res) =>{
    let search = {"address.coord" : {$lt : -95.754168}}
    model.schools.getByLatitude( search,(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.getByMultipleCondition = (req,res) =>{
    model.schools.getByMultipleCondition( {},(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.getByMultipleCondition2 = (req,res) =>{
    model.schools.getByMultipleCondition2( {},(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.getByMultipleCondition4 = (req,res) =>{
    model.schools.getByMultipleCondition4( {},(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.getByFirstThreeLetter = (req,res) =>{
    model.schools.getByFirstThreeLetter( {},(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.getByLastThreeLetter = (req,res) =>{
    model.schools.getByLastThreeLetter( {},(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.getByLettersAnyWhere = (req,res) =>{
    model.schools.getByLettersAnyWhere( {},(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.getByAddress = (req,res) =>{
    model.schools.getByAddress( {},(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.getByClass = (req,res) =>{
    model.schools.getByClass( {},(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.getByClassNotBelong = (req,res) =>{
    model.schools.getByClassNotBelong( {},(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.getByScore = (req,res) =>{
    model.schools.getByScore( {},(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.arrangeInAsc = (req,res) =>{
    model.schools.arrangeInAsc( {},(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.arrangeInDsc = (req,res) =>{
    model.schools.arrangeInDsc( {},(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};

exports.exists = (req,res) =>{
    model.schools.exists( {},(err,response) => {
        if(err){
            res.status(400).json({errorMsg:err});
        }
        else{
            res.json({data:response});
        }
    });
};