const { check, validationResult } = require('express-validator');
const compatibleExtensions = require('../../common/enums/compatibleExtensions');
const { fileMaxSize } = require('../../config');

// Audio file limitations
const compatibleExtensionValues = Object.values(compatibleExtensions);

const songValidatorRules = {
  upload: [
    check('title').notEmpty().withMessage('Title cannot be empty'),
    check('artist').notEmpty().withMessage('Artist cannot be empty'),
  ],
};

const validateFile = (req) => {
  const errors = [];

  // Check existence
  if(!req.file) {
    errors.push({
      "msg": "File is mandatory",
      "param": "audio_file",
      "location": "file"
    })
    return errors;
  }

  // Check file type
  if(!compatibleExtensionValues.includes(req.file.mimetype)) {
    errors.push({
      "msg": "File type is not compatible",
      "param": "audio_file",
      "location": "file"
    })  
  }

  // Check file size
  if(req.file.size > fileMaxSize) {
    errors.push({
      "msg": "File is too big",
      "param": "audio_file",
      "location": "file"
    })  
  }

  return errors;
}

const validate = (req, res, next) => {
  // req.body validation
  const bodyResult = validationResult(req);
  // req.file validation
  const fileErrors = validateFile(req);

  // Total request validation errors occured
  const allErrors = bodyResult.errors.concat(fileErrors);

  if(allErrors.length) {
    return res
      .status(400)
      .send({ 
        errors: allErrors
      });
  }

  return next();
}

module.exports = { 
  songValidatorRules,
  validate
};