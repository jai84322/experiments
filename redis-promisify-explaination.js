// promisify me as an argument pass karaya hai redis ka set command ko
// set command ko promisify me as argument pass karenge 
// toh ye callback function ki jagah ek promise return kar dega 
// toh ye promisify ek function return kar raha hai ........ set command ke corresponding function return kar raha hai 
// .bind se hamne ek function call ko client ke sath bind kr diya hai 
// toh api hit krne pr vo is client pe (host, port, password) ek set/get command call karega 
// then we have saved that function in the constant setex_async and get_async
// so set async ke andar ek function call saved hai for the set command that is basically called on redis client object pr 

