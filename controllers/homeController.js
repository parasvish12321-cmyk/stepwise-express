exports.getHome = (req, res) => {
    res.render('index', { title: 'StepWiseLive | Your IIM Journey. One Step at a Time.' });
};
