require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remind concert grace infant fringe twin'; 
let testAccounts = [
"0x30236d1d42102a3ad7e71017427aab90697c5326f9c4737fff629716587b89fb",
"0xd1ad830e8a43b95a81d1602cf457e05635f46876af10e113f0da8704bc55d8e6",
"0x910c2cbf525dd2838fede8d661470ee29e46e73fcae6b29908b9533692237250",
"0xe4e702356b975c8de5abba88fcd533da1fbf03493eb34bb1eaab4b1e90f557e0",
"0xcfd5be0def9064567cd3d4310c36a38a0b8a819284fdf5234bcc0edbf7496c1d",
"0x59c901ea4664db0f79e74f3414d96d6e3fddd417ae676b42936c43ebe9d57360",
"0xad40334070bc11249d914190c94b50d48200b02545bbfa2e303ea03e272fb62c",
"0xd62c4c8f6802446e1fbe501ec358de0364a1e53467229947eb2d47ded11500a3",
"0xdfb2721293a75564f9cad3ed3825a3407528cd0d80319d56dffa0fe7a3b008b3",
"0xf6705d1001b51d6216a4fb8e4539f74763b8d178aa03e249383b802f014474d6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


