function rowHeights(rows) {
    return rows.map(function (row) {
        return row.reduce(function (max, cell) {
            return Math.max(max, cell.minHeigh())
        })
    })
}

function colWidths(rows) {
    return rows[0].map(function (_, i) {
        return rows.reduce(function(max, row) {
            return Math.max(max, row[i].minWidth())
        }, 0);
    });
}
