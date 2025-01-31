// json2html.js
export default function json2html(data) {
    // Get unique keys to use as table headers
    const headers = [...new Set(data.flatMap(Object.keys))];

    // Start building the HTML table
    let html = `<table data-user="sanidhyapatidar14@gmail.com">
        <thead>
            <tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr>
        </thead>
        <tbody>
            ${data.map(row => 
                `<tr>${headers.map(header => `<td>${row[header] !== undefined ? row[header] : ''}</td>`).join('')}</tr>`
            ).join('')}
        </tbody>
    </table>`;

    return html;
}
