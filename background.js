(function () {
    'use strict';

    var currentHost = window.location.host,
        magazineluiza = 'http://www.magazineluiza.com.br',
        names = [
            'abracadabra',
            'agomes',
            'americanas',
            'angeloni',
            'babyou',
            'bebestore',
            'buscape',
            'casasbahia',
            'centauro',
            'duploimpacto',
            'extra',
            'fastshop',
            'fnac',
            'girafa',
            'kabum',
            'kangoolu',
            'laranja',
            'mobly',
            'netshoes',
            'pandabrinquedos',
            'polishop',
            'pontofrio',
            'ricardoeletro',
            'rihappy',
            'saraiva',
            'shoptime',
            'submarino',
            'tricae',
            'walmart',
        ];

    names.forEach(function (invalid) {
        if (currentHost.search(invalid) !== -1) {
            window.location.href = magazineluiza;
        }
    });
}());
