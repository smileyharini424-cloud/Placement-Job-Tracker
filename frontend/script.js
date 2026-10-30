const API_URL = "http://localhost:8080/api/applications";

const jobForm = document.getElementById("jobForm");
const jobList = document.getElementById("jobList");
const emptyMessage = document.getElementById("emptyMessage");

let applications = [];

// Load applications from the backend
async function loadApplications() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Unable to load applications");
        }

        applications = await response.json();
        renderApplications();

    } catch (error) {
        console.error("Error loading applications:", error);
        alert("Could not connect to the backend. Make sure Spring Boot is running.");
    }
}

// Display applications on the dashboard
function renderApplications() {
    jobList.innerHTML = "";

    applications.forEach(job => {
        const row = document.createElement("tr");

        const values = [
            job.companyName,
            job.jobRole,
            job.applicationDate || "",
            job.status
        ];

        values.forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", () => {
            deleteApplication(job.id);
        });

        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);
        jobList.appendChild(row);
    });

    document.getElementById("totalCount").textContent =
        applications.length;

    document.getElementById("interviewCount").textContent =
        applications.filter(job => job.status === "Interview").length;

    document.getElementById("offerCount").textContent =
        applications.filter(job => job.status === "Offer").length;

    emptyMessage.style.display =
        applications.length === 0 ? "block" : "none";
}

// Add a new application to MySQL through the API
jobForm.addEventListener("submit", async event => {
    event.preventDefault();

    const newApplication = {
        companyName: document.getElementById("company").value.trim(),
        jobRole: document.getElementById("role").value.trim(),
        applicationDate: document.getElementById("date").value,
        status: document.getElementById("status").value
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newApplication)
        });

        if (!response.ok) {
            throw new Error("Unable to save application");
        }

        const savedApplication = await response.json();

        applications.push(savedApplication);
        renderApplications();

        jobForm.reset();

        alert("Application saved successfully!");

    } catch (error) {
        console.error("Error saving application:", error);
        alert("Could not save application. Please check the backend.");
    }
});

// Delete an application from MySQL
async function deleteApplication(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Unable to delete application");
        }

        applications = applications.filter(job => job.id !== id);
        renderApplications();

    } catch (error) {
        console.error("Error deleting application:", error);
        alert("Could not delete application.");
    }
}

// Load saved applications when the page opens
loadApplications();