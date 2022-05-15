// TAHAPAN PEMROSESAN MACHINE LEARNING
// 1. Membuat Dataset
// sudah adaa

// 2. Load Dataset
const fileData = '/data/xy.csv';
let x = new Array();
let y = new Array();

Papa.parse(fileData, {
    download : true, 
    step : function(row, parser){
        if (row.data[0] != "Header"){
            x.push(row.data[1]);
            x.push(row.data[2]);
        }
    },
    complete : proses
})

function proses(){
    
    // - split data training dan testing
    const persen = 70/100;
    let x_train = new Array();
    let y_train = new Array()
    let x_test = new Array()
    let y_test = new Array()

            // memotong 70% data x dan y
    x_train = x.splice(0, (x.length * persen));
    y_train = y.splice(0, (y.length * persen));

    // karna data sudah dipotong, data yang tersisa hanya 30%
    x_test = x;
    y_test = y;

// 3. Konvert Data menjadi Tensor
    const traintensors = {
        x : tf.tensor2d(x_train, [x.length, 1]),
        y : tf.tensor2d(y_train, [y.length, 1])
    }
    const testtensors = {
        x : tf.tensor2d(x_test, [x.length, 1]),
        y : tf.tensor2d(y_test, [y.length, 1])
    }

// 4. Membuat Models
    const model = tf.sequential();
    model.add(tf.layers.dense({inputShape : [1], units : 1}));
    model.compile({optimizer : 'sgd', loss : 'meanAbsoluteError'});

// 5. Melatih Models

    async function train(){
        const hasil = await model.fit(
                trainTensors.x,
                trainTensors.y, 
                {
                    epochs: 1
                }
        );
        //-- Evaluasi model
        model.evaluate(testTensor.x, testTensor.y).print();
    }
}

train();




