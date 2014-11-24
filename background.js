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
            'decathlon',
            'duploimpacto',
            'efacil',
            'eletroshopping',
            'extra',
            'fastshop',
            'fnac',
            'girafa',
            'jeanbittar',
            'kabum',
            'kangoolu',
            'laranja',
            'mercadolivre',
            'mobly',
            'netshoes',
            'oppa',
            'pandabrinquedos',
            'polishop',
            'pontofrio',
            'ricardoeletro',
            'rihappy',
            'saraiva',
            'shoptime',
            'submarino',
            'tricae',
            'walmart'
        ];

    names.forEach(function (invalid) {
        if (currentHost.search(invalid) !== -1) {
            window.location.href = magazineluiza;
        }
    });
}());
