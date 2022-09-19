const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
chai.use(chaiHttp);

describe('api', function () {

    describe('POST /auth/login', function () {
        it('res auth login', function () {
            chai.request(server)
                .post('/auth/login')
                .type('json')
                .send({
                    email: "user@gmail.com",
                    password: "123"
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    // describe('GET /produk/get', function () {
    //     it('respond with an array of produk', function (done) {
    //         chai.request(server)
    //             .get('/produk/get')
    //             .end((err, res) => {
    //                 res.should.have.status(200);
    //                 res.body.should.be.a('object');
    //                 done();
    //             });
    //     });
    // });
});