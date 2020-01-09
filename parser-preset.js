module.exports = {
    parserOpts: {
        headerPattern: /^(DPMA-\d{2,4}): (\w*) (\w*)/,
        headerCorrespondence: ['ticket','type', 'subject']
    }
};
