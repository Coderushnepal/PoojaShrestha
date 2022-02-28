import * as apiService from '../services/api.js';

export function getAPIDetails(req, res, next){
	try{
		const data = apiService.getAPIDetails();
		console.log('data:', data);
		res.json(data);
	}
	catch(err) {
		next(err);
	}   
}