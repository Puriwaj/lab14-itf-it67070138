function saveCSV() {
    // Assuming 'contacts' array is accessible in this scope
    if (contacts.length === 0) {
        alert("No contacts to export!");  // Ensure there's data to export
        return;
    }
    
    const csvContent = contacts.map(contact => contact.join(",")).join("\n"); // Convert array to CSV string
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "contacts.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
