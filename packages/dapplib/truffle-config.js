require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remember assume inner enter bridge tuition'; 
let testAccounts = [
"0x1ce22ea91eef19b94638404fc98c565846061e301042a39df326316bb8cebe75",
"0x2b82d213324060ad5f21cc2a8ce8e39cd982108da5cef4d929b2b41acc9a5a6f",
"0xbd6636d2d1fc19ef6db8adbfd78990449f68c809415f3ed5dd93ec6b8e7997b2",
"0xf87a39b3e39058ebef1d9a4025680f69bfc9bc20b345f95af8d7425c7fc2e024",
"0xebf918a524a44263a3a233e9aca1828cd1e209c8bd87c1951bda9d1476c6eda8",
"0xd223ff44c11199a3e7b9294f840d472bd584886f4b8e8dd3cbc7a4691ebfa7cb",
"0xb12d2b6f6e0816e9ad6da4736f26269e7360f0123ba6a3853165c5e87c12abfa",
"0x5cd2f75dcefe817cd61fc0bb6b31cbd0339d9a61e34cf6ac5b0b1428a46b3e3b",
"0x13ced95212030aeb751ca09fd9e3d13fb77549902604ab6199402c0ef9473429",
"0x0ccc9bdd44ead5017a1ba7eb87467f9b2077c19a823c561293f061b638fe58c8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
