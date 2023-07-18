/* eslint-disable import/extensions */
import EfiPay from 'gn-api-sdk-typescript';
import options from '../../credentials';

const params = {
	idEnvio: '01',
};

const body = {
	valor: '12.34',
	pagador: {
		chave: 'SUACHAVEPIX',
	},
	favorecido: {
		chave: 'ChavePixDeDestino',
	},
};

const efipay = new EfiPay(options);

efipay
	.pixSend(params, body)
	.then((resposta: Promise<any>) => {
		console.log(resposta);
	})
	.catch((error: Promise<any>) => {
		console.log(error);
	});
