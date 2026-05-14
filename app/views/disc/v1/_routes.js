const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const versionPath = '/disc/v1'


router.all(versionPath, function(req, res, next){
    res.locals.versionPath = versionPath
    console.log(versionPath)
    next()
})
router.all(versionPath + '*', function(req, res, next){
    res.locals.versionPath = versionPath
    next()
})


//Do not delete this
module.exports = router

router.post(versionPath + '/customer-management/jobs/workplace-contact-answer', function(request, response) {

	var match = request.session.data['correspondenceMatch']
	if (match == "Yes"){
		response.redirect(versionPath + "/customer-management/jobs/create-job-check-details")
	} else {
		response.redirect(versionPath + "/customer-management/jobs/workplace-contact-details")
	}
})