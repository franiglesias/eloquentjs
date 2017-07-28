var JOURNAL = require('./journal-data.js');

function it(message, test) {console.log((test ? '[√]' :'[x]') + ' ' + message);}

Number.prototype.round = function(places) {
    return +(Math.round(this + "e+" + places)  + "e-" + places);
}

function addEntry(events, didItTurnIntoASquirrel) {
    journal.push({
        events: events,
        squirrel: didItTurnIntoASquirrel
    });
}

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /  Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]) );
}

function hasEvent(event, entry) {
    return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
    var table = [0, 0, 0, 0];
    for (var i = 0; i < journal.length; i++) {
        var entry = journal[i], index = 0;
        if (hasEvent(event, entry)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

it('Computes correlation', phi([76, 9, 4, 1]).round(4) === 0.0686);
it('Can know if entry has an event', hasEvent('pizza', {events: ['touched tree', 'pizza']}));

var table = tableFor('pizza', JOURNAL);

console.log(table);

it('Generates table for an event', table === [ 76, 9, 4, 1 ]);