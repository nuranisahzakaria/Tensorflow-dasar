const BASE_URL = "https://storage.googleapis.com/tfjs-examples/multivariate-linear-regression/data/";
const TRAIN_DATA = "train-data.csv";
const TRAIN_TARGER = "train-target.csv";
const TEST_DATA = "test-data.csv";
const TEST_TARGER = "test-target.csv";

const url = '${BASE_URL}${TRAIN_DATA}';

// papaparse.com -> library untuk membantu mengambil data csv dari public url, bisa juga mengkonversi csv menjadi json
Papa.parse(url, {
	download: true,
	complete: function(results) {
        console.log(url);
		console.log(results);
	}
});