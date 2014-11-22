(function () {
    'use strict';

    var currentHost = window.location.host,
        magazineluiza = 'http://www.magazineluiza.com.br',
        names = [
            'americanas',
            'casasbahia',
            'extra',
            'fastshop',
            'pontofrio',
            'ricardoeletro',
            'saraiva',
            'shoptime',
            'submarino',
            'walmart',
            'polishop'
        ];

    names.forEach(function (invalid) {
        if (currentHost.search(invalid) !== -1) {
            window.location.href = magazineluiza;
        }
    });
}());
