// Financial Dashboard Application
class FinancialDashboard {
    constructor() {
        this.companies = JSON.parse(localStorage.getItem('companies')) || {};
        this.charts = {};
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupTabs();
        this.updateDashboard();
        this.populateCompanySelectors();
    }

    setupEventListeners() {
        // Tab navigation
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Modal controls
        document.getElementById('addCompanyBtn').addEventListener('click', () => {
            document.getElementById('companyModal').style.display = 'block';
        });

        document.querySelector('.close').addEventListener('click', () => {
            document.getElementById('companyModal').style.display = 'none';
        });

        // Company form submission
        document.getElementById('companyForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addCompany();
        });

        // Data input form
        document.getElementById('saveDataBtn').addEventListener('click', () => {
            this.saveData();
        });

        // Export functionality
        document.getElementById('exportBtn').addEventListener('click', () => {
            this.exportToExcel();
        });

        // Company selectors for charts
        document.getElementById('marginCompanySelect').addEventListener('change', (e) => {
            this.updateMarginCharts(e.target.value);
        });

        document.getElementById('profitabilityCompanySelect').addEventListener('change', (e) => {
            this.updateProfitabilityCharts(e.target.value);
        });

        document.getElementById('debtCompanySelect').addEventListener('change', (e) => {
            this.updateDebtCharts(e.target.value);
        });

        document.getElementById('dividendCompanySelect').addEventListener('change', (e) => {
            this.updateDividendCharts(e.target.value);
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            const modal = document.getElementById('companyModal');
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    setupTabs() {
        // Initialize first tab as active
        this.switchTab('dashboard');
    }

    switchTab(tabName) {
        // Remove active class from all tabs and content
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Add active class to selected tab and content
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        document.getElementById(tabName).classList.add('active');

        // Update charts if needed
        if (tabName === 'marginer') {
            setTimeout(() => this.updateMarginCharts(), 100);
        } else if (tabName === 'lønnsomhet') {
            setTimeout(() => this.updateProfitabilityCharts(), 100);
        } else if (tabName === 'gjeld') {
            setTimeout(() => this.updateDebtCharts(), 100);
        } else if (tabName === 'utbytte') {
            setTimeout(() => this.updateDividendCharts(), 100);
        } else if (tabName === 'risiko') {
            this.updateRiskMatrix();
        }
    }

    addCompany() {
        const name = document.getElementById('newCompanyName').value.trim();
        const ticker = document.getElementById('ticker').value.trim();

        if (!name) {
            this.showMessage('Vennligst skriv inn selskapsnavn', 'error');
            return;
        }

        if (this.companies[name]) {
            this.showMessage('Selskap eksisterer allerede', 'error');
            return;
        }

        this.companies[name] = {
            ticker: ticker,
            data: {}
        };

        this.saveToLocalStorage();
        this.populateCompanySelectors();
        this.updateDashboard();
        
        // Close modal and reset form
        document.getElementById('companyModal').style.display = 'none';
        document.getElementById('companyForm').reset();
        
        this.showMessage(`${name} lagt til successfully`, 'success');
    }

    saveData() {
        const companyName = document.getElementById('companyName').value.trim();
        const year = document.getElementById('year').value;

        if (!companyName || !this.companies[companyName]) {
            this.showMessage('Vennligst velg et gyldig selskap', 'error');
            return;
        }

        const data = {
            ebitdaMargin: parseFloat(document.getElementById('ebitdaMargin').value) || 0,
            operatingMargin: parseFloat(document.getElementById('operatingMargin').value) || 0,
            netMargin: parseFloat(document.getElementById('netMargin').value) || 0,
            roe: parseFloat(document.getElementById('roe').value) || 0,
            roa: parseFloat(document.getElementById('roa').value) || 0,
            roic: parseFloat(document.getElementById('roic').value) || 0,
            deRatio: parseFloat(document.getElementById('deRatio').value) || 0,
            interestCoverage: parseFloat(document.getElementById('interestCoverage').value) || 0,
            equityRatio: parseFloat(document.getElementById('equityRatio').value) || 0,
            dividendPerShare: parseFloat(document.getElementById('dividendPerShare').value) || 0,
            payoutRatio: parseFloat(document.getElementById('payoutRatio').value) || 0,
            dividendYield: parseFloat(document.getElementById('dividendYield').value) || 0,
            beta: parseFloat(document.getElementById('beta').value) || 0,
            volatility: parseFloat(document.getElementById('volatility').value) || 0
        };

        if (!this.companies[companyName].data[year]) {
            this.companies[companyName].data[year] = {};
        }

        this.companies[companyName].data[year] = { ...this.companies[companyName].data[year], ...data };
        
        this.saveToLocalStorage();
        this.updateDashboard();
        this.clearDataForm();
        
        this.showMessage(`Data for ${companyName} (${year}) lagret`, 'success');
    }

    clearDataForm() {
        const inputs = document.querySelectorAll('#data input[type="number"]');
        inputs.forEach(input => input.value = '');
    }

    populateCompanySelectors() {
        const selectors = [
            'marginCompanySelect',
            'profitabilityCompanySelect', 
            'debtCompanySelect',
            'dividendCompanySelect'
        ];

        const companyNames = Object.keys(this.companies);
        
        selectors.forEach(selectorId => {
            const selector = document.getElementById(selectorId);
            selector.innerHTML = '<option value="">Velg selskap</option>';
            
            companyNames.forEach(name => {
                const option = document.createElement('option');
                option.value = name;
                option.textContent = name;
                selector.appendChild(option);
            });
        });

        // Update company name input datalist
        const companyNameInput = document.getElementById('companyName');
        companyNameInput.setAttribute('list', 'companies');
        
        let datalist = document.getElementById('companies');
        if (!datalist) {
            datalist = document.createElement('datalist');
            datalist.id = 'companies';
            companyNameInput.parentNode.appendChild(datalist);
        }
        
        datalist.innerHTML = '';
        companyNames.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            datalist.appendChild(option);
        });
    }

    updateDashboard() {
        this.updateSummaryCards();
        this.updateCompaniesTable();
    }

    updateSummaryCards() {
        const companies = Object.keys(this.companies);
        const totalCompanies = companies.length;
        
        let totalROE = 0, totalDE = 0, totalDividendYield = 0;
        let roeCount = 0, deCount = 0, dividendCount = 0;

        companies.forEach(companyName => {
            const company = this.companies[companyName];
            const latestYear = this.getLatestYear(company.data);
            
            if (latestYear && company.data[latestYear]) {
                const data = company.data[latestYear];
                
                if (data.roe) {
                    totalROE += data.roe;
                    roeCount++;
                }
                if (data.deRatio) {
                    totalDE += data.deRatio;
                    deCount++;
                }
                if (data.dividendYield) {
                    totalDividendYield += data.dividendYield;
                    dividendCount++;
                }
            }
        });

        document.getElementById('totalCompanies').textContent = totalCompanies;
        document.getElementById('avgROE').textContent = roeCount > 0 ? `${(totalROE / roeCount).toFixed(1)}%` : '0%';
        document.getElementById('avgDE').textContent = deCount > 0 ? (totalDE / deCount).toFixed(2) : '0.0';
        document.getElementById('avgDividendYield').textContent = dividendCount > 0 ? `${(totalDividendYield / dividendCount).toFixed(1)}%` : '0%';
    }

    updateCompaniesTable() {
        const tbody = document.querySelector('#companiesTable tbody');
        tbody.innerHTML = '';

        Object.keys(this.companies).forEach(companyName => {
            const company = this.companies[companyName];
            const latestYear = this.getLatestYear(company.data);
            
            if (latestYear && company.data[latestYear]) {
                const data = company.data[latestYear];
                const row = document.createElement('tr');
                
                const riskLevel = this.calculateRiskLevel(data);
                
                row.innerHTML = `
                    <td><strong>${companyName}</strong></td>
                    <td>${data.roe ? data.roe.toFixed(1) + '%' : '-'}</td>
                    <td>${data.roa ? data.roa.toFixed(1) + '%' : '-'}</td>
                    <td class="${this.getDERiskClass(data.deRatio)}">${data.deRatio ? data.deRatio.toFixed(2) : '-'}</td>
                    <td class="${this.getBetaRiskClass(data.beta)}">${data.beta ? data.beta.toFixed(2) : '-'}</td>
                    <td class="${this.getPayoutRiskClass(data.payoutRatio)}">${data.payoutRatio ? data.payoutRatio.toFixed(1) + '%' : '-'}</td>
                    <td>${data.dividendYield ? data.dividendYield.toFixed(1) + '%' : '-'}</td>
                    <td>${data.ebitdaMargin ? data.ebitdaMargin.toFixed(1) + '%' : '-'}</td>
                    <td class="risk-${riskLevel}">${this.getRiskText(riskLevel)}</td>
                `;
                
                tbody.appendChild(row);
            }
        });
    }

    updateRiskMatrix() {
        const tbody = document.querySelector('#riskMatrix tbody');
        tbody.innerHTML = '';

        Object.keys(this.companies).forEach(companyName => {
            const company = this.companies[companyName];
            const latestYear = this.getLatestYear(company.data);
            
            if (latestYear && company.data[latestYear]) {
                const data = company.data[latestYear];
                const row = document.createElement('tr');
                
                const deRisk = this.getDERisk(data.deRatio);
                const payoutRisk = this.getPayoutRisk(data.payoutRatio);
                const betaRisk = this.getBetaRisk(data.beta);
                const volatilityRisk = this.getVolatilityRisk(data.volatility);
                const overallRisk = this.calculateRiskLevel(data);
                
                row.innerHTML = `
                    <td><strong>${companyName}</strong></td>
                    <td class="${this.getBetaRiskClass(data.beta)}">${data.beta ? data.beta.toFixed(2) : '-'}</td>
                    <td class="risk-${deRisk}">${this.getRiskText(deRisk)}</td>
                    <td class="risk-${payoutRisk}">${this.getRiskText(payoutRisk)}</td>
                    <td class="risk-${volatilityRisk}">${data.volatility ? data.volatility.toFixed(1) + '%' : '-'}</td>
                    <td class="risk-${overallRisk}"><strong>${this.getRiskText(overallRisk)}</strong></td>
                `;
                
                tbody.appendChild(row);
            }
        });
    }

    // Risk calculation methods
    calculateRiskLevel(data) {
        let riskScore = 0;
        let factors = 0;

        // D/E Ratio risk
        if (data.deRatio !== undefined) {
            if (data.deRatio > 2) riskScore += 3;
            else if (data.deRatio > 1) riskScore += 2;
            else riskScore += 1;
            factors++;
        }

        // Beta risk
        if (data.beta !== undefined) {
            if (data.beta > 1.5) riskScore += 3;
            else if (data.beta > 1.2) riskScore += 2;
            else riskScore += 1;
            factors++;
        }

        // Payout ratio risk
        if (data.payoutRatio !== undefined) {
            if (data.payoutRatio > 80) riskScore += 3;
            else if (data.payoutRatio > 60) riskScore += 2;
            else riskScore += 1;
            factors++;
        }

        // Interest coverage risk
        if (data.interestCoverage !== undefined) {
            if (data.interestCoverage < 2) riskScore += 3;
            else if (data.interestCoverage < 5) riskScore += 2;
            else riskScore += 1;
            factors++;
        }

        if (factors === 0) return 'medium';

        const avgRisk = riskScore / factors;
        if (avgRisk >= 2.5) return 'high';
        if (avgRisk >= 1.8) return 'medium';
        return 'low';
    }

    getDERisk(deRatio) {
        if (!deRatio) return 'medium';
        if (deRatio > 2) return 'high';
        if (deRatio > 1) return 'medium';
        return 'low';
    }

    getPayoutRisk(payoutRatio) {
        if (!payoutRatio) return 'low';
        if (payoutRatio > 80) return 'high';
        if (payoutRatio > 60) return 'medium';
        return 'low';
    }

    getBetaRisk(beta) {
        if (!beta) return 'medium';
        if (beta > 1.5) return 'high';
        if (beta > 1.2) return 'medium';
        return 'low';
    }

    getVolatilityRisk(volatility) {
        if (!volatility) return 'medium';
        if (volatility > 30) return 'high';
        if (volatility > 20) return 'medium';
        return 'low';
    }

    getDERiskClass(deRatio) {
        return `risk-${this.getDERisk(deRatio)}`;
    }

    getBetaRiskClass(beta) {
        return `risk-${this.getBetaRisk(beta)}`;
    }

    getPayoutRiskClass(payoutRatio) {
        return `risk-${this.getPayoutRisk(payoutRatio)}`;
    }

    getRiskText(riskLevel) {
        const texts = {
            'low': 'Lav',
            'medium': 'Middels',
            'high': 'Høy'
        };
        return texts[riskLevel] || 'Ukjent';
    }

    // Chart methods
    updateMarginCharts(companyName = null) {
        if (!companyName) {
            companyName = document.getElementById('marginCompanySelect').value;
        }
        
        if (!companyName || !this.companies[companyName]) return;

        const company = this.companies[companyName];
        const years = Object.keys(company.data).sort();
        
        const ebitdaData = years.map(year => company.data[year].ebitdaMargin || 0);
        const operatingData = years.map(year => company.data[year].operatingMargin || 0);
        const netData = years.map(year => company.data[year].netMargin || 0);

        this.createChart('ebitdaChart', {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'EBITDA Margin (%)',
                    data: ebitdaData,
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    tension: 0.4
                }]
            },
            options: this.getChartOptions('EBITDA Margin (%)')
        });

        this.createChart('operatingChart', {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'Driftsmargin (%)',
                    data: operatingData,
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    tension: 0.4
                }]
            },
            options: this.getChartOptions('Driftsmargin (%)')
        });

        this.createChart('netChart', {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'Nettemargin (%)',
                    data: netData,
                    borderColor: '#27ae60',
                    backgroundColor: 'rgba(39, 174, 96, 0.1)',
                    tension: 0.4
                }]
            },
            options: this.getChartOptions('Nettemargin (%)')
        });
    }

    updateProfitabilityCharts(companyName = null) {
        if (!companyName) {
            companyName = document.getElementById('profitabilityCompanySelect').value;
        }
        
        if (!companyName || !this.companies[companyName]) return;

        const company = this.companies[companyName];
        const years = Object.keys(company.data).sort();
        
        const roeData = years.map(year => company.data[year].roe || 0);
        const roaData = years.map(year => company.data[year].roa || 0);
        const roicData = years.map(year => company.data[year].roic || 0);

        this.createChart('roeChart', {
            type: 'bar',
            data: {
                labels: years,
                datasets: [{
                    label: 'ROE (%)',
                    data: roeData,
                    backgroundColor: '#9b59b6',
                    borderColor: '#8e44ad',
                    borderWidth: 1
                }]
            },
            options: this.getChartOptions('ROE (%)')
        });

        this.createChart('roaChart', {
            type: 'bar',
            data: {
                labels: years,
                datasets: [{
                    label: 'ROA (%)',
                    data: roaData,
                    backgroundColor: '#f39c12',
                    borderColor: '#e67e22',
                    borderWidth: 1
                }]
            },
            options: this.getChartOptions('ROA (%)')
        });

        this.createChart('roicChart', {
            type: 'bar',
            data: {
                labels: years,
                datasets: [{
                    label: 'ROIC (%)',
                    data: roicData,
                    backgroundColor: '#1abc9c',
                    borderColor: '#16a085',
                    borderWidth: 1
                }]
            },
            options: this.getChartOptions('ROIC (%)')
        });
    }

    updateDebtCharts(companyName = null) {
        if (!companyName) {
            companyName = document.getElementById('debtCompanySelect').value;
        }
        
        if (!companyName || !this.companies[companyName]) return;

        const company = this.companies[companyName];
        const years = Object.keys(company.data).sort();
        
        const deData = years.map(year => company.data[year].deRatio || 0);
        const interestCoverageData = years.map(year => company.data[year].interestCoverage || 0);
        const equityRatioData = years.map(year => company.data[year].equityRatio || 0);

        this.createChart('deChart', {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'D/E Ratio',
                    data: deData,
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    tension: 0.4
                }]
            },
            options: this.getChartOptions('D/E Ratio')
        });

        this.createChart('interestCoverageChart', {
            type: 'bar',
            data: {
                labels: years,
                datasets: [{
                    label: 'Rentedekningsgrad',
                    data: interestCoverageData,
                    backgroundColor: '#3498db',
                    borderColor: '#2980b9',
                    borderWidth: 1
                }]
            },
            options: this.getChartOptions('Rentedekningsgrad')
        });

        this.createChart('equityRatioChart', {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'Egenkapitalandel (%)',
                    data: equityRatioData,
                    borderColor: '#27ae60',
                    backgroundColor: 'rgba(39, 174, 96, 0.1)',
                    tension: 0.4
                }]
            },
            options: this.getChartOptions('Egenkapitalandel (%)')
        });
    }

    updateDividendCharts(companyName = null) {
        if (!companyName) {
            companyName = document.getElementById('dividendCompanySelect').value;
        }
        
        if (!companyName || !this.companies[companyName]) return;

        const company = this.companies[companyName];
        const years = Object.keys(company.data).sort();
        
        const dividendPerShareData = years.map(year => company.data[year].dividendPerShare || 0);
        const payoutRatioData = years.map(year => company.data[year].payoutRatio || 0);
        const dividendYieldData = years.map(year => company.data[year].dividendYield || 0);

        this.createChart('dividendPerShareChart', {
            type: 'bar',
            data: {
                labels: years,
                datasets: [{
                    label: 'Utbytte per aksje (NOK)',
                    data: dividendPerShareData,
                    backgroundColor: '#2ecc71',
                    borderColor: '#27ae60',
                    borderWidth: 1
                }]
            },
            options: this.getChartOptions('Utbytte per aksje (NOK)')
        });

        this.createChart('payoutRatioChart', {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'Payout Ratio (%)',
                    data: payoutRatioData,
                    borderColor: '#f39c12',
                    backgroundColor: 'rgba(243, 156, 18, 0.1)',
                    tension: 0.4
                }]
            },
            options: this.getChartOptions('Payout Ratio (%)')
        });

        this.createChart('dividendYieldChart', {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'Dividend Yield (%)',
                    data: dividendYieldData,
                    borderColor: '#9b59b6',
                    backgroundColor: 'rgba(155, 89, 182, 0.1)',
                    tension: 0.4
                }]
            },
            options: this.getChartOptions('Dividend Yield (%)')
        });
    }

    createChart(canvasId, config) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        // Destroy existing chart if it exists
        if (this.charts[canvasId]) {
            this.charts[canvasId].destroy();
        }

        this.charts[canvasId] = new Chart(ctx, config);
    }

    getChartOptions(title) {
        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: false
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            }
        };
    }

    // Utility methods
    getLatestYear(data) {
        const years = Object.keys(data);
        return years.length > 0 ? years.sort().pop() : null;
    }

    saveToLocalStorage() {
        localStorage.setItem('companies', JSON.stringify(this.companies));
    }

    showMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = text;
        
        const container = document.querySelector('.container');
        container.insertBefore(messageDiv, container.firstChild);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }

    // Excel export functionality
    exportToExcel() {
        const workbook = XLSX.utils.book_new();
        
        // Dashboard sheet
        this.createDashboardSheet(workbook);
        
        // Individual company sheets
        Object.keys(this.companies).forEach(companyName => {
            this.createCompanySheet(workbook, companyName);
        });
        
        // Risk analysis sheet
        this.createRiskAnalysisSheet(workbook);
        
        // Save the file
        XLSX.writeFile(workbook, 'Finansielt_Dashboard.xlsx');
        
        this.showMessage('Excel-fil eksportert successfully', 'success');
    }

    createDashboardSheet(workbook) {
        const data = [
            ['Finansielt Dashboard - Oversikt'],
            [''],
            ['Selskap', 'ROE (%)', 'ROA (%)', 'D/E Ratio', 'Beta', 'Payout (%)', 'Dividend Yield (%)', 'EBITDA Margin (%)', 'Risiko']
        ];

        Object.keys(this.companies).forEach(companyName => {
            const company = this.companies[companyName];
            const latestYear = this.getLatestYear(company.data);
            
            if (latestYear && company.data[latestYear]) {
                const d = company.data[latestYear];
                const riskLevel = this.calculateRiskLevel(d);
                
                data.push([
                    companyName,
                    d.roe || 0,
                    d.roa || 0,
                    d.deRatio || 0,
                    d.beta || 0,
                    d.payoutRatio || 0,
                    d.dividendYield || 0,
                    d.ebitdaMargin || 0,
                    this.getRiskText(riskLevel)
                ]);
            }
        });

        const worksheet = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Dashboard');
    }

    createCompanySheet(workbook, companyName) {
        const company = this.companies[companyName];
        const years = Object.keys(company.data).sort();
        
        const data = [
            [companyName],
            [''],
            ['År', 'EBITDA Margin', 'Driftsmargin', 'Nettemargin', 'ROE', 'ROA', 'ROIC', 'D/E Ratio', 'Rentedekningsgrad', 'Egenkapitalandel', 'Utbytte/aksje', 'Payout Ratio', 'Dividend Yield', 'Beta', 'Volatilitet']
        ];

        years.forEach(year => {
            const d = company.data[year];
            data.push([
                year,
                d.ebitdaMargin || 0,
                d.operatingMargin || 0,
                d.netMargin || 0,
                d.roe || 0,
                d.roa || 0,
                d.roic || 0,
                d.deRatio || 0,
                d.interestCoverage || 0,
                d.equityRatio || 0,
                d.dividendPerShare || 0,
                d.payoutRatio || 0,
                d.dividendYield || 0,
                d.beta || 0,
                d.volatility || 0
            ]);
        });

        const worksheet = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook, worksheet, companyName.substring(0, 31)); // Excel sheet name limit
    }

    createRiskAnalysisSheet(workbook) {
        const data = [
            ['Risikoanalyse'],
            [''],
            ['Selskap', 'Beta', 'D/E Risiko', 'Payout Risiko', 'Volatilitet (%)', 'Samlet Risiko']
        ];

        Object.keys(this.companies).forEach(companyName => {
            const company = this.companies[companyName];
            const latestYear = this.getLatestYear(company.data);
            
            if (latestYear && company.data[latestYear]) {
                const d = company.data[latestYear];
                
                data.push([
                    companyName,
                    d.beta || 0,
                    this.getRiskText(this.getDERisk(d.deRatio)),
                    this.getRiskText(this.getPayoutRisk(d.payoutRatio)),
                    d.volatility || 0,
                    this.getRiskText(this.calculateRiskLevel(d))
                ]);
            }
        });

        const worksheet = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Risikoanalyse');
    }
}

// Initialize the dashboard when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.dashboard = new FinancialDashboard();
});