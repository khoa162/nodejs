const mongodb = (mongoose) => {

	const options = {
		/*db: { native_parser: true },
		server: { poolSize: 5 },
		replset: { rs_name: 'myReplicaSetName' },*/
		//useMongoClient: true,
	};

	return mongoose.connect(
		//'mongodb://beinschool-dev-180104:Oilers2sChool$18#@ds237397-a0.mlab.com:31337,ds237397-a1.mlab.com:37397/beinschool_com-dev?replicaSet=rs-ds237397',
		//'mongodb://127.0.0.1/demo',
		'mongodb://khoa:khoa1621992@ds137601.mlab.com:37601/team26',
		options, 
		function (error, connection) {		// eslint-disable-line no-unused-vars
			if (error) throw error;
		}
	);

};


module.exports.mongodb = mongodb