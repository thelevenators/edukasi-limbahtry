document.addEventListener("DOMContentLoaded", function () {
    const csvFilePath = "./tabelnfpa.csv"; // Path file CSV

    fetch(csvFilePath)
        .then((response) => response.text())
        .then((csvData) => {
            const parsedData = Papa.parse(csvData, { header: true });
            const table = document.getElementById("dataTable");

            // Tampilkan header tabel
            const headers = parsedData.meta.fields;
            const headerRow = table.insertRow();
            headers.forEach((header) => {
                const th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });

            // Tampilkan data tabel
            parsedData.data.forEach((rowData) => {
                const row = table.insertRow();
                headers.forEach((header) => {
                    const cell = row.insertCell();
                    cell.textContent = rowData[header] || "";
                });
            });
        })
        .catch((error) => console.error("Error loading CSV data:", error));
});
