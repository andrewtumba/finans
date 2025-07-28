// Demo data for Financial Dashboard
// This script populates the dashboard with sample data for demonstration

function loadDemoData() {
    const demoCompanies = {
        "Equinor": {
            ticker: "EQUI.OL",
            data: {
                "2023": {
                    ebitdaMargin: 45.2,
                    operatingMargin: 38.1,
                    netMargin: 25.3,
                    roe: 22.5,
                    roa: 12.8,
                    roic: 18.4,
                    deRatio: 0.85,
                    interestCoverage: 15.2,
                    equityRatio: 54.2,
                    dividendPerShare: 8.50,
                    payoutRatio: 35.2,
                    dividendYield: 4.2,
                    beta: 1.15,
                    volatility: 22.5
                },
                "2022": {
                    ebitdaMargin: 52.8,
                    operatingMargin: 44.5,
                    netMargin: 31.2,
                    roe: 28.4,
                    roa: 16.2,
                    roic: 22.8,
                    deRatio: 0.78,
                    interestCoverage: 18.5,
                    equityRatio: 56.1,
                    dividendPerShare: 7.20,
                    payoutRatio: 28.5,
                    dividendYield: 3.8,
                    beta: 1.12,
                    volatility: 28.2
                },
                "2021": {
                    ebitdaMargin: 38.5,
                    operatingMargin: 30.2,
                    netMargin: 18.8,
                    roe: 15.2,
                    roa: 8.5,
                    roic: 12.8,
                    deRatio: 0.92,
                    interestCoverage: 12.8,
                    equityRatio: 52.1,
                    dividendPerShare: 4.50,
                    payoutRatio: 42.5,
                    dividendYield: 2.8,
                    beta: 1.08,
                    volatility: 35.2
                }
            }
        },
        "DNB": {
            ticker: "DNB.OL",
            data: {
                "2023": {
                    ebitdaMargin: 0, // N/A for banks
                    operatingMargin: 0,
                    netMargin: 28.5,
                    roe: 14.2,
                    roa: 1.8,
                    roic: 0,
                    deRatio: 0, // Different for banks
                    interestCoverage: 0,
                    equityRatio: 18.5,
                    dividendPerShare: 12.50,
                    payoutRatio: 52.8,
                    dividendYield: 6.2,
                    beta: 0.95,
                    volatility: 18.5
                },
                "2022": {
                    ebitdaMargin: 0,
                    operatingMargin: 0,
                    netMargin: 32.1,
                    roe: 16.8,
                    roa: 2.1,
                    roic: 0,
                    deRatio: 0,
                    interestCoverage: 0,
                    equityRatio: 17.8,
                    dividendPerShare: 11.00,
                    payoutRatio: 48.2,
                    dividendYield: 5.8,
                    beta: 0.92,
                    volatility: 22.1
                },
                "2021": {
                    ebitdaMargin: 0,
                    operatingMargin: 0,
                    netMargin: 25.8,
                    roe: 12.5,
                    roa: 1.5,
                    roic: 0,
                    deRatio: 0,
                    interestCoverage: 0,
                    equityRatio: 16.5,
                    dividendPerShare: 8.50,
                    payoutRatio: 55.2,
                    dividendYield: 4.8,
                    beta: 0.88,
                    volatility: 25.8
                }
            }
        },
        "Telenor": {
            ticker: "TEL.OL",
            data: {
                "2023": {
                    ebitdaMargin: 35.8,
                    operatingMargin: 15.2,
                    netMargin: 8.5,
                    roe: 8.2,
                    roa: 3.5,
                    roic: 6.8,
                    deRatio: 1.85,
                    interestCoverage: 4.2,
                    equityRatio: 35.2,
                    dividendPerShare: 8.00,
                    payoutRatio: 85.2,
                    dividendYield: 7.2,
                    beta: 0.75,
                    volatility: 15.2
                },
                "2022": {
                    ebitdaMargin: 38.2,
                    operatingMargin: 18.5,
                    netMargin: 12.1,
                    roe: 11.5,
                    roa: 4.8,
                    roic: 8.2,
                    deRatio: 1.65,
                    interestCoverage: 5.8,
                    equityRatio: 37.8,
                    dividendPerShare: 8.00,
                    payoutRatio: 72.5,
                    dividendYield: 6.8,
                    beta: 0.72,
                    volatility: 18.5
                },
                "2021": {
                    ebitdaMargin: 42.1,
                    operatingMargin: 22.8,
                    netMargin: 15.2,
                    roe: 14.2,
                    roa: 6.2,
                    roic: 10.5,
                    deRatio: 1.45,
                    interestCoverage: 7.2,
                    equityRatio: 40.5,
                    dividendPerShare: 8.00,
                    payoutRatio: 62.8,
                    dividendYield: 6.2,
                    beta: 0.68,
                    volatility: 20.2
                }
            }
        },
        "Norsk Hydro": {
            ticker: "NHY.OL",
            data: {
                "2023": {
                    ebitdaMargin: 18.5,
                    operatingMargin: 8.2,
                    netMargin: 5.8,
                    roe: 12.5,
                    roa: 6.8,
                    roic: 9.2,
                    deRatio: 0.65,
                    interestCoverage: 8.5,
                    equityRatio: 58.2,
                    dividendPerShare: 2.50,
                    payoutRatio: 45.8,
                    dividendYield: 4.2,
                    beta: 1.35,
                    volatility: 28.5
                },
                "2022": {
                    ebitdaMargin: 28.5,
                    operatingMargin: 18.2,
                    netMargin: 14.5,
                    roe: 22.8,
                    roa: 12.5,
                    roic: 16.8,
                    deRatio: 0.58,
                    interestCoverage: 12.8,
                    equityRatio: 61.2,
                    dividendPerShare: 4.00,
                    payoutRatio: 38.5,
                    dividendYield: 5.8,
                    beta: 1.28,
                    volatility: 32.1
                },
                "2021": {
                    ebitdaMargin: 32.8,
                    operatingMargin: 22.5,
                    netMargin: 18.2,
                    roe: 25.2,
                    roa: 14.8,
                    roic: 19.5,
                    deRatio: 0.52,
                    interestCoverage: 15.2,
                    equityRatio: 63.5,
                    dividendPerShare: 3.50,
                    payoutRatio: 32.8,
                    dividendYield: 4.8,
                    beta: 1.22,
                    volatility: 38.5
                }
            }
        },
        "Orkla": {
            ticker: "ORK.OL",
            data: {
                "2023": {
                    ebitdaMargin: 12.8,
                    operatingMargin: 8.5,
                    netMargin: 6.2,
                    roe: 8.5,
                    roa: 4.2,
                    roic: 6.8,
                    deRatio: 1.25,
                    interestCoverage: 6.8,
                    equityRatio: 42.5,
                    dividendPerShare: 2.80,
                    payoutRatio: 68.5,
                    dividendYield: 3.8,
                    beta: 0.85,
                    volatility: 16.5
                },
                "2022": {
                    ebitdaMargin: 14.2,
                    operatingMargin: 10.2,
                    netMargin: 7.8,
                    roe: 10.5,
                    roa: 5.2,
                    roic: 8.2,
                    deRatio: 1.15,
                    interestCoverage: 8.2,
                    equityRatio: 45.2,
                    dividendPerShare: 2.70,
                    payoutRatio: 62.5,
                    dividendYield: 3.5,
                    beta: 0.82,
                    volatility: 18.2
                },
                "2021": {
                    ebitdaMargin: 13.5,
                    operatingMargin: 9.8,
                    netMargin: 7.2,
                    roe: 9.8,
                    roa: 4.8,
                    roic: 7.5,
                    deRatio: 1.08,
                    interestCoverage: 9.5,
                    equityRatio: 47.8,
                    dividendPerShare: 2.60,
                    payoutRatio: 65.2,
                    dividendYield: 3.2,
                    beta: 0.78,
                    volatility: 20.5
                }
            }
        }
    };

    // Save demo data to localStorage
    localStorage.setItem('companies', JSON.stringify(demoCompanies));
    
    // Show success message
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message success';
    messageDiv.textContent = 'Demo data loaded successfully! You can now explore all features.';
    
    const container = document.querySelector('.container');
    container.insertBefore(messageDiv, container.firstChild);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 4000);
    
    // Reload the dashboard
    if (window.dashboard) {
        window.dashboard.companies = demoCompanies;
        window.dashboard.updateDashboard();
        window.dashboard.populateCompanySelectors();
    }
}

// Add demo button to the interface
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for the main dashboard to load
    setTimeout(() => {
        const headerControls = document.querySelector('.header-controls');
        if (headerControls) {
            const demoBtn = document.createElement('button');
            demoBtn.className = 'btn btn-secondary';
            demoBtn.innerHTML = '<i class="fas fa-database"></i> Last demo data';
            demoBtn.addEventListener('click', loadDemoData);
            headerControls.appendChild(demoBtn);
        }
    }, 500);
});