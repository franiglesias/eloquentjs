var JOURNAL = require('./journal-data.js');

function arrayEquals(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr2.every(function(element, index) {
        return element = arr2[index];
    });
}

function it(message, test) {console.log((test ? '\x1b[32m[√]' :'\x1b[31m[x]') + ' ' + message);}

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


function gatherCorrelations(journal) {
    var map = {};
    journal.forEach(function(entry) {
        entry.events.forEach(function (event) {
            if(!(event in map)) {
                map[event] = phi(tableFor(event, journal));
            }
        });
    });
    return map;
}

function filterCorrelations(phis, threshold) {
    threshold = typeof threshold !== 'undefined' ? threshold : 0;
    for(event in phis) {
        var phi = phis[event];
        if (phi > threshold || phi < -threshold) {
            console.log (event + ': ' + phi);
        }
    }
}

it('Computes phi correlation', phi([76, 9, 4, 1]).round(4) === 0.0686);
it('Can know if entry has an event', hasEvent('pizza', {events: ['touched tree', 'pizza']}));
it('Generates table for an event', arrayEquals(tableFor('pizza', JOURNAL),  [ 76, 9, 4, 1 ]));

console.log(filterCorrelations(gatherCorrelations(JOURNAL), .3))