const express = require('express');
const router = express.Router();
const path = require('path');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const adminController = require('../controllers/admin');
const uploadController = require('../controllers/upload');

router.get('/all-users', [auth,admin],adminController.getUsers);
router.delete('//delete-user/:id',[auth,admin] , adminController.deleteUser);
router.put('/deactivate-user/:id', [auth,admin], adminController.deactivateUser);
router.put('/activate-user/:id', [auth,admin],adminController.activateUser);
router.post('/push-advert', [auth,admin],adminController.pushAdvert);
router.get('/get-advert', [auth,admin],adminController.getAdvert);
router.post("/advert-images-upload", uploadController.multipleUpload);
router.post('/create-unhealthy-word',adminController.createUnhealthyWord);
router.post('/add-unhealthy-word',adminController.createUnhealthyWord);

//TO DO: admin post related tasks
router.post('/post-enable', [auth,admin],adminController.getAdvert);
router.post('/post-disable', [auth,admin],adminController.getAdvert);
router.get('/unhealthy-post', [auth,admin],adminController.getAdvert);

module.exports = router;


